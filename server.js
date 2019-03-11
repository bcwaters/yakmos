const express = require( 'express')
const path  = require('path')
const MongoDB =  require('./MongoDB.js')
//const bodyParser = require('body-parser')
const app = express()
app.use(express.json())
 
const port = process.env.PORT || 8080;
const router = express.Router()

MongoDB.setTestCollection();


//set up dist as static folder
router.use('/', express.static(path.join(__dirname, 'dist')));

//Route setup
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'index.html'));
})


router.get('/api/callMongo', (req, res) => {
    //call DB and send data
    MongoDB.getComments('somewhere.com', (result)=>{res.json(result)})
})


/**
*   post a comment to the rest server
*   the post data is formatted in json
*   ex: {  originUrl : 'url_to_leave_comment_on.com',
*            comment : { user: 'bob', text:'coment text', commentAge: TimeCommentMade }
*        }
*       MongoDB.insertComment(post.data.originUrl, post.data.comment)  //url is collectionName
*
*/
router.post('/api/addComment', (req, res) => {
   
    //req.on('data', function(data) {
       MongoDB.insertComment(req.body, 'comments')
        //console.log(req.body)
         res.end();
   // })
    
   
    
   
})


app.use(router)
//Start server
app.listen(port, (req, res) => {
console.log(`server listening on port: ${port}`)
 });