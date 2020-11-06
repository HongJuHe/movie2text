var express = require('express');
var router = express.Router();
var ctrlresult = require('../controllers/result.js');
var ctrlupload = require('../controllers/upload.js');
var ctrlmain = require('../controllers/main.js');

/* GET home page. */
router.get('/', ctrlmain.show);

/* GET result page */
router.get('/result', ctrlresult.show);

/* GET upload page */
router.get('/upload', ctrlupload.show);
router.post('/upload',ctrlupload.check);
router.get('/upload/upurl',ctrlupload.formurl);
router.post('/upload/upurl',ctrlupload.upurl);
router.get('/upload/upfile',ctrlupload.formfile);
router.post('/upload/upfile', ctrlupload.upfile);

module.exports = router;
