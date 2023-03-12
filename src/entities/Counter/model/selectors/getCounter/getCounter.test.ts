import { getCounter } from './getCounter';
import { type StateSchema } from 'app/providers/StoreProvider';

describe('getCounter', () => {
  it('should return counter value', async () => {
    const state: DeepPartial<StateSchema> = {
      counter: { value: 10 }
    };
    expect(getCounter(state as StateSchema)).toEqual({ value: 10 });
  });
});
