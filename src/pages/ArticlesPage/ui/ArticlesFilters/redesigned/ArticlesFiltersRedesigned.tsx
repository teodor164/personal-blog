import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticlesFilters.module.scss';
import { Card } from '@/shared/ui/redesigned/Card';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { Input } from '@/shared/ui/redesigned/Input';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { VStack } from '@/shared/ui/common/Stack';
import { useArticlesFilters } from '../../../lib/hooks/useArticlesFilters';
import { Icon } from '@/shared/ui/redesigned/Icon';
import SearchIcon from '@/shared/assets/icons/search.svg';

interface ArticlesFiltersProps {
    className?: string;
}

export const ArticlesFiltersRedesigned = memo((props: ArticlesFiltersProps) => {
    const {
        className,
    } = props;

    const {
        onChangeSearch,
        search,
        order,
        sort,
        onChangeSort,
        onChangeOrder,
        type,
        onChangeTab,
    } = useArticlesFilters();

    const { t } = useTranslation();

    return (
        <Card padding="24" className={classNames(cls.ArticlesFilters, {}, [className])}>
            <VStack gap="16">
                <Input
                    placeholder={t('Search')}
                    onChange={onChangeSearch}
                    value={search}
                    addonLeft={<Icon Svg={SearchIcon} />}
                    size="s"
                />
                <ArticleTypeTabs
                    value={type}
                    onTabClick={onChangeTab}
                />
                <ArticleSortSelector
                    order={order}
                    sort={sort}
                    onChangeSort={onChangeSort}
                    onChangeOrder={onChangeOrder}
                />
            </VStack>
        </Card>
    );
});
