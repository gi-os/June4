//Developed by Gi-OS


var Discordie = require("discordie");
var Events = Discordie.Events;
var client = new Discordie({
  autoReconnect: true,
});

//version
var version = "v1.6 // Hosted by Gi-OS Servers"; //version of june
//Other important things
var test = "FALSE"; //Is this bot avaliable for public use?
var number = randomIntFromInterval(1,100);
var token = "Mjg2Mjg4MjE0OTI5NTcxODQw.C7rs_A.PGSliK5snru2JoSpTfqm3W_CGDM"
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
