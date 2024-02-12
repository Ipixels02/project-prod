import React, { memo, useCallback, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

interface NavbarProps {
    className?: string
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch()

    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData)

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout())
    }, [dispatch]);

    return (
        <>
            {!authData && (
                <header className={classNames(cls.navbar, {}, [className])}>
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
                </header>
            )}
            {authData && (
                <header className={classNames(cls.navbar, {}, [className])}>
                    <Button
                        theme={ButtonTheme.CLEAR_INVERTED}
                        className={cls.links}
                        onClick={onLogout}
                    >
                        {t('Выйти')}
                    </Button>
                </header>
            )}
        </>
    )
})
