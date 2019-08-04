$(function() {
  /** hamburger */
  $('.hamburger').click(function() {
    $('.hamburger').toggleClass('change');
    $('.mobile-menu').slideToggle();
  });

  // /** owl-carousel example */
  // $(".owl-carousel").owlCarousel({
  //   loop: true,
  //   nav: true,
  //   items: 1,
  //   autoplay: true,
  //   smartSpeed: 500,
  //   autoplayTimeout: 10000
  // });
  // $(".owl-prev").html('<img src="./img/left-arrow.png" alt="" />');
  // $(".owl-next").html('<img src="./img/right-arrow.png" alt="" />');

  /** scroll to block */
  const $page = $('html, body');
  $('.example, .order-print, .order-print, .order-consultation-click').click(function() {
    $page.animate(
      {
        scrollTop: $('.calculate-order').offset().top - 150,
      },
      400,
    );
    return false;
  });

  $('#filter-block-select').on('click', function(event) {
    const pathname = window.location.pathname.split('/');
    pathname[pathname.length - 1] = event.target.value;
    window.location.href = window.location.origin + pathname.join('/');
  });

  /*** send data to server */
  $.ajax({
    type: 'GET',
    url: '/',
    contentType: 'multipart/form-data',
    data: 'example',
    contentType: false,
    cache: false,
    processData: false,
    success: () => {
      $(this)
        .find('input')
        .val('');

      allFiles = [];

      checkbox = false;

      $('.img-checkbox-1').attr('src', 'images/svg/checkbox.svg');
      $('.thanks')
        .fadeIn()
        .css('display', 'flex');
    },
  });
});
