import { NextFunction, Request, Response } from 'express';
import { bcrypt, createToken } from '../services/safety';
import serviceCreateTeacher from '../services/serviceCreateTeacher';

interface ITeacher {
  name: string;
  email: string;
  password: string;
  company: string;
  country: string;
  languages: Languages[];
  presentation: string;
}

type Languages = {
  language: string;
  level: string;
};

const controllerCreateTeacher = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data: ITeacher = req.body;
    const { name, email, password, company, country, languages, presentation } =
      data;

    const passwordHash = await bcrypt(password);

    const response = await serviceCreateTeacher({
      name,
      email,
      password: passwordHash,
      company,
      country,
      languages,
      presentation,
    });

    if (response === 'E-mail already registered') {
      return res.status(400).json({ message: response });
    }

    const token = await createToken(response.id, email);

    return res.status(201).json({ ...response, token });
  } catch (error) {
    next(error);
  }
};

export default controllerCreateTeacher;
