import { useState } from 'react';
import usercontext from './Context';

const UserContextProvider = ({ children }) => {
  const [salaReuniao, setSalaReuniao] = useState('');
  const [user, setUser] = useState('');

  const contextValue = {
    salaReuniao,
    setSalaReuniao,
    user,
    setUser
  };

  return (
    <usercontext.Provider value={contextValue}>{children}</usercontext.Provider>
  );
};

export default UserContextProvider;
