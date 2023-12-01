import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { HStack } from '@/shared/ui/common/Stack';
import { addCommentFormActions, addCommentFormReducer } from '../../model/slices/addCommentFormSlice';
import { getAddCommentFormText } from '../../model/selectors/getCommentFormSelectors';
import cls from './AddCommentForm.module.scss';
import { Input as InputRedesigned } from '@/shared/ui/redesigned/Input';
import { Button as ButtonRedesigned } from '@/shared/ui/redesigned/Button';

import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/Button';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { ToggleFeatures } from '@/shared/lib/features';
import { Card } from '@/shared/ui/redesigned/Card';

export interface AddCommentFormProps {
    className?: string
    onSendComment: (text: string) => void,
}

const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer,
};

// TODO replace input with Textarea and make like design
const AddCommentForm = memo((props: AddCommentFormProps) => {
    const { t } = useTranslation();
    const { className, onSendComment } = props;
    const dispatch = useAppDispatch();
    const text = useSelector(getAddCommentFormText);

    const onCommentTextChange = useCallback((value: string) => {
        dispatch(addCommentFormActions.setText(value));
    }, [dispatch]);

    const onSendHandler = useCallback(() => {
        onCommentTextChange('');
        onSendComment(text || '');
    }, [onCommentTextChange, onSendComment, text]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <ToggleFeatures
                feature="isAppRedesigned"
                on={(
                    <Card max padding="24" border="partial">
                        <HStack
                            justify="between"
                            align="center"
                            className={classNames(
                                cls.AddCommentFormRedesigned,
                                {},
                                [className],
                            )}
                            gap="16"
                            max
                            data-testid="add-comment-form"
                        >
                            <InputRedesigned
                                className={cls.input}
                                placeholder={t('Insert comment text')}
                                value={text}
                                onChange={onCommentTextChange}
                                data-testid="add-comment-form-input"
                            />
                            <ButtonRedesigned
                                onClick={onSendHandler}
                                data-testid="add-comment-form-button"
                            >
                                {t('Send')}
                            </ButtonRedesigned>
                        </HStack>
                    </Card>
                )}
                off={(
                    <HStack
                        justify="between"
                        align="center"
                        className={classNames(
                            cls.AddCommentForm,
                            {},
                            [className],
                        )}
                        max
                        data-testid="add-comment-form"
                    >
                        <InputDeprecated
                            className={cls.input}
                            placeholder={t('Insert comment text')}
                            value={text}
                            onChange={onCommentTextChange}
                            data-testid="add-comment-form-input"
                        />
                        <ButtonDeprecated
                            onClick={onSendHandler}
                            data-testid="add-comment-form-button"
                        >
                            {t('Send')}
                        </ButtonDeprecated>
                    </HStack>
                )}
            />
        </DynamicModuleLoader>
    );
});

export default AddCommentForm;
