import { type StateSchema } from 'app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword', () => {
  it('should return error', async () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: { password: '123' }
    };
    expect(getLoginPassword(state as StateSchema)).toEqual('123');
  });

  it('should work with empty error', async () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginPassword(state as StateSchema)).toEqual('');
  });
});
