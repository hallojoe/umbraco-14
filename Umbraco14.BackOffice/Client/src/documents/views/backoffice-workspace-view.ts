import { UmbElementMixin } from "@umbraco-cms/backoffice/element-api";
import { LitElement, css, customElement, html, state } from "@umbraco-cms/backoffice/external/lit";
import { UMB_WORKSPACE_CONTEXT, UmbVariantDatasetWorkspaceContext } from "@umbraco-cms/backoffice/workspace";

import { MediaService } from '@umbraco-cms/backoffice/external/backend-api';
import { tryExecute } from '@umbraco-cms/backoffice/resources';



@customElement("backoffice-document-workspace-view")
export class BackOfficeDocumentWorkspaceElement extends UmbElementMixin(LitElement) {

  @state()
  pageName? : string = "";

  @state()
  pageTitle? : string = "";

  @state()
  pageDescription? : string = "";

  @state()
  pageImage?: { src: string, extension?: string };


  // @state()
  // test?: MediaResource|null = null

  constructor() {

    super();

    this.consumeContext(UMB_WORKSPACE_CONTEXT, (worksSpaceContext) => {

      const variantContext = worksSpaceContext as UmbVariantDatasetWorkspaceContext;

      this.pageName = variantContext.getName();
      this.pageTitle = variantContext.getPropertyValue("title")
      this.pageDescription = variantContext.getPropertyValue("description");

       const mediaPickerValue = variantContext.getPropertyValue<{mediaKey:string}[]>("image");

       if(mediaPickerValue) {

        var mediaKey = mediaPickerValue[0].mediaKey
      
        tryExecute(MediaService.getMediaById({ id: mediaKey })).then((response) => {
  
          const src = (response.data?.values[0].value as any)?.src
          const extension = (response.data?.values.find(v => v.alias === "umbracoExtension") as any)?.value ?? ""

          this.pageImage = {
            src,
            extension
          }
          
        })
  
       }

      
    });

  }

  render() {

    return html`
      <div class="wrap">

        <uui-box headline="${this.pageName} ">
          <h2>${this.pageTitle}</h2>
          <p>${this.pageDescription}</p>
        </uui-box>

        <uui-box headline="Evaluation of ${this.pageName}">
          <h2>${this.pageTitle}</h2>          
          <p>${this.pageDescription}</p>
          <uui-card-media name="The card" file-ext="${this.pageImage?.extension ?? ""}" href=""></uui-card-media>
          <pre>${ JSON.stringify(this.pageImage, null, 2) }</pre>
        </uui-box>
      </div>

    `;

  }

  static styles = css`

    div.wrap {
      display:grid;
      grid-template-columns:1fr 1fr;
      gap:1.5rem;
      margin: 1.5rem;

    }

  `;

}

export default BackOfficeDocumentWorkspaceElement;
