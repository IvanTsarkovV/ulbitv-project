import { lazy } from 'react';

export const MainPageAsync = lazy(async () => await new Promise(resolve => {
  // @ts-expect-error todo: will fix
  setTimeout(() => { resolve(import('./MainPage')); }, 1500);
}));
