const express = require( 'express')
const path  = require('path')
const MongoDB =  require('./MongoDB.js')

const app = express();
const port = process.env.PORT || 8080;
const router = express.Router()

//MongoDB.dropCollection('comments');
//MongoDB.createCollection('comments')
//MongoDB.insertComment({text: 'This is a comment that has been inserted into the mongoDB. it was the first comment to be inserted.'})
//MongoDB.insertComment({text: 'This is another comment. 2nd one inserted'})
//MongoDB.insertComment({text: 'This is the 3rd comment. Adding filler to make it longer\n\n\n\n\n\alsdfladksf;akjsdf;lakjsdf;lasdf fadsjladfkjs;asdkfj;asfdas'})


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

app.use(router)
//Start server
app.listen(port, (req, res) => {
console.log(`server listening on port: ${port}`)
 });