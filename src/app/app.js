    var winHT = $(window).height();
    var winWD = $(window).width();
    var navHt = $("header").outerHeight();
$(document).ready(function(){       
    var mgLeft =((winWD-$(".container").width())/2);    
    $(".sensiba-slider-wrapper ").css('margin-left',mgLeft);                  
    var d = new Date();
    $('.copyrightYear').html(d.getFullYear());    
    // $('#home').css('padding-top', navHt);

    $( ".open-form, .close" ).click(function() {
      $("#overlay").fadeToggle();
    });
    // setTimeout(function(){          
    //   $("#overlay").slideDown();
    // }, 3000);
    $(".goto-home").on("click", function(){
      $("html,body").animate({
        scrollTop : 0
      }, 1000);
    });

    $('.banner-slider').slick({
      arrows: true,
      autoplay:false,
      dots: false,
      autoplaySpeed: 5000,
      speed: 1000,            
      prevArrow:'<img src="images/arrow-circle-left.svg" class="img-responsive arrowLeft">',
      nextArrow:'<img src="images/arrow-circle-right.svg" class="img-responsive arrowRight">',
      responsive: [
        {
          breakpoint: 640,
          settings: {
            // arrows:true,
          }
        }
      ]      
    });

    $('.company-slider').slick({
     // slidesToShow: 1,
     slidesToScroll: 1,
     arrows: false,
     autoplay:true,
     autoplaySpeed: 0,
     speed: 3000,
     centerMode: true,
     infinite: true,
     variableWidth: true,
     cssEase: 'linear',
     pauseOnHover: false,
     focusOnSelect: false,           
    });

    $(".sensiba-slider").slick({  
      dots: false,
      arrows: true,
      autoplaySpeed: 5000,
      speed: 1000,
      infinite: true,
      autoplay: true,
      variableWidth:true,
      pauseOnHover: false,
      focusOnSelect: true, 
      nextArrow: "#sensiRight",
      prevArrow: "#sensiLeft",
      responsive: [{
       breakpoint:1100,
       settings: {                        
         variableWidth: false,
       }
     },{
       breakpoint:992,
       settings: {                        
         variableWidth: true,
       }
     },{
       breakpoint:767,
       settings: {                        
         variableWidth: false,
       }
     }]         
    });

    $(".view-more").click(function (){      
      $(this).find(".view-more-arrow").toggleClass("vma-down");
      var bp = $(this).attr('rel');
      $('#'+bp).slideToggle("slow");   
      var txt = $(this).find(".vm-text").text();
      // alert(txt);
      if (txt=="View More") {
        $(this).find(".vm-text").text("View Less");   
      }else{
        $(this).find(".vm-text").text("View More");
      }         
    });

    $(".show_hide").on("click", function () {
            var txt = $(".content").is(':visible') ? 'Read More' : 'Read Less';
            $(".show_hide").text(txt);
            $(this).next('.content').slideToggle(200);
        });

    $(".box-plus").click(function (){
      var bp = $(this).attr('rel');
      $(".extended-box").slideUp("slow");
      $(".box-plus").show();
      $(".box-minus").hide();
      $('#'+bp).slideDown("slow");
      $(this).hide();
      $("#"+bp+" .box-minus").show();
    });

    $(".box-minus").click(function (){
      $(".box-minus").hide();
      $(".box-plus").show();
      var bp = $(this).attr('rel');
      $('#'+bp).slideUp("slow");
    });

    $(".box-plus-2").click(function (){
      $(".box-plus-2,.box-minus-3").hide();
      $(".box-minus-2").show();
    });

    $(".box-minus-2").click(function (){
      $(".box-minus-2").hide();
      $(".box-plus-2").show();
    });

    $(".box-plus-3").click(function (){
      $(".box-plus-3,.box-minus-2").hide();
      $(".box-minus-3").show();
    });

    $(".box-minus-3").click(function (){
      $(".box-minus-3").hide();
      $(".box-plus-3").show();
    });

    $('.textmonial-slider').slick({
     slidesToShow: 3,
     slidesToScroll: 3,
     arrows: false,
     autoplay:true,
     autoplaySpeed: 5000,
     speed: 1000,
     // cssEase: 'ease',
     pauseOnHover: false,
     focusOnSelect: true, 
     nextArrow: "#cRight",
     prevArrow: "#cLeft",
     responsive: [{
        breakpoint: 995,
        settings: {
          slidesToShow: 2,          
        }
      },{
        breakpoint: 767,
        settings: {
          slidesToShow: 1,  
        }
      }]     
    });

    $(".accordian-content-1").show();
    $(".accordian-title").on("click", function() {
      $(".accordian").find(".accordian-content").slideUp();
      if($(this).parent(".accordian").hasClass("acc-active")){
        $(this).parent(".accordian").removeClass("acc-active");
        $(this).parent(".accordian").find(".accordian-content").slideUp();
      }
      else{
        $(".accordian").removeClass("acc-active");
        $(this).parent(".accordian").addClass("acc-active");
        $(this).parent(".accordian").find(".accordian-content").slideDown();
      }
    });

    var amtVal1=10;
    var amtVal2=10;
    var amtVal3=6;

    $( function() {
      $( "#slider-range-max" ).slider({
        range: "min",
        min: 2,
        max: 100,
        value: 10,
        slide: function( event, ui ) {
          $( ".amount" ).val( ui.value );                
           amtVal1 = ui.value   
           actualCalculation();         
        }
      });
      $( "#slider-range-max .ui-slider-handle" ).append( '<div class="num-wrapper slide lazy" data-src="images/num-bg.png"><input type="text" class="amount" ></div>' );            
      $( ".amount" ).val( $( "#slider-range-max" ).slider( "value" ) );
    } );   

    $( function() {
      $( "#slider-range-max-3" ).slider({
        range: "min",
        min: 5,
        max: 30,
        value: 10,
        slide: function( event, ui ) {
          $( ".amount-3" ).val( ui.value );                
           amtVal2 = ui.value   
           actualCalculation();          
        }
      });
      $( "#slider-range-max-3 .ui-slider-handle" ).append( '<div class="num-wrapper slide lazy" data-src="images/num-bg.png"><input type="text" class="amount-3" readonly=""></div>' );            
      $( ".amount-3" ).val( $( "#slider-range-max-3" ).slider( "value" ) );
    } );  

    $( function() {
      $( "#slider-range-max-4" ).slider({
        range: "min",
        min: 1,
        max: 12,
        value: 6,
        slide: function( event, ui ) {
          $( ".amount-4" ).val( ui.value );                
           amtVal3 = ui.value   
           actualCalculation();          
        }
      });
      $( "#slider-range-max-4 .ui-slider-handle" ).append( '<div class="num-wrapper slide lazy" data-src="images/num-bg.png"><input type="text" class="amount-4" readonly=""></div>' );            
      $( ".amount-4" ).val( $( "#slider-range-max-4" ).slider( "value" ) );
    } );  

   function  actualCalculation(){
      // var finalAmount = (amtVal1 * amtVal2 * 40) / 2;
      // var finalAmount = (amtVal1 + (amtVal2 * amtVal3)) * 40;
      var finalAmount = (amtVal1+(amtVal1 * amtVal2 * amtVal3)) * 40;
      var formattedPrice = finalAmount.toLocaleString();          
      $(".actualAmount").text("USD "+formattedPrice);
    }
    actualCalculation();

    $( function() {
      $( "#slider-range-max-2" ).slider({
        range: "min",
        min: 1,
        max: (winWD <= "767") ? 10 : 20,
        value: 1,
        slide: function( event, ui ) {
          $( "#range-2" ).val( ui.value );                
          var ccy = 79 + (29 * (ui.value -1));
          var sy = 159 + (29 * (ui.value -1));
          var oy = 289 + (39 * (ui.value -1));
          var ccm = 99 + (39 * (ui.value -1));
          var sm = 199 + (39 * (ui.value -1));
          var om = 349 + (49 * (ui.value -1));
          $(".ccy").text("$"+ccy);
          $(".sy").text("$"+sy);
          $(".ccm").text("$"+ccm);
          $(".sm").text("$"+sm);
          $(".om").text("$"+om);
          $(".oy").text("$"+oy);
                // if (ui.value===1) {
                //   $(".ppcp").css("opacity","1");
                // }                
                // else{
                //   $(".ppcp").css("opacity","0");
                // }
        }
      });
      $( "#range-2" ).val( $( "#slider-range-max-2" ).slider( "value" ) );
    } );

    $('.switch').click(function() {
     if ($('.switch').hasClass("active")) {
       $('.monthly-plan-wrapper').show();
       $('.yearly-plan-wrapper').hide();
       $('.bm').addClass('act');
       $('.by').removeClass('act');                
     } else {                  
       $('.yearly-plan-wrapper').show();
       $('.monthly-plan-wrapper').hide();
       $('.by').addClass('act');
       $('.bm').removeClass('act');                        
     }
     $(this).toggleClass('active');
   });

    setTimeout(function(){
          var countryData = $.fn.intlTelInput.getCountryData();
          telInput = $(".phone");
          telInput.intlTelInput({initialCountry: "in", nationalMode: true, utilsScript: "js/utils.js"});
          telInput.on("countrychange", function(e, countryData) {
            $(".countryname").val($.trim(countryData.iso2.split("(")[0]).toUpperCase());
            // $(".countryname").val($(this).val().toUpperCase());
            $(".dial_code").attr("value", countryData.dialCode);         
          });
        }, 5000);
    $.validator.setDefaults({
      submitHandler: function() {
                  // $("#please_wait").show();
                  // $("#enquiryForm .submit").attr("disabled", "disabled");
        $('#enquiryForm').hide();
        $('#enquirySuccess').show();                      
        $.ajax({
          type:"POST",                
          url: "action.php",
          data:$("#enquiryForm").serialize(),
          success: function(respond_message){                     
          },
          error: function(respond_message){}
        });        
      }
    });
    $("#enquiryForm").validate();


    var childrenSelector = $(".nav-links a");
      var aChildren = $(".nav-links a"); // find the a children of the list items
      if(winWD <= 700)
        var gap = 55;// $(".header-wrapper").outerHeight(); //Navigation height
      else
        var gap = 100;
      var aArray = []; // create the empty aArray
      for (var i=0; i < childrenSelector.length; i++) {    
        var aChild = aChildren[i];
        if (!$(aChild).hasClass('extLink')) {
          if ($(aChild).attr('rel')) {
            var ahref = $(aChild).attr('rel');
            aArray.push(ahref);
          }
        }
      }
      
      //On Scroll - Add class active to active tab
      $(window).scroll(function(){
        var windowPos = $(window).scrollTop(); // get the offset of the window from the top of page
        var windowHeight = $(window).height(); // get the height of the window
        var docHeight = $(document).height();
        for(i=0;i<aArray.length;i++){
          var theID = aArray[i];
          var divPos = $("#"+theID).offset().top; // get the offset of the div from the top of page
          var divHeight = $("#"+theID).outerHeight(); // get the height of the div in question
          if (windowPos >= (divPos - gap) && windowPos < ((divPos - gap) + divHeight)) {        
            if (!$("a[rel='" + theID + "']").hasClass("active"))
            {
              // ga('set', 'page', '/'+theID);
              // ga('send', 'pageview');
              $("a[rel='" + theID + "']").addClass("active"); 
            }
          } 
          else 
          {
            $("a[rel='" + theID + "']").removeClass("active");
          }
        } 

        //If document has scrolled to the end. Add active class to the last navigation menu
        if(windowPos + windowHeight == docHeight) {
          if (!$(".nav-links li:not(.extLink):last-child a").hasClass("active")) {
              var navActiveCurrent = $(".active").attr("rel");
              $("a[rel='" + navActiveCurrent + "']").removeClass("active");
              $(".nav-links li:not(.extLink):last-child a").addClass("active");                      
          }
        }
      });
      
      //On Click
      $('.nav-links a').on("click", function(){
        if(!$(this).hasClass('extLink')) {
          var href = $(this).attr("rel");
          if(winWD <= 992)
            var gap = 50; // $(".header-wrapper").outerHeight(); //Navigation height
          else
            var gap = 70;
          
          $('html,body').animate({
            scrollTop: $("#"+href).offset().top - gap
          }, 1000);
        }
      });


  });
  $(window).scroll(function(){ 
    if ($(window).scrollTop() > 100){
        $('header').addClass("header-bg")         
    }
    else{
        $('header').removeClass("header-bg")      
    }   

    $(".lazy").each(function(){
      if($(this).attr("data-src")){
        (this.tagName == "IMG" || this.tagName == "IFRAME") ? $(this).attr("src", $(this).data("src")) : $(this).css("background-image", "url("+$(this).data("src")+")");
        $(this).removeAttr("data-src");
      }
    });
  });