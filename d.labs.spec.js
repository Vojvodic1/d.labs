///  <reference types="cypress" />

describe('D.Labs Cypress Test',() =>{

    it('Goes to Assigned URL',() =>{
        cy.visit('https://staging-app.laundryheap.com/booking?country=GB&language=en#step1')
    })
    
    it('Testing App',() =>{
        cy.contains("a", "Don't know your postcode?").click()
        cy.get('.input-dropdown')
            .type('Kingston upon Thames')   
            .wait(3000) 
            .type('{enter}')
        
        cy.get('.booking-summary-section')
            .click().wait(3000)
        
        cy.get('.booking-summary-section')
            .click()
        
        cy.get('.service-item-button')
            .eq(0)
            .click()
        
        cy.get('.laundry-service-option__note')
            .eq(1)
            .click()
        
        cy.get('.modal-foot')
            .click()
            .wait(3000)

        cy.get('.booking-summary-section')
            .click()

        cy.get('.edit-user > :nth-child(2) > :nth-child(1) > .input')
            .type('Test')

        cy.get('.edit-user > :nth-child(2) > :nth-child(2) > .input')
            .type('Test')
        
        cy.get('select')
            .select('+381')

        cy.get('.edit-user-phone input[type=tel]')
            .type('656798858')

        cy.get('.booking-form-section input[type=email]')   
            .type('vojvodic.nikola@gmail.com')

        cy.iframe('#card-number > .__PrivateStripeElement > iframe')
            .click()
            .type('4242 4242 4242 4242')

        cy.iframe('#card-expiry > .__PrivateStripeElement > iframe')
            .click()
            .type('1223')

        cy.iframe('#card-cvc > .__PrivateStripeElement > iframe')
            .click()
            .type('1234')   
        
       cy.get('.booking-summary-section')
            .click()

    })
})