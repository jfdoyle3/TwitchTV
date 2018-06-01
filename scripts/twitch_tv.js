//Script Page
// users: ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas","BlogetTV"]
//https://wind-bow.gomix.me/twitch-api
//https://wind-bow.glitch.me/twitch-api/users/BlodgetTV  - user dataset
//https://wind-bow.glitch.me/twitch-api/streams/BlodgetTV - stream data
//https://wind-bow.glitch.me/twitch-api/channels/dota2     - game channel
//
//$.ajax({
//    type: 'GET',
//    url: 'https://api.twitch.tv/kraken/channels/twitch',
//    headers: {
//      'Client-ID': 'ykbtvj4v513rrmj2ylqrd03pan0g8z'
//    },
//    success: function(data) {
//      console.log(data);
//    }
//   });
var usr=[ "ninja","BlodgetTV", "cretetion", "storbeck", "OgamingSC2"];
for (i in usr){
	// Users 
   $.ajax({
    type: 'GET',
    url: 'https://api.twitch.tv/kraken/channels/'+usr[i],
    headers: {
      'Client-ID': 'ykbtvj4v513rrmj2ylqrd03pan0g8z'
    },
    success: function(users) {
    console.log(users);
    var eLi= document.createElement("li");
    var uName="<a href="+users.display_name+"></a>";
    var aImg="<img id='logo' src="+users.logo+">";
    var aTag="<a href="+users.url+">"+users.display_name+"</a>";
    eLi.innerHTML=(aImg+" "+aTag);
    document.getElementById("uList").appendChild(eLi); 

    }
   });
   
   // streams
  // $.ajax({
  //  type: 'GET',
  //  url: 'https://api.twitch.tv/kraken/streams/'+usr[i],
  //  headers: {
  //    'Client-ID': 'ykbtvj4v513rrmj2ylqrd03pan0g8z'
  //  },
  //  success: function(strm) {
  //    console.log(strm);
  //    if (strm.user == null) {
//
  //    }
  //  }
  // });
   
   // channels
 //  $.ajax({
 //   type: 'GET',
 //   url: 'https://api.twitch.tv/kraken/users/'+usr[i],
 //   headers: {
 //     'Client-ID': 'ykbtvj4v513rrmj2ylqrd03pan0g8z'
 //   },
 //   success: function(user) {
 //     console.log();
 //     var p=usr.pop();
 //     $("#"+p).append("<img src="+user.logo+">");
 //   }
 //  });
 };
