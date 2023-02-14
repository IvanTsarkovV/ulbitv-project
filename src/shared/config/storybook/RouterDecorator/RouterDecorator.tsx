import { BrowserRouter } from 'react-router-dom';
import { type ReactNode } from 'react';

export const RouterDecorator = (story: () => ReactNode) => (
  <BrowserRouter>{story()}</BrowserRouter>
);
