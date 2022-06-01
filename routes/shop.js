var express = require('express');
var router = express.Router();
var db = require('../database.js');

router.get('/', function(req, res) { 
    db.query('SELECT * from products ORDER BY Product_ID', function (err, result){
        if(err){
            throw err;
        
        }else{
            let products = result.map(row => { return { pname: row.Name, pprice: row.Price, prating: row.Rating, ppicture: row.Picture}});
            res.render('shop', {products});
        } 
        
    });
     
}); 

module.exports = router;
