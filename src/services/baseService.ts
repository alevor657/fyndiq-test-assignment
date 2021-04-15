interface ServiceInit {
  status: Status.INIT;
}

interface ServiceLoading {
  status: Status.LOADING;
}

interface ServiceLoaded<T> {
  status: Status.LOADED;
  payload: T;
}

interface ServiceError {
  status: Status.ERROR;
  error: Error;
}

export enum Status {
  INIT = "INIT",
  LOADING = "LOADING",
  LOADED = "LOADED",
  ERROR = "ERROR",
}

export type Service<T> =
  | ServiceInit
  | ServiceLoading
  | ServiceLoaded<T>
  | ServiceError;
