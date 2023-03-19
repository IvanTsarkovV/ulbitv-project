import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfilePageHeader.module.scss';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/ui/Button';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
  const { t } = useTranslation('profile');

  const readonly = useSelector(getProfileReadonly);
  const dispatch = useAppDispatch();

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
      <Text title={t('Профиль')}/>
      {readonly
        ? <Button onClick={onEdit} theme={ButtonTheme.BACKGROUND_INVERTED}>{t('Редактировать')}</Button>
        : (<>
          <Button onClick={onCancelEdit} theme={ButtonTheme.BACKGROUND_INVERTED}>{t('Отменить')}</Button>
          <Button onClick={onSave} theme={ButtonTheme.BACKGROUND_INVERTED}>{t('Сохранить')}</Button>
        </>)}

    </div>
  );
};
