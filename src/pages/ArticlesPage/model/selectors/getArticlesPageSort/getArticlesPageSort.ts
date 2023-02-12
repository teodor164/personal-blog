import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleSortFiled } from 'entities/Article';

export const getArticlesPageSort = (state: StateSchema) => state.articlesPage?.sort || ArticleSortFiled.CREATED;
