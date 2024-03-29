import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextAlign, TextSize } from '@/shared/ui/deprecated/Text';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import CalendarIcon from '@/shared/assets/icons/calendar-20-20.svg';
import { Icon } from '@/shared/ui/deprecated/Icon';
import { HStack, VStack } from '@/shared/ui/common/Stack';
import cls from './ArticleDetails.module.scss';
import { renderBlock } from '../renderBlock';
import { Article } from '../../../model/types/article';

interface ArticleDetailsProps {
    className?: string;
    article?: Article
    isLoading?: boolean
    error?: string
}
/**
 * @deprecated
 */
export const ArticleDetailsDeprecated = memo((props: ArticleDetailsProps) => {
    const { t } = useTranslation('articleDetails');
    const {
        className,
        isLoading,
        error,
        article,
    } = props;

    let content;

    if (isLoading) {
        content = (
            <>
                <Skeleton width={200} height={200} border="50%" className={cls.avatar} />
                <Skeleton width={300} height={32} />
                <Skeleton width={600} height={24} />
                <Skeleton width="100%" height={200} />
                <Skeleton width="100%" height={200} />
                <Skeleton width="100%" height={200} />
                <Skeleton width="100%" height={200} />
                <Skeleton width="100%" height={200} />
                <Skeleton width="100%" height={200} />
            </>
        );
    } else if (error) {
        content = (
            <Text
                align={TextAlign.CENTER}
                title={t('Something went wrong')}
            />
        );
    } else {
        content = (
            <>
                <HStack max>
                    <Avatar
                        size={200}
                        src={article?.img}
                        className={cls.avatar}
                    />
                </HStack>
                <VStack gap="4" max data-testid="article-details-info">
                    <Text
                        title={article?.title}
                        text={article?.subtitle}
                        size={TextSize.L}
                    />
                </VStack>
                <HStack gap="8" align="center">
                    <Icon Svg={EyeIcon} />
                    <Text text={String(article?.views)} />
                </HStack>
                <HStack gap="8" align="center">
                    <Icon Svg={CalendarIcon} />
                    <Text text={String(article?.createdAt)} />
                </HStack>
                {article?.blocks.map(renderBlock)}
            </>

        );
    }

    return (
        <VStack
            gap="16"
            max
            align="center"
            className={classNames(cls.ArticleDetails, {}, [className])}
        >
            {content}
        </VStack>
    );
});
