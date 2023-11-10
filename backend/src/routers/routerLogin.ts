import { Router } from 'express';
import validateEmail from '../middlewares/validateEmail';
import validatePassword from '../middlewares/validatePassword';

const routerLogin = Router();

routerLogin.route('/').post(validateEmail, validatePassword);

export default routerLogin;
