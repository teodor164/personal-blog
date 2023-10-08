import { getRouteArticles } from '@/shared/const/router';

describe('Article list page', () => {
    beforeEach(() => {
        cy.login().then(() => {
            cy.visit(getRouteArticles());
        });
    });

    it('Article successfully loaded', () => {
        cy.getByTestId('article-list').should('exist');
        cy.getByTestId('article-list-item').should('have.length.greaterThan', 3);
    });
});
