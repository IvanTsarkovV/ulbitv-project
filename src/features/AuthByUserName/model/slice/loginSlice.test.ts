import { type DeepPartial } from 'redux';
import { type LoginSchema } from '../types/loginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice', () => {
  it('test set username', async () => {
    const state: DeepPartial<LoginSchema> = { username: '123' };
    expect(loginReducer(state as LoginSchema, loginActions.setUsername('123123'))).toStrictEqual({ username: '123123' });
  });

  it('test set password', async () => {
    const state: DeepPartial<LoginSchema> = { password: '123' };
    expect(loginReducer(state as LoginSchema, loginActions.setPassword('123123'))).toStrictEqual({ password: '123123' });
  });
});
