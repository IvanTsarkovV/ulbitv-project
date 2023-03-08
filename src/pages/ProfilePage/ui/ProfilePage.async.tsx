import { lazy } from 'react';

export const ProfilePageAsync = lazy(async () => await new Promise(resolve => {
  // @ts-expect-error todo: will fix
  setTimeout(() => { resolve(import('./ProfilePage')); }, 1500);
}));
