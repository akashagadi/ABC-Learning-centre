jQuery(document).ready(function(){
    "use strict";
    $(window).scroll(function() {
        var top=$(window).scrollTop();
        if(top>=200){
            $("header").addClass('secondary');
        }
        else if($("header").hasClass('secondary')){
            $("header").removeClass('secondary');
        }
    });
});