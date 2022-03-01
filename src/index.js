const express = require('express');
var bodyParser = require('body-parser');

const route = require('./routes/route.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://Satyamraj:WwIvAQZOYHfo9RU5@satyamraj.wrqe4.mongodb.net/Satyamraj?authSource=admin&replicaSet=atlas-bw8r32-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true" , { useNewUrlParser: true})
     .then(() => console.log('mongodb running on 2707'))
	 .catch(err => console.log(err))
	 
app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
	console.log('Express app running on port ' + (process.env.PORT || 3000))
});
