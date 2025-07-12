

$(function() {
// Load header and set event listener after load
$("#header-placeholder").load("/src/components/header_component.html", function() {
  // Attach listener after header is loaded
  $('#menu-toggle').on('change', function() {
    $('#menu').toggleClass('flex hidden');
  });
});  $("#footer-placeholder").load("/src/components/footer_component.html");
});