var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var fs = require('fs');
var path = require('path');
var favicon = require('serve-favicon');
var readline = require('readline');
var os = require('os');

var app = require('./app');
var dhn_server = http.createServer(app);

dhn_server.on("error",function(e){
	if(e.code == "EADDRINUSE"){
		console.log(chalk.red.bold("		Error in Starting Server : ") + "Port number " + chalk.grey.bold(app.get('port')) + " is in Use, Please change the port number in " + chalk.grey.bold("config.js"));
		process.exit(0);
	}
})
var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'

dhn_server.listen(server_port, server_ip_address, function () {	
	console.log( "Listening on " + server_ip_address + ", port " + server_port )
});
/*
var readerStream = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var askAndExit = function(){
	readerStream.question('\nAre you sure you want to exit (yes/no) ?', function(answer){
		if(answer.match(/^y(es)?$/i)) {
			dhn_server.close();
			process.exit(0);		
		} else if(!answer.match(/^n(o)?$/i)){
			askAndExit();
		}
	});
}

readerStream.on('SIGINT',function(){
	askAndExit();
});
*/
