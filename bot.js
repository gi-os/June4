var Discordie = require('discordie');
const Events = Discordie.Events;
const client = new Discordie();
client.connect({
token: 'Mjg2Mjg4MjE0OTI5NTcxODQw.C5eiPg.-Q2fmuIV_34LLCt87KeMFI8uraQ'
});
client.Dispatcher.on(Events.GATEWAY_READY, e => {
console.log('Connected as ' + client.User.Username);
});
if(e.message.content == 'PING') {
e.message.channel.sendMessage('PONG')
}
});
