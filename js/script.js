$(function(){
  $('.counter').counterUp({
    delay: 5,
    time: 3000,
  });
});
$(function(){
//video part slider
    $('.video_main').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true,
        prevArrow:'.prev',
        nextArrow:'.next',
        speed:1000,
        fade: true
    });
//video part youtube video play
    new VenoBox({
        selector: '.my-video-links',
    }); 
//sticky menu part
    $(window).scroll(function () {
      if($(window).scrollTop() > 100) {
        $(".navbar").addClass('sticky');
      } else {
        $(".navbar").removeClass('sticky');
      }
    });
//back to top animation
      $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
          $('.back_to_top').fadeIn();
        } else {
          $('.back_to_top').fadeOut();
        }
      });

      $(".back_to_top").click(function() {
        $("html, body").animate({
          scrollTop: 0
        }, 1500);
      });
//=========spy scroll part==========
    $(".nav-item a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      }
    });
});
//counter part counter
