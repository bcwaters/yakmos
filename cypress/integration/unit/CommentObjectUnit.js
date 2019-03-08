const CommentObject = require('../../../src/app/utils/CommentObject.js')

function makeCommentObject(data){
    return new CommentObject(data)
}

function editCommentObject(key, value){
    //stub object
    var comment = new CommentObject({text: "test"})
    comment.changeDataField(key, value)
    return comment
}

// -- Start: Our Cypress Tests --
//test constructor
describe('Unit Test CommentObject', function () {
  function compareJSON (commentData, expected) {
      cy.log('testing')
    Object.entries(expected).forEach(([key,value]) => {
        expect(commentData[key]).to.eq(expected[key])
      
    })
  }
    
    it('properly constructs a comment', function () {
        cy.log('starting test')
            var commentJson={text:'test', user:'default'}
            compareJSON(makeCommentObject(commentJson).data, commentJson)   
  }) 
     it('properly edits a comment', function () {
        cy.log('starting test')
            var newValue = 'changed'
            compareJSON(editCommentObject('text', newValue).data, {text:newValue})   
  }) 

})