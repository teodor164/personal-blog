import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Article, ArticleView } from '../../model/types/article';
import cls from './ArticleList.module.scss';
import { ArticleListItem } from '../ArticleListItem/ArticleListItemContainer';
import { HStack } from '@/shared/ui/common/Stack';
import { getSkeletons as getSkeletonsRedesigned } from '../ArticleListItem/redesigned/ArticleListItemScheletonRedesigned';

import { ToggleFeatures } from '@/shared/lib/features';
import { Text, TextSize } from '@/shared/ui/deprecated/Text';
import { getSkeletons as getSkeletonsDeprecated } from '../ArticleListItem/deprecated/ArticleListItemScheletonDeprecated';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        isLoading,
        view = ArticleView.SMALL,
        target,
    } = props;

    const { t } = useTranslation();

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames('', {}, [className, cls[view]])}>
                <Text size={TextSize.L} title={t('No articles found')} />
            </div>
        );
    }

    const articlesList = articles.map((item) => (
        <ArticleListItem
            article={item}
            view={view}
            className={cls.card}
            target={target}
            key={item.id}
        />
    ));

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={(
                <HStack
                    gap="16"
                    wrap="wrap"
                    data-testid="article-list"
                    className={classNames('', {}, [className, cls[`${view}Redesigned`]])}
                >
                    {articlesList}
                    {isLoading && getSkeletonsRedesigned(view)}
                </HStack>
            )}
            off={(
                <div
                    data-testid="article-list"
                    className={classNames('', {}, [className, cls[view]])}
                >
                    {articlesList}
                    {isLoading && getSkeletonsDeprecated(view)}
                </div>
            )}
        />
    );
});
