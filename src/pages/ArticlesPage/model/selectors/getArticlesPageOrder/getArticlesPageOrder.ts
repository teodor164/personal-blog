import { StateSchema } from '@/app/providers/StoreProvider';
import { SortOrder } from '@/shared/types';

export const getArticlesPageOrder = (state: StateSchema) => state.articlesPage?.order || SortOrder.ASC;
