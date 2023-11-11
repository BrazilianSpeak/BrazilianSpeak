import consultStudentByEmail from '../models/consultStudentByEmail';
import createStudent from '../models/createStudent';

interface IStudent {
  name: string;
  email: string;
  password: string;
  company: string;
  country: string;
  presentation: string;
}

const serviceCreateStudent = async (student: IStudent) => {
  const queryAnswer = await consultStudentByEmail(student.email);

  if (!queryAnswer) {
    const newStudentData = await createStudent(student);

    return newStudentData;
  }

  return 'E-mail already registered';
};

export default serviceCreateStudent;
