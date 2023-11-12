import { memo, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { LangSwitcher } from '@/features/LangSwitcher';
import { getSidebarItems } from '../../module/selectos/getSidebarItems/getSidebarItems';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import cls from './Sidebar.module.scss';
import { AppLogo } from '@/shared/ui/redesigned/AppLogo';
import { Icon } from '@/shared/ui/redesigned/Icon';
import ArrowIcon from '@/shared/assets/icons/arrow-bottom.svg';
import { VStack } from '@/shared/ui/common/Stack';

import { ToggleFeatures } from '@/shared/lib/features';

import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/deprecated/Button';

interface SidebarProps {
    className?: string
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const SidebarItemsList = useSelector(getSidebarItems);

    const onToggle = () => {
        console.log(collapsed);
        setCollapsed((prev) => !prev);
    };

    const itemsList = useMemo(
        () => SidebarItemsList.map((item) => (
            <SidebarItem
                item={item}
                collapsed={collapsed}
                key={item.path}
            />
        )),
        [SidebarItemsList, collapsed],
    );

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={(
                <aside
                    data-testid="sidebar"
                    className={classNames(
                        cls.SidebarRedesigned,
                        { [cls.collapsedRedesigned]: collapsed },
                        [className],
                    )}
                >
                    <AppLogo size={collapsed ? 30 : 50} className={cls.appLogo} />
                    <VStack role="navigation" gap="16" className={cls.items}>
                        {itemsList}
                    </VStack>
                    <Icon
                        data-testid="sidebar-toggle"
                        onClick={onToggle}
                        className={cls.collapseBtn}
                        clickable
                        Svg={ArrowIcon}
                    />
                    <div className={cls.switchers}>
                        <ThemeSwitcher />
                        <LangSwitcher short={!collapsed} />
                    </div>
                </aside>
            )}
            off={(
                <aside
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
                    <VStack role="navigation" className={cls.items}>
                        {itemsList}
                    </VStack>
                    <div className={cls.switchers}>
                        <LangSwitcher short={!collapsed} />
                        <ThemeSwitcher />
                    </div>
                </aside>
            )}

        />
    );
});
