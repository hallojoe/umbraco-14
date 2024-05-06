import { LitElement, html, customElement, property } from "@umbraco-cms/backoffice/external/lit";
import { UmbPropertyEditorUiElement } from "@umbraco-cms/backoffice/extension-registry";

@customElement('backoffice-property-editor-ui')
export default class BackOfficePropertyEditorUIElement extends LitElement implements UmbPropertyEditorUiElement {

    @property({ type: String })
    public value = "";

    render() {
        return html`BackOffice Prorperty Editor UI content.`;
    }

}

declare global {
    interface HTMLElementTagNameMap {
        'backoffice-property-editor-ui': BackOfficePropertyEditorUIElement;
    }
}