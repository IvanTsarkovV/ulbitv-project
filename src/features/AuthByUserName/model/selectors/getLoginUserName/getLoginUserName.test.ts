import { type StateSchema } from 'app/providers/StoreProvider';
import { getLoginUserName } from './getLoginUserName';

describe('getLoginUserName', () => {
  it('should return error', async () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: { username: '123' }
    };
    expect(getLoginUserName(state as StateSchema)).toEqual('123');
  });

  it('should work with empty error', async () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginUserName(state as StateSchema)).toEqual('');
  });
});
