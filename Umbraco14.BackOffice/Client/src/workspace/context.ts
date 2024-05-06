import { UmbControllerBase } from "@umbraco-cms/backoffice/class-api";
import { UmbContextToken } from "@umbraco-cms/backoffice/context-api";
import { UmbControllerHostElement } from "@umbraco-cms/backoffice/controller-api";
import { UMB_WORKSPACE_CONTEXT, UmbWorkspaceContext } from "@umbraco-cms/backoffice/workspace";
import { BACKOFFICE_WORKSPACE_ENTITY_TYPE } from "../constants";

export class BackOfficeWorkspaceContext extends UmbControllerBase implements UmbWorkspaceContext
{
  public readonly workspaceAlias: string = "backoffice.workspace";

  constructor(host: UmbControllerHostElement) {

    super(host);

    this.provideContext(UMB_WORKSPACE_CONTEXT, this);

    this.provideContext(BACKOFFICE_WORKSPACE_CONTEXT, this);

  }

  getEntityType(): string {

    return BACKOFFICE_WORKSPACE_ENTITY_TYPE;

  }

  getUnique(): string | undefined {

    return undefined;

  }

}

export default BackOfficeWorkspaceContext;

export const BACKOFFICE_WORKSPACE_CONTEXT = new UmbContextToken<BackOfficeWorkspaceContext>(
  BackOfficeWorkspaceContext.name
);
