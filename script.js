/*global $*/
console.log("hi");

function characterChose(){
    var characterSearch = $("#searchInput").val();
    var url = "https://rickandmortyapi.com/api/character/?name=" + characterSearch ;
    $.ajax({
        url: url,
        method: "GET",
        success: function(response){
            if(characterSearch && response.results[0].species === "Human"){
                $("#categoryOne").append("<img src=" + response.results[0].image + ">", "<h1>" + response.results[0].name + "</h1>");
            }
            else if(characterSearch && response.results[0].species === "unknown"){
                $("#categoryThree").append("<img src=" + response.results[0].image + ">", "<h1>" + response.results[0].name + "</h1>");
            }
            else if(characterSearch){
                $("#categoryTwo").append("<img src=" + response.results[0].image + ">", "<h1>" + response.results[0].name + "</h1>" + "Species:" + "<p>" + response.results[0].species + "</p>");
            }
            else{
                
            }
            
        }
    });
    
    
}


function randomCharacter(){
    var randomNum = Math.floor(Math.random() * 493) + 1;
    var url ="https://rickandmortyapi.com/api/character/" + randomNum;
    $.ajax({
        url: url,
        method: "GET",
        success: function(y){
            if(y.id === randomNum && y.species === "Human"){
                $("#categoryOne").append("<img src=" + y.image + ">" + "<h1>" + y.name + "</h1>");
            }
           
            else if(y.id === randomNum && y.species === "Alien"){
                $("#categoryThree").append("<img src=" + y.image + ">" + "<h1>" + y.name + "</h1>");
                
            }
            else if(y.id === randomNum && y.species !== "Alien"){
                $("#categoryTwo").append("<img src=" + y.image + ">" + "<h1>" + y.name + "</h1>" + "Species " + "<p>" + y.species + "</p>");
            }
        
        }
        
            
    });
    
    
    
    
}







$("#searchButton").click(function(){
    characterChose();
    
});


$("#randomCharac").click(function(){
   randomCharacter(); 
    
});

$("#locations").click(function(){
   window.location = "location-page.html"; 
    
});

$("#info").click(function(){
   window.location = "randomEP.html"; 
    
});