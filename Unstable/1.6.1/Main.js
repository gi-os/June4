//Developed by Gi-OS


var Discordie = require("discordie");
var Events = Discordie.Events;
const Commands = require('./Unstable/1.6.1/Commands.js').Commands
const Variables = require('./Unstable/1.6.1/Variables.js').Variables
var client = new Discordie({

  autoReconnect: true,
});


client.connect({
	token: token

});

client.Dispatcher.on(Events.GATEWAY_READY, e => {
