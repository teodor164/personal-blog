export function updateProfile() {
    cy.getByTestId('EditableProfileCard.EditButton').click();
    cy.getByTestId('ProfileCard.firstname').clear().type('new');
    cy.getByTestId('ProfileCard.lastname').clear().type('lastname');
    cy.getByTestId('EditableProfileCard.SaveButton').click();
}

export function resetProfile(profileId: string) {
    cy.request({
        method: 'PUT',
        url: `http://localhost:8000/profile/${profileId}`,
        headers: { authorization: 'any' },
        body: {
            id: '4',
            first: 'test',
            lastname: 'user',
            age: 465,
            currency: 'EUR',
            country: 'Ukraine',
            city: 'Moscow',
            username: 'testuser',
            avatar: 'https://xakep.ru/wp-content/uploads/2018/05/171485/KuroiSH-hacker.jpg',
        },
    });
}

declare global {
    namespace Cypress {
        interface Chainable {
            updateProfile(): Chainable<void>
            resetProfile(profileId: string): Chainable<void>
        }
    }
}
