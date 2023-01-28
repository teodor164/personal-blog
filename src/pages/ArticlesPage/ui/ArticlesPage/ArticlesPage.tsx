import { FC, memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleList, ArticleView, ArticleViewSelector } from 'entities/Article';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useSelector } from 'react-redux';
import {
    getArticlesPagePageNumber,
} from 'pages/ArticlesPage/model/selectors/getArticlesPagePageNumber/getArticlesPagePageNumber';
import { Page } from 'shared/ui/Page';
import { getArticlesPageView } from '../../model/selectors/getArticlesPageView/getArticlesPageView';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import { articlePageActions, articlePageReducer, getArticles } from '../../model/slices/articlePageSlice';
import cls from './ArticlesPage.module.scss';
import { getArticlesPageIsLoading } from '../../model/selectors/getArticlesPageIsLoading/getArticlesPageIsLoading';

interface ArticlesPageProps {
    className?: string
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
        const page = useSelector(getArticlesPagePageNumber);

        useInitialEffect(() => {
            dispatch(articlePageActions.initState());
            dispatch(fetchArticlesList({ page }));
        });

        const onChangeView = useCallback((view: ArticleView) => {
            dispatch(articlePageActions.setView(view));
        }, [dispatch]);

        return (
            <DynamicModuleLoader reducers={reducers}>
                <Page className={classNames('', {}, [className])}>
                    <ArticleViewSelector view={view} onViewClick={onChangeView} />
                    <ArticleList
                        articles={articles}
                        view={view}
                        isLoading={isLoading}
                    />
                </Page>
            </DynamicModuleLoader>
        );
    };

export default memo(ArticlesPage);
