// WEB303 Assignment 2


$(document).ready(function() {
    $("#prospect").click(function() {
       $("#content").css("height",  "500" );
      $('div#content').load("prospect.html").hide().slideDown (2000);
      });
    $("#convert").click(function () {
    $("#content").css("height", "700");
    $('div#content').load("convert.html").hide().slideDown (2000);
  });
    $("#retain").click(function() {
    $("#content").css("height", "550");
    $('div#content').load("retain.html").hide().slideDown (2000);
  });
    });