import { createContext } from 'react';

export const incitialValue = {
  token: '',
  setToken: () => {},
};

const usercontext = createContext(incitialValue);

export default usercontext;
