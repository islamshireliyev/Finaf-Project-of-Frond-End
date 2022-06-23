$(document).on("click", "nav.footer_nav a", function (e) {
  var _this = $(this),
    _this_index = _this.parent().index();
  $("nav.footer_nav a").removeClass("active");
  _this.addClass("active");
  $(".footer_contacts ul")
    .removeClass("show_me")
    .eq(_this_index)
    .addClass("show_me");
  return false;
});
