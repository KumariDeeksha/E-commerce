function errorHandler(err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        // jwt authentication error
        //return res.status(401).json({message: "The user is not authorized"})
        console.log(err);
    }

    if (err.name === 'ValidationError') {
        //  validation error
        return res.status(401).json({message: err})
    }

    // default to 500 server error
    return res.status(500).json(err);
}

module.exports = errorHandler;





// function errorhandler(err,req,res,next){
// if(err.name==='UnauthorizedError'){
//        return res.status(401).json({message:err})
//     }
//     if(err.name==='ValidationError'){
//         return res.status(401).json({message:err})
//     }
//     return res.status(500).json(err);
// }

// module.exports=errorhandler;