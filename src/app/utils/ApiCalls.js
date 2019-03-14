const getCommentsUrl = 'http://localhost:8083/api/getComments'
const insertCommentUrl = 'http://localhost:8083/api/addComment'

const ApiCalls ={
    getCommentsCollection: (collectionName, callback) =>{
         fetch(getCommentsUrl + '/' + collectionName, 
            {headers:{
                'Access-Control-Allow-Origin' : '*',
                'x-api-key':'ngZNdywmXf5johWjkDzD99QqqQ6MO5RL6HkoZF5E'}
        }).then(
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
                    'Access-Control-Allow-Origin' : '*',
                    'x-api-key':'ngZNdywmXf5johWjkDzD99QqqQ6MO5RL6HkoZF5E',
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


   