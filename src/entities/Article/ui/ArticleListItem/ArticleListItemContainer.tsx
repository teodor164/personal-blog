import { HTMLAttributeAnchorTarget } from 'react';
import { Article, ArticleView } from '../..';
import { ToggleFeatures } from '@/shared/lib/features';
import { ArticleListItemRedesigned } from './redesigned/ArticleListItemRedesigned';
import { ArticleListItemDeprecated } from './deprecated/ArticleListItemDeprecated';

export interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
    target?: HTMLAttributeAnchorTarget
}

export const ArticleListItem = (props: ArticleListItemProps) => (
    <ToggleFeatures
        feature="isAppRedesigned"
        on={<ArticleListItemRedesigned {...props} />}
        off={<ArticleListItemDeprecated {...props} />}
    />
);
