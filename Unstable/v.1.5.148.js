//Developed by Gi-OS


var Discordie = require("discordie");
var Events = Discordie.Events;
var client = new Discordie({
  autoReconnect: true,
});

//version
var version = "v1.5.148 // Hosted by Gi-OS Servers"; //version of june
//Other important things
var test = "FALSE"; //Is this bot avaliable for public use?
var number = randomIntFromInterval(1,100);
var token = "Mjg2Mjg4MjE0OTI5NTcxODQw.C5eiPg.-Q2fmuIV_34LLCt87KeMFI8uraQ"
//users name
var owner = "Giovanni Lupo"; //Your full name
var ownerwake = "gio" //Your Nick Name Lowercase
var ownernick = "Gio" //Your Nick Name Uppercase
var ownerusername = "@Gi-OS" //Your User Name
var ownerid = "279447694240382977" //Your ID
//company
var co = "Gi-OS" //your company name!
//Bot's Name
var wake = "june";//lowercase, wake word ("june" boot)
var nick = "June"; //Nick name (Hi! I'm "June"!)
var name = "June4";//Full name ("June4" Now powering on...)
//other vars are somewhere else in the code (sorry! it only works there!)
function randomIntFromInterval(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

client.connect({
	token: token

});

client.Dispatcher.on(Events.GATEWAY_READY, e => {

	//terminal text
	setTimeout(function(){
	console.log("     ██ ██    ██ ███    ██ ███████ ██   ██ "),
	console.log("     ██ ██    ██ ████   ██ ██      ██   ██ "),
	console.log("     ██ ██    ██ ██ ██  ██ █████   ███████ "),
	console.log("██   ██ ██    ██ ██  ██ ██ ██           ██ "),
	console.log(" █████   ██████  ██   ████ ███████      ██ ");

	console.log("Booting, Please wait...");
	setTimeout(function(){
	console.log("════════════");
  console.log(client.User.username + " is now awake");
	console.log("════════════");
	setTimeout(function(){
	console.log("Info:");
	setTimeout(function(){
	console.log(version+" is currently running");
	setTimeout(function(){
	console.log("My name is "+name);
	setTimeout(function(){
	console.log("My owner is "+owner);
	setTimeout(function(){
	console.log("Built by Gi-OS inc.");
	setTimeout(function(){
	console.log("All systems nominal");
	setTimeout(function(){
	console.log("════════════");
	setTimeout(function(){
	console.log("Version is allowed for commercial use: "+test);
	setTimeout(function(){
	console.log("Identifier Number: "+number);
	setTimeout(function(){
	console.log("════════════");
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
}, 100);
}, 1000);
}, 4000);
}, 00);
client.Users.get(ownerid).openDM().then(function(dm) {
	dm.sendMessage("", false, {
		color: 0x30bdff,
		author: {

			name: ""
		},

		fields: [{
			name: "Good morning "+ownernick+", "+name+" is now online!",
			value: "\n```     ██ ██    ██ ███    ██ ███████     \n     ██ ██    ██ ████   ██ ██ \n     ██ ██    ██ ██ ██  ██ █████"
			+"\n██   ██ ██    ██ ██  ██ ██ ██ \n █████   ██████  ██   ████ ███████   ```- Identifier number: "+number +"\n-"+ version,
		}],
		footer: {
			text: " - Developed by "+co+" inc."
		}

	});
});
	//current game running
	client.User.setGame("Ask me for Help!");
});
client.Dispatcher.on(Events.MESSAGE_CREATE, e => {


//CONVERSATION
	//Hello
	if (e.message.content.toLowerCase() == wake + " hello") {
		e.message.channel.sendMessage("Hi, its good to see you!");

		//Wake
	} else if (e.message.content.toLowerCase() == wake + " wake") {
		e.message.channel.sendMessage("I'm awake!");

		//thanks
	} else if (e.message.content.toLowerCase().includes("thank")) {
		if (e.message.content.toLowerCase().includes(wake + "")) {
			e.message.channel.sendMessage("Anytime!");
		} else {}

//FANCY COMMANDS
		//Status
	} else if (e.message.content.toLowerCase().startsWith(wake + " stat")) {
		e.message.channel.sendMessage("", false, {
			color: 0xf441c4,
			author: {

				name: name + " Status Menu"
			},

			fields: [{
				name: name + " " + version,
				value: "Database: Connected \nServers: Running\nPersonality: Online\n"+ name +": Ready!"+"\nIdentifier number: "+ number

			}],
			footer: {
				text: "Developed by "+co+" inc. "
			}
		});

		//about
	} else if (e.message.content.toLowerCase().startsWith(wake + " about")) {
		e.message.channel.sendMessage("", false, {
			color: 0x30bdff,
			author: {

				name: "About me:"
			},

			fields: [{
				name: "I'm "+ name +" " + version + ",",
				value: "Hi i'm "+ nick +", " + owner + "'s personal assistant, but I can still serve you!  Do you need any help today?"

			}],
			footer: {
				text: "Developed by "+co+" inc "
			}
		});


		//Boot
	} else if (e.message.content.toLowerCase() == wake + " boot") {
		e.message.channel.sendMessage("", false, {
			color: 0x8ff442,
			author: {

				name: name +  " Boot Menu"
			},

			fields: [{
				name: "Good Morning!",
				value: "-Game Name set. \n-Functions ready. \n-Conection to "+owner+" found.\n-Personality Installed \n-"+"Identifier number: "+number +"\n-"+ version

			}],
			footer: {
				text: " - "+ name +" built by "+co+" ©2017 "
			}
		});


		//tell owner

	} else if (e.message.content.toLowerCase().startsWith(wake + " tell "+ownerwake)) {


		e.message.channel.sendMessage("OK, I have notified "+ownernick, false, {
			color: 0x30bdff,
			author: {

				name: ""
			},

			fields: [{
				name: "Message Attached Below",
				value: e.message.content
			}],
			footer: {
				text: " - It seemed important, "+ nick
			}
		}),

		client.Users.get(ownerid).openDM().then(function(dm) {
			dm.sendMessage("<@" + e.message.member + ">" + " has sent you a message.", false, {
				color: 0x30bdff,
				author: {

					name: "---"
				},

				fields: [{
					name: "Message Attached Below",
					value: e.message.content
				}],
				footer: {
					text: " - It seemed important, "+ nick
				}

			});
		});

		//note
	} else if (e.message.content.toLowerCase().startsWith(wake + " note")) {
		e.message.channel.sendMessage("", false, {
			color: 0xf4aa42,
			author: {

				name: " "
			},

			fields: [{
				name: "A note has been made!",
				value: "⠀"
			}],
			footer: {
				text: " - I sent it to you, "+ nick
			}
})

e.message.author.openDM().then(function(dm) {
                dm.sendMessage("", false, {
                  color: 0xf4aa42,
                  author: {

                                  name: "You requested that a note was made,"
                              },

                              fields: [{
                              name: "Your note said",
                                  value:e.message.content
                              }],
                              footer: {
                                  text: " - I saved it for you, June"
                              }
                          })
});


		//open notes
	} else if (e.message.content.toLowerCase().startsWith(wake + " check note")) {

		e.message.channel.sendMessage("", false, {
			color: 0x30bdff,
			author: {

				name: "Looking Up notes..."
			},

			fields: [{
				name: "Please Wait",
				value: "It will take a few moments."
			}],
			footer: {
				text: " - I'm looking it up for you, "+ nick
			}
		});


		//help menu
	} else if (e.message.content.includes(wake + " help")) {
		e.message.channel.sendMessage("", false, {
			color: 0x30bdff,
			author: {

				name: name + " Help Menu"
			},

			fields: [{
				name: "Commands",
				value: "-"+nick+" Help\t\"Opens Help Menu\" \n-"+ nick+" Status\t\""+nick+" gives status on systems\" \n-"+nick+" Boot\t\"Opens Boot Menu\"\n-"+nick+" About\t\"Short bio of "+nick
				+"\"\n-"+nick+" Tell "+ownernick+" (XXX)\t\""+nick+" sends message to "+ownerusername+"\"\n-"+nick+" note (XXX)\t\""+nick+" sends you a note.\"\n-"
				+nick+" Terminate\t\"Force shut down of "+nick+" (only owner can use this)\"\n-"+ nick + " Reboot\t\"reboots "+ nick+ " incase of errors (only owner can use this)\"\n-"+nick+" Disconnect\t\"Disconnects "+nick+" from database (only owner can use this)\""

			}],
			footer: {
				text: "Extras: "+nick+" hello/"+nick+" wake/Thanks "+nick
			}
		});

//BETA COMMANDS
} else if (e.message.content.toLowerCase().includes(wake + " test")) {

e.message.channel.sendMessage("", false, {
	color: 0x30bdff,
	author: {

		name: ""
	},

	fields: [{
		name: "They are online!",
		value: number
	}],
	footer: {
		text: " - I found them, "+ nick
	}
});


		//ADMIN COMMANDS
		//disconnect
	} else if (e.message.content.toLowerCase().startsWith(wake + " disconnect")) {
		if (e.message.author == client.Users.get(ownerid)) {
			e.message.channel.sendMessage("", false, {
				color: 0xf44242,
				author: {

					name: name +" is now disconnecting"
				},

				fields: [{

					value: "I enjoyed our conversation!",
					name: "Goodbye"
				}],
				footer: {
					text: " - "+ name +" built by "+co+" ©2017 "
				}
			});
			console.log(client.User.username + " is now being disconnected.");
			setTimeout(function() {
				client.disconnect({
					token: token
				});

			}, 500);
			setTimeout(function() {
				console.log(client.User.username + " is now disconnected.");
			}, 1000);

		} else {
					console.log("someone tried to disconnect me!");
			e.message.channel.sendMessage("", false, {
				color: 0xf44242,
				author: {

					name: "You do not have permission to run this command"
				},

				fields: [{

					value: "The process will not continue",
					name: "Only "+ownerusername+" can use this command."
				}],
				footer: {
					text: " - "+ name +" built by "+co+" ©2017 "
				}
			});
		}
		//reboot
	} else if (e.message.content.toLowerCase().startsWith(wake + " reboot")) {
		if (e.message.author == client.Users.get(ownerid)) {
			e.message.channel.sendMessage("", false, {
				color: 0xf44242,
				author: {

					name: name +" is now rebooting."
				},

				fields: [{

					value: "The reboot process will take a few seconds.",
					name: "I\'ll see you soon!"
				}],
				footer: {
					text: " - "+ name +" built by "+co+" ©2017 "
				}
			});
			console.log(client.User.username + " is now rebooting.");
			setTimeout(function() {

				client.disconnect({
					token: token
				});

			}, 500);
			setTimeout(function() {
				client.connect({
					token: token
				});
				e.message.channel.sendMessage("", false, {
					color: 0x8ff442,
					author: {

						name: name +" Reboot Menu"
					},

					fields: [{
						name: "Good Morning!",
						value: "-Game Name set. \n-Functions ready. \n-Conection to "+owner+" found.\n-Personality Installed\n-" + version

					}],
					footer: {
						text: " - "+ name +" built by "+co+" ©2017 "
					}
				});
			}, 10000);

		} else {
					console.log("someone tried to reboot me!");
			e.message.channel.sendMessage("", false, {
				color: 0xf44242,
				author: {

					name: "You do not have permission to run this command"
				},

				fields: [{

					value: "The process will not continue",
					name: "Only "+ownerusername+" can use this command."
				}],
				footer: {
					text: " - "+ name +" built by "+co+" ©2017 "
				}
			});
		}
		//terminate (important:very dangerous command, hard crashes the system.)
	} else if (e.message.content.toLowerCase().startsWith(wake + " terminate")) {

if (e.message.author == client.Users.get(ownerid)) {
		if (e.message.content.toLowerCase().includes(number)) {
			if (e.message.author == client.Users.get(ownerid)) {
			e.message.channel.sendMessage("", false, {
				color: 0xf44242,
				author: {

					name: ""+ name +" is now force closing"
				},

				fields: [{

					value: "Will I Dream?",
					name: "Goodnight"
				}],
				footer: {
					text: " - "+ name +" built by "+co+" ©2017 "
				}
			});
			console.log(client.User.username + " is now closing.");
			setTimeout(function() {
				killswitch();
			}, 500);
		} else {
					console.log("someone tried to terminate me!");
			e.message.channel.sendMessage("", false, {
				color: 0xf44242,
				author: {

					name: "You do not have permission to run this command"
				},

				fields: [{

					value: "The process will not continue",
					name: "Only "+ownerusername+" can use this command."
				}],
				footer: {
					text: " - "+name+" built by "+co+" ©2017 "
				}
			});
		}

} else {
	e.message.channel.sendMessage("", false, {
		color: 0xf44242,
		author: {

			name: ""+ name +" Identifier Number not given"
		},

		fields: [{

			value: "My Identifier Number: "+number,
			name: "⠀"
		}],
		footer: {
			text: " - "+ name +" built by "+co+" ©2017 "
		}
	});
}

} else {
  console.log("someone tried to terminate me!");
e.message.channel.sendMessage("", false, {
color: 0xf44242,
author: {

  name: "You do not have permission to run this command"
},

fields: [{

  value: "The process will not continue",
  name: "Only "+ownerusername+" can use this command."
}],
footer: {
  text: " - "+name+" built by "+co+" ©2017 "
}
});
}


	} else {}
setInterval(function(){
  console.log(client.User.username + " is now doing a refresh");
	client.Users.get(ownerid).openDM().then(function(dm) {
	dm.sendMessage("", false, {
		color: 0x30bdff,
		author: {

			name: ""
		},

		fields: [{
			name: "June is now doing a refresh",
                        value:"Please wait...",
		}],
		footer: {
			text: " - Developed by "+co+" inc."
		}

	});
});
      setTimeout(function() {

        client.disconnect({
          token: token
        });

      }, 100);
      setTimeout(function() {
        client.connect({
          token: token
        });


   }, 500);
 }, 51840000);

});
