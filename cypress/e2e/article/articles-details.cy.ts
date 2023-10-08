import { getRouteArticleDetails } from '@/shared/const/router';

let currentArticleId: string;

describe('Article details page', () => {
    beforeEach(() => {
        cy.login();
        cy.createArticle().then((article) => {
            currentArticleId = article.id;
            cy.visit(getRouteArticleDetails(article.id));
        });
    });

    afterEach(() => {
        cy.removeArticle(currentArticleId);
    });

    it('Article loaded', () => {
        cy.getByTestId('article-details-info').should('exist');
    });

    it('Article recommendations loaded', () => {
        cy.getByTestId('article-recommendations-list').should('exist');
    });

    it('Send article comment', () => {
        cy.getByTestId('article-details-info').should('exist');
        cy.getByTestId('add-comment-form').scrollIntoView();
        cy.addComment('comment 21345');
        cy.getByTestId('comment-card-content').should('have.length', 1);
    });

    it('Rating article', () => {
        cy.getByTestId('article-details-info').should('exist');
        cy.getByTestId('rating-card').scrollIntoView();
        cy.setRate(5, 'feedback');
        cy.get('[data-selected="true"]').should('have.length', 5);
    });
});
