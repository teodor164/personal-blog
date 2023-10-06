import { EntityState } from '@reduxjs/toolkit';
import {
    Article, ArticleType, ArticleView,
} from '@/entities/Article';
import { SortOrder } from '@/shared/types/sort';
import { ArticleSortFiled } from '@/features/ArticleSortSelector';

export interface ArticlePageSchema extends EntityState<Article> {
    isLoading?: boolean
    error?: string

    // pagination
    page: number
    limit: number
    hasMore: boolean

    // filters
    view: ArticleView
    order: SortOrder
    sort: ArticleSortFiled
    search: string
    type: ArticleType

    _inited: boolean
}
