export function addComment(text: string) {
    cy.getByTestId('add-comment-form-input').clear().type(text);
    cy.getByTestId('add-comment-form-button').click();
}

declare global {
    namespace Cypress {
        interface Chainable {
            addComment(text: string): Chainable<void>
        }
    }
}
