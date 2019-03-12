//Simple Cypress test to check if the comment box
//has 3 children which are comments.
//At the moment the database has three children.

describe('expand comments and check visibility', function() {
    function checkVisibility(element, expectedVisible){
        if(expectedVisible){
            cy.get(element).should('be.visible')
        }else{
             cy.get(element).should('not.be.visible')
        }
    }
    it('has initial state hidden then items are visible on click', function() {
        cy.visit('http://localhost:8083')
        //wait for the first api call to finish
        cy.wait(1500)
        //commentbox.row.col == commentChild commentBoxFooter
       
        checkVisibility('#sortCommentsButton', false)
        checkVisibility('#comment', false)
       
        cy.get('#expandCommentsButton').click()
        checkVisibility('#sortCommentsButton', true)
    
        checkVisibility('#comment', true)
  })
    
})