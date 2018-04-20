const ENV = require('./config/environment');

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');

// Connect To Database
mongoose.Promise = require('bluebird');
mongoose.connect(ENV.DATABASE, {
    useMongoClient: true,
    promiseLibrary: require('bluebird')
  })
  .then(() => console.log(`Connected to database ${ENV.DATABASE}`))
  .catch((err) => console.log(`Database error: ${err}`));

const app = express();

const users = require('./routes/users.route');
const api = require('./routes/api.route');



var logFilePath = path.join(__dirname, `./logs/file.log`);
require('./middleware/console-log2file');
console.file(logFilePath);

// CORS Middleware
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.json());

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users);
app.use('/api', api);

// Index Route
app.get('/', (req, res) => {
  res.send('invaild endpoint');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Start Server
app.listen(ENV.PORT, () => {
  console.log('Server started on port ' + ENV.PORT);
});

//  console.file(); // go back to writing to stdout