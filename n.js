//подключаем Express
const express = require('express')
//инициализируем приложение
const app = express()
//задаем порт
const port = process.env.PORT || 8080
//подключаем роутер
const router = express.Router()
//устанавливаем статический путь html
app.use(express.static(`${__dirname}/dist`)) // set the static files location for the static html
//подключаем движок pug
app.engine('.html', require('ejs').renderFile)
//устанавливаем каталог 
app.set('views', `${__dirname}/dist`)

// создаем GET запрос по маршруту /get-config
router.get('/get-config', (req, res, next) => {
    // создаем объект config
  const config = {
      // указываем URL API
      API_URL: process.env.API_URL || 'http://localhost:3000/v1/api',
      // указываем URL VALIDATOR API
    VALIDATOR_API_URL: process.env.VALIDATOR_API_URL || 'http://sawtooth-validator-public:8008'
  };
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(config));
})
router.get('/*', (req, res, next) => {
  console.log('App running on port')
  res.sendFile(`${__dirname}/dist/index.html`)
})

app.use('/', router)
app.listen(port)
console.log('App running on port', port)

// .jshintrc
// {
// 	"node": true, // Enable globals available when code is running inside of the NodeJS runtime environment.
// 	"mocha": false, // Enable globals available when code is running inside of the Mocha tests.
// 	"jasmine": false, // Enable globals available when code is running inside of the Jasmine tests.
// 	"browser": true, // Standard browser globals e.g. `window`, `document`.
// 	"esnext": true, // Allow ES.next specific features such as `const` and `let`.
// 	"bitwise": false, // Prohibit bitwise operators (&, |, ^, etc.).
// 	"camelcase": false, // Permit only camelcase for `var` and `object indexes`.
// 	"curly": false, // Require {} for every new block or scope.
// 	"eqeqeq": true, // Require triple equals i.e. `===`.
// 	"immed": true, // Require immediate invocations to be wrapped in parens e.g. `( function(){}() );`
// 	"latedef": false, // Prohibit variable use before definition.
// 	"newcap": true, // Require capitalization of all constructor functions e.g. `new F()`.
// 	"noarg": true, // Prohibit use of `arguments.caller` and `arguments.callee`.
// 	"quotmark": "single", // Define quotes to string values.
// 	"regexp": true, // Prohibit `.` and `[^...]` in regular expressions.
// 	"undef": true, // Require all non-global variables be declared before they are used.
// 	"unused": false, // Warn unused variables.
// 	"strict": true, // Require `use strict` pragma in every file.
// 	"trailing": true, // Prohibit trailing whitespaces.
// 	"smarttabs": false, // Suppresses warnings about mixed tabs and spaces
// 	"globals": { // Globals variables.
// 		"angular": true
// 	},
// 	"predef": [ // Extra globals.
// 		"inject",
// 		"by",
// 		"browser",
// 		"element"
// 	],
// 	"indent": 2, // Specify indentation spacing
// 	"devel": false, // Allow development statements e.g. `console.log();`.
// 	"noempty": true // Prohibit use of empty blocks.
// }