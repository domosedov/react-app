import axios from "axios";

export default class Api {
  constructor(options = {}) {
    this.client = options.client || axios.create();
    this.token = options.token;
    this.refreshToken = options.refreshToken;
    this.refreshRequest = null;

    this.client.interceptors.request.use(
      (config) => {
        if (!this.token) {
          return config;
        }

        const newConfig = {
          headers: {},
          ...config,
        };

        newConfig.headers.Authorization = `Bearer ${this.token}`;
        return newConfig;
      },
      (e) => Promise.reject(e)
    );

    this.client.interceptors.response.use(
      (r) => r,
      async (error) => {
        if (
          !this.refreshToken ||
          error.response.status !== 401 ||
          error.config.retry
        ) {
          throw error;
        }

        if (!this.refreshRequest) {
          this.refreshRequest = this.client.post("/auth/refresh", {
            refreshToken: this.refreshToken,
          });
        }
        const { data } = await this.refreshRequest;
        this.refreshRequest = null;
        this.token = data.token;
        this.refreshToken = data.refreshToken;
        const newRequest = {
          ...error.config,
          retry: true,
        };

        return this.client(newRequest);
      }
    );
  }

  async login(query) {


    // `
    // mutation LoginUser {
    //   login( input: {
    //     clientMutationId: "uniqueId",
    //     username: "${login}",
    //     password: "${password}"
    //   } ) {
    //     authToken
    //     refreshToken
    //     user {
    //       id
    //       name
    //     }
    //   }
    // }
    // `

    const { data } = await this.client.post("http://wpgraphql.local/graphql", {query});
    console.log(data)
    return data;
  }

  logout() {
    this.token = null;
    this.refreshToken = null;
  }

  getUsers() {
    return this.client("/users").then(({ data }) => data);
  }
}
