import { NextFunction, Request, Response } from 'express';

const validatePassword = (req: Request, res: Response, next: NextFunction) => {
  const { password } = req.body;

  if (!password) {
    return res
      .status(400)
      .json({ message: 'Sending the password is mandatory' });
  }

  if (password.length < 6) {
    return res
      .status(400)
      .json({ message: 'Password must be at least six characters long' });
  }

  next();
};

export default validatePassword;
