import React, { createContext, useContext, useState, useEffect } from 'react';

interface AuthContextType {
  isAdmin: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  adminEmail: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Keep in step with ADMIN_AUTH_SALT in vite.config.ts.
const ADMIN_AUTH_SALT = 'atlantisndt-admin-v1';

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

  // 2026-11-18: compare a salted SHA-256 of what was typed with the hash injected at
  // build time (vite.config.ts → __ADMIN_AUTH_HASH__). The admin email and password are
  // no longer referenced here, so Vite no longer inlines them into the public bundle.
  const login = async (email: string, password: string): Promise<boolean> => {
    if (!__ADMIN_AUTH_HASH__ || !globalThis.crypto?.subtle) return false;
    const input = `${ADMIN_AUTH_SALT}\n${email.trim().toLowerCase()}\n${password}`;
    const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(input));
    const hex = Array.from(new Uint8Array(digest), (b) => b.toString(16).padStart(2, '0')).join('');
    if (hex === __ADMIN_AUTH_HASH__) {
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
