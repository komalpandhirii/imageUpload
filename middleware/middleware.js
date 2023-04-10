const middleware = function (req, res, next) {
    try{
          let config = req.headers.api
          
          if(config!=="1234"){
              let check = res.status(500).send("wrong")
              return check
          }
          next()
    }
    catch(err){
      console.log(err.message);
    }
    }
  
    module.exports = middleware;