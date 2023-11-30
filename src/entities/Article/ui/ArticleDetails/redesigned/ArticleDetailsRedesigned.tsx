import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack, VStack } from '@/shared/ui/common/Stack';
import cls from './ArticleDetails.module.scss';
import { Text } from '@/shared/ui/redesigned/Text';
import { Avatar } from '@/shared/ui/redesigned/Avatar';

import { renderBlock } from '../renderBlock';

import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { Article } from '../../../model/types/article';
import { Card } from '@/shared/ui/redesigned/Card';
import { AppImage } from '@/shared/ui/common/AppImage';

interface ArticleDetailsProps {
    className?: string;
    article?: Article
    isLoading?: boolean
    error?: string
}

export const ArticleDetailsRedesigned = memo((props: ArticleDetailsProps) => {
    const { t } = useTranslation('articleDetails');
    const {
        className,
        article,
        isLoading,
        error,
    } = props;

    let content;

    if (isLoading || !article) {
        content = (
            <>
                <HStack gap="8" max align="center">
                    <Skeleton height={32} width={32} border="50%" />
                    <Skeleton width={150} height={24} border="32px" />
                </HStack>
                <Skeleton width="90%" height={32} />
                <Skeleton width="30%" height={32} />
                <Skeleton width="70%" height={24} />
                <Skeleton width="100%" height={420} />
                <Skeleton width="100%" height={150} />
                <Skeleton width="100%" height={150} />
                <Skeleton width="100%" height={150} />
                <Skeleton width="100%" height={150} />
                <Skeleton width="100%" height={150} />
            </>
        );
    } else if (error) {
        content = (
            <Text
                align="center"
                title={t('Something went wrong')}
            />
        );
    } else {
        content = (
            <>
                <HStack gap="8" align="center">
                    <Avatar src={article.user.avatar} size={32} />
                    <Text text={article.user.username} bold />
                    <Text text={article.createdAt} />
                </HStack>
                <Text
                    title={article?.title}
                    size="l"
                    bold
                />
                <Text
                    title={article?.subtitle}
                />
                <AppImage
                    src={article?.img}
                    className={cls.avatar}
                    fallback={<Skeleton width="100%" height="420px" />}
                />
                {article?.blocks.map(renderBlock)}
            </>
        );
    }

    return (
        <Card padding="24" border="round" max>
            <VStack
                gap="16"
                max
                className={classNames(cls.ArticleDetails, {}, [className])}
            >
                {content}
            </VStack>
        </Card>
    );
});
