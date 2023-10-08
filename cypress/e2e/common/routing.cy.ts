import { selectByTestId } from '../../helpers/selectByTestId';

describe('Routing', () => {
    describe('Authorized user', () => {
        beforeEach(() => {
            cy.login();
        });

        it('Open profile page', () => {
            cy.visit('/profile/1');
            cy.get(selectByTestId('profile-page')).should('exist');
        });

        it('Open articles page', () => {
            cy.visit('/articles');
            cy.get(selectByTestId('articles-page')).should('exist');
        });
    });

    describe('Unauthorized user', () => {
        it('Open main page', () => {
            cy.visit('/');
            cy.get(selectByTestId('main-page')).should('exist');
        });

        it('Open profile page', () => {
            cy.visit('/profile/1');
            cy.get(selectByTestId('main-page')).should('exist');
        });

        it('Open an not existing route', () => {
            cy.visit('/not-exist');
            cy.get(selectByTestId('not-found-page')).should('exist');
        });
    });
});
