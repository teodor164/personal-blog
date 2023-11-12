import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { Text } from '@/shared/ui/deprecated/Text';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { AppLink } from '@/shared/ui/deprecated/AppLink';
import { HStack, VStack } from '@/shared/ui/deprecated/Stack';
import cls from './CommentCard.module.scss';
import { Comment } from '../../model/types/comment';
import { getRouteProfile } from '@/shared/const/router';

interface CommentCardProps {
    className?: string
    comment?: Comment
    isLoading?: boolean
}

export const CommentCard = memo((props: CommentCardProps) => {
    const { className, comment, isLoading } = props;

    if (isLoading) {
        return (
            <VStack
                data-testid="comment-card-loading"
                gap="8"
                className={classNames(cls.CommentCard, {}, [className, cls.loading])}
                max
            >
                <HStack align="center">
                    <Skeleton width={30} height={30} border="50%" className={cls.avatar} />
                    <Skeleton height={16} width={100} />
                </HStack>
                <Skeleton height={50} width="100%" className={cls.text} />
            </VStack>
        );
    }

    if (!comment) {
        return null;
    }

    return (
        <VStack
            data-testid="comment-card-content"
            max
            gap="8"
            className={classNames(cls.CommentCard, {}, [className])}
        >
            <AppLink to={getRouteProfile(comment.user.id)} className={cls.header}>
                {comment.user.avatar && <Avatar size={30} src={comment.user.avatar} className={cls.avatar} />}
                <Text title={comment.user.username} />
            </AppLink>
            <Text className={cls.text} text={comment.text} />
        </VStack>
    );
});
