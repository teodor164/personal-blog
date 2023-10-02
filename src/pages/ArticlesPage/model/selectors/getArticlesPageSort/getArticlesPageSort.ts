import { StateSchema } from '@/app/providers/StoreProvider';
import { ArticleSortFiled } from '@/features/ArticleSortSelector';

export const getArticlesPageSort = (state: StateSchema) => state.articlesPage?.sort || ArticleSortFiled.CREATED;
