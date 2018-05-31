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



   $.ajax({
    type: 'GET',
    url: 'https://api.twitch.tv/kraken/streams/ninja',
    headers: {
      'Client-ID': 'ykbtvj4v513rrmj2ylqrd03pan0g8z'
    },
    success: function(data) {
      console.log(data);
    }
   });