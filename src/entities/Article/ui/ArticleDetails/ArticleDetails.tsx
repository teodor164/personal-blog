import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Text, TextAlign, TextSize } from '@/shared/ui/Text';
import { Skeleton } from '@/shared/ui/Skeleton';
import { Avatar } from '@/shared/ui/Avatar';
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import CalendarIcon from '@/shared/assets/icons/calendar-20-20.svg';
import { Icon } from '@/shared/ui/Icon';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { HStack, VStack } from '@/shared/ui/Stack';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { ArticleBlock, ArticleBlockType } from '../../model/types/article';
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from '../../model/selectors/articleDetails';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import cls from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
    className?: string;
    id?: string;
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
    const { t } = useTranslation('articleDetails');
    const {
        className,
        id,
    } = props;
    const dispatch = useAppDispatch();

    const isLoading = useSelector(getArticleDetailsIsLoading);
    const error = useSelector(getArticleDetailsError);
    const article = useSelector(getArticleDetailsData);

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
        case ArticleBlockType.CODE:
            return (
                <ArticleCodeBlockComponent
                    key={block.id}
                    block={block}
                />
            );
        case ArticleBlockType.IMAGE:
            return (
                <ArticleImageBlockComponent
                    key={block.id}
                    block={block}
                />
            );
        case ArticleBlockType.TEXT:
            return (
                <ArticleTextBlockComponent
                    key={block.id}
                    block={block}
                />
            );
        default:
            return null;
        }
    }, []);

    useInitialEffect(() => {
        dispatch(fetchArticleById(id));
    });

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
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <VStack
                gap="16"
                max
                align="center"
                className={classNames(cls.ArticleDetails, {}, [className])}
            >
                {content}
            </VStack>
        </DynamicModuleLoader>
    );
});
