var lFollowX = 0,
  lFollowY = 0,
  x = 0,
  y = 0,
  friction = 1 / 100;

function moveBackground() {
  if (screen.width > 720) {
    x += (lFollowX - x) * friction;
    y += (lFollowY - y) * friction;

    translate = `translate(${x}px, ${y}px) scale(1.1)`;
  } else {
    translate = `translate(0px, 0px) scale(1.0)`;
  }
  $("#background").css({
    "-webit-transform": translate,
    "-moz-transform": translate,
    transform: translate
  });
  window.requestAnimationFrame(moveBackground);
}

$(window).on("mousemove click", function(e) {
  var lMouseX = Math.max(
    -100,
    Math.min(100, $(window).width() / 2 - e.clientX)
  );
  var lMouseY = Math.max(
    -100,
    Math.min(100, $(window).height() / 2 - e.clientY)
  );
  lFollowX = (20 * lMouseX) / 100;
  lFollowY = (10 * lMouseY) / 100;
});

moveBackground();

$("#toggle-mobile-menu").on("click", () => {
  if ($("#nav").css("display") === "none") {
    $("#nav")
      .fadeIn(200)
      .css("display", "flex");
    $("#toggle-mobile-menu").css(
      "content",
      'url("./images/close-menu-icon.svg")'
    );
  } else {
    $("#nav").fadeOut(200);
    $("#toggle-mobile-menu").css(
      "content",
      'url("./images/open-menu-icon.svg")'
    );
  }
});

$("#nav .nav-items .nav-item").on("click", () => {
  if (screen.width <= 720) {
    $("#nav").fadeOut(200);
  }
});
