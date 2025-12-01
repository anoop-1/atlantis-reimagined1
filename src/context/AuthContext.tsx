import React, { createContext, useContext, useState, useEffect } from 'react';

interface AuthContextType {
  isAdmin: boolean;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  adminEmail: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminEmail, setAdminEmail] = useState<string | null>(null);

  // Load auth state from localStorage on mount
  useEffect(() => {
    const savedAuth = localStorage.getItem('adminAuth');
    if (savedAuth) {
      const parsed = JSON.parse(savedAuth);
      setIsAdmin(parsed.isAdmin);
      setAdminEmail(parsed.email);
    }
  }, []);

  const login = (email: string, password: string): boolean => {
    const validEmail = 'anoop@atlantisinspection.com';
    const validPassword = 'Atlantis9$';

    if (email === validEmail && password === validPassword) {
      setIsAdmin(true);
      setAdminEmail(email);
      localStorage.setItem('adminAuth', JSON.stringify({ isAdmin: true, email }));
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAdmin(false);
    setAdminEmail(null);
    localStorage.removeItem('adminAuth');
  };

  return (
    <AuthContext.Provider value={{ isAdmin, login, logout, adminEmail }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
