import { NextFunction, Request, Response } from 'express';

class HttpException extends Error {
    status: number;
    message: string;
    constructor(status: number, message: string) {
      super(message);
      this.status = status;
      this.message = message;
    }
}
 
export const GlobalErrorHandler = async (error: HttpException, request: Request, response: Response, next: NextFunction) => {
  const status = error.status || 500;
  const message = error.message || 'Something went wrong';
    let errorStack = null
    
    if (process.env.NODE_ENV !== 'prod') { 
        errorStack = error.stack
    }

  response
    .status(status)
    .send({
      status,
      message,
      errorStack,
    })
}