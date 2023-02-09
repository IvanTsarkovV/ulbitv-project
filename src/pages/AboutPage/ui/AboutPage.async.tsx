import { lazy } from 'react';

export const AboutPageAsync = lazy(async () => await new Promise(resolve => {
  // @ts-expect-error todo: will fix
  setTimeout(() => { resolve(import('./AboutPage')); }, 1500);
}));
