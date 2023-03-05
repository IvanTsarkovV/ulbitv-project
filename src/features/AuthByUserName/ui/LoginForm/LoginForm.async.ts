import { lazy } from 'react';

export const LoginFormAsync = lazy(async () => await new Promise(resolve => {
  // @ts-expect-error todo: will fix
  setTimeout(() => { resolve(import('./LoginForm')); }, 1500);
}));
