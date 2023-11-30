import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleDetailsControlSection.module.scss';
import { Card } from '@/shared/ui/redesigned/Card';
import { VStack } from '@/shared/ui/common/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
import { Button } from '@/shared/ui/redesigned/Button';
import { getArticleDetailsData, getArticleDetailsIsLoading } from '@/entities/Article';
import { getRouteArticleEdit } from '@/shared/const/router';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';

interface ArticleDetailsControlSectionProps {
    className?: string
}

export const ArticleDetailsControlSection = memo((props: ArticleDetailsControlSectionProps) => {
    const { t } = useTranslation();
    const {
        className,
    } = props;

    const navigate = useNavigate();

    const article = useSelector(getArticleDetailsData);
    const isLoading = useSelector(getArticleDetailsIsLoading);

    const onEdit = () => {
        if (article?.id) {
            navigate(getRouteArticleEdit(article.id));
        }
    };

    let content = (
        <Text text={t('No data')} />
    );

    if (isLoading) {
        content = (
            <>
                <Skeleton width="62px" height="42px" border="24px" />
                <Skeleton width="110px" height="24px" />
            </>
        );
    }

    if (article) {
        const { views } = article;

        content = (
            <>
                <Button onClick={onEdit}>{t('Edit')}</Button>
                <Text text={t('{{count}} views', { count: views })} />
            </>
        );
    }

    return (
        <Card border="round" padding="24" className={classNames(cls.ArticleDetailsControlSection, {}, [className])}>
            <VStack gap="32">
                {content}
            </VStack>
        </Card>
    );
});
