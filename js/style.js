$(document).ready(function(){
    vnTRUST.goTopStart();
    // DATE CLOCK
    $(".datepicker").datepicker();
    // MENU TAB
    $(".menuTab .mc-menu").click(function(e){
        if(!$(this).parents(".menuTab").hasClass("active")){
            $(this).parents(".menuTab").addClass("active");
            $(this).parents(".menuTab").find("ul").stop().slideDown();
        }
        else{
            $(this).parents(".menuTab").removeClass("active");
            $(this).parents(".menuTab").find("ul").stop().slideUp();
        }
    });
    // slider banner all
    $("#vnt-slide").slick({
		slidesToShow : 1,
        autoplay:true,
        arrows:true,
        dots:false,
        autoplaySpeed: 5000,
        fade:true,
    });
    // 
    $('.infoForm .formAll button').on('click', function(e){
        $(this).parents('.formAll').addClass('active')
        setTimeout(function(){ $('.infoForm .formAll').removeClass('active')  }, 3000);
    })
    $('.infoForm .formAll .popAlert .btnClose a').on('click', function(){
        $('.infoForm .formAll ').removeClass('active')
    })
    // 
    $(".langPageMb .showpop").click(function(e){
        e.preventDefault();
        if(!$(this).parents(".langPageMb").hasClass("active")){
            $(this).parents(".langPageMb").addClass("active");
        }
        else{
            $(this).parents(".langPageMb").removeClass("active");
        }
    });
    // lang
    $(".languageTop .iconLang").click(function(){
        if(!$(this).parents(".languageTop").hasClass("active")){
            $(this).parents(".languageTop").addClass("active");
            // $("html").addClass("openmenu");
        }
        else{
            $(this).parents(".languageTop").removeClass("active");
            // $("html").removeClass("openmenu");
        }
    });
    // 
    // 
    $(".searchHead .iconS").click(function(){
        if(!$(this).parents(".searchHead").hasClass("active")){
            $(this).parents(".searchHead").addClass("active");
        }
        else{
            $(this).parents(".searchHead").removeClass("active");
        }
    });
    // 
    $(".searchTop .closeSearch").click(function(){
        $(this).parents(".searchTop").removeClass("active");
    });
    // 
    $(".searchTop .icon").click(function(){
        if(!$(this).parents(".searchTop").hasClass("active")){
            $(this).parents(".searchTop").addClass("active");
            // $("html").addClass("openmenu");
        }
        else{
            $(this).parents(".searchTop").removeClass("active");
            // $("html").removeClass("openmenu");
        }
    });
    // 
    $(window).bind("click",function(e){
        var target=e.target;
        if(!$(target).parents(".searchTop").hasClass("active")){
            $(".searchTop").removeClass("active");
        }
        if(!$(target).parents(".languageTop").hasClass("active")){
            $(".languageTop").removeClass("active");
        }
    });
    // 
    $(".menuSlick ul").slick({
		autoplay:false,
        dots: false,
        arrows:true,    
        variableWidth:true,
        centerMode:false,
        slidesToShow : 8,
        centerPadding:"0px",
        autoplaySpeed: 5000,
        speed: 1000,
    });
    
    // 
    $(window).on("scroll",function(){
        var header_offset = 0;
        if($(window).scrollTop()>0){
          $("#vnt-header:not(.notfix)").addClass("fixed");
        }
        if($(window).scrollTop() <= 0){
          $("#vnt-header").removeClass("fixed");
        }
    });
    // 

});
