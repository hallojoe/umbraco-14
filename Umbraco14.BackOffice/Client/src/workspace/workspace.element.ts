import { UmbElementMixin } from "@umbraco-cms/backoffice/element-api";
import { LitElement, html, customElement } from "@umbraco-cms/backoffice/external/lit";
import BackOfficeWorkspaceContext from "./context";
import { BACKOFFICE_WORKSPACE_ALIAS } from "../constants";

@customElement("backoffice-workspace-root")
export class BackOfficeWorkspaceElement extends UmbElementMixin(LitElement) {
  
  // @ts-ignore
  #workspaceContext = new BackOfficeWorkspaceContext(this);

  render() {
    return html`
      <umb-workspace-editor
        headline="BackOffice"
        alias=${BACKOFFICE_WORKSPACE_ALIAS}
        .enforceNoFooter=${true}
      >
      </umb-workspace-editor>
    `;
  }
}

export default BackOfficeWorkspaceElement;
