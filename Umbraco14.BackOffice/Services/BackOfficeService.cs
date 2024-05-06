using System.Diagnostics;
using System.Reflection;
using Umbraco.Cms.Core.Services;
using Umbraco14.BackOffice.Models;

namespace Umbraco14.BackOffice.Services;

public interface IBackOfficeService
{
    IEnumerable<ServerInformation> GetServerInformation();
    AssemblyInformation GetAssemblyInformation();
}

public sealed class BackOfficeService(IServerRegistrationService serverRegistrationService) : IBackOfficeService
{

    private readonly IServerRegistrationService _serverRegistrationService = serverRegistrationService ?? throw new ArgumentNullException(nameof(serverRegistrationService));

    public IEnumerable<ServerInformation> GetServerInformation()
    {

        var umbracoServers = _serverRegistrationService.GetServers();

        var result = umbracoServers.Select(umbracoServer => new ServerInformation(
            umbracoServer.ServerIdentity,
            umbracoServer.ServerAddress,
            umbracoServer.IsActive,
            umbracoServer.IsSchedulingPublisher,
            umbracoServer.Registered,
            umbracoServer.Accessed));

        return result;

    }

    public AssemblyInformation GetAssemblyInformation()
    {
        var assembly = Assembly.GetEntryAssembly();

        if (assembly == default) throw new NullReferenceException($"{nameof(Assembly.GetEntryAssembly)} returned null.");

        var assemblyName = assembly.GetName();

        var version = assemblyName.Version;

        var result = new AssemblyInformation(
            assembly.FullName,
            assembly.Location,
            version,
            FileVersionInfo.GetVersionInfo(assembly.Location).ProductVersion,
            assembly.IsDynamic,
            new Dictionary<string, string>());

        return result;

    }

}