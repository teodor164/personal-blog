import { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher';
import { useTranslation } from 'react-i18next';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';
import { AppRoutes, RoutePath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState(false);

    const { t } = useTranslation();

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <div>
                <Button
                    data-testid="sidebar-toggle"
                    type="button"
                    onClick={onToggle}
                    className={cls.collapseBtn}
                    theme={ButtonTheme.BACKGROUND_INVERTED}
                    square
                    size={ButtonSize.L}
                >
                    {collapsed ? '>' : '<'}
                </Button>
            </div>
            <div className={cls.items}>
                <AppLink
                    className={cls.item}
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath[AppRoutes.MAIN]}
                >
                    <MainIcon className={cls.icon} />
                    <span className={cls.link}>
                        {t('Main page')}
                    </span>
                </AppLink>

                <AppLink
                    className={cls.item}
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath[AppRoutes.ABOUT]}
                >
                    <AboutIcon className={cls.icon} />
                    <span className={cls.link}>
                        {t('About us')}
                    </span>
                </AppLink>
            </div>
            <div className={cls.switchers}>
                <LangSwitcher short={!collapsed} />
                <ThemeSwitcher />
            </div>
        </div>
    );
};
