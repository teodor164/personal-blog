import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text';
import { useTranslation } from 'react-i18next';
import { Icon } from 'shared/ui/Icon';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import { Card } from 'shared/ui/Card/Card';
import { Avatar } from 'shared/ui/Avatar';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import {
    Article, ArticleBlockType, ArticleTextBlock, ArticleView,
} from '../../model/types/article';
import cls from './ArticleListItem.module.scss';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

interface ArticleListItemProps {
    className?: string
    article: Article
    view: ArticleView
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const { className, article, view } = props;

    const onOpenArticle = useCallback(() => {
        navigate(RoutePath.article_details + article.id);
    }, [article.id, navigate]);

    const types = <Text text={article.type.join(', ')} className={cls.type} />;
    const views = (
        <>
            <Text text={String(article.views)} className={cls.views} />
            <Icon Svg={EyeIcon} />
        </>
    );

    if (view === ArticleView.BIG) {
        const textBlock = article.blocks.find((block) => block.type === ArticleBlockType.TEXT) as ArticleTextBlock;
        return (
            <div className={classNames('', {}, [className, cls[view]])}>
                <Card>
                    <div className={cls.header}>
                        <Avatar size={30} src={article.user.avatar} />
                        <Text text={article.user.username} className={cls.username} />
                        <Text text={article.createdAt} className={cls.date} />
                    </div>
                    <Text title={article.title} className={cls.title} />
                    {types}
                    <img src={article.img} className={cls.img} alt={article.title} />
                    {textBlock && (
                        <ArticleTextBlockComponent block={textBlock} className={cls.textBlock} />
                    )}
                    <div className={cls.footer}>
                        <Button theme={ButtonTheme.OUTLINE} onClick={onOpenArticle}>
                            {t('Read...')}
                        </Button>
                        {views}
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div className={classNames('', {}, [className, cls[view]])}>
            <Card onClick={onOpenArticle}>
                <div className={cls.imgWrapper}>
                    <img src={article.img} alt={article.title} className={cls.img} />
                    <Text text={article.createdAt} className={cls.date} />
                </div>
                <div className={cls.infoWrapper}>
                    {types}
                    {views}
                </div>
                <Text text={article.title} className={cls.title} />
            </Card>
        </div>
    );
});
