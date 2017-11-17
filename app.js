var express = require("express");
var bodyParser = require("body-parser");
const path = require("path");
// var request = require("request");

// //setting up the API url
// var urlAPI = "http://www.omdbapi.com/?s=" + movieSearching + "&apikey=thewdb";

var app = express();
//set static folder
app.use(express.static(__dirname + '/dist'));

//view engine
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');
app.engine('html',require('ejs').renderFile);
//body parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


var index = require('./routes/index');
app.use('/', index);

var task = require('./routes/task');
app.use('/api', task);

// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname + '../dist/index.html'));
// });

//setting up port
var port = 3000;
app.listen(port|| process.env.port, ()=>{
    console.log("Server is start at " + port);
});
