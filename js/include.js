

$(function() {
  // Load header and set event listener after load
  $("#header-placeholder").load("/src/components/header_component.html", function() {
    // Reset menu toggle on load (optional, for consistent state)
    $('#menu-toggle').prop('checked', false);
  });
  $("#footer-placeholder").load("/src/components/footer_component.html");
});