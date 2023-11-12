import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ThemeSwitcher.module.scss';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { saveJsonSettings } from '@/entities/User';
import { ToggleFeatures } from '@/shared/lib/features';
import { Icon } from '@/shared/ui/redesigned/Icon';
import ThemeIcon from '@/shared/assets/icons/theme.svg';

import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { Button as ButtonDeprecated, ButtonTheme } from '@/shared/ui/deprecated/Button';
import ThemeIconDeprecated from '@/shared/assets/icons/theme-dark.svg';

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { toggleTheme } = useTheme();
    const dispatch = useAppDispatch();

    const onToggleHandler = useCallback(() => {
        toggleTheme((newTheme) => {
            dispatch(saveJsonSettings({ theme: newTheme }));
        });
    }, [dispatch, toggleTheme]);

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={(
                <Icon
                    className={classNames('', {}, [className])}
                    Svg={ThemeIcon}
                    clickable
                    onClick={onToggleHandler}
                />
            )}
            off={(
                <ButtonDeprecated
                    theme={ButtonTheme.CLEAR}
                    className={classNames(cls.ThemeSwitcher, {}, [className])}
                    onClick={onToggleHandler}
                >
                    <IconDeprecated Svg={ThemeIconDeprecated} width={40} height={40} inverted />
                </ButtonDeprecated>
            )}
        />
    );
});
