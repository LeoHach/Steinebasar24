var express = require('express');
var db = require('../database');
const multer = require('multer');

const router = express.Router();

var storage = multer.diskStorage({
  destination: (req, file, callBack) => {
    callBack(null, './public/uploads/products');
  },
  filename: (req, file, callBack) => {
    callBack(null, file.originalname);
  }
});

const fileFilter = (req, file, callBack) => {
  if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg' || file.mimetype === 'image/png'){
    callBack(null, true);
  }else{
    callBack(null, false);
  }
} 

var upload = multer({
  storage: storage,
  fileFilter: fileFilter
});

router.get('/', function(req, res, next) { 
    res.render('admin'); 
});

router.post('/createProduct', upload.single('picture'), function(req, res){
  if(!req.file){
    console.log("Kein Bild hochgeladen!");
  }else{
    const pathName = '/uploads/products/' + req.file.originalname;

    console.log(pathName);
    var sql = "INSERT INTO products (Name, Price, Quantity, Type, Description, Picture) VALUES ('"+req.body.name+"', '"+req.body.price+"','"+req.body.quantity+"', '"+req.body.type+"', '"+req.body.description+"', '"+pathName+"')";
    db.query(sql, (err, result) => {
      if(err) throw err;
      console.log("Produkt erfolgreich hinzugefügt");
    });
  }
  
  res.redirect('/admin');
});

module.exports = router;
