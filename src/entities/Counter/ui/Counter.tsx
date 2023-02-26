import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useTranslation } from 'react-i18next';

export const Counter = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);

  const increment = () => {
    dispatch(counterActions.incremented());
  };

  const decrement = () => {
    dispatch(counterActions.decremented());
  };

  return (
    <div>
      <h1 data-testid="value-title">{counterValue}</h1>
      <button type="button" data-testid="increment-btn" onClick={increment}>{t('increment')}</button>
      <button type="button" data-testid="decrement-btn" onClick={decrement}>{t('decrement')}</button>
    </div>
  );
};
