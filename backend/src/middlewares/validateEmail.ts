import { NextFunction, Request, Response } from 'express';

const validateEmail = (req: Request, res: Response, next: NextFunction) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Sending the email is mandatory' });
  }

  const regexValidateEmail = /\S+@\S+\.\S+/;

  if (!regexValidateEmail.test(email)) {
    return res.status(400).json({ message: 'invalid email format' });
  }

  next();
};

export default validateEmail;
