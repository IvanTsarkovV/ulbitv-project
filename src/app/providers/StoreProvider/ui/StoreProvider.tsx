import { Provider } from 'react-redux';
import { createReduxStore } from '../config/store';
import { type StateSchema } from '../config/StateSchema';
import { type ReactNode } from 'react';
import { type DeepPartial } from 'redux';
import { type ReducersMapObject } from '@reduxjs/toolkit';

interface StoreProviderProps {
  children?: ReactNode;
  initialState?: DeepPartial<StateSchema>;
  asyncReducers?: DeepPartial<ReducersMapObject>;
}

export const StoreProvider = ({ children, initialState, asyncReducers }: StoreProviderProps) => {
  const store = createReduxStore(
    initialState as StateSchema,
    asyncReducers as ReducersMapObject<StateSchema>
  );

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
