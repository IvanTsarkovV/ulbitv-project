import { classNames, type Mods } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';
import { type InputHTMLAttributes, memo } from 'react';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readonly'>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  readonly?: boolean;
}

export const Input = memo((props: InputProps) => {
  const { className, value, onChange, readonly, type = 'text', ...otherProps } = props;

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  const mods: Mods = {
    [cls.readonly]: readonly
  };

  return (
    <div className={classNames(cls.Input, mods, [className])}>
      <input type={type} value={value} onChange={onChangeHandler} readOnly={readonly} {...otherProps} />
    </div>
  );
});
