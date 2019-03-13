const getCommentsUrl = 'https://cmq6eg51s7.execute-api.us-west-1.amazonaws.com/beta/getComments'
const insertCommentUrl = 'https://cmq6eg51s7.execute-api.us-west-1.amazonaws.com/beta/addComment'

const ApiCalls ={
    getCommentsCollection: (collectionName, callback) =>{
         fetch(getCommentsUrl + '/' + collectionName).then(
            res => res.json()
        ).then(
            items => {
                callback(items)
            })
    },
    insertComment: (collectionName, commentObject,  callback) =>{
         let payload = {collectionName: collectionName, commentObject: commentObject}
         fetch(insertCommentUrl, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload)
                }).then(
                   callback()
                )
    },
}

module.exports = ApiCalls;


   
