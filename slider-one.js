// Slider settings
jQuery.fn.reverse = [].reverse;
function sliderOne(){
    var buttonNumber;    
    function slide(){
        var slideno = parseInt(buttonNumber);
        var allSlide = $(".slide-area .slider-item");
        var currentSlide = $(".slide-area .slider-item:nth-child("+slideno+")");
        var currentImage =  $(".slide-area .slider-item:nth-child("+slideno+") span").attr("style");
        $(".duplicate_image").attr("style", currentImage);
        allSlide.each(function(index){
            var allSlideNo = index+1;
            if(allSlideNo != slideno) {
                $(this).removeClass("active");
                $(this).find(".element-animation-lr").removeClass("element-animation-lr");
            }
        });
        var p = currentSlide.position();
        // $(".slide-area").css("left",("-" + p.left + "px"));
        $(currentSlide).addClass("active"); 
        var time = 0;
        $(currentSlide).find(".slider-image span").reverse().each(function(index){
            var $el = $(this);
            setTimeout(function() {
                $el.addClass('element-animation-lr');
            }, time);
            time += 200;
        })
    }

    $(".menu-section li a").mouseover(function(){
        buttonNumber = $(this).attr("data-number");
        slide();             
    });
   
}
var p = new sliderOne();

