const successTemplate = (
    statusCode: number,
    message: string,
    token: string
  ) => {
  return {
    statusCode,
    body: {
      message,
      token,
    }
  }
}

const errorTemplate = (statusCode: number, message: string) => {
  return {
    statusCode,
    body: {
      message,
    }
  }
}

export {errorTemplate, successTemplate };
