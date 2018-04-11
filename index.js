$('.about-link').click(function() {
    $('html, body').animate({
      scrollTop: $('.about-container').offset().top
    }, 800);
  });
  
  $('.projects-link').click(function() {
    $('html, body').animate({
      scrollTop: $('.projects-container').offset().top
    }, 800);
  });
  
  $('.contact-link').click(function() {
    $('html, body').animate({
      scrollTop: $('.footer-container').offset().top
    }, 800);
  });