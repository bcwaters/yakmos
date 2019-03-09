//Simple Cypress test to check if the comment box
//has 3 children which are comments.
//At the moment the database has three children.

describe('Get CommentBox children', function() {
  it('find children', function() {
        cy.visit('http://localhost:8080')
        //wait for the first api call to finish
        cy.wait(1500)
        //commentbox.row.col == commentChild
        cy.get('#commentContainer').children().children('#comment').should('have.length', 3)
   
  })
})