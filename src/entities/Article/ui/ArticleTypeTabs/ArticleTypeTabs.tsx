import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { TabItem, Tabs } from '@/shared/ui/Tabs';
import { ArticleType } from '../../model/types/article';
import cls from './ArticleTypeTabs.module.scss';

interface ArticleTypeTabsProps {
    className?: string;
    value: ArticleType
    onTabClick: (tab: TabItem<ArticleType>) => void
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
    const { t } = useTranslation();
    const {
        className,
        value,
        onTabClick,
    } = props;

    const typeTabs = useMemo<TabItem<ArticleType>[]>(() => [
        {
            value: ArticleType.ALL,
            content: t('All articles'),
        },
        {
            value: ArticleType.IT,
            content: t('IT'),
        },
        {
            value: ArticleType.ECONOMICS,
            content: t('Economics'),
        },
        {
            value: ArticleType.SCIENCE,
            content: t('Science'),
        },
    ], [t]);

    return (
        <Tabs
            className={classNames(cls.ArticleTypeTabs, {}, [className])}
            value={value}
            onTabClick={onTabClick}
            tabs={typeTabs}
        />
    );
});
