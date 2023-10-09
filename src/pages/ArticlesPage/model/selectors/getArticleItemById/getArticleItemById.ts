import { buildSelector } from '@/shared/lib/store';

export const [useArticleItemById] = buildSelector(
    (state, id) => state.articlesPage?.entities[id],
);
