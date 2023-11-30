import { useSelector } from 'react-redux';
import { ToggleFeatures } from '@/shared/lib/features';
import { ArticleDetailsRedesigned } from './redesigned/ArticleDetailsRedesigned';
import { ArticleDetailsDeprecated } from './deprecated/ArticleDetailsDeprecated';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from '../../model/selectors/articleDetails';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';

export interface ArticleDetailsProps {
    className?: string;
    id?: string;
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
};

export const ArticleDetailsContainer = (props: ArticleDetailsProps) => {
    const dispatch = useAppDispatch();

    const isLoading = useSelector(getArticleDetailsIsLoading);
    const error = useSelector(getArticleDetailsError);
    const article = useSelector(getArticleDetailsData);

    useInitialEffect(() => {
        dispatch(fetchArticleById(props.id));
    });

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <ToggleFeatures
                feature="isAppRedesigned"
                on={(
                    <ArticleDetailsRedesigned
                        isLoading={isLoading}
                        error={error}
                        article={article}
                        {...props}
                    />
                )}
                off={(
                    <ArticleDetailsDeprecated
                        isLoading={isLoading}
                        error={error}
                        article={article}
                        {...props}
                    />
                )}
            />
        </DynamicModuleLoader>
    );
};
