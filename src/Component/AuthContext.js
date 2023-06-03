import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (email, password) => {
    // Perform login logic here
    // You can send the email and password to the server for authentication
    // If the authentication is successful, set the isLoggedIn state to true

    // Simulating a successful login for demo purposes
    if (email === 'test@example.com' && password === 'password') {
      setIsLoggedIn(true);
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
