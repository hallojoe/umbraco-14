using Umbraco.Cms.Core.Models.PublishedContent;

namespace Umbraco14.Website.Models.Cms.ViewModels;

public class HtmlMetaViewModel(IPublishedContent content, IPublishedValueFallback publishedValueFallback) : PublishedContentWrapped(content, publishedValueFallback)
{
    public required string Title { get; set; }
    public required string Description { get; set; }
    public string? Image { get; set; }
}