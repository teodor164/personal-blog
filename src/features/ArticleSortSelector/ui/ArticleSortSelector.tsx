import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Select, SelectOption } from '@/shared/ui/Select';
import { SortOrder } from '@/shared/types';
import cls from './ArticleSortSelector.module.scss';
import { ArticleSortFiled } from '../model/const';

interface ArticleSortSelectorProps {
    className?: string;
    sort: ArticleSortFiled;
    order: SortOrder
    onChangeOrder: (newOrder: SortOrder) => void
    onChangeSort: (newSort: ArticleSortFiled) => void
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
    const { t } = useTranslation();
    const {
        className,
        sort,
        order,
        onChangeSort,
        onChangeOrder,
    } = props;

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
        {
            value: SortOrder.ASC,
            content: t('Ascendant'),
        },
        {
            value: SortOrder.DESC,
            content: t('Descendant'),
        },
    ], [t]);
    const sortOptions = useMemo<SelectOption<ArticleSortFiled>[]>(() => [
        {
            value: ArticleSortFiled.CREATED,
            content: t('Created date'),
        },
        {
            value: ArticleSortFiled.TITLE,
            content: t('Title'),
        },
        {
            value: ArticleSortFiled.VIEWS,
            content: t('Views'),
        },
    ], [t]);

    return (
        <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
            <Select
                label={t('Sort by')}
                options={sortOptions}
                value={sort}
                onChange={onChangeSort}
            />
            <Select
                label={t('Sort order')}
                options={orderOptions}
                value={order}
                onChange={onChangeOrder}
            />
        </div>
    );
});
