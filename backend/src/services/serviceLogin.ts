import consultStudentByEmail from '../models/consultStudentByEmail';
import consultTeacherByEmail from '../models/consultTeacherByEmail';

export const serviceLoginStudent = async (email: string ) => {
  const queryAnswer = await consultStudentByEmail(email);
  return queryAnswer;
};

export const serviceLoginTeacher = async (email: string) => {
  const queryAnswer = await consultTeacherByEmail(email);
  return queryAnswer;
};
