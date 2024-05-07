import { UmbElementMixin } from "@umbraco-cms/backoffice/element-api";
import { LitElement, html, css, customElement, property } from "@umbraco-cms/backoffice/external/lit";
import BackOfficeManagementContext, { BACKOFFICE_MANAGEMENT_CONTEXT_TOKEN } from "../context/backoffice.context";
import { ServerInformation, AssemblyInformation } from "../api";

@customElement("backoffice-dashboard")
export class BackOfficeDashboard extends UmbElementMixin(LitElement) {
  
  #backofficeContext?: BackOfficeManagementContext;

  @property()
  title = "BackOffice Dashboard";

  @property({ type: Array })
  serverInformation?: ServerInformation[];

  @property({ type: Object })
  assemblyInformation?: AssemblyInformation|null;

  constructor() {

    super();

    this.consumeContext(BACKOFFICE_MANAGEMENT_CONTEXT_TOKEN, (_instance) => {

      this.#backofficeContext = _instance;



      this.observe(_instance.serverInformation, (_serverInformation) => {

        this.serverInformation = _serverInformation;

      });

      this.observe(_instance.assemblyInformation, (_assemblyInformation) => {

        this.assemblyInformation = _assemblyInformation;

      });

      // this.getServerInformation()
      // this.getAssemblyInformation()

    });

  }

  async getServerInformation() {
    console.log("getServerInformation")
    await this.#backofficeContext?.getServerInformation();
  }

  async getAssemblyInformation() {
    console.log("getAssemblyInformation")
    await this.#backofficeContext?.getAssemblyInformation();
  }

  render() {
    return html`
      <uui-box headline="${this.localize.term("backoffice_name")}">
        <div slot="header">
          <umb-localize key="backoffice_description"></umb-localize>
        </div>
        <div>
          <uui-button
            @click=${this.getServerInformation}
            look="primary"
            color="positive"
            label="get server information"
          ></uui-button>

          <h2>Server Information</h2>

          ${ this.serverInformation && this.serverInformation.map(serverInformation => {
              return html`
              <div>${serverInformation.serverIdentity}</div>
              `
          })}

        </div>

        <div>
          <uui-button
            @click=${this.getAssemblyInformation}
            look="primary"
            color="default"
            label="get assembly information"
          ></uui-button>
          <h2>Assembly Information</h2>
          <div>${this.assemblyInformation?.assemblyName}</div>
        </div>
      </uui-box>
    `;
  }

  static styles = css`
    :host {
      display: block;
      padding: 20px;
    }
  `;
}

export default BackOfficeDashboard;

declare global {
  interface HtmlElementTagNameMap {
    "BackOffice-dashboard": BackOfficeDashboard;
  }
}
