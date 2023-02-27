import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/ui/Button';
import { useCallback, useState } from 'react';
import { LoginModal } from 'features/AuthByUserName';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.Links}>
        <Button onClick={onShowModal} theme={ButtonTheme.OUTLINE}>{t('Войти')}</Button>
      </div>
      <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
    </div>
  );
};
