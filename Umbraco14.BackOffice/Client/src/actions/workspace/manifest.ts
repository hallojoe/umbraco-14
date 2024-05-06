import { ManifestWorkspaceAction } from "@umbraco-cms/backoffice/extension-registry";
import BackOfficeAction from "./backoffice.action";

const action: ManifestWorkspaceAction = {
  type: "workspaceAction",
  alias: "backoffice.workspace.action",
  kind: "default",
  name: "backoffice workspace action",
  api: BackOfficeAction,
  meta: {
    label: "Time Action",
    look: "primary",
    color: "default",
  },
  conditions: [
    {
      alias: "Umb.Condition.WorkspaceAlias",
      match: "Umb.Workspace.Document",
    },
  ],
};

export const manifests = [action];
