export enum ResponseCode {
  ERROR = 0,
  SUCCESS = 1
}

export type ResponseData = {
  code: ResponseCode;
  message?: string;
  data?: object;
};

const request = (
  input: RequestInfo,
  options: RequestInit = {}
): Promise<[Error | null, ResponseData?]> => {
  if (!options.headers) {
    options.headers = { 'Content-Type': 'application/json' };
  }

  return fetch(input, options).then(
    async (res) => {
      const resData: ResponseData = await res.json();
      if (resData.code === ResponseCode.ERROR) {
        return [new Error(resData.message)];
      }

      return [null, resData];
    },
    (error) => {
      return [error];
    }
  );
};

export default request;
