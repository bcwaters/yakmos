/**
 * Creates a new comment
 * @class
 * @description helper class that constructs a comment
 * @prop {string} text      - the string for the comment
 * @prop {string} user      - the user name
 * @prop {string} date      - time the comment was made
 * @prop {JSON object} data - json of all fields for comment
 * @returns {JSON object}
 */
 
class CommentObject{
     
    constructor(jsonData){
            this.data = jsonData
    }
    
    changeDataField(key, value){
        this.data[key] = value;
    }
    
}

module.exports = CommentObject;