import prismaClient from './prismaClient';

interface IStudent {
  name: string;
  email: string;
  password: string;
  company: string;
  country: string;
  presentation: string;
}

const createStudent = async (student: IStudent) => {
  try {
    const createdUser = await prismaClient.student.create({
      data: {
        name: student.name,
        email: student.email,
        password: student.password,
        company: student.company,
        country: student.country,
        presentation: student.presentation,
        status: 'Active',
      },
      select: { id: true, name: true, email: true, createIn: true },
    });

    return createdUser;
  } catch (error) {
    console.log('Error creating new user');
    console.log(error);
    throw new Error('');
  }
};

export default createStudent;
