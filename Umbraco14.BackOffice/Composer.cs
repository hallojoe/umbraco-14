using Microsoft.Extensions.DependencyInjection;
using Umbraco.Cms.Core.Composing;
using Umbraco.Cms.Core.DependencyInjection;
using Umbraco14.BackOffice.Configuration;
using Umbraco14.BackOffice.Services;

namespace Umbraco14.BackOffice;

public class Composer : IComposer
{
    public void Compose(IUmbracoBuilder builder)
    {
        builder.Services.AddSingleton<IBackOfficeService, BackOfficeService>();
        builder.Services.ConfigureOptions<ConfigureSwaggerGenOptions>();
    }
}
