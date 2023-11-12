import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { Button } from '@/shared/ui/redesigned/Button';

import { Button as ButtonDeprecated, ButtonTheme } from '@/shared/ui/deprecated/Button';

interface LangSwitcherProps {
    className?: string
    short?: boolean
}

export const LangSwitcher = memo(({ className, short }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = async () => {
        i18n.changeLanguage(
            i18n.language === 'ru' ? 'en'
                : i18n.language === 'en' ? 'ro'
                    : 'ru',
        );
    };

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={(
                <Button
                    className={classNames('', {}, [className])}
                    variant="clear"
                    onClick={toggle}
                >
                    {t(short ? 'Language' : 'Lang')}
                </Button>
            )}
            off={(
                <ButtonDeprecated
                    className={classNames('', {}, [className])}
                    theme={ButtonTheme.CLEAR}
                    onClick={toggle}
                >
                    {t(short ? 'Language' : 'Lang')}
                </ButtonDeprecated>
            )}
        />
    );
});
