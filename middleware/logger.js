const middleware = {
    logger : function (req,res,next) {
        console.log(req.method + ' ' + req.originalUrl);
        next();
    }
}

module.exports = middleware