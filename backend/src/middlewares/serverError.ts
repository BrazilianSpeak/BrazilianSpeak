import { NextFunction, Request, Response } from 'express';

const serverError = (
  _error: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  return res.status(500).json({ message: 'Internal server error' });
};

export default serverError;
