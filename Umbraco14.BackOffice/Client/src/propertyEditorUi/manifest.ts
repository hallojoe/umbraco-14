import { ManifestPropertyEditorUi } from "@umbraco-cms/backoffice/extension-registry";
import { BACKOFFICE_PROPERTY_EDITOR_ALIAS } from "../constants";

const propertyEditorManifest: ManifestPropertyEditorUi = {
  type: "propertyEditorUi",
  alias: BACKOFFICE_PROPERTY_EDITOR_ALIAS,
  name: "backoffice property editor",
  js: () => import("./backofficePropertyEditorUi.element"),
  elementName: "backoffice-property-editor-ui",
  meta: {
    label: "Backoffice Input",
    icon: "icon-list",
    group: "common",
    propertyEditorSchemaAlias: "Umbraco.TextBox",
    settings: {
      properties: [
        {
          alias: "disabled",
          label: "Disabled",
          description: "Disables input field of this editor",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.Toggle"
        },
        {
          alias: "placeholder",
          label: "Placeholder",
          description: "Placeholder text for input field of this editor",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.TextBox"
        }
      ],
      defaultData: [
        {
          alias: "disabled",
          value: true
        },
        {
          alias: "placeholder",
          value: ""
        }
      ]              

    }

  }

}

export const manifests = [propertyEditorManifest];
