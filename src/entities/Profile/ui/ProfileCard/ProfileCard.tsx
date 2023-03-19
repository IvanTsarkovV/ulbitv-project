import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfileCard.module.scss';
import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { type Profile } from '../../model/types/Profile';
import { Loader } from 'shared/ui/Loader/ui/Loader';

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  error?: string;
  isLoading?: boolean;
  onChangeFirstName?: (value?: string) => void;
  onChangeLastName?: (value?: string) => void;
  readonly?: boolean;
}

export const ProfileCard = ({ className, data, error, isLoading, onChangeFirstName, onChangeLastName, readonly }: ProfileCardProps) => {
  const { t } = useTranslation('profile');

  if (isLoading) {
    return (
      <div className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
        <Loader/>
      </div>
    );
  }

  if (error) {
    return (
      <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
        <Text
          align={TextAlign.CENTER}
          theme={TextTheme.ERROR}
          title={t('Ошибка')}
          text={t('Попробуй обновить страницу')}
        />
      </div>
    );
  }

  return (
    <div className={classNames(cls.ProfileCard, {}, [className])}>
      <div className={cls.data}>
        <Input value={data?.first} onChange={onChangeFirstName} readonly={readonly} />
        <Input value={data?.lastname} onChange={onChangeLastName} readonly={readonly} />
      </div>
    </div>
  );
};
