$(document).ready(function(){
	$(".bannerHome").slick({
		fade:true,
		autoplay:false,
        dots: true,
        arrows:false,    
        pauseOnHover:false,
        autoplaySpeed: 5000,
        speed: 1000,
    });
    $('.boxlistCil .count').counterUp({
        delay: 10,
        time: 2000
      });
    $(".sliderSerHome").slick({
    	arrows:true,
    	dots:false,
    	autoplay: false,
        slidesToShow : 3,
        responsive: [
            {
                breakpoint:991,
                settings: {
                    slidesToShow : 2,
                }
            }
            ,
            {
                breakpoint: 767,
                settings: {
                    slidesToShow : 1,
                }
            }
        ]
    });
    //solution
    $('.numberCou .count').counterUp({
        delay: 10,
        time: 1000
    });
    $('.sliderNewsHome').slick({
        fade:true,
		autoplay:false,
        dots:false,
        arrows:true,    
        pauseOnHover:false,
        asNavFor: '.sliderNewsFor',
    });
    // 
    $('.sliderNewsFor').slick({
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.sliderNewsHome',
        focusOnSelect: true,
    });
    // 
    $(".vhSliderProject").slick({
    	variableWidth:true,
    	autoplay:true,
    	centerMode:true,
        centerPadding:"0px",
        autoplay: false,
    	responsive: [
        {
          breakpoint: 1200,
          settings: {
            arrows:true,
            variableWidth: true,
            centerMode:true,
            dots:false,
          }
        },
        {
          breakpoint: 991,
          settings: {
            arrows:true,
            variableWidth: false,
            centerMode:true,
            centerPadding:" 0px",
            dots:false,
          }
        }
      ]
    });
});