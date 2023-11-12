import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { getUserAuthData } from '@/entities/User';
import { SidebarItemType } from '../../module/types/sidebar';
import cls from './SidebarItem.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Icon } from '@/shared/ui/redesigned/Icon';

import { AppLink as AppLinkDeprecated, AppLinkTheme } from '@/shared/ui/deprecated/AppLink';

interface SidebarItemProps {
    item: SidebarItemType
    collapsed: boolean
}

export const SidebarItem = memo((props: SidebarItemProps) => {
    const { t } = useTranslation();
    const { item, collapsed } = props;
    const isAuth = useSelector(getUserAuthData);

    if (item.authOnly && !isAuth) {
        return null;
    }

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={(
                <AppLink
                    to={item.path}
                    className={classNames(cls.itemRedesigned, {
                        [cls.collapsedRedesigned]: collapsed,
                    }, [])}
                    activeClassName={cls.active}
                >
                    <Icon Svg={item.Icon} clickable={false} />
                    <span className={cls.link}>
                        {t(item.text)}
                    </span>
                </AppLink>
            )}
            off={(
                <AppLinkDeprecated
                    className={classNames(cls.item, { [cls.collapsed]: collapsed }, [])}
                    theme={AppLinkTheme.SECONDARY}
                    to={item.path}
                >
                    <item.Icon className={cls.icon} />
                    <span className={cls.link}>
                        {t(item.text)}
                    </span>
                </AppLinkDeprecated>
            )}
        />
    );
});
