import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { CurrencySelect } from '@/entities/Currency';
import { CountrySelect } from '@/entities/Country';
import { HStack, VStack } from '@/shared/ui/common/Stack';
import cls from './ProfileCard.module.scss';
import { Input } from '@/shared/ui/redesigned/Input';
import { Text } from '@/shared/ui/redesigned/Text';
import { Card } from '@/shared/ui/redesigned/Card';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { ProfileCardProps } from '../ProfileCardContainer';

export const ProfileCardRedesigned: FC<ProfileCardProps> = (props) => {
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
            <Card padding="24" max border="partial">
                <VStack gap="32">
                    <HStack justify="center" max>
                        <Skeleton border="100%" height={128} width={128} />
                    </HStack>
                    <HStack gap="32" max>
                        <VStack gap="16" max>
                            <Skeleton width="100%" height="38" />
                            <Skeleton width="100%" height="38" />
                            <Skeleton width="100%" height="38" />
                            <Skeleton width="100%" height="38" />
                        </VStack>

                        <VStack gap="16" max>
                            <Skeleton width="100%" height="38" />
                            <Skeleton width="100%" height="38" />
                            <Skeleton width="100%" height="38" />
                            <Skeleton width="100%" height="38" />
                        </VStack>
                    </HStack>
                </VStack>
            </Card>
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
                    align="center"
                    variant="error"
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
        <Card max padding="24" className={classNames(cls.ProfileCard, mods, [className])} border="partial">
            <VStack gap="32">
                {data?.avatar && (
                    <HStack justify="center" max className={cls.avatarWrapper}>
                        <Avatar src={data?.avatar} size={128} />
                    </HStack>
                )}
                <HStack gap="24" max>
                    <VStack gap="16" max>
                        <Input
                            value={data?.first}
                            label={t('First name')}
                            onChange={onChangeFirstname}
                            readonly={readonly}
                            data-testid="DeprecatedProfileCard.firstname"
                        />
                        <Input
                            value={data?.lastname}
                            label={t('Last name')}
                            onChange={onChangeLastname}
                            readonly={readonly}
                            data-testid="DeprecatedProfileCard.lastname"
                        />
                        <Input
                            value={data?.username}
                            label={t('Username')}
                            onChange={onChangeUsername}
                            readonly={readonly}
                            data-testid="DeprecatedProfileCard.username"
                        />
                        <Input
                            value={data?.avatar}
                            label={t('Avatar link')}
                            onChange={onChangeAvatar}
                            readonly={readonly}
                            data-testid="DeprecatedProfileCard.avatar"
                        />
                    </VStack>
                    <VStack gap="16" max>
                        <Input
                            value={data?.age}
                            label={t('Age')}
                            onChange={onChangeAge}
                            readonly={readonly}
                            data-testid="DeprecatedProfileCard.age"
                        />
                        <Input
                            value={data?.city}
                            label={t('City')}
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
                </HStack>
            </VStack>
        </Card>
    );
};
