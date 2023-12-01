import React, { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';

import { LoginModal } from '@/features/AuthByUsername';
import { getUserAuthData } from '@/entities/User';
import { HStack } from '@/shared/ui/common/Stack';
import { NotificationButton } from '@/features/NotificationButton';
import { AvatarDropdown } from '@/features/AvatarDropdown';
import cls from './Navbar.module.scss';
import { Button } from '@/shared/ui/redesigned/Button';

import { Button as ButtonDeprecated, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Text, TextTheme } from '@/shared/ui/deprecated/Text';
import { ToggleFeatures } from '@/shared/lib/features';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const authData = useSelector(getUserAuthData);

    const [isAuthModal, setIsAuthModal] = useState<boolean>();

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    if (authData) {
        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={(
                    <header className={classNames(cls.navbarRedesigned, {}, [className])}>
                        <HStack align="center" gap="32" className={cls.actions}>
                            <NotificationButton />
                            <AvatarDropdown />
                        </HStack>
                    </header>
                )}
                off={(
                    <header className={classNames(cls.navbar, {}, [className])}>
                        <Text
                            theme={TextTheme.INVERTED}
                            title={t('Ulbi TV App')}
                            className={cls.appName}
                        />
                        <HStack align="center" gap="32" className={cls.actions}>
                            <NotificationButton />
                            <AvatarDropdown />
                        </HStack>
                    </header>
                )}
            />
        );
    }

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={(
                <header className={classNames(cls.navbarRedesigned, {}, [className])}>
                    <Button
                        variant="clear"
                        onClick={onShowModal}
                        className={cls.loginBtn}
                    >
                        {t('Login')}
                    </Button>
                    {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />}
                </header>
            )}
            off={(
                <header className={classNames(cls.navbar, {}, [className])}>
                    <ButtonDeprecated
                        theme={ButtonTheme.CLEAR_INVERTED}
                        onClick={onShowModal}
                        className={cls.loginBtn}
                    >
                        {t('Login')}
                    </ButtonDeprecated>
                    {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />}
                </header>
            )}
        />
    );
});
