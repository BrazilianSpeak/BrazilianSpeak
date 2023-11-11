import prismaClient from './prismaClient';

export const updateLastLoginTeacher = async (id: number) => {
  try {
    const response = await prismaClient.teacher.update({
      where: { id },
      data: {
        lastLogin: new Date(),
      },
    });

    return response;
  } catch (error) {
    console.log('Error updating last login - teacher');
    console.log(error);

    throw new Error('');
  }
};


export const updateLastLoginStudent = async (id: number) => {
  try {
    const response = await prismaClient.student.update({
      where: { id },
      data: {
        lastLogin: new Date(),
      },
    });

    return response;
  } catch (error) {
    console.log('Error updating last login - student');
    console.log(error);

    throw new Error('');
  }
};
