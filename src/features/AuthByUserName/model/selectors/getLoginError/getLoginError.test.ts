import { type DeepPartial } from 'redux';
import { type StateSchema } from 'app/providers/StoreProvider';
import { getLoginError } from './getLoginError';

describe('getLoginError', () => {
  it('should return error', async () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: { error: 'error' }
    };
    expect(getLoginError(state as StateSchema)).toEqual('error');
  });

  it('should work with empty error', async () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginError(state as StateSchema)).toEqual(undefined);
  });
});
