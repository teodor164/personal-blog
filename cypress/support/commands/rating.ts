export function setRate(starsCount: number = 5, feedback: string = 'feedback') {
    cy.getByTestId(`star-rating-${starsCount}`).click();
    cy.getByTestId('rating-card-input').type(feedback);
    cy.getByTestId('rating-card-send').click();
}

declare global {
    namespace Cypress {
        interface Chainable {
            setRate(starsCount?: number, feedback?: string): Chainable<void>
        }
    }
}
