/* -------------------------------------
 * Responsive Circular Progress Bars
 * ------------------------------------- */

/* Based on https://codepen.io/geedmo/pen/InFfd */

import("https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js");


$(document).ready(function () {
  $(".setsize").each(function () {
    $(this).height($(this).width());
  });
});
$(window).on("resize", function () {
  $(".setsize").each(function () {
    $(this).height($(this).width());
  });
});
