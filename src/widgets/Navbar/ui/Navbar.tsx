import React, { memo, useCallback, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';

interface NavbarProps {
    className?: string
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const dispath = useDispatch()

    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData)

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onLogout = useCallback(() => {
        dispath(userActions.logout())
    }, [dispath]);

    return (
        <>
            {!authData && (
                <div className={classNames(cls.navbar, {}, [className])}>
                    <div className={cls.links}>
                        <Button
                            theme={ButtonTheme.CLEAR_INVERTED}
                            className={cls.links}
                            onClick={onShowModal}
                        >
                            {t('Войти')}
                        </Button>
                        <LoginModal isOpen={isAuthModal} onClose={onCloseModal}/>
                    </div>
                </div>
            )}
            {authData && (
                <div className={classNames(cls.navbar, {}, [className])}>
                    <Button
                        theme={ButtonTheme.CLEAR_INVERTED}
                        className={cls.links}
                        onClick={onLogout}
                    >
                        {t('Выйти')}
                    </Button>
                </div>
            )}
        </>
    )
})
