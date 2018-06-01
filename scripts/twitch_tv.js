//Script Page
// users: ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas","BlogetTV"]
//https://wind-bow.gomix.me/twitch-api
//https://wind-bow.glitch.me/twitch-api/users/BlodgetTV  - user dataset
//https://wind-bow.glitch.me/twitch-api/streams/BlodgetTV - stream data
//https://wind-bow.glitch.me/twitch-api/channels/dota2     - game channel
//
var usr=[ "ninja","BlodgetTV", "cretetion", "storbeck", "OgamingSC2"];
for (i in usr){
	// Users 
   $.ajax({
    type: 'GET',
    url: 'https://api.twitch.tv/kraken/channels/'+usr[i],
    headers: {
      'Client-ID': 'ykbtvj4v513rrmj2ylqrd03pan0g8z'
    },
    success: function(chanl) {
  //    console.log(chanl);
//   var eLi= document.createElement("li");
//   var uName="<a href="+chanl.display_name+"></a>";
//   var aImg="<img id='logo' src="+chanl.logo+">";
//   var aTag="<a href="+chanl.url+">"+chanl.display_name+"</a>";
//   eLi.innerHTML=(aImg+" "+aTag);
//   document.getElementById("uList").appendChild(eLi); 
   
   // stream
    $.ajax({
   type: 'GET',
   url: 'https://api.twitch.tv/kraken/streams/'+usr[i],
   headers: {
      'Client-ID': 'ykbtvj4v513rrmj2ylqrd03pan0g8z'
    },
  success: function(strm) {
    console.log(strm);
    var on="<p id='on'>online</p>";
    var off="<p id='off'>offline</p>";
    var eLi= document.createElement("li");
    console.log(usr[i]);
  //  console.log(strm.stream.stream_type);
    





    var uName="<a href="+chanl.display_name+"></a>";
    var aImg="<img id='logo' src="+chanl.logo+">";
    var aTag="<a href="+chanl.url+">"+chanl.display_name+"</a>";
     eLi.innerHTML=(aImg+" "+aTag);
     document.getElementById("uList").appendChild(eLi); 
















   }
  });
 }
});
}