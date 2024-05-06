import { UmbControllerBase } from "@umbraco-cms/backoffice/class-api";
import { UmbControllerHost } from "@umbraco-cms/backoffice/controller-api";
import { BackOfficeManagementDataSource } from "./sources/backoffice.datasource";

export class BackOfficeManagementRespository extends UmbControllerBase {
  
  #backofficeDataSource: BackOfficeManagementDataSource;

  constructor(host: UmbControllerHost) {

    super(host);
    
    this.#backofficeDataSource = new BackOfficeManagementDataSource(this);

    console.log("repository constructor");
  }

  async getServerInformation() {
    return this.#backofficeDataSource.getServerInformation();
  }

  async getAssemblyInformation() {
    return this.#backofficeDataSource.getAssemblyInformation();
  }
}
