import { Router } from 'express';
import validateEmail from '../middlewares/validateEmail';
import validatePassword from '../middlewares/validatePassword';
import validateName from '../middlewares/validateName';
import validateCompany from '../middlewares/validateCompany';
import validateCountry from '../middlewares/validateCountry';
import validatePresentation from '../middlewares/validatePresentation';
import controllerCreateStudent from '../controller/controllerCreateStudent';
import controllerCreateTeacher from '../controller/controllerCreateTeacher';
import validateLanguages from '../middlewares/validateLanguages';

const routerLogin = Router();

routerLogin
  .route('/student')
  .post(
    validateName,
    validateEmail,
    validatePassword,
    validateCompany,
    validateCountry,
    validatePresentation,
    controllerCreateStudent
  );

routerLogin
  .route('/teacher')
  .post(
    validateName,
    validateEmail,
    validatePassword,
    validateCompany,
    validateCountry,
    validateLanguages,
    validatePresentation,
    controllerCreateTeacher
  );

export default routerLogin;
