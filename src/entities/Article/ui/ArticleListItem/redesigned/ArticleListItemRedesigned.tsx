import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import { ArticleBlockType, ArticleTextBlock, ArticleView } from '../../../model/types/article';
import cls from './ArticleListItem.module.scss';
import { getRouteArticleDetails } from '@/shared/const/router';
import { Card } from '@/shared/ui/redesigned/Card/Card';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { AppImage } from '@/shared/ui/common/AppImage';
import { Text } from '@/shared/ui/redesigned/Text';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Button } from '@/shared/ui/redesigned/Button';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { ArticleListItemProps } from '../ArticleListItemContainer';
import { HStack, VStack } from '@/shared/ui/common/Stack';

export const ArticleListItemRedesigned = memo((props: ArticleListItemProps) => {
    const { t } = useTranslation();
    const {
        className,
        article,
        view,
        target,
    } = props;

    const userInfo = (
        <>
            <Avatar size={32} src={article.user.avatar} />
            <Text text={article.user.username} bold />
        </>
    );
    const views = (
        <HStack gap="8" align="center">
            <Icon Svg={EyeIcon} />
            <Text text={String(article.views)} />
        </HStack>
    );

    if (view === ArticleView.BIG) {
        const textBlock = article.blocks.find((block) => block.type === ArticleBlockType.TEXT) as ArticleTextBlock;
        return (
            <Card
                padding="24"
                data-testid="article-list-item"
                className={classNames('', {}, [className, cls[view]])}
                max
            >
                <VStack gap="16">
                    <HStack gap="8" max align="center">
                        {userInfo}
                        <Text text={article.createdAt} />
                    </HStack>
                    <Text title={article.title} bold />
                    <Text title={article.subtitle} size="s" />
                    <AppImage
                        fallback={<Skeleton width="100%" height={250} />}
                        src={article.img}
                        className={cls.img}
                        alt={article.title}
                    />
                    {textBlock?.paragraphs && (
                        <Text text={textBlock.paragraphs.slice(0, 2).join(' ')} className={cls.textBlock} />
                    )}
                    <HStack justify="between" align="center" max>
                        <AppLink to={getRouteArticleDetails(article.id)}>
                            <Button variant="outline">
                                {t('Read more...')}
                            </Button>
                        </AppLink>
                        {views}
                    </HStack>
                </VStack>
            </Card>
        );
    }

    return (
        <AppLink
            data-testid="article-list-item"
            target={target}
            to={getRouteArticleDetails(article.id)}
            className={classNames('', {}, [className, cls[view]])}
        >
            <Card padding="0" max className={cls.card}>
                <div className={cls.imageContainer}>
                    <AppImage
                        fallback={<Skeleton width={200} height={200} />}
                        src={article.img}
                        alt={article.title}
                        className={cls.img}
                    />
                </div>
                <VStack className={cls.description} max gap="4">
                    <Text title={article.title} className={cls.textBlock} />
                    <VStack max gap="4">
                        <HStack align="center" max justify="between" gap="4">
                            <Text text={article.createdAt} bold />
                            {views}
                        </HStack>
                        <HStack align="center" gap="4" className={cls.footer}>
                            {userInfo}
                        </HStack>
                    </VStack>
                </VStack>
            </Card>
        </AppLink>
    );
});
