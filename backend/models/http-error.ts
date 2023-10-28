class HttpError extends Error {
  code: string | number;

  constructor(message, errorCode) {
    super(message);
    this.code = errorCode;
  }
}

export default HttpError;
