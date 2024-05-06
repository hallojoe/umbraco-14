using Umbraco.Cms.Core.DependencyInjection;
using Umbraco.Cms.Core.Composing;
using Umbraco.Cms.Core.Routing;
using Umbraco.Cms.Core.Web;
using Umbraco.Extensions;
using Umbraco14.Website.Models.Cms;

namespace Umbraco14.Website.ContentFinders;

public abstract class NotFoundPageFinder(IUmbracoContextAccessor umbracoContextAccessor) : IContentLastChanceFinder
{
    public Task<bool> TryFindContent(IPublishedRequestBuilder request)
    {
        if (umbracoContextAccessor.TryGetUmbracoContext(out var umbracoContext) == false) return Task.FromResult(false);
        
        var notFoundPage = umbracoContext.Content?.GetAtRoot().FirstOrDefault(c => c.ContentType.Alias == IndexPage.ModelTypeAlias);

        if (notFoundPage == default) return Task.FromResult(false);
        
        request.SetPublishedContent(notFoundPage);
 
        return Task.FromResult(true); 
    }
}

public class NotFoundPageFinderComposer : IComposer
{
    public void Compose(IUmbracoBuilder builder)
    {
        builder.SetContentLastChanceFinder<NotFoundPageFinder>();
    }
}
