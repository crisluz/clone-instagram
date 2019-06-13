const multer = require('multer');
const path = require('path');

module.exports{

    Storage:new multer.diskStorage({
        destination: path.resolve(__dirname,'..','..','uploads'),
        filename: function(res,file,cb){
        cb(null, file.originalname);    
        }      
    }) 
   
}