import prismaClient from './prismaClient';

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

const createTeacher = async (teacher: ITeacher) => {
  try {
    const createdUser = await prismaClient.teacher.create({
      data: {
        name: teacher.name,
        email: teacher.email,
        password: teacher.password,
        company: teacher.company,
        country: teacher.country,
        languages: teacher.languages,
        presentation: teacher.presentation,
        lastLogin: new Date(),
        status: 'Active',
      },
      select: { id: true, name: true, email: true, lastLogin: true },
    });

    return createdUser;
  } catch (error) {
    console.log('Error creating new teacher');
    console.log(error);
    throw new Error('');
  }
};

export default createTeacher;
