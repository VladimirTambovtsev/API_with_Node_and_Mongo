const express = require('express');
const bodyParser = require('body-parser');

const todoRoutes = require('./routes/todos');

app = express();


// Middleware 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views')); 


app.get('/', (req, res) => {
	res.sendFile('index.html');
});

// Routing '/api/todos/'
app.use('/api/todos/', todoRoutes);


const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`App is running on ${port}`);
});