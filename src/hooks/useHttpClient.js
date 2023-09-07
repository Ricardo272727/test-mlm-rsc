import axios from "axios";
import { useCallback, useMemo } from "react";

export const useHttpClient = ({ baseURL = "" }) => {
  const httpInstance = useMemo(
    () =>
      axios.create({
        baseURL,
        headers: {
          "Content-Type": "application/json",
        },
      }),
    [baseURL]
  );

  const request = useCallback(
    ({ method = "", endpoint = "", body = {}, params = {} }) => {
      try {
        const requestConfig = {
          method,
          url: endpoint,
          params,
          data: body,
        };
        const response = httpInstance.request(requestConfig);
        console.log({ response });
        return { response: response.data, status: response.status };
      } catch (error) {
        return { response: error.response.data, status: error.response.status };
      }
    },
    [httpInstance]
  );

  return {
    post: (endpoint, body = {}, params = {}) =>
      request({
        method: "post",
        endpoint,
        body,
        params,
      }),
    get: (endpoint, params = {}) =>
      request({
        method: "get",
        endpoint,
        params,
      }),
    put: (endpoint, body = {}, params = {}) =>
      request({
        method: "put",
        endpoint,
        body,
        params,
      }),
    patch: (endpoint, body = {}, params = {}) =>
      request({
        method: "patch",
        endpoint,
        body,
        params,
      }),
    _delete: (endpoint, body = {}, params = {}) =>
      request({
        method: "delete",
        endpoint,
        body,
        params,
      }),
  };
};
