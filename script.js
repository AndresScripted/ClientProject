/*global $*/
console.log("hi");

var randomCharacters = Math.floor(Math.random() * 20);
console.log(randomCharacters);

function characterChose(){
    var characterSearch = $("#searchInput").val();
    var url = "https://rickandmortyapi.com/api/character/?name=" + characterSearch ;
    $.ajax({
        url: url,
        method: "GET",
        success: function(response){
            if(characterSearch && response.results[0].species === "Human"){
                $("#categoryOne").append("<img src=" + response.results[0].image + ">", response.results[0].name);
            }
            else if(characterSearch && response.results[0].species === "unknown"){
                $("#categoryThree").append("<img src=" + response.results[0].image + ">", response.results[0].name);
            }
            else if(characterSearch){
                $("#categoryTwo").append("<img src=" + response.results[0].image + ">", response.results[0].name + "Species:" + response.results[0].species);
            }
            else{
                
            }
            
        }
    });
    
    
}

$("#searchButton").click(function(){
    characterChose();
    
});




