import type { ManifestDashboard } from "@umbraco-cms/backoffice/extension-registry";
import { BACKOFFICE_SECTION_ALIAS } from "../constants.js";

const dashboards: Array<ManifestDashboard> = [
    {
        type: "dashboard",
        name: "Dashboard",
        alias: "BackOffice.dashboard",
        elementName: "dashboard-element",
        js: ()=> import("./dashboard.element.js"),
        weight: -10,
        meta: {
            label: "BackOffice Dashboard",
            pathname: "BackOffice"
        },
        conditions: [
            {
                alias: "Umb.Condition.SectionAlias",
                match: BACKOFFICE_SECTION_ALIAS
            }
        ]
    }
]

export const manifests = [...dashboards];

