import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleView } from '../../../model/types/article';
import { Card } from '@/shared/ui/redesigned/Card/Card';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import cls from './ArticleListItem.module.scss';
import { HStack, VStack } from '@/shared/ui/common/Stack';

interface ArticleListItemSkeletonProps {
    className?: string
    view: ArticleView
}

export const ArticleListItemSkeletonRedesigned = memo((props: ArticleListItemSkeletonProps) => {
    const { className, view } = props;

    if (view === ArticleView.BIG) {
        return (
            <Card
                padding="24"
                data-testid="article-list-item"
                className={classNames('', {}, [className, cls[view]])}
                max
            >
                <VStack gap="16" max>
                    <HStack gap="8" max align="center">
                        <Skeleton height={32} width={32} border="50%" />
                        <Skeleton width={150} height={24} border="32px" />
                    </HStack>
                    <Skeleton width="100%" height={24} />
                    <Skeleton width="80%" height={12} />
                    <Skeleton width="100%" height={350} />
                    <Skeleton width="100%" height={16} />
                    <Skeleton width="100%" height={16} />
                    <Skeleton width="100%" height={16} />
                    <Skeleton width={56} height={23} border="22px" className={cls.viewsSkeleton} />
                </VStack>
            </Card>
        );
    }

    return (
        <div className={classNames('', {}, [className, cls[view]])}>
            <Card padding="0" max className={cls.card}>
                <Skeleton width={250} height={140} className={cls.img} />
                <VStack className={cls.description} max gap="8">
                    <Skeleton width="100%" height={24} />
                    <Skeleton width="100%" height={24} />
                    <Skeleton width="100%" height={24} />
                    <VStack max gap="4" className={cls.footerSkeleton}>
                        <HStack align="center" max justify="between" gap="4">
                            <Skeleton width="30%" height={16} />
                            <Skeleton width="30%" height={16} />
                        </HStack>
                        <HStack gap="8" max align="center" className={cls.footer}>
                            <Skeleton height={32} width={32} border="50%" />
                            <Skeleton width={80} height={16} border="32px" />
                        </HStack>
                    </VStack>
                </VStack>
            </Card>
        </div>
    );
});

export const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((item, index) => (
        <ArticleListItemSkeletonRedesigned
            key={index}
            className={cls.card}
            view={view}
        />
    ));
