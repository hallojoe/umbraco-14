import {
  ManifestMenu,
  ManifestMenuItem,
  ManifestSectionSidebarApp,
} from "@umbraco-cms/backoffice/extension-registry";
import { BACKOFFICE_SECTION_ALIAS, BACKOFFICE_WORKSPACE_ENTITY_TYPE } from "../constants";

const sidebarAppManifest: ManifestSectionSidebarApp = {
  type: "sectionSidebarApp",
  kind: "menuWithEntityActions",
  alias: "backoffice.section.sidebar.app",
  name: "BackOffice Section Sidebar",
  meta: {
    label: "bacoffice",
    menu: "bacoffice.menu",
  },
  conditions: [
    {
      alias: "Umb.Condition.SectionAlias",
      match: BACKOFFICE_SECTION_ALIAS,
    },
  ],
};

const menuManifest: ManifestMenu = {
  type: "menu",
  alias: "bacoffice.menu",
  name: "bacoffice sidebar menu",
  meta: {
    label: "bacoffice",
  },
};

const menuItemManifest: ManifestMenuItem = {
  type: "menuItem",
  alias: "bacoffice.menu,item",
  name: "bacoffice menu item",
  meta: {
    label: "bacoffice Zones",
    icon: "icon-alarm-clock",
    entityType: BACKOFFICE_WORKSPACE_ENTITY_TYPE,
    menus: [menuManifest.alias],
  },
};

export const manifests = [sidebarAppManifest, menuManifest, menuItemManifest];
