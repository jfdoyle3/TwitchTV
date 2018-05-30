//Script Page
// users: ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas","BlogetTV"]
//https://wind-bow.gomix.me/twitch-api
//
api="https://wind-bow.gomix.me/twitch-api/";
$.getJSON(api, function(data){
console.log(data);

});


// script page
// https://www.mediawiki.org/wiki/API:Main_page.
// API Sandbox: https://en.wikipedia.org/wiki/Special:ApiSandbox#action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=jsonfm


// Random Page Button
//$("#rPage").on("click", function () {
//    window.open("https://en.wikipedia.org/wiki/Special:Random");
//   });
//   
//   document.getElementById('search').addEventListener('click', function(){
//    var sText=document.getElementById('sBox').value
//   $("#results").empty();
//   
  var url="https://wind-bow.gomix.me/twitch-api/users/:BlodgetTV";    
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
   
   xhr.onload = function() {
   
       var data = JSON.parse(this.response);
    console.log(data.users);
   }
//     for (var i in data.query.pages) {
//       var title =data.query.pages[i].title;
//       
//       var link="https://en.wikipedia.org/wiki/"+title.replace(/[\s]/g, "_");
//       var tag="<a href="+link+">"+title+"</a>";
//       var sli=document.createElement("li");
//      sli.innerHTML=(tag);
//      document.getElementById("results").appendChild(sli);
//    }
//   }
//   
//   xhr.send();
//   
//   });