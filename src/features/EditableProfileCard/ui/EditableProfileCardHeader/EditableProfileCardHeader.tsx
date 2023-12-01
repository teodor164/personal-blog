import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';

import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from '@/entities/User';
import { HStack } from '@/shared/ui/common/Stack';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { profileActions } from '../../model/slice/profileSlice';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { Text } from '@/shared/ui/redesigned/Text';
import { Button } from '@/shared/ui/redesigned/Button';
import { Card } from '@/shared/ui/redesigned/Card';

import { Text as DeprecatedText } from '@/shared/ui/deprecated/Text';
import { Button as DeprecatedButton, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { ToggleFeatures } from '@/shared/lib/features';

interface ProfilePageHeaderProps {
    className?: string
}

// TODO refactor to design view
export const EditableProfileCardHeader: FC<ProfilePageHeaderProps> = (props) => {
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();

    const { className } = props;

    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    const readonly = useSelector(getProfileReadonly);

    const isEditable: boolean = authData?.id === profileData?.id;

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={(
                <Card max padding="24" border="partial">
                    <HStack justify="between" className={classNames('', {}, [className])} max align="center">
                        <Text title={t('Profile')} />
                        {isEditable && (
                            <div>
                                {readonly ? (
                                    <Button
                                        variant="outline"
                                        onClick={onEdit}
                                        data-testid="EditableProfileCard.EditButton"
                                    >
                                        {t('Edit')}
                                    </Button>
                                ) : (
                                    <HStack gap="8">
                                        <Button
                                            variant="outline"
                                            color="error"
                                            onClick={onCancelEdit}
                                            data-testid="EditableProfileCard.CancelButton"
                                        >
                                            {t('Cancel')}
                                        </Button>
                                        <Button
                                            variant="outline"
                                            onClick={onSave}
                                            color="success"
                                            data-testid="EditableProfileCard.SaveButton"
                                        >
                                            {t('Save')}
                                        </Button>
                                    </HStack>
                                )}
                            </div>
                        )}
                    </HStack>
                </Card>
            )}
            off={(
                <HStack justify="between" className={classNames('', {}, [className])} max>
                    <DeprecatedText title={t('Profile')} />
                    {isEditable && (
                        <div>
                            {readonly ? (
                                <DeprecatedButton
                                    theme={ButtonTheme.OUTLINE}
                                    onClick={onEdit}
                                    data-testid="EditableProfileCard.EditButton"
                                >
                                    {t('Edit')}
                                </DeprecatedButton>
                            ) : (
                                <HStack gap="8">
                                    <DeprecatedButton
                                        theme={ButtonTheme.OUTLINE_RED}
                                        onClick={onCancelEdit}
                                        data-testid="EditableProfileCard.CancelButton"
                                    >
                                        {t('Cancel')}
                                    </DeprecatedButton>
                                    <DeprecatedButton
                                        theme={ButtonTheme.OUTLINE}
                                        onClick={onSave}
                                        data-testid="EditableProfileCard.SaveButton"
                                    >
                                        {t('Save')}
                                    </DeprecatedButton>
                                </HStack>
                            )}
                        </div>
                    )}
                </HStack>
            )}
        />
    );
};
