const express = require( 'express')
const path  = require('path')
const MongoDB =  require('./MongoDB.js')

const app = express();
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

app.use(router)
//Start server
app.listen(port, (req, res) => {
console.log(`server listening on port: ${port}`)
 });