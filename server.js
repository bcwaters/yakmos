const express = require( 'express')
const path  = require('path')
const MongoDB =  require('./MongoDB.js')
const cors = require('cors')
//const bodyParser = require('body-parser')
const app = express()
app.use(express.json())
app.use(cors())
 
const port = process.env.PORT || 8083;
const router = express.Router()

//MongoDB.getCommentByID('wherever', 500, (result)=>{console.log( result)})
MongoDB.setTestCollection();

//set up dist as static folder
router.use('/', express.static(path.join(__dirname, 'dist')));

//Route setup
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'index.html'));
})

app.get('/download/extension', function(req, res){
  var file =  './chromeExtensionBuild.zip';
  res.download(file); // Set disposition and send it.
});

//TODO write a proper regular expression in the form of /api/getComments/{collectionName}
router.get('/api/getComments/*', (req, res) => {
    //call DB and send data
    var collectionName = req.url.split('/').pop();
    MongoDB.getComments(collectionName, (result)=>{res.json(result)})
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
       MongoDB.insertComment(req.body.commentObject, req.body.collectionName)
        //Probably need to add error hhandling here by passing res.end into a cb
        res.end();
   // }) 
})

app.use(router)
//Start server
app.listen(port, (req, res) => {
console.log(`server listening on port: ${port}`)
 });