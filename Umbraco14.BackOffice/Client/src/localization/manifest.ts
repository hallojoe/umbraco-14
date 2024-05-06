import { ManifestLocalization } from "@umbraco-cms/backoffice/extension-registry";

const localizations: Array<ManifestLocalization> = [
  {
    type: "localization",
    alias: "backoffice.lang.enus",
    name: "English (US)",
    weight: 0,
    meta: {
      culture: "en-us",
    },
    js: () => import("./files/en"),
  },
  {
    type: "localization",
    alias: "backoffice.lang.da",
    name: "Danish",
    weight: 0,
    meta: {
      culture: "da-dk",
    },
    js: () => import("./files/da"),
  },
];

export const manifests = [...localizations];
