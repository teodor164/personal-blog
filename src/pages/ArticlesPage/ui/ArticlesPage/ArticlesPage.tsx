import { FC, memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Page } from '@/widgets/Page';
import { ArticleInfiniteList } from '../ArticleInfiniteList/ArticleInfiniteList';
import { ArticlePageFilters } from '../ArticlePageFilters/ArticlePageFilters';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { articlePageReducer } from '../../model/slices/articlePageSlice';
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

        const onLoadNextPart = useCallback(() => {
            if (__PROJECT__ !== 'storybook') {
                dispatch(fetchNextArticlesPage());
            }
        }, [dispatch]);

        return (
            <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
                <Page
                    data-testid="articles-page"
                    className={classNames('', {}, [className])}
                    onScrollEnd={onLoadNextPart}
                >
                    <ArticlePageFilters />
                    <ArticleInfiniteList className={cls.list} />
                </Page>
            </DynamicModuleLoader>
        );
    };

export default memo(ArticlesPage);
