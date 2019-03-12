const getCommentsUrl = 'http://localhost:8083/api/getComments'
const insertCommentUrl = 'http://localhost:8083/api/addComment'

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


   