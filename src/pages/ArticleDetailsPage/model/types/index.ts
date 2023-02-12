import { ArticleDetailsRecommendationsSchema } from './ArticleDetailsRecommendationsSchema';
import { ArticleDetailsCommentsSchema } from './ArticleDetailsCommentsSchema';

export interface ArticleDetailsPageSchema {
    recommendations: ArticleDetailsRecommendationsSchema
    comments: ArticleDetailsCommentsSchema
}
