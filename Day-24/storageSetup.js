const multer = require("multer")
const storage = multer.discStorage({
    destination:function(req,file,cb){
        cb(null,'/uploads')
    },
    filename:function(req, file,cb){
        cb(null,Date.now()+"_"+file.originalname);
    }
});