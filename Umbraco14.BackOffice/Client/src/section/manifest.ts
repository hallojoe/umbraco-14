import { ManifestSection } from "@umbraco-cms/backoffice/extension-registry";
import { BACKOFFICE_SECTION_ALIAS } from "../constants";

const sectionManifest: ManifestSection = {
  type: "section",
  alias: BACKOFFICE_SECTION_ALIAS,
  name: "backoffice section",
  weight: 10,
  meta: {
    label: "BackOffice Section",
    pathname: "backoffice-section",
  },
}

export const manifests = [ sectionManifest ];
