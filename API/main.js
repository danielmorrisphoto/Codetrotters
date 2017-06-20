$(document).ready(function() {
    $.get("http://swapi.co/api/films",null, fucntion(data,textStatus, jqHXR));
});