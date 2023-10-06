import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleType, ArticleView } from '@/entities/Article';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Card } from '@/shared/ui/Card';
import { Input } from '@/shared/ui/Input';
import { SortOrder } from '@/shared/types/sort';
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';
import { TabItem } from '@/shared/ui/Tabs';
import { getArticlesPageType } from '../../model/selectors/getArticlesPageType/getArticlesPageType';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import { getArticlesPageSort } from '../../model/selectors/getArticlesPageSort/getArticlesPageSort';
import { getArticlesPageOrder } from '../../model/selectors/getArticlesPageOrder/getArticlesPageOrder';
import { getArticlesPageView } from '../../model/selectors/getArticlesPageView/getArticlesPageView';
import { getArticlesPageSearch } from '../../model/selectors/getArticlesPageSearch/getArticlesPageSearch';
import { articlePageActions } from '../../model/slices/articlePageSlice';
import cls from './ArticlePageFilters.module.scss';
import { ArticleSortFiled, ArticleSortSelector } from '@/features/ArticleSortSelector';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { ArticleViewSelector } from '@/features/ArticleViewSelector';

interface ArticlePageFiltersProps {
    className?: string;
}

export const ArticlePageFilters = memo((props: ArticlePageFiltersProps) => {
    const { t } = useTranslation();
    const { className } = props;

    const dispatch = useAppDispatch();
    const view = useSelector(getArticlesPageView);
    const sort = useSelector(getArticlesPageSort);
    const order = useSelector(getArticlesPageOrder);
    const search = useSelector(getArticlesPageSearch);
    const type = useSelector(getArticlesPageType);

    const fetchData = useCallback(() => {
        dispatch(fetchArticlesList({ replace: true }));
    }, [dispatch]);

    const debouncedFetchData = useDebounce(fetchData, 500);

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlePageActions.setView(view));
    }, [dispatch]);

    const onChangeSort = useCallback((newSort: ArticleSortFiled) => {
        dispatch(articlePageActions.setSort(newSort));
        dispatch(articlePageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);

    const onChangeOrder = useCallback((newOrder: SortOrder) => {
        dispatch(articlePageActions.setOrder(newOrder));
        dispatch(articlePageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);

    const onChangeSearch = useCallback((newSearch: string) => {
        dispatch(articlePageActions.setSearch(newSearch));
        dispatch(articlePageActions.setPage(1));
        debouncedFetchData();
    }, [debouncedFetchData, dispatch]);

    const onChangeTab = useCallback((newType: TabItem<ArticleType>) => {
        dispatch(articlePageActions.setType(newType.value));
        dispatch(articlePageActions.setPage(1));
        fetchData();
    }, [fetchData, dispatch]);

    return (
        <div className={classNames('', {}, [className])}>
            <div className={cls.sortWrapper}>
                <ArticleSortSelector
                    order={order}
                    sort={sort}
                    onChangeSort={onChangeSort}
                    onChangeOrder={onChangeOrder}
                />
                <ArticleViewSelector
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
