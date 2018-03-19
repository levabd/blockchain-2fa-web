# Blockchain 2FA Cabinet

Blockchain 2FA Cabinet is a system of management of clients of two-factor authentication service based on blockchain.

### Tech

Blockchain 2FA Cabinet uses a number of open source projects to work properly:

* [Angular] -  platform that makes it easy to build  applications with the web
* [Angular Material] - material design components for Angular
* [Angular CLI] - tool to initialize, develop, scaffold and maintain Angular applications
* [node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework [@tjholowaychuk]
* [nodemon] - reload node automatically after any code changes

Blockchain 2FA Cabinet [repository][git-repo-url] on GitHub.

### Installation

Blockchain-2fa-web requires [Node.js](https://nodejs.org/) v8+ to run.

Install the dependencies and devDependencies and start the server.

```sh
// Clone repository from github
$ git clone https://github.com/levabd/blockchain-2fa-web

// Install backend node modules
$ cd blockchain-2fa-web
$ npm install

// Install frontend(client) node modules
$ cd client
$ npm install

// Install Angular CLI
$ npm install -g @angular/cli

// Install nodemon
$ npm install -g nodemon
$ cd .. 

// run app
$ nodemon
```
Build Client production
```sh
// Build prod to folder ./public 
// or set path into ./client/angular-cli.json "outDir" env
$ cd client
$ ng build --env=prod
```
License
----
MIT

   [git-repo-url]: <https://github.com/levabd/blockchain-2fa-web.git>
   [Angular]: <https://angular.io/>
   [Angular CLI]: <https://cli.angular.io/>
   [Angular Material]: <https://material.angular.io/>
   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [@tjholowaychuk]: <http://twitter.com/tjholowaychuk>
   [express]: <http://expressjs.com>
   [nodemon]: <https://nodemon.io/>
