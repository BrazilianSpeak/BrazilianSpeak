import { updateLastLoginStudent, updateLastLoginTeacher } from '../models/RegisterLastLogin';
import consultStudentByEmail from '../models/consultStudentByEmail';
import consultTeacherByEmail from '../models/consultTeacherByEmail';

export const serviceLoginStudent = async (email: string ) => {
  const queryAnswer = await consultStudentByEmail(email);
  if (queryAnswer) updateLastLoginStudent(queryAnswer.id)
  return queryAnswer;
};

export const serviceLoginTeacher = async (email: string) => {
  const queryAnswer = await consultTeacherByEmail(email);
  if (queryAnswer) updateLastLoginTeacher(queryAnswer.id)
  return queryAnswer;
};
