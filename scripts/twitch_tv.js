//Script Page
//https://wind-bow.gomix.me/twitch-api
//https://wind-bow.glitch.me/twitch-api/users/BlodgetTV  - user dataset
//https://wind-bow.glitch.me/twitch-api/streams/BlodgetTV - stream data
// users: ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas","BlogetTV"]
//https://wind-bow.glitch.me/twitch-api/channels/dota2     - game channel
//

var usr=["BlodgetTV", "ninja", "storbeck", "OgamingSC2"];
for (i=0; i<usr.length; i++){
	// Users 
   $.ajax({
    type: 'GET',
    url: 'https://api.twitch.tv/kraken/channels/'+usr[i],
    headers: {
      'Client-ID': 'ykbtvj4v513rrmj2ylqrd03pan0g8z'
    },
    async: false,
    success: function(chanl) { 
    
   // stream
    $.ajax({
   type: 'GET',
   url: 'https://api.twitch.tv/kraken/streams/'+usr[i],
   headers: {
      'Client-ID': 'ykbtvj4v513rrmj2ylqrd03pan0g8z'
    },
  success: function(strm) {
    var on="<p id='on'>online</p>";
    var off="<p id='off'>offline</p>";
    var eLi= document.createElement("li");
    var uName="<a href="+chanl.display_name+"></a>";
    var aImg="<img id='logo' src="+chanl.logo+">";
    var game=chanl.game;
    var aTag="<a target='_blank' href="+chanl.url+">"+chanl.display_name+"</a>";
  if( strm.stream === null) {
    eLi.innerHTML=(aImg+" "+aTag+off);
  } else {
  eLi.innerHTML=(aImg+" "+aTag+" Playing: "+game+on);
  }
    document.getElementById("uList").appendChild(eLi); 
    }
  });
 }
});
}