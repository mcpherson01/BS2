// Script.js

// Bootstrap initialization
$(document).ready(function () {
  $('[data-toggle="collapse"]').on('click', function () {
    $(this).toggleClass('active');
  });
});

// Custom JavaScript for smooth scrolling
$(document).ready(function () {
  $('a[href^="#"]').on('click', function (event) {
    var target = $(this.getAttribute('href'));
    if (target.length) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 1000);
    }
  });
});
