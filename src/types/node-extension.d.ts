declare global {
  namespace NodeJS {
    interface ProcessEnv {
      readonly REACT_APP_TITLE: string;
      readonly REACT_APP_API_HOST: string;
    }
  }
}

export {};
