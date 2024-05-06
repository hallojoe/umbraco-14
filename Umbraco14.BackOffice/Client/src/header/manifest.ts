import { ManifestHeaderApp, ManifestModal } from "@umbraco-cms/backoffice/extension-registry";
import { BACKOFFICE_HEADER_MODAL_ALIAS } from "../constants";

const header: ManifestHeaderApp = {
  type: "headerApp",
  alias: "backoffice.header.app",
  name: "backoffice app",
  js: () => import("./backoffice-header-element"),
  weight: 850,
  meta: {
    label: "backoffice",
    icon: "icon-alarm-clock",
    pathname: "backoffice",
  },
};

const modal: ManifestModal = {
  type: 'modal',
  alias: BACKOFFICE_HEADER_MODAL_ALIAS,
  name: 'backoffice header modal',
  js: () => import('./backoffice-header-modal'),
}

export const manifests = [header, modal];
