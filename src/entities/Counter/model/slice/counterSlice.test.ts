import { counterReducer, counterActions } from './counterSlice';
import { type CounterSchema } from '../types/counterSchema';

describe('getCounterValue', () => {
  it('decremented', async () => {
    const state: CounterSchema = {
      value: 10
    };
    expect(counterReducer(state, counterActions.decremented())).toEqual({ value: 9 });
  });

  it('incremented', async () => {
    const state: CounterSchema = {
      value: 10
    };
    expect(counterReducer(state, counterActions.incremented())).toEqual({ value: 11 });
  });

  it('should work with empty state', async () => {
    expect(counterReducer(undefined, counterActions.incremented())).toEqual({ value: 1 });
  });
});
