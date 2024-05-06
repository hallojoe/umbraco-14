import { UmbElementMixin } from "@umbraco-cms/backoffice/element-api";
import { LitElement,css, customElement, html } from "@umbraco-cms/backoffice/external/lit";
import { UMB_MODAL_MANAGER_CONTEXT } from '@umbraco-cms/backoffice/modal';
import { BACKOFFICE_HEADER_MODAL_ALIAS } from "../constants";

@customElement("backoffice-header-app")
export class BackOfficeHeaderAppElement extends UmbElementMixin(LitElement) {

  #onBackOffice() {

    this.consumeContext(UMB_MODAL_MANAGER_CONTEXT, (manager) => {

      manager.open(this, BACKOFFICE_HEADER_MODAL_ALIAS, {});

    });

  }

  render() {

  return html`
      <uui-button @click=${this.#onBackOffice} look="primary" label="backoffice" compact>
        <uui-icon name="icon-alarm-clock"></uui-icon>
      </uui-button>
    `;
  }

  static styles = css`
    uui-button {
      font-size: 18pt;
      --uui-button-background-color: transparent;
    }
  `;
}

export default BackOfficeHeaderAppElement;
