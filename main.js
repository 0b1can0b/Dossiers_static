$(".tool-contacts").popup({
  on: "click",
  position: "bottom right",
});

$(".tool-settings").popup({
  on: "click",
  position: "bottom right",
});

// $('.menu .item').tab();

// $('.contacts-popup-tabs .item').tab({
//   context: $('.contacts-popup-tabs'),
// });

$(".contacts-popup-tabs a").click(function () {
  $(".contacts-popup-tabs a.active").removeClass("active");
  $(".contacts-popup-tabs-content.active").removeClass("active");
  $(this).addClass("active");
  $(
    `.contacts-popup-tabs-content[data-tab="${$(this).attr("data-tab")}"]`
  ).addClass("active");
});

$(".ui.dropdown").dropdown();

$(".ui.accordion").accordion();

$(".header-nav-tabs > *").click(function () {
  $(".header-nav-tabs > *").removeClass("active");
  $(this).addClass("active");
});

$(".filter-buttons > *").click(function () {
  $(".filter-buttons > *").removeClass("active");
  $(this).addClass("active");
});

$(".dossiers-button").addClass("active");

console.log("test if works");
