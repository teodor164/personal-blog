import React, { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Dropdown } from '@/shared/ui/Popups';
import { Avatar } from '@/shared/ui/Avatar';
import {
    getUserAuthData, isUserAdmin, isUserManager, userActions,
} from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import cls from './AvatarDropdown.module.scss';
import { RoutePath } from '@/shared/const/router';

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

    return (
        <div>
            <Dropdown
                className={classNames(cls.AvatarDropdown, {}, [className])}
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
        </div>
    );
});
