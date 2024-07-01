import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export class Http {

  private static sendRequest(config: AxiosRequestConfig): Promise<AxiosResponse<any>> {
    return axios(config);
  };

  // Get method
  static get(url: string, headers: Record<string, string>): Promise<AxiosResponse<any>> {
    const config: AxiosRequestConfig = {
      url: url,
      method: 'GET',
      headers: headers,
      responseType: 'json',
    };
    return this.sendRequest(config);
  };

  // Post method
  static post(url: string, data: any, headers: Record<string, string>): Promise<AxiosResponse<any>> {
    const config: AxiosRequestConfig = {
      url: url,
      method: 'POST',
      data: data,
      headers: headers,
      responseType: 'json',
    };
    return this.sendRequest(config);
  };

  // Put method
  static put(url: string, data: any, headers: Record<string, string>): Promise<AxiosResponse<any>> {
    const config: AxiosRequestConfig = {
      url: url,
      method: 'PUT',
      data: data,
      headers: headers,
      responseType: 'json',
    };
    return this.sendRequest(config);
  };

  // Delete method
  static delete(url: string, headers: Record<string, string>): Promise<AxiosResponse<any>> {
    const config: AxiosRequestConfig = {
      url: url,
      method: 'DELETE',
      headers: headers,
      responseType: 'json',
    };
    return this.sendRequest(config);
  };
};
