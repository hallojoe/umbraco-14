using Asp.Versioning;
using Microsoft.AspNetCore.Mvc;
using Umbraco14.BackOffice.Models;
using Umbraco14.BackOffice.Services;

namespace Umbraco14.BackOffice.Controllers;

[ApiVersion("1.0")]
[ApiExplorerSettings(GroupName = "back-office")]
public class BackOfficeController : BackOfficeControllerBase
{
    private readonly IBackOfficeService _backOfficeService;

    public BackOfficeController(IBackOfficeService backOfficeService)
    {
        _backOfficeService = backOfficeService ?? throw new ArgumentNullException(nameof(backOfficeService));
    }

    [HttpGet("server-information")]
    [ProducesResponseType(typeof(IEnumerable<ServerInformation>), 200)]
    public IEnumerable<ServerInformation> GetServerInformation()
    {
        return _backOfficeService.GetServerInformation();
    }

    [HttpGet("assembly-information")]
    [ProducesResponseType(typeof(AssemblyInformation), 200)]
    public AssemblyInformation GetAssemblyInformation()
    {
        return _backOfficeService.GetAssemblyInformation();
    }

}
