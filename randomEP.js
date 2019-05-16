/*global $*/

$("#homeBtn").click(function(){
    window.location = "index.html"; 
    
});

function getRandomEP(){
var randomNum = Math.floor(Math.random() * 31) + 1;
console.log(randomNum);
var randomEPUrl = "https://rickandmortyapi.com/api/episode/" + randomNum;

 $.ajax({
        url: randomEPUrl,
        method: "GET",
        success: function(x){
            var ep = "https://rickandmorty.fandom.com/wiki/" + x.name;
            console.log(ep);
            $("#main").append("<h1>" + x.name + "</h1>", "<h2>" + "Air Date: " + x.air_date + "</h2>", "<h2>" + "Episode: " + x.episode + "</h2>", "<a href=" + ep + ">" + "Episode Info" + "</a>");
        }
    });
}

$("#displayEP").click(function(){
   getRandomEP(); 
    
});