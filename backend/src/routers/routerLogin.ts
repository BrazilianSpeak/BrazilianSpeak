import { Router } from 'express';
import validateEmail from '../middlewares/validateEmail';
import validatePassword from '../middlewares/validatePassword';
import { controllerLoginStudent, controllerLoginTeacher } from '../controller/controllerLogin';

const routerLogin = Router();

routerLogin.route('/student').post(validateEmail, validatePassword, controllerLoginStudent);
routerLogin.route('/teacher').post(validateEmail, validatePassword, controllerLoginTeacher);

export default routerLogin;
