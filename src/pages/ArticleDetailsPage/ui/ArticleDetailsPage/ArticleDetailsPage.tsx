import { FC, memo } from 'react';
import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleDetails } from '@/entities/Article';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Page } from '@/widgets/Page';
import { VStack } from '@/shared/ui/common/Stack';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { articleDetailsPageReducer } from '../../model/slice';
import cls from './ArticleDetailsPage.module.scss';
import { ArticleRating } from '@/features/ArticleRating';
import { ToggleFeatures } from '@/shared/lib/features';
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout';
import { ArticleDetailsControlSection } from '../ArticleDetailsControlSection/ArticleDetailsControlSection';
import { ArticleRecommendationsList } from '@/features/ArticleRecommendationsList';

interface ArticleDetailsPageProps {
    className?: string
}

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
    const { id } = useParams<{ id: string }>();
    const { className } = props;

    const content = (
        <VStack max gap="16">
            <ArticleDetails id={id} />
            <ArticleRating articleId={id} />
            <ArticleRecommendationsList />
            <ArticleDetailsComments id={id} />
        </VStack>
    );

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <ToggleFeatures
                feature="isAppRedesigned"
                on={(
                    <StickyContentLayout
                        content={(
                            <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                                {content}
                            </Page>
                        )}
                        right={(
                            <ArticleDetailsControlSection />
                        )}
                    />
                )}
                off={(
                    <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                        <ArticleDetailsPageHeader className={cls.ArticleDetailsPageHeader} />
                        {content}
                    </Page>
                )}
            />
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
