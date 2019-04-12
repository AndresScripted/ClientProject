/*global $*/
var randomCharacters = Math.floor(Math.random() * 20);
function characterChose(){
    /*var url = "https://rickandmortyapi.com/api/character/"*/
    $.ajax({
        url:"https://rickandmortyapi.com/api/character/",
        method: "GET",
        success: function(response){
        response.results.forEach(function(x){
         $("#main").append("<img src=" + x.image + ">" + "</img>");   
        });
        }
    });
    
    
}
characterChose();