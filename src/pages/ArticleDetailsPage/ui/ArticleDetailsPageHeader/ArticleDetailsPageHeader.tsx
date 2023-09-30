import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { getArticleDetailsData } from '@/entities/Article';
import { HStack } from '@/shared/ui/Stack';
import { getIsArticleEditable } from '../../model/selectors/getIsArticleEditable/getIsArticleEditable';
import { RoutePath } from '@/shared/const/router';

interface ArticleDetailsPageHeaderProps {
    className?: string;
}

export const ArticleDetailsPageHeader = memo((props: ArticleDetailsPageHeaderProps) => {
    const { t } = useTranslation();
    const { className } = props;

    const navigate = useNavigate();
    const isEditable = useSelector(getIsArticleEditable);
    const article = useSelector(getArticleDetailsData);

    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    const onEdit = useCallback(() => {
        navigate(`${RoutePath.article_details}${article?.id}/edit`);
    }, [article?.id, navigate]);

    return (
        <HStack max justify="between" align="center" className={classNames('', {}, [className])}>
            <Button
                theme={ButtonTheme.OUTLINE}
                onClick={onBackToList}
            >
                {t('Back to list')}
            </Button>
            {isEditable && (
                <Button
                    theme={ButtonTheme.OUTLINE}
                    onClick={onEdit}
                >
                    {t('Edit')}
                </Button>
            )}
        </HStack>
    );
});
