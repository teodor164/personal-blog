import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
    const { t } = useTranslation('articleDetails');
    const { className } = props;

    return (
        <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
            Article Details
        </div>
    );
};

export default memo(ArticleDetailsPage);
