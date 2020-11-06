var fs = require('fs');
var path = require('path');

module.exports.show = function(req, res){

    var img1 ='';//filename
    var doc1 = ''//doc name
    var output = {};

    img1 ='/fileStorage/abc.png'
    doc1 = '/fileStorage/hello.txt'

    output['img'] = img1;
    output['doc'] = doc1;




    res.render('result', {
        title: 'Show result',
        result: output,
        pageHeader: {
            title: 'Summary'},
        pageFooter: {
            explain: 'copyright'}
    });

    console.log(output);

    

}

module.exports.result = function(req, res){
    
}