new Swiper('.image-slider', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  simulateTouch: false,

  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  speed: 800,
});

$(document).ready(function () {
  $('.content .boxHead').on('click', accordeon);
  $('.burger').on('click', function () {
    $(this).toggleClass('active');
    $('.nav').toggleClass('active');
    $('.navitems').toggleClass('active');
    $('body').toggleClass('lock');
  });
  $('.nav *').on('click', function () {
    $('.nav').removeClass('active');
    $('.navitems').removeClass('active');
    $('body').removeClass('lock');
    $('.burger').removeClass('active');
  });
});

function accordeon() {
  $('.content .boxBody').not($(this).next()).slideUp(600);
  $(this).next().slideToggle(600);

  if ($('.content .boxHead').hasClass('activeArr'))
    $('.content .boxHead').removeClass('activeArr');

  $(this).toggleClass('activeArr');
}
