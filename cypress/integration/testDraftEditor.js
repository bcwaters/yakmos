//Simple Cypress test to check if the comment box
//has 3 children which are comments.
//At the moment the database has three children.

describe('Testing draft editor and Comment Button', function() {
  it('type text and submit it', function() {
        cy.visit('http://localhost:8080')
        //wait for the first api call to finish
        cy.wait(1500)
        //This assumes comment count badge increments correclty
        cy.get('#commentCountBadge').then( ($startLength)=> {
            let startLength = $startLength.text()
            cy.get('#expandCommentsButton').click()
            cy.get('.public-DraftEditor-content').click().type('test comment')
            cy.get('#leaveCommentButton').click();
            cy.get('#commentCountBadge').then(($finishLength)=> {
                let finishLength = parseInt($finishLength.text())
                    expect(parseInt(startLength) + 1).to.eq(finishLength)
            })          
        })
  })
})

describe('Testing draft editor and Cancel Button', function() {
  it('Type text and then cancel it', function() {
        cy.visit('http://localhost:8080')
        //wait for the first api call to finish
        cy.wait(1500)
        //MongoDB test DB has 4 comments at start
        cy.get('#commentBoxContainer')
        cy.get('#expandCommentsButton').click()
        cy.get('.public-DraftEditor-content').click().type('test comment')
        cy.get('.public-DraftEditor-content').then( ($textEntered)=> {
            let textEntered=$textEntered.text();
            expect(textEntered).to.eq('test comment')
            cy.get('#cancelCommentButton').click();
            cy.get('.public-DraftEditor-content').then( ($textCancelled)=> {
                let textCancelled=$textCancelled.text();
                expect(textCancelled).to.eq('')
            })
        }) 
  })
})