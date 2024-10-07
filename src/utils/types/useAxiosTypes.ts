import { AxiosRequestConfig } from "axios";

export type ApiCallParams = AxiosRequestConfig & {
  headers?: Record<string, string>;
};

export type ErrorResponse = {
  message: string;
};
