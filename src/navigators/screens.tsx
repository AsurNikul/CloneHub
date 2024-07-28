import React from 'react';

// Authentication Stack
export const AuthScr = {
  Login: React.lazy(() => import('../screens/Auth/Login')),
  Register: React.lazy(() => import('../screens/Auth/Register')),
  Setting: React.lazy(() => import('../screens/Main/Setting')),
  RequestNew: React.lazy(() => import('../screens/Main/RequestNew')),
  Terms: React.lazy(() => import('../screens/Main/Terms')),
};
