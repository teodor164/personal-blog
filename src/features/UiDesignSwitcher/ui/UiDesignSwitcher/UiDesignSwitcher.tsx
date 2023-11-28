import { useTranslation } from 'react-i18next';
import { memo, useState } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { getFeatureFlag, updateFeatureFlag } from '@/shared/lib/features';
import { ListBox } from '@/shared/ui/redesigned/Popups';
import { Text } from '@/shared/ui/redesigned/Text';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { VStack } from '@/shared/ui/common/Stack';

interface UiDesignSwitcherProps {
    className?: string;
}

export const UiDesignSwitcher = memo((props: UiDesignSwitcherProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const isAppRedesigned = getFeatureFlag('isAppRedesigned');
    const dispatch = useAppDispatch();
    const authData = useSelector(getUserAuthData);
    const [isLoading, setIsLoading] = useState(false);

    const items = [
        {
            content: t('New'),
            value: 'new',
        },
        {
            content: t('Old'),
            value: 'old',
        },
    ];

    const onChange = async (value: string) => {
        if (authData) {
            setIsLoading(true);
            await dispatch(updateFeatureFlag({
                userId: authData.id,
                newFeatures: {
                    isAppRedesigned: value === 'new',
                },
            })).unwrap;
            setIsLoading(true);
        }
    };

    if (isLoading) {
        return (
            <VStack gap="4">
                <Text text={t('Select app design')} />
                <Skeleton width={300} height={40} />
            </VStack>
        );
    }

    return (
        <ListBox
            className={classNames('', {}, [className])}
            label={t('Select app design')}
            value={isAppRedesigned ? 'new' : 'old'}
            items={items}
            onChange={onChange}
        />
    );
});
