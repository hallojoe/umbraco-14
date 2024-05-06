using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore.SwaggerGen;

namespace Umbraco14.BackOffice.Configuration;

public class ConfigureSwaggerGenOptions : IConfigureOptions<SwaggerGenOptions>
{
    public void Configure(SwaggerGenOptions options)
    {
        options.SwaggerDoc(
            "back-office",
            new OpenApiInfo
            {
                Title = "Example BackOffice Api",
                Version = "Latest",
                Description = "Api methods for custom back-office."
            });

        options.CustomOperationIds(apiDescription => $"{apiDescription.ActionDescriptor.RouteValues["action"]}");
    }
}
