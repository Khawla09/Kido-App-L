import React, { createContext, useState, useContext } from 'react';

 export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);

  const loginUser = (id) => {
    setUserId(id);
  };

  return (
    <UserContext.Provider value={{ userId, loginUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {return useContext(UserContext)};
