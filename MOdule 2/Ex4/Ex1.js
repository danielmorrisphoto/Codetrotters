var att="AT&T";
var tmob="Tmobile";
var hulu="Hulu";

var attPricing = 99;
var tmobPricing = 76;
var huluPricing = 234;

var attIsUsed = true;
var tmobIsUsed = false;
var huluIsUsed = true;

var total = 0;

if (attIsUsed === true){
    total = total + attPricing;
}
if (tmobIsUsed === true){
    total += tmobPricing;
}
if (huluIsUsed === true){
    total += huluPricing;
}
alert('You spent $' + total + 'on Streaming Services each month.');

