const sortCommentOptions ={
    newest: (a,b)=>{return(parseInt(b.commentAge)-parseInt(a.commentAge))} ,
    oldest: (a,b)=>{return(parseInt(a.commentAge)-parseInt(b.commentAge))}
}


module.exports = sortCommentOptions;