const express = require( 'express')
const path  = require('path')
const MongoDB =  require('./MongoDB.js')
//const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')
app.use(express.json())

app.use(cors());
const port = process.env.PORT || 8083;
const router = express.Router()
MongoDB.getCommentByID('wherever', 500, (result)=>{console.log( result)})
MongoDB.setTestCollection();

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	console.log('middleware set cors policy to allow ')
    next();
}

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

router.get('/api/getComments', (req, res) => {
    //call DB and send datia
	console.log(res.header)
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
