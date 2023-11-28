import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { Text, TextAlign, TextTheme } from '@/shared/ui/deprecated/Text';
import { Input } from '@/shared/ui/deprecated/Input';
import { Loader } from '@/shared/ui/deprecated/Loader';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { CurrencySelect } from '@/entities/Currency';
import { CountrySelect } from '@/entities/Country';
import { HStack, VStack } from '@/shared/ui/common/Stack';
import cls from './ProfileCard.module.scss';
import { ProfileCardProps } from '../ProfileCardContainer';

/**
 * @deprecated
 */
export const ProfileCardDeprecated: FC<ProfileCardProps> = (props) => {
    const {
        className,
        data,
        isLoading,
        error,
        readonly,
        onChangeFirstname,
        onChangeLastname,
        onChangeCity,
        onChangeAge,
        onChangeAvatar,
        onChangeUsername,
        onChangeCurrency,
        onChangeCountry,
    } = props;
    const { t } = useTranslation('profile');

    if (isLoading) {
        return (
            <HStack
                justify="center"
                align="center"
                className={classNames(cls.ProfileCard, {}, [className, cls.loading])}
                max
            >
                <Loader />
            </HStack>
        );
    }

    if (error) {
        return (
            <HStack
                justify="center"
                align="center"
                className={classNames(cls.ProfileCard, {}, [className, cls.error])}
                max
            >
                <Text
                    align={TextAlign.CENTER}
                    theme={TextTheme.ERROR}
                    title={t('Some error occurred')}
                    text={t('Try to reload the page')}
                />
            </HStack>
        );
    }

    const mods: Mods = {
        [cls.editing]: !readonly,
    };

    return (
        <VStack gap="16" className={classNames(cls.ProfileCard, mods, [className])} max>
            {data?.avatar && (
                <HStack justify="center" max className={cls.avatarWrapper}>
                    <Avatar src={data?.avatar} />
                </HStack>
            )}
            <Input
                value={data?.first}
                placeholder={t('First name')}
                onChange={onChangeFirstname}
                readonly={readonly}
                data-testid="DeprecatedProfileCard.firstname"
            />
            <Input
                value={data?.lastname}
                placeholder={t('Last name')}
                onChange={onChangeLastname}
                readonly={readonly}
                data-testid="DeprecatedProfileCard.lastname"
            />
            <Input
                value={data?.username}
                placeholder={t('Username')}
                onChange={onChangeUsername}
                readonly={readonly}
                data-testid="DeprecatedProfileCard.username"
            />
            <Input
                value={data?.avatar}
                placeholder={t('Avatar link')}
                onChange={onChangeAvatar}
                readonly={readonly}
                data-testid="DeprecatedProfileCard.avatar"
            />
            <Input
                value={data?.age}
                placeholder={t('Age')}
                onChange={onChangeAge}
                readonly={readonly}
                data-testid="DeprecatedProfileCard.age"
            />
            <Input
                value={data?.city}
                placeholder={t('City')}
                onChange={onChangeCity}
                readonly={readonly}
                data-testid="DeprecatedProfileCard.city"
            />
            <CurrencySelect
                value={data?.currency}
                onChange={onChangeCurrency}
                readonly={readonly}
                data-testid="DeprecatedProfileCard.currency"
            />
            <CountrySelect
                value={data?.country}
                onChange={onChangeCountry}
                readonly={readonly}
                data-testid="DeprecatedProfileCard.country"
            />
        </VStack>
    );
};
