import React, { memo, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Text, TextTheme } from 'shared/ui/Text';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUsername';
import { useSelector } from 'react-redux';
import {
    getUserAuthData, isUserAdmin, isUserManager, userActions,
} from 'entities/User';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Dropdown } from 'shared/ui/Dropdown';
import { Avatar } from 'shared/ui/Avatar';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const authData = useSelector(getUserAuthData);
    const dispatch = useAppDispatch();
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);

    const isAdminPanelAvailable: boolean = isAdmin || isManager;

    const [isAuthModal, setIsAuthModal] = useState<boolean>();

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (authData) {
        return (
            <header className={classNames(cls.navbar, {}, [className])}>
                <Text
                    theme={TextTheme.INVERTED}
                    title={t('Ulbi TV App')}
                    className={cls.appName}
                />
                <Dropdown
                    className={cls.dropdown}
                    items={[
                        ...(isAdminPanelAvailable ? [{
                            content: t('Admin Panel'),
                            href: RoutePath.admin_panel,
                        }] : []),
                        {
                            content: t('My profile'),
                            href: RoutePath.profile + authData.id,
                        },
                        {
                            content: t('Create new article'),
                            href: RoutePath.article_create,
                        },
                        {
                            content: t('Logout'),
                            onClick: onLogout,
                        },
                    ]}
                    trigger={<Avatar size={30} src={authData.avatar} />}
                    direction="bottom left"
                />
            </header>
        );
    }

    return (
        <header className={classNames(cls.navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                onClick={onShowModal}
                className={cls.loginBtn}
            >
                {t('Login')}
            </Button>
            {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />}
        </header>
    );
});
