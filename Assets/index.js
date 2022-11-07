$(document).ready(function() {

    var today = moment();
    
    $("#currentDay").text(today.format("[The date today is] dddd MMM Do, YYYY [and the time is] h:mm a"));
    
    });