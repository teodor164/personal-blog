import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Text as TextRedesigned } from '@/shared/ui/redesigned/Text';
import { VStack } from '@/shared/ui/common/Stack';
import { CommentCard } from '../CommentCard/CommentCard';
import { Comment } from '../../model/types/comment';
import { ToggleFeatures } from '@/shared/lib/features';

interface CommentListProps {
    className?: string
    comments: Comment[]
    isLoading?: boolean
}
// TODO update
export const CommentList = memo((props: CommentListProps) => {
    const { t } = useTranslation();
    const {
        className,
        comments,
        isLoading,
    } = props;

    if (isLoading) {
        return (
            <VStack gap="16" max className={classNames('', {}, [className])}>
                <CommentCard
                    isLoading={isLoading}
                />
                <CommentCard
                    isLoading={isLoading}
                />
                <CommentCard
                    isLoading={isLoading}
                />
            </VStack>
        );
    }

    return (
        <VStack gap="16" max className={classNames('', {}, [className])}>
            {comments?.length
                ? comments.map((comment) => (
                    <CommentCard
                        comment={comment}
                        key={comment.id}
                        isLoading={isLoading}
                    />
                ))
                : (
                    <ToggleFeatures
                        feature="isAppRedesigned"
                        on={<TextRedesigned text={t('No comments ')} />}
                        off={<TextDeprecated text={t('No comments ')} />}
                    />
                )}
        </VStack>
    );
});
