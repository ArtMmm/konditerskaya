$(document).ready(function(){
  $("#carousel1").owlCarousel({
    autoplay: true,
    autoplayTimeout:5000,
    autoplayHoverPause:false,
    animateOut: 'bounceOut',
    animateIn: 'flipInX',
    items:1,
    loop: true,
    nav: true,
    dots: false
  });
  $(".owl-carousel").owlCarousel({
    items:1,
    loop: true,
    nav: true,
  });
});
