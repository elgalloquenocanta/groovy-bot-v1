const fs = require("fs");
const snekfetch = require("snekfetch");

const config = JSON.parse(fs.readFileSync('./bot/json/config.json', 'utf8'));

module.exports.run = async (Client, msg, args) => {

    if(msg.author.id != "254892085000405004") return;

    var guild = Client.servers.get(msg.guild.id);

    texts = JSON.parse(fs.readFileSync( "./bot/json/lang/" + guild.language + ".json", 'utf8'));

    Client.shard.broadcastEval('this.functions.update(this);');    

    // save queue + proccess foreach player
    // save loop, loopqueue, shuffle, pause etc

    // add init with join etc
}