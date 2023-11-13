import prismaClient from './prismaClient';

async function consultTeacherByEmail(email: string) {
  try {
    const findTeacher = await prismaClient.teacher.findUnique({
      where: { email },
      select: {
        id: true,
        name: true,
        email: true,
        password: true,
        country: true,
        languages: true,
        presentation: true,
        lastLogin: true,
      },
    });

    return findTeacher;
  } catch (error) {
    console.log('Error querying email - Teacher');
    console.log(error);
    throw new Error('');
  }
};

export default consultTeacherByEmail
