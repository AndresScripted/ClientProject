/*global $*/
var planetImgs = ["https://vignette.wikia.nocookie.net/rickandmorty/images/9/9a/Rick-and-morty-rick-potion-number-9-cronenbergs-1280px.jpg/revision/latest?cb=20150915150520",
"https://vignette.wikia.nocookie.net/rickandmorty/images/7/7e/Cluster_Princess.png/revision/latest?cb=20171005033852", "https://vignette.wikia.nocookie.net/rickandmorty/images/9/9b/Citadelofricksunderrepair.png/revision/latest?cb=20170911051434", 
"https://vignette.wikia.nocookie.net/rickandmorty/images/d/d2/Screen_shot_2017-08-12_at_10.51.18_PM.png/revision/latest?cb=20170813035257", 
"https://vignette.wikia.nocookie.net/rickandmorty/images/d/d3/Anatomy_Park_7.png/revision/latest?cb=20160913082442", "https://vignette.wikia.nocookie.net/rickandmorty/images/1/11/IMG_1158.JPG/revision/latest?cb=20161208160658", 
"https://vignette.wikia.nocookie.net/rickandmorty/images/3/39/S3e5_resort.png/revision/latest?cb=20171119203200", "https://vignette.wikia.nocookie.net/rickandmorty/images/f/f4/Post-Apocalyptic_World.png/revision/latest?cb=20170731153609",
"https://vignette.wikia.nocookie.net/rickandmorty/images/6/6a/Purge_Planet.jpg/revision/latest?cb=20151015032417", "https://vignette.wikia.nocookie.net/rickandmorty/images/5/55/S3E8_alien_sunset.png/revision/latest?cb=20180217153421", 
"https://vignette.wikia.nocookie.net/rickandmorty/images/e/eb/Bepisians_Shrimply_Pibbles.jpg/revision/latest?cb=20170416131318", "https://vignette.wikia.nocookie.net/rickandmorty/images/b/b2/S1e6_cronenberg_russia.png/revision/latest?cb=20160910175754", 
"https://vignette.wikia.nocookie.net/rickandmorty/images/6/60/Nuptia4.png/revision/latest?cb=20160111194542", "https://vignette.wikia.nocookie.net/rickandmorty/images/d/df/Fantasyplanet.png/revision/latest?cb=20170426230053", 
"https://vignette.wikia.nocookie.net/rickandmorty/images/d/df/Fantasyplanet.png/revision/latest?cb=20170426230053", "https://vignette.wikia.nocookie.net/rickandmorty/images/2/2e/S2e5_bird_world.png/revision/latest?cb=20160926033803", 
"https://vignette.wikia.nocookie.net/rickandmorty/images/0/02/S3e1_StGloopyNoopsHospital.png/revision/latest?cb=20170330224658", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Flag_of_None.svg/1280px-Flag_of_None.svg.png", 
"https://i.ytimg.com/vi/d89nx_yh3po/maxresdefault.jpg", "https://vignette.wikia.nocookie.net/rickandmorty/images/2/20/GromflomOpen.png/revision/latest?cb=20170413102849", 
"https://vignette.wikia.nocookie.net/rickandmorty/images/0/00/Replacementpaper.png/revision/latest?cb=20160910183706"];




console.log("hi");

function famousLocations(){
var randomPlanet = Math.floor(Math.random() * 20);
randomPlanet = randomPlanet + 1;
/* = planetImgs[randomPlanet];*/

    var locationUrl = "https://rickandmortyapi.com/api/location/"+ randomPlanet;
    console.log(locationUrl);
    $.ajax({
        url: locationUrl,
        method: "GET",
        success: function(x){
            $("#main").append("<img src=" + planetImgs[randomPlanet - 1] + ">" + x.name);
            console.log(planetImgs[randomPlanet]);
            console.log(x.name);
            console.log(randomPlanet);
        }
    });
}

$("#displayImg").click(function(){
   famousLocations(); 
   $("img").css("border", "red");
    
});