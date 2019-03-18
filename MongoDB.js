var MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";
const dbName = "yakmos"
const testCollection = 'comments'
const testCollection2 = 'comments2'

class MongoDB{
    
    static createCollection(collectionName){
        MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            var dbo = db.db(dbName);
            dbo.createCollection(collectionName, function(err, res) {
                if (err) throw err;
                console.log("Collection created!");
                db.close();
            });
        });
    }
    
    static insertComment(commentObject, collectionName){
        MongoClient.connect(url, function(err, db) {
            if (err) {
                console.log('error connecting') 
                throw err;};
            var dbo = db.db(dbName);
            dbo.collection(collectionName).insertOne(commentObject, function(err, res) {
            if (err) {
                console.log('error inserting')
                throw err;
            };
            console.log("1 document inserted into: " + collectionName);
            db.close();
            });
        });
    }
    
  
    static getComments(collectionName, callback){
        MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            var dbo = db.db(dbName);
            console.log('getcomments for: ' + collectionName);
            dbo.collection(collectionName).find({}).toArray(
                function(err, result) {
                    if (err) throw err;
                    console.log('retrieved comments for:' + collectionName + ' #: ' + result.length);
                    callback(result);
                    db.close();
                });
        });
    }
    
    static getCommentByID(collectionName, ID ,callback){
        MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            var dbo = db.db(dbName);
           
            dbo.collection(collectionName).find({ _id: { $eq: ID } } ).toArray(function(err, result) {
            if (err) throw err;
            console.log('retrieved comments for:' + collectionName + ' #: ' + result.length);
            callback(result);
            db.close();
            });
        });
    }
    
    static updateCommentByID(collectionName, ID ,callback){
        MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            var dbo = db.db(dbName);
           
            dbo.collection(testCollection).find({ _id: { $eq: ID } } ).toArray(function(err, result) {
            if (err) throw err;
            console.log('retrieved comments for:' + collectionName + ' #: ' + result.length);
            callback(result);
            db.close();
            });
        });
    }
    
    
    static dropCollection(collectionName, callback){
        MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            var dbo = db.db(dbName);
            dbo.dropCollection(collectionName, function(err, delOK) {
                if (err) throw err;
                if (delOK) console.log("Collection deleted");
                callback();
                db.close();
              
            });
        });
          
    }
    static setTestCollection(){
         MongoDB.createCollection(testCollection);
          MongoDB.createCollection(testCollection2);
        MongoDB.dropCollection(testCollection2, function(){console.log('deelted c2')});
        MongoDB.dropCollection(testCollection, this.insertTestCollections);
       
       
    }
    
    static insertTestCollections(){
        
         MongoDB.insertComment({
               
                text: 'This is a comment that has been inserted into the mongoDB. it was the first comment to be inserted.',
                user: 'frank',
                commentAge: '1550000000000',
                parentID: 'root',
      
        }, testCollection)
        MongoDB.insertComment({
                text: 'not gonna say much',
                user: 'larry',
                commentAge: '1552240000000',
                parentID: 'root',
         
        }, testCollection)
        MongoDB.insertComment({
                text: 'not gonna say much again',
                user: 'larry',
                commentAge: '1550550000000',
                parentID: 'root',
         
        }, testCollection)
        MongoDB.insertComment({
                text: 'I woould lik to share a wall of text with you. So plase continue reading this text. otherwise i suppose you can stop reading it and move on to the next comment. but last time i check di was the last one to comment. so anyways i forgot what i wante dto say but it seems like this comment is long enough to test out the scenario of long comments',
                user: 'anon56798',
                commentAge: '1552241000000',
                parentID: 'root',
     
        }, testCollection)
        MongoDB.insertComment({
                text:'Hi frank', user:'replier', commentAge:'1550000008800', parentID:500
    
        }, testCollection)
        
        
        MongoDB.insertComment({
             
                text: 'the other test collectoin.',
                user: 'frank',
                commentAge: '1550000000000',
                parentID: 'root',
      
        }, testCollection2)
        MongoDB.insertComment({
                text: 'this is test collection 2',
                user: 'larry',
                commentAge: '1552240000000',
                parentID: 'root',
         
        }, testCollection2)
       
    }
}

module.exports = MongoDB;
