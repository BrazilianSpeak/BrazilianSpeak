import { NextFunction, Request, Response } from 'express';
import { createToken, validBcrypt } from '../services/safety';
import { serviceLoginStudent, serviceLoginTeacher } from '../services/serviceLogin';

export const controllerLoginStudent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;

    const replyIfTheEmailExists = await serviceLoginStudent(email);

    if (!replyIfTheEmailExists) {
      return res.status(400).json({ message: 'Unregistered E-mail' });
    }

    if (
      replyIfTheEmailExists &&
      (await validBcrypt(password, replyIfTheEmailExists.password))
    ) {
      const token = createToken(replyIfTheEmailExists.id, email);

      return res
        .status(200)
        .json({ name: replyIfTheEmailExists.name, email, country: replyIfTheEmailExists.country, token });
    }

    return res.status(400).json({ message: 'invalid password' });
  } catch (error) {
    next(error);
  }
};

export const controllerLoginTeacher = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;

    const replyIfTheEmailExists = await serviceLoginTeacher(email);

    if (!replyIfTheEmailExists) {
      return res.status(400).json({ message: 'Unregistered E-mail' });
    }

    if (
      replyIfTheEmailExists &&
      (await validBcrypt(password, replyIfTheEmailExists.password))
    ) {
      const token = createToken(replyIfTheEmailExists.id, email);

      return res
        .status(200)
        .json({ name: replyIfTheEmailExists.name, email, token });
    }

    return res.status(400).json({ message: 'invalid password' });
  } catch (error) {
    next(error);
  }
};


