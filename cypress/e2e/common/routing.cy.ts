import { getRouteArticles, getRouteMain, getRouteProfile } from '@/shared/const/router';

describe('Routing', () => {
    describe('Authorized user', () => {
        beforeEach(() => {
            cy.login();
        });

        it('Open profile page', () => {
            cy.visit(getRouteProfile('1'));
            cy.getByTestId('profile-page').should('exist');
        });

        it('Open articles page', () => {
            cy.visit(getRouteArticles());
            cy.getByTestId('articles-page').should('exist');
        });
    });

    describe('Unauthorized user', () => {
        it('Open main page', () => {
            cy.visit(getRouteMain());
            cy.getByTestId('main-page').should('exist');
        });

        it('Open profile page', () => {
            cy.visit(getRouteProfile('1'));
            cy.getByTestId('main-page').should('exist');
        });

        it('Open an not existing route', () => {
            cy.visit('/not-exist');
            cy.getByTestId('not-found-page').should('exist');
        });
    });
});
