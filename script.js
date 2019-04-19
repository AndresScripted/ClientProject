/*global $*/
console.log("hi");
var randomCharacters = Math.floor(Math.random() * 20);


function characterChose(){
    var characterSearch = $("#searchInput").val();
    var url = "https://rickandmortyapi.com/api/character/?name=" + characterSearch ;
    $.ajax({
        url: url,
        method: "GET",
        success: function(response){
            if(response.results[0].species === "Human"){
                $("#categoryOne").append("<img src=" + response.results[0].image + ">", response.results[0].name);
            }
            else if(response.results[0].species === "unknown"){
                $("#categoryThree").append("<img src=" + response.results[0].image + ">", response.results[0].name);
            }
            else if(response.results[0].species === "Alien"){
                $("#categoryTwo").append("<img src=" + response.results[0].image + ">", response.results[0].name);
            }
            
        }
    });
    
    
}

$("#searchButton").click(function(){
    characterChose();
    
});

function famousLocations(){
    var locationUrl = "https://rickandmortyapi.com/api/location/";
    $.ajax({
        url: locationUrl,
        method: "GET",
        success: function(response){
        $("body").append(response.results.name);  
            console.log(response.results.name);
        }
    
});

    
}

$("#locations").click(function(){
    famousLocations();
    
});