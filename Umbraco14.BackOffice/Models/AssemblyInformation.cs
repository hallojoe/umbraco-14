namespace Umbraco14.BackOffice.Models;

public record AssemblyInformation(
    string? AssemblyName,
    string? Location,
    Version? Version,
    string? ProductVersion,
    bool IsDynamic,
    Dictionary<string, string>? ReferencedAssemblies);
