import { UmbControllerBase } from "@umbraco-cms/backoffice/class-api";
import { UmbControllerHost } from "@umbraco-cms/backoffice/controller-api";
import { UmbContextToken } from "@umbraco-cms/backoffice/context-api";
import { BackOfficeManagementRespository } from "../repository/backoffice.repository";
import { OpenAPI, ServerInformation, AssemblyInformation } from "../api";
import { UMB_AUTH_CONTEXT } from "@umbraco-cms/backoffice/auth";
import { UmbObjectState } from "@umbraco-cms/backoffice/observable-api";

export class BackOfficeManagementContext extends UmbControllerBase {

  #repository: BackOfficeManagementRespository;

  #serverInformation = new UmbObjectState<ServerInformation[]>([]);
  
  public readonly serverInformation = this.#serverInformation.asObservable();

  #assemblyInformation = new UmbObjectState<AssemblyInformation|undefined>(undefined);
  
  public readonly assemblyInformation = this.#assemblyInformation.asObservable();

  constructor(host: UmbControllerHost) {
    
    super(host);

    this.provideContext(BACKOFFICE_MANAGEMENT_CONTEXT_TOKEN, this);

    this.#repository = new BackOfficeManagementRespository(this);

    this.consumeContext(UMB_AUTH_CONTEXT, (_auth) => {

      const umbOpenApi = _auth.getOpenApiConfiguration();
      OpenAPI.TOKEN = umbOpenApi.token;
      OpenAPI.BASE = umbOpenApi.base;
      OpenAPI.WITH_CREDENTIALS = umbOpenApi.withCredentials;

    });
  
  }

  async getServerInformation() {

    console.log("context getServerInformation")



    const { data } = await this.#repository.getServerInformation();

    if (data) {
      this.#serverInformation.setValue(data);
    }
  }

  async getAssemblyInformation() {

    console.log("context getAssemblyInformation")

    const { data } = await this.#repository.getAssemblyInformation();

    if (data) {

      this.#assemblyInformation.setValue(data);

    }
  }
}

export default BackOfficeManagementContext;

export const BACKOFFICE_MANAGEMENT_CONTEXT_TOKEN = new UmbContextToken<BackOfficeManagementContext>(BackOfficeManagementContext.name);
