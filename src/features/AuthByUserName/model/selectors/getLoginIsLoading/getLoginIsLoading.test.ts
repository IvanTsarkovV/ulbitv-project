import { type StateSchema } from 'app/providers/StoreProvider';
import { getLoginIsLoading } from './getLoginIsLoading';

describe('getLoginIsLoading', () => {
  it('should return error', async () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: { isLoading: true }
    };
    expect(getLoginIsLoading(state as StateSchema)).toEqual(true);
  });

  it('should work with empty error', async () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginIsLoading(state as StateSchema)).toEqual(false);
  });
});
