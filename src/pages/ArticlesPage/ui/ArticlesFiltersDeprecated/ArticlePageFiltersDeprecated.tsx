import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/deprecated/Card';
import { Input } from '@/shared/ui/deprecated/Input';
import cls from './ArticlePageFiltersDeprecated.module.scss';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { ViewSelector } from '@/features/ViewSelector';
import { useArticlesFilters } from '../../lib/hooks/useArticlesFilters';

interface ArticlePageFiltersProps {
    className?: string;
}
/**
 * @deprecated
 */
export const ArticlePageFiltersDeprecated = memo((props: ArticlePageFiltersProps) => {
    const { t } = useTranslation();
    const { className } = props;

    const {
        onChangeTab, onChangeSort, onChangeSearch, onChangeView, view, search, sort, onChangeOrder, order, type,
    } = useArticlesFilters();

    return (
        <div className={classNames('', {}, [className])}>
            <div className={cls.sortWrapper}>
                <ArticleSortSelector
                    order={order}
                    sort={sort}
                    onChangeSort={onChangeSort}
                    onChangeOrder={onChangeOrder}
                />
                <ViewSelector
                    view={view}
                    onViewClick={onChangeView}
                />
            </div>
            <Card className={cls.search}>
                <Input
                    placeholder={t('Search')}
                    onChange={onChangeSearch}
                    value={search}
                />
            </Card>
            <ArticleTypeTabs
                value={type}
                onTabClick={onChangeTab}
            />
        </div>
    );
});
