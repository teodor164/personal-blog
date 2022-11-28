import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button';

interface LangSwitcherProps {
    className?: string
    short?: boolean
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className, short }) => {
    const { t, i18n } = useTranslation();

    const toggle = async () => {
        i18n.changeLanguage(
            i18n.language === 'ru' ? 'en'
                : i18n.language === 'en' ? 'ro'
                    : 'ru',
        );
    };

    return (
        <Button
            className={classNames('', {}, [className])}
            theme={ButtonTheme.CLEAR}
            onClick={toggle}
        >
            {t(short ? 'Language' : 'Lang')}
        </Button>
    );
};
