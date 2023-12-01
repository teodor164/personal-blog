import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack, VStack } from '@/shared/ui/common/Stack';
import cls from './CommentCard.module.scss';
import { Comment } from '../../model/types/comment';
import { getRouteProfile } from '@/shared/const/router';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Text } from '@/shared/ui/redesigned/Text';
import { Avatar } from '@/shared/ui/redesigned/Avatar';

import { Avatar as DeprecatedAvatar } from '@/shared/ui/deprecated/Avatar';
import { Text as DeprecatedText } from '@/shared/ui/deprecated/Text';
import { Skeleton as DeprecatedSkeleton } from '@/shared/ui/deprecated/Skeleton';
import { AppLink as DeprecatedAppLink } from '@/shared/ui/deprecated/AppLink';
import { ToggleFeatures } from '@/shared/lib/features';
import { Card } from '@/shared/ui/redesigned/Card';

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
                <ToggleFeatures
                    feature="isAppRedesigned"
                    on={(
                        <Card max padding="24" border="partial">
                            <HStack align="start" max gap="16">
                                <Skeleton width={30} height={30} border="50%" />
                                <Skeleton height={100} width="100%" />
                            </HStack>
                        </Card>

                    )}
                    off={(
                        <>
                            <HStack align="center">
                                <DeprecatedSkeleton width={30} height={30} border="50%" className={cls.avatar} />
                                <DeprecatedSkeleton height={16} width={100} />
                            </HStack>
                            <DeprecatedSkeleton height={50} width="100%" className={cls.text} />
                        </>
                    )}
                />
            </VStack>
        );
    }

    if (!comment) {
        return null;
    }

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={(
                <Card max padding="24" border="partial">
                    <VStack
                        data-testid="comment-card-content"
                        max
                        gap="8"
                        className={classNames(cls.CommentCardRedesigned, {}, [className])}
                    >
                        <AppLink to={getRouteProfile(comment.user.id)}>
                            <HStack align="center" gap="8">
                                {comment.user.avatar && <Avatar size={30} src={comment.user.avatar} />}
                                <Text text={comment.user.username} />
                            </HStack>
                        </AppLink>
                        <Text className={cls.text} text={comment.text} />
                    </VStack>
                </Card>
            )}
            off={(
                <VStack
                    data-testid="comment-card-content"
                    max
                    gap="8"
                    className={classNames(cls.CommentCard, {}, [className])}
                >
                    <DeprecatedAppLink to={getRouteProfile(comment.user.id)} className={cls.header}>
                        {comment.user.avatar && <DeprecatedAvatar size={30} src={comment.user.avatar} className={cls.avatar} />}
                        <DeprecatedText title={comment.user.username} />
                    </DeprecatedAppLink>
                    <Text className={cls.text} text={comment.text} />
                </VStack>
            )}
        />
    );
});
