//this will cause the browser to check for errors more aggressively
'use strict';

$(function() {
    console.log( "ready!" );

    $(".download").on('click', function(e){
      e.preventDefault();
    });

    // $(".download").click(function (e) {
    //   e.preventDefault();
    //   if(e.which == 17) isCtrl=false;
    // }).keydown(function (e) {
    //     if(e.which == 17) isCtrl=true;
    //     if(e.which == 83 && isCtrl == true) {
    //         //run code for CTRL+S -- ie, save!
    //         return false;
    //     }
    // });

});

