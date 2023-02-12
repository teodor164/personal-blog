import { FC, memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleList } from 'entities/Article';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useSelector } from 'react-redux';
import { Page } from 'widgets/Page';
import { ArticlePageFilters } from 'pages/ArticlesPage/ui/ArticlePageFilters/ArticlePageFilters';
import { useSearchParams } from 'react-router-dom';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { getArticlesPageView } from '../../model/selectors/getArticlesPageView/getArticlesPageView';
import { articlePageReducer, getArticles } from '../../model/slices/articlePageSlice';
import { getArticlesPageIsLoading } from '../../model/selectors/getArticlesPageIsLoading/getArticlesPageIsLoading';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articlesPage: articlePageReducer,
};

const
    ArticlesPage: FC<ArticlesPageProps> = (props) => {
        const { className } = props;

        const dispatch = useAppDispatch();
        const articles = useSelector(getArticles.selectAll);
        const isLoading = useSelector(getArticlesPageIsLoading);
        const view = useSelector(getArticlesPageView);

        const [searchParams] = useSearchParams();

        useInitialEffect(() => {
            dispatch(initArticlesPage(searchParams));
        });

        const onLoadNextPart = useCallback(() => {
            if (__PROJECT__ !== 'storybook') {
                dispatch(fetchNextArticlesPage());
            }
        }, [dispatch]);

        return (
            <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
                <Page
                    className={classNames('', {}, [className])}
                    onScrollEnd={onLoadNextPart}
                >
                    <ArticlePageFilters />
                    <ArticleList
                        articles={articles}
                        view={view}
                        isLoading={isLoading}
                        className={cls.list}
                    />
                </Page>
            </DynamicModuleLoader>
        );
    };

export default memo(ArticlesPage);
