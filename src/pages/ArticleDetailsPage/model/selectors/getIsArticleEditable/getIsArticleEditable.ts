import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import { getArticleDetailsData } from 'entities/Article';

export const getIsArticleEditable = createSelector(
    getUserAuthData,
    getArticleDetailsData,
    (user, article) => {
        if (!article || !user) {
            return false;
        }

        return article.user.id === user.id;
    },
);
