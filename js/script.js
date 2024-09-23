$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true, // Enable loop
    margin: 10, // Set the margin between items
    nav: false, // Enable navigation
    dots: true, // Enable dots
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });
});