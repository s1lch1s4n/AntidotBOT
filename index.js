const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NjA3NTI5NTgwNzIyNTIwMDc0.XUbjfg.KNNIXguuAF3ljZojFlBP_ia8UWs';

bot.on('ready', () =>{
  var testChannel = bot.channels.get('605164603986542592');

  console.log('Botul a pornit');

  const myEmoji = bot.emojis.get('607268096427687947');
  
  setInterval(() => {
    testChannel.send("<:CODANT1R:588505839514419200> SALUT BAIETI! <:okk:588505291176411143> Precum stiti si voi, codul meu Support-a-Creator este **ANT1R**! Folositi codul **ANT1R** cand achizitionati ceva din ITEM SHOP daca vreti sa ma sustineti! <:wtf5:528384462229340163> <:greentick:588504076015370260>");
  }, 3600000);
})

bot.login(token);