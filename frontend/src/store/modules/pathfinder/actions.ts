import axios from "axios";

import { ACTION_TYPES } from "./mutations";

const baseHttpClient = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  // withCredentials: true,
});

const axiosHttpClient = {
  get: (endpoint: string, headers = {}) =>
    baseHttpClient
      .get(endpoint, {
        /*
        headers: {
          ...headers,
          Accept: "application/json; charset=utf-8",
        },
        */
        headers: {
          ...headers,
          // Accept: "application/json; charset=utf-8",
          // credentials: "include",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
          // "Access-Control-Allow-Credentials": "true",
        },
      })
      .then(({ data }) => data),
  put: (endpoint: string, data: Record<string, never>, headers = {}) =>
    baseHttpClient.put(endpoint, data, {
      headers,
    }),
  post: (endpoint: string, data: Record<string, never>, headers = {}) =>
    baseHttpClient.post(endpoint, data, { headers }),
  delete: (endpoint: string, headers = {}) =>
    baseHttpClient.delete(endpoint, {
      headers: {
        ...headers,
        Accept: "application/json; charset=utf-8",
      },
    }),
};

export default {
  requestGrid({ commit }: any) {
    return new Promise((result, reject) => {
      axiosHttpClient
        .get("/grid")
        .then((grid) => {
          console.log("/grid", grid);
          commit(ACTION_TYPES.setAllExample, grid);
          result(result);
        })
        .catch((error) => {
          reject(error);
          throw new Error(error);
        });
    });
  },
};
