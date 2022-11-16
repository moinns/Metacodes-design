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
  $('.modal-wrapper').css('display', 'none');

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

  $('#acc').on('click', () => {
    var container = $('.modal-wrapper');
    container.toggleClass('show');
    container.css('display', 'block');
    if (!container.hasClass('show')) {
      setTimeout(() => {
        container.css('display', 'none');
      }, 300);
    }
  });

  $('#position-view').on('click', () => {
    var container = $('.modal-position');
    container.toggleClass('show');
    $('.dark').addClass('active');
    $('body').css('overflow', 'hidden');
    if (!container.hasClass('show')) {
      setTimeout(() => {
        container.css('display', 'none');
      }, 300);
    }
  });

  $(document).mouseup(function (e) {
    if ($('.modal-wrapper').has(e.target).length === 0) {
      $('.modal-wrapper').removeClass('show');
    }
    if ($('.modal-position').has(e.target).length === 0) {
      $('.modal-position').removeClass('show');
      $('.dark').removeClass('active');
      $('body').css('overflow', 'auto');
    }
  });
});

function accordeon() {
  $('.content .boxBody').not($(this).next()).slideUp(600);
  $(this).next().slideToggle(600);

  if ($('.content .boxHead').hasClass('activeArr'))
    $('.content .boxHead').removeClass('activeArr');

  $(this).toggleClass('activeArr');
}
