const sortCommentFunctions = require('../../../src/app/utils/sortCommentOptions.js')

const arrayOfComments = [
    {commentAge: '1'},
    {commentAge: '4'},
    {commentAge: '3'},
    {commentAge: '5'}, 
    {commentAge: '2'},
]

const arrayOfComments_unsorted = [
    {commentAge: '1'},
    {commentAge: '4'},
    {commentAge: '3'},
    {commentAge: '5'}, 
    {commentAge: '2'},
]
        

// -- Start: Our Cypress Tests --
describe('Unit Test sortCommentOptions.js', function () {
    it('properly sorts by oldest', function () {
       arrayOfComments.sort(sortCommentFunctions.oldest)
        for(var i = 1; i<arrayOfComments.length; i++){
            expect(arrayOfComments[i-1].commentAge).
                to.not.be.greaterThan(arrayOfComments[i].commentAge)
            }
        
  }) 
     it('properly sorts by youngest', function () {
          arrayOfComments.sort(sortCommentFunctions.newest)
               for(var i = 1; i<arrayOfComments.length; i++){
            expect(arrayOfComments[i-1].commentAge).
                to.not.be.lessThan(arrayOfComments[i].commentAge)
            }
          
  }) 

})