const D1 = require('discord.js');
const D2 = require('discord.js');
const D3 = require('discord.js');
const D4 = require('discord.js');
const D5 = require('discord.js');


const p1 = new D1.Client();
const p2 = new D2.Client();
const p3 = new D3.Client();
const p4 = new D4.Client();
const p5 = new D5.Client();



    console.log("oNNN1");
p1.on('guildMemberAdd', member => {
    p1.user.setGame(`Deluxe`,'https://www.twitch.tv/MeeRcY')

});



    console.log("oNNN2");
p2.on('guildMemberAdd', member => {
    p2.user.setGame(`Deluxe`,'https://www.twitch.tv/MeeRcY')

});



      console.log("oNNN3");
p3.on('guildMemberAdd', member => {
    p3.user.setGame(`Deluxe`,'https://www.twitch.tv/MeeRcY')

});



    console.log("oNNN3");
p4.on('guildMemberAdd', member => {    
    p4.user.setGame(`Deluxe`,'https://www.twitch.tv/MeeRcY')

});


    console.log("oNNN3");
p5.on('guildMemberAdd', member => {
    p5.user.setGame(`Deluxe`,'https://www.twitch.tv/MeeRcY')

});







p1.login(process.env.B1);
p2.login(process.env.B2);
p3.login(process.env.B3);
p5.login(process.env.B4);
p5.login(process.env.B5);

