import consultTeacherByEmail from '../models/consultTeacherByEmail';
import createTeacher from '../models/createTeacher';

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

const serviceCreateTeacher = async (teacher: ITeacher) => {
  const queryAnswer = await consultTeacherByEmail(teacher.email);

  if (!queryAnswer) {
    const newTeacherData = await createTeacher(teacher);

    return newTeacherData;
  }

  return 'E-mail already registered';
};

export default serviceCreateTeacher;
