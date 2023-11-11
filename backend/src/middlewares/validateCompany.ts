import { NextFunction, Request, Response } from 'express';

const validateCompany = (req: Request, res: Response, next: NextFunction) => {
  const { company } = req.body;

  if (!company) {
    return res.status(400).json({ message: 'Sending the company is mandatory' });
  }

  next();
};

export default validateCompany;
