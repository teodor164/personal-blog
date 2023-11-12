import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RatingCard } from '@/entities/Rating';
import { useGetArticleRating, useRateArticle } from '../../model/api/articleRatingApi';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';

export interface ArticleRatingProps {
    className?: string
    articleId?: string
}

const ArticleRating = memo((props: ArticleRatingProps) => {
    const { t } = useTranslation();
    const { className, articleId } = props;

    const userData = useSelector(getUserAuthData);

    const { data, isLoading } = useGetArticleRating({
        articleId: articleId ?? '',
        userId: userData?.id ?? '',
    });
    const [rateArticleMutation] = useRateArticle();

    const handleRateArticle = useCallback((starsCount: number, feedback?: string) => {
        try {
            rateArticleMutation({
                articleId: articleId ?? '',
                userId: userData?.id ?? '',
                rate: starsCount,
                feedback,
            });
        } catch (e) {
            console.log(e);
        }
    }, [articleId, rateArticleMutation, userData?.id]);

    if (isLoading) {
        return <Skeleton width="100%" height={120} />;
    }

    const rating = data?.[0];

    return (
        <RatingCard
            onAccept={handleRateArticle}
            onCancel={handleRateArticle}
            rate={rating?.rate}
            className={className}
            title={t('Rate the article')}
            feedbackTitle={t('Send us a feedback, it will help us to improve the content')}
            hasFeedback
        />
    );
});

export default ArticleRating;
