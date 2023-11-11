import { NextFunction, Request, Response } from 'express';

const validateLanguages = (req: Request, res: Response, next: NextFunction) => {
  const { languages } = req.body;

  if (!languages) {
    return res
      .status(400)
      .json({ message: 'Sending the languages  is mandatory' });
  } else if (!Array.isArray(languages)) {
    return res.status(400).json({ message: 'language format is incorrect' });
  } else if (languages.length < 1) {
    return res.status(400).json({ message: 'No defined language' });
  }

  languages.forEach((current) => {
    if (!current.language && !current.level) {
      return res.status(400).json({ message: 'language format is incorrect' });
    }
  });

  next();
};

export default validateLanguages;
