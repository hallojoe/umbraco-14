import { ManifestWorkspaceView } from "@umbraco-cms/backoffice/extension-registry";

var workspaceView: ManifestWorkspaceView = {
  type: "workspaceView",
  alias: "backoffice.document.workspace",
  name: "backoffice contentapp",
  js: () => import("./views/backoffice-workspace-view"),
  weight: 10,
  meta: {
    icon: "icon-alert",
    pathname: "backoffice",
    label: "backoffice",
  },
  conditions: [
    {
      alias: "Umb.Condition.WorkspaceAlias",
      match: "Umb.Workspace.Document",
    },
  ],
};

export const manifests = [workspaceView];
