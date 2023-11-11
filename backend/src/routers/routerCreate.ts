import { Router } from 'express';
import validateEmail from '../middlewares/validateEmail';
import validatePassword from '../middlewares/validatePassword';
import validateName from '../middlewares/validateName';
import validateCompany from '../middlewares/validateCompany';
import validateCountry from '../middlewares/validateCountry';
import validatePresentation from '../middlewares/validatePresentation';
import controllerCreateStudent from '../controller/controllerCreateStudent';

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

export default routerLogin;
