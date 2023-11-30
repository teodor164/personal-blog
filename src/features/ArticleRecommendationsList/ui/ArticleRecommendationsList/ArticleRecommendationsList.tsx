import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text as DeprecatedText, TextSize } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { ArticleList } from '@/entities/Article';
import { VStack } from '@/shared/ui/common/Stack';
import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';
import { ToggleFeatures } from '@/shared/lib/features';

interface ArticleRecommendationsListProps {
    className?: string;
}
// TODO make responsive
export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const { data: articles, isLoading, error } = useArticleRecommendationsList(3);

    if (isLoading || error || !articles) {
        return null;
    }

    return (
        <VStack
            gap="8"
            className={classNames('', {}, [className])}
            data-testid="article-recommendations-list"
        >
            <ToggleFeatures
                feature="isAppRedesigned"
                on={(
                    <Text
                        size="l"
                        title={t('Recommendations')}
                    />
                )}
                off={(
                    <DeprecatedText
                        size={TextSize.L}
                        title={t('Recommendations')}
                    />
                )}
            />
            <ArticleList
                articles={articles}
                isLoading={isLoading}
                target="_blank"
            />
        </VStack>
    );
});
