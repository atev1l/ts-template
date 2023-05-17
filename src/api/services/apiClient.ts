import { AuthController } from 'api/controllers';
import { apiPlugin } from 'api/plugins/apiPlugin';
import { AxiosInstance } from 'axios';

class ApiClient {
  public auth: AuthController;

  constructor(core: AxiosInstance) {
    this.auth = new AuthController(core);
  }
}

export const apiClient = new ApiClient(apiPlugin);
