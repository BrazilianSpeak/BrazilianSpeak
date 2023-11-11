import { NextFunction, Request, Response } from 'express';

const validateName = (req: Request, res: Response, next: NextFunction) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: 'Sending the name is mandatory' });
  }

  next();
};

export default validateName;
