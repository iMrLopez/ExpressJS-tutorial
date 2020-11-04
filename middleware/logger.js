const middleware = {
    logger : function (req,res,next) {
        console.log(req.method + ' ' + req.originalUrl);
        next();
    },
    auth: function(req,res,next) {
        if(!req.get('apiKey')) {
            throw new Error('No apiKey');
        }else{
            next();
        }
    }
}

module.exports = middleware