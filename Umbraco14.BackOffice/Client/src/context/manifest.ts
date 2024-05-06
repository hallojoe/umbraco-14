import { ManifestGlobalContext } from "@umbraco-cms/backoffice/extension-registry";

const contexts: Array<ManifestGlobalContext> = [
  {
    type: "globalContext",
    alias: "backoffice.context",
    name: "BackOffice Context",
    js: () => import("./backoffice.context.ts"),
  },
];

export const manifests = [...contexts];