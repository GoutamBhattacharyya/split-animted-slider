// Slider settings
jQuery.fn.reverse = [].reverse;
function sliderOne(){
    var buttonNumber;    
    function slide(){
        var slideno = parseInt(buttonNumber);
        var allSlide = $(".slide-area .slider-item");
        var currentSlide = $(".slide-area .slider-item:nth-child("+slideno+")");
        allSlide.each(function(index){
            var allSlideNo = index+1;
            if(allSlideNo != slideno) {
                $(this).removeClass("active");
                $(this).addClass("inactive");                
            }else{
                $(this).removeClass("inactive");
                $(this).addClass("active");
            }
        });
        var p = currentSlide.position();
        // $(".slide-area").css("left",("-" + p.left + "px"));
        // $(currentSlide).addClass("active"); 
        var time = 0;
        $(currentSlide).find(".slider-image span").reverse().each(function(index){
            var $el = $(this);            
            setTimeout(function() {
                if(index==0){
                    $el.animate({
                         backgroundPositionX: '-920',
                         opacity: '1'
                    });
                }
                if(index==1){                    
                    $el.animate({
                        backgroundPositionX: '-460',
                        opacity: '1'
                   });
                }
                if(index==2){
                    $el.animate({
                        backgroundPositionX: '0',
                        opacity: '1'
                   });
                }
            }, time);
            time += 50;
        });
        
    }

    $(".menu-section li a").mouseover(function(){
        buttonNumber = $(this).attr("data-number");
        slide();             
    });
   
}
var p = new sliderOne();

