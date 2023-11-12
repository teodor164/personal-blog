import React, { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    getUserAuthData,
    isUserAdmin,
    isUserManager,
    userActions,
} from '@/entities/User';
import {
    getRouteAdminPanel,
    getRouteArticleCreate,
    getRouteProfile,
} from '@/shared/const/router';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import cls from './AvatarDropdown.module.scss';
import { Dropdown } from '@/shared/ui/redesigned/Popups';
import { Avatar } from '@/shared/ui/redesigned/Avatar';

import { ToggleFeatures } from '@/shared/lib/features';

import { Dropdown as DropdownDeprecated } from '@/shared/ui/deprecated/Popups';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';

interface AvatarDropdownProps {
    className?: string;
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
    const { className } = props;
    const { t } = useTranslation();

    const dispatch = useAppDispatch();
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);
    const authData = useSelector(getUserAuthData);

    const isAdminPanelAvailable: boolean = isAdmin || isManager;

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (!authData) {
        return null;
    }

    const items = [
        ...(isAdminPanelAvailable ? [{
            content: t('Admin Panel'),
            href: getRouteAdminPanel(),
        }] : []),
        {
            content: t('My profile'),
            href: getRouteProfile(authData.id),
        },
        {
            content: t('Create new article'),
            href: getRouteArticleCreate(),
        },
        {
            content: t('Logout'),
            onClick: onLogout,
        },
    ];

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={(
                <Dropdown
                    className={classNames(
                        cls.AvatarDropdownRedesigned,
                        {},
                        [className],
                    )}
                    items={items}
                    trigger={<Avatar size={40} src={authData.avatar} />}
                    direction="bottom left"
                />
            )}
            off={(
                <DropdownDeprecated
                    className={classNames(
                        cls.AvatarDropdown,
                        {},
                        [className],
                    )}
                    items={items}
                    trigger={<AvatarDeprecated fallbackInverted size={30} src={authData.avatar} />}
                    direction="bottom left"
                />
            )}
        />
    );
});
