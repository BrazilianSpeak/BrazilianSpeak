import { NextFunction, Request, Response } from 'express';

const validatePresentation = (req: Request, res: Response, next: NextFunction) => {
  const { presentation } = req.body;

  if (!presentation) {
    return res.status(400).json({ message: 'Sending the presentation is mandatory' });
  }

  next();
};

export default validatePresentation;
