import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar';
import { Text } from 'shared/ui/Text';
import { Skeleton } from 'shared/ui/Skeleton';
import cls from './CommentCard.module.scss';
import { Comment } from '../../model/types/comment';

interface CommentCardProps {
    className?: string
    comment: Comment
    isLoading?: boolean
}

export const CommentCard = memo((props: CommentCardProps) => {
    const { className, comment, isLoading } = props;

    if (isLoading) {
        return (
            <div className={classNames(cls.CommentCard, {}, [className])}>
                <div className={cls.header}>
                    <Skeleton width={30} height={30} border="50%" className={cls.avatar} />
                    <Skeleton height={16} width={100} />
                </div>
                <Skeleton height={50} width="100%" className={cls.text} />
            </div>
        );
    }

    return (
        <div className={classNames(cls.CommentCard, {}, [className])}>
            <div className={cls.header}>
                {comment.user.avatar && <Avatar size={30} src={comment.user.avatar} className={cls.avatar} />}
                <Text title={comment.user.username} />
            </div>
            <Text className={cls.text} text={comment.text} />
        </div>
    );
});
