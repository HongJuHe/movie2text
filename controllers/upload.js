var fs = require('fs');
var path = require('path');
var multer = require('multer');

module.exports.show = function(req, res) {
    res.render('upload', {
        title: 'upload',
        pageHeader: {
            title: 'upload'},
        pageFooter: {
            explain: 'copyright'}
    });
};

module.exports.check = function(req, res){
    
    if(req.body.chk == 'url_ch')
    {
        res.redirect('/upload/upurl');
    }
    else
    {
        res.redirect('/upload/upfile');  
    }
};

module.exports.formurl = function(req, res){
    res.render('upurl', {
        title:'upload url'
    });
};

module.exports.formfile = function(req, res) {
    res.render('upfile', {
        title:'upload file'
    });
}
module.exports.upurl = function(req, res){
    let url = req.body.url;
    //url 파이썬 파라미터 값으로 넘겨줄 것
    res.redirect('/result');
};

let dir = 'public/fileStorage/';
var storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, dir);
    },
    filename: function(req, file, cb){
        cb(null, file.originalname);
    }
});

var fileUpload = multer({
    storage:storage,
    limits:1024*1024*1024
}).any();

module.exports.upfile = function(req,res) {
    fileUpload(req, res, function(err) {
        if(err)
        {
            console.dir(err);
            return;
        }
    })
    res.redirect('/result');
};