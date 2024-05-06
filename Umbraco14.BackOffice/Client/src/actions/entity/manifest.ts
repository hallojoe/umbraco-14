import { ManifestEntityAction } from "@umbraco-cms/backoffice/extension-registry";
import { UMB_DOCUMENT_ENTITY_TYPE } from "@umbraco-cms/backoffice/document";
import BackOfficeEntityAction from "./backoffice.entity.action";

const entityAction: ManifestEntityAction = {
  type: "entityAction",
  alias: "backoffice.entity.action",
  kind: "default",
  name: "take backoffice action",
  weight: -100,
  forEntityTypes: [UMB_DOCUMENT_ENTITY_TYPE],
  api: BackOfficeEntityAction,
  meta: {
    icon: "icon-alarm-clock",
    label: "backoffice action",
  },
};

export const manifests = [entityAction];
