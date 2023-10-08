import { getRouteProfile } from '@/shared/const/router';
import { resetProfile } from '../../support/commands/profile';

let profileId: string;

describe('Profile page', () => {
    beforeEach(() => {
        cy.login().then((data) => {
            profileId = data.id;
            cy.visit(getRouteProfile(data.id));
        });
    });
    afterEach(() => {
        resetProfile(profileId);
    });

    it('Profile successfully loaded', () => {
        cy.getByTestId('ProfileCard.firstname').should('have.value', 'test');
    });

    it('Edit profile page', () => {
        const newName = 'new';
        const newLastname = 'lastname';

        cy.updateProfile();
        cy.getByTestId('ProfileCard.firstname').should('have.value', newName);
        cy.getByTestId('ProfileCard.lastname').should('have.value', newLastname);
        cy.updateProfile();
    });
});
