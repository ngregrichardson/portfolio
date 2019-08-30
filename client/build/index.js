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
    openMenu();
  } else {
    closeMenu();
  }
});

$("#nav .nav-items .nav-item").on("click", () => {
  if (screen.width <= 720) {
    closeMenu();
  }
});

let closeMenu = () => {
  $("#nav").fadeOut(200);
  $("#toggle-mobile-menu").addClass("closed drop-shadow");
  $("#toggle-mobile-menu").removeClass("open");
};

let openMenu = () => {
  $("#nav")
    .fadeIn(200)
    .css("display", "flex");
  $("#toggle-mobile-menu").addClass("open");
  $("#toggle-mobile-menu").removeClass("closed drop-shadow");
};

$(window).resize(() => {
  if (screen.width > 720) {
    $("#nav")
      .show()
      .css("display", "flex");
  } else {
    $("#nav").hide();
  }
});
