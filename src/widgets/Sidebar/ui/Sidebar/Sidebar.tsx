import { memo, useState } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { LangSwitcher } from '@/features/LangSwitcher';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button';
import { VStack } from '@/shared/ui/Stack';
import { getSidebarItems } from '../../module/selectos/getSidebarItems/getSidebarItems';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import cls from './Sidebar.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';
import { AppLogo } from '@/shared/ui/AppLogo';

interface SidebarProps {
    className?: string
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const SidebarItemsList = useSelector(getSidebarItems);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
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
                        {SidebarItemsList.map((item) => (
                            <SidebarItem
                                key={item.path}
                                item={item}
                                collapsed={collapsed}
                            />
                        ))}
                    </VStack>
                    <div className={cls.switchers}>
                        <LangSwitcher short={!collapsed} />
                        <ThemeSwitcher />
                    </div>
                </aside>
            )}
            on={(
                <aside
                    data-testid="sidebar"
                    className={classNames(
                        cls.SidebarRedesigned,
                        { [cls.collapsed]: collapsed },
                        [className],
                    )}
                >
                    <AppLogo className={cls.appLogo} />
                </aside>
            )}
        />
    );
});
