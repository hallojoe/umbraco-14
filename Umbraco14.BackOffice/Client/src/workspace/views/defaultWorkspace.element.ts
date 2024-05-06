import { LitElement, customElement, html } from "@umbraco-cms/backoffice/external/lit";

@customElement("backoffice-workspace-default-view")
export class BackOfficeDefaultWorkspaceElement extends LitElement {
  render() {
    return html`
      <uui-box headline="backoffice workspace content">
        <p>BackOffice Workspace Default...</p>
      </uui-box>
    `;
  }
}

export default BackOfficeDefaultWorkspaceElement;
