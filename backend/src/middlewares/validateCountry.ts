import { NextFunction, Request, Response } from 'express';

const validateCountry = (req: Request, res: Response, next: NextFunction) => {
  const { country } = req.body;

  if (!country) {
    return res.status(400).json({ message: 'Sending the country is mandatory' });
  }

  next();
};

export default validateCountry;
