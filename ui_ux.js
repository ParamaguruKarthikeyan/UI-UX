var app = require('./app');
var config = require('./config')
app.on("error",function(e){
	if(e.code == "EADDRINUSE"){
		console.log(chalk.red.bold("		Error in Starting Server : ") + "Port number " + chalk.grey.bold(app.get('port')) + " is in Use, Please change the port number in " + chalk.grey.bold("config.js"));
		process.exit(0);
	}
});
var server_port = process.env.PORT || config.port;

app.listen(server_port, function () {	
	console.log( "Started ui-ux at http://localhost:" + config.port)
});
