$(document).ready(function(){
    $(".event-image").fadeIn();
    $(".buy").fadeIn();
});

$("#date h3").mouseenter(function(){
    $(this).css("color", "#f1c40f");
})

$("#date h3").mouseleave(function(){
    $(this).css("color", "white");
})


$(function() {
    var ticketSale = function() {
        var vName = prompt("Enter your Name": string);
        var vEmail = prompt("Email": string);
        var vQuantity = prompt("Ticket quantity": number);
    }
});

$("#buy-ticket").click(ticketSale);




// $(function() {
//     var ticketSale = function() {
//         var vName = prompt("Enter your Name": string):string;
//         var vEmail = prompt("Email": string):string;
//         var vQuantity = prompt("Ticket quantity": number):number;
//     }
// });

// $("#buy-ticket").click(ticketSale);