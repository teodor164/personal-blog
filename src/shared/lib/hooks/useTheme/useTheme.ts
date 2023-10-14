import { useCallback, useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { Theme } from '../../../const/theme';

interface useThemeResult {
    toggleTheme: (saveAction?: (theme: Theme) => void) => void
    theme: Theme
}

export function useTheme(): useThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = useCallback((saveAction?: (theme: Theme) => void) => {
        let newTheme: Theme;

        switch (theme) {
        case Theme.DARK:
            newTheme = Theme.LIGHT;
            break;
        case Theme.LIGHT:
            newTheme = Theme.GREEN;
            break;
        case Theme.GREEN:
            newTheme = Theme.DARK;
            break;
        default:
            newTheme = Theme.LIGHT;
        }

        setTheme?.(newTheme);

        saveAction?.(newTheme);
    }, [setTheme, theme]);

    return {
        theme: theme || Theme.LIGHT,
        toggleTheme,
    };
}
