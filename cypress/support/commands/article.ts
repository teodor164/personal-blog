import { Article } from '@/entities/Article';

const defaultArticle = {
    id: '99999',
    title: 'TEST ARTICLE',
    subtitle: 'Что нового в JS за 2022 год?',
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    views: 1022,
    createdAt: '26.04.2022',
    userId: '1',
    type: ['IT'],
    blocks: [],
};

export function createArticle(article?: Article) {
    return cy.request({
        method: 'POST',
        url: 'http://localhost:8000/articles',
        headers: { authorization: 'any' },
        body: article || defaultArticle,
    }).then(({ body }) => body);
}

export function removeArticle(articleId: string) {
    cy.request({
        method: 'DELETE',
        url: `http://localhost:8000/articles/${articleId}`,
        headers: { authorization: 'any' },
    });
}

declare global {
    namespace Cypress {
        interface Chainable {
            createArticle(article?: Article): Chainable<Article>
            removeArticle(articleId: string): Chainable<void>
        }
    }
}
