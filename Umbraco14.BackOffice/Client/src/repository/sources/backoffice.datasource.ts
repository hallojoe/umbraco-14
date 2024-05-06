import { UmbControllerHost } from "@umbraco-cms/backoffice/controller-api";
import { UmbDataSourceResponse } from "@umbraco-cms/backoffice/repository";
import { tryExecuteAndNotify } from "@umbraco-cms/backoffice/resources";
import { ServerInformation, AssemblyInformation, BackOfficeService } from "../../api";

export interface BackOfficeDataSource {
  getServerInformation(): Promise<UmbDataSourceResponse<ServerInformation[]>>;
  getAssemblyInformation(): Promise<UmbDataSourceResponse<AssemblyInformation>>;
}

export class BackOfficeManagementDataSource implements BackOfficeDataSource {

  #host: UmbControllerHost;

  constructor(host: UmbControllerHost) {

    this.#host = host;

    console.log("HOST IS")

  }

  async getServerInformation(): Promise<UmbDataSourceResponse<ServerInformation[]>> {
  
    console.log("datasource getServerInformation")
  
    return await tryExecuteAndNotify(this.#host, BackOfficeService.getServerInformation());
  
  }

  async getAssemblyInformation(): Promise<UmbDataSourceResponse<AssemblyInformation>> {
  
    console.log("datasource getAssemblyInformation")
  
    return await tryExecuteAndNotify(this.#host, BackOfficeService.getAssemblyInformation());
  
  }

}
