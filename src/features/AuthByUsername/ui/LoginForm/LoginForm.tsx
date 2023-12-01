import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';

import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginError } from '../../model/selectors/getLoginIError/getLoginError';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';
import { Input } from '@/shared/ui/redesigned/Input';
import { Button } from '@/shared/ui/redesigned/Button';
import { Text } from '@/shared/ui/redesigned/Text';

import { Button as DeprecatedButton, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Input as DeprecatedInput } from '@/shared/ui/deprecated/Input';
import { Text as DeprecatedText, TextTheme } from '@/shared/ui/deprecated/Text';
import { ToggleFeatures } from '@/shared/lib/features';
import { VStack } from '@/shared/ui/common/Stack';
import { useForceUpdate } from '@/shared/lib/render/forceUpdate';

export interface LoginFormProps {
    className?: string
    onSuccess: () => void
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
    const { t } = useTranslation();

    const dispatch = useAppDispatch();

    const forceUpdate = useForceUpdate();

    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const error = useSelector(getLoginError);
    const isLoading = useSelector(getLoginIsLoading);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByUsername({ username, password }));
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess();
            forceUpdate();
        }
    }, [dispatch, forceUpdate, onSuccess, password, username]);

    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
            <ToggleFeatures
                feature="isAppRedesigned"
                on={(
                    <VStack className={classNames(cls.LoginFormRedesigned, {}, [className])} max gap="16">
                        <Text title={t('Authorization form')} />
                        {error && <Text text={t('Wrong login or password')} variant="error" />}
                        <Input
                            type="text"
                            placeholder={t('Insert username')}
                            label={t('Username')}
                            autoFocus
                            onChange={onChangeUsername}
                            value={username}
                        />
                        <Input
                            label={t('Password')}
                            type="password"
                            placeholder={t('Insert password')}
                            onChange={onChangePassword}
                            value={password}
                        />
                        <Button
                            disabled={isLoading}
                            variant="outline"
                            className={cls.loginBtn}
                            onClick={onLoginClick}
                        >
                            {t('Login')}
                        </Button>
                    </VStack>
                )}
                off={(
                    <div className={classNames(cls.LoginForm, {}, [className])}>
                        <DeprecatedText title={t('Authorization form')} />
                        {error && <DeprecatedText text={t('Wrong login or password')} theme={TextTheme.ERROR} />}
                        <DeprecatedInput
                            type="text"
                            className={cls.input}
                            placeholder={t('Insert username')}
                            autoFocus
                            onChange={onChangeUsername}
                            value={username}
                        />
                        <DeprecatedInput
                            type="password"
                            className={cls.input}
                            placeholder={t('Insert password')}
                            onChange={onChangePassword}
                            value={password}
                        />
                        <DeprecatedButton
                            disabled={isLoading}
                            theme={ButtonTheme.OUTLINE}
                            className={cls.loginBtn}
                            onClick={onLoginClick}
                        >
                            {t('Login')}
                        </DeprecatedButton>
                    </div>
                )}
            />
        </DynamicModuleLoader>
    );
});

export default LoginForm;
