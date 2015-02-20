 jQuery(document).ready(function() {
        // Can also be used with $(document).ready()
$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide"
  });
});
$('.flex-prev').html('<i class="fa fa-arrow-left"></i>');
$('.flex-next').html('<i class="fa fa-arrow-right"></i>');


$(function() {
    
    $("figure").hover(function() {        
        $(this).find('figcaption').css("display", "block");
       
    }, function() {
         $(this).find('figcaption').css("display", "none");     
    });
    
});
$(function() {
    
    $(".option-heart").hover(function() {        
       $(this).find('.likes-no').show();
    }, function() {
       $(this).find('.likes-no').hide(); 
    });
    
});
$(function() {    
    $(".item-star").hover(function() {        
       $(this).find('.fivestar').show();
    }, function() {
       $(this).find('.fivestar').hide(); 
    });
    
});
$(function() {    
    $(".item-box").hover(function() {        
       $(this).find('.item-box-image').hide();
       $(this).find('.hover-item-box-image').show();
    }, function() {
     $(this).find('.item-box-image').show();
       $(this).find('.hover-item-box-image').hide();
    });
    
});
});