const getCommentsUrl = 'http://localhost:8083/api/getComments'
const insertCommentUrl = 'http://localhost:8083/api/addComment'
// urls for API Gateway on AWS 
//const getCommentsUrl = 'https://cmq6eg51s7.execute-api.us-west-1.amazonaws.com/beta/getComments'
//const insertCommentUrl = 'https://cmq6eg51s7.execute-api.us-west-1.amazonaws.com/beta/addComment'

const ApiCalls ={
    getCommentsCollection: (collectionName, callback) =>{
            console.log('making api call with name: ' + collectionName)
         fetch(getCommentsUrl + '/' + collectionName, 
            {headers:{
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


   