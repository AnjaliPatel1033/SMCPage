

$('#slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText: ["<span class='d-none'>Previous Slide</span><span class='fa fa-arrow-left'></span>", "<span class='d-none'>Next Slide</span><span class='fa fa-arrow-right'></span>"],
    dots:false,
    items:1,
    responsive:{
        0 : {
            items:2,
           center:true,
           loop:false,
           nav: false,
           autoWidth:true,
        },
        480 : {
           items:2,
           center:true,
           loop:false,
           nav:false,
           //autoWidth:true,

        },
        768 : {
           items:1
        }
    }
})

$('#news').owlCarousel({
    loop:true,
    nav:false,
    navText: ["<span class='d-none'>Previous Slide</span><span class='fa fa-arrow-left'></span>", "<span class='d-none'>Next Slide</span><span class='fa fa-arrow-right'></span>"],
    autoHeight: false,
    responsive:{
        0:{
            items:1,
            dots:false,
            nav:true
        },
        700:{
            items:2
        },
        1024:{
            items:3,
        },
        1920:{
            items:4
        }
    }
})
$(document).ready(function() {
    if ( $(window).width() <575 ) {
        $('#serviceOwl').addClass('owl-carousel');
        $('#serviceOwl').addClass('owl-theme');
      startCarousel();
    } else {
      stopCarousel();
      $('#serviceOwl').removeClass('owl-carousel');
    }
  });
  
  $(window).resize(function() {
      if ( $(window).width() < 575 ) {
        $('#serviceOwl').addClass('owl-carousel');
        $('#serviceOwl').addClass('owl-theme');
        startCarousel();
      } else {
        stopCarousel();
        $('#serviceOwl').removeClass('owl-carousel');
      }
  });
  function startCarousel(){
    $('#serviceOwl').owlCarousel({
        loop:true,
        autoPlay: 3000,
        margin:10,
        dots: true,
        nav:false,
        responsive:{
            0:{
                items:1,
                dots:true,
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })
  }

function stopCarousel() {
    var owl = $('.services .owl-carousel');
    owl.trigger('destroy.owl.carousel');
    owl.addClass('off');
  }


  $('#swimmingSlider').owlCarousel({
    loop:true,
    margin:10,
    navText: ["<span class='d-none'>Previous Slide</span><span class='fa fa-arrow-left'></span>", "<span class='d-none'>Next Slide</span><span class='fa fa-arrow-right'></span>"],
    dots:true,
    items:1,
    autoplay:true,
autoplayTimeout:5000
})

$('.dropdown-menu').on('click', function(e) {
    e.stopPropagation();
  });
$('#menuBtn').on('click',function(e){
    e.preventDefault();
     $('.fullscreenMenu').css({'right':'0%'});
    $('body').css({ 'overflow': 'hidden' })
})

$('.close').on('click',function(){
    $('.fullscreenMenu').css({'right':'-100%'});
    $('body').css({ 'overflow': 'auto' })
})

$('.dropdown').on('show.bs.dropdown', function(e){
    $(this).find('.dropdown-menu').first().stop(true, true).slideDown(300);
});
  

$('.dropdown').on('hide.bs.dropdown', function(e){
    $(this).find('.dropdown-menu').first().stop(true, true).slideUp(200);
});

 

$('#searchToggle').click(function(){
    $(this).find('.cross').toggleClass('fas fa-search fa fa-times');
    setTimeout(function() {
        $(".form-control").focus();
      }, 1000);
});