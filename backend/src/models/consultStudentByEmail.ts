import prismaClient from './prismaClient';

async function consultStudentByEmail(email: string) {
  try {
    const findStudent = await prismaClient.student.findUnique({
      where: { email },
      select: {
        id: true,
        name: true,
        email: true,
        password: true,
        country: true,
        presentation: true,
        lastLogin: true,
      },
    });

    return findStudent;
  } catch (error) {
    console.log('Error querying email - Student');
    console.log(error);
    throw new Error('');
  }
};

export default consultStudentByEmail;
