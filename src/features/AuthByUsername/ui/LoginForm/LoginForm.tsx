import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string
}

export const LoginForm: FC<LoginFormProps> = ({ className }) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input type="text" className={cls.input} placeholder={t('Insert username')} autoFocus />
            <Input type="text" className={cls.input} placeholder={t('Insert password')} />
            <Button
                className={cls.loginBtn}
            >
                {t('Login')}
            </Button>
        </div>
    );
};
