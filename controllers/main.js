/* GET 'Main' page */
module.exports.show = function(req, res) {
    res.render('layout', {
        title: 'main',
        pageHeader: {
            title: 'Unity'},
        pageFooter: {
            explain: 'copylight'}
    });
};