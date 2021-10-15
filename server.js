const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
var cors = require('cors')
const bodyParser = require('body-parser');
const port = 3000;
const router = require('./modules/routes');
const fileUpload = require('express-fileupload');

process.env.TZ = 'Asia/Kuwait';
process.on('uncaughtException', e =>
  console.error(new Date(), 'uncaughtException', e),
);
/* file upload */
var multer = require('multer');
var path = require('path');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/mediafiles')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)) //Appending extension
  }
})
var upload = multer({ storage: storage });


app.use(express.static('public'));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json({ limit: process.env.REQUEST_LIMIT || '100kb' }));
app.use(cors());

//for multiple file upload
app.post('/mediafiles', upload.array('uploaded_file'), function (req, res, next) {
  next();
});
app.use(router);
app.use('/public/user_files', express.static(__dirname + '/public/user_files'));
app.listen(port, () => {
  console.log('Listening to port number ' + port + ' ...');
})
