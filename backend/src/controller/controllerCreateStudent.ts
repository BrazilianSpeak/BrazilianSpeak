import { NextFunction, Request, Response } from 'express';
import { bcrypt, createToken } from '../services/safety';
import serviceCreateStudent from '../services/serviceCreateStudent';

const controllerCreateStudent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, email, password, company, country, presentation } = req.body;
    const passwordHash = await bcrypt(password);

    const response = await serviceCreateStudent({ name, email, password: passwordHash, company, country, presentation });

    if (response === 'E-mail already registered') {
      return res.status(400).json({ message: response });
    }

    const token = await createToken(response.id, email);

    return res.status(201).json({ ...response, token });
  } catch (error) {
    next(error);
  }
};

export default controllerCreateStudent;
