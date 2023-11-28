import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleView } from '../../../model/types/article';
import cls from './ArticleListItem.module.scss';
import { Card } from '@/shared/ui/deprecated/Card/Card';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';

interface ArticleListItemSkeletonProps {
    className?: string
    view: ArticleView
}
/**
 * @deprecated
 */
export const ArticleListItemSkeletonDeprecated = memo((props: ArticleListItemSkeletonProps) => {
    const { className, view } = props;

    if (view === ArticleView.BIG) {
        return (
            <div className={classNames('', {}, [className, cls[view]])}>
                <Card>
                    <div className={cls.header}>
                        <Skeleton height={30} width={30} border="50%" />
                        <Skeleton width={150} height={16} className={cls.username} />
                        <Skeleton width={150} height={16} className={cls.date} />
                    </div>
                    <Skeleton width={250} height={24} className={cls.title} />
                    <Skeleton height={200} className={cls.title} />
                    <Skeleton width={200} height={36} className={cls.footer} />
                </Card>
            </div>
        );
    }

    return (
        <div className={classNames('', {}, [className, cls[view]])}>
            <Card>
                <div className={cls.imgWrapper}>
                    <Skeleton width={200} height={200} className={cls.img} />
                </div>
                <Skeleton width={130} height={16} className={cls.infoWrapper} />
                <Skeleton width={150} height={16} className={cls.infoWrapper} />
            </Card>
        </div>
    );
});

export const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((item, index) => (
        <ArticleListItemSkeletonDeprecated
            key={index}
            className={cls.card}
            view={view}
        />
    ));
