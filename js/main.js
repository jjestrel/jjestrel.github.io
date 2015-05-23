// Setup for loading spinner
$body = $("body");
var savedScroll = null;

var startLoad = function() {
  $body.addClass("loading");
};

var stopLoad = function() {
  $body.removeClass("loading");
};

$(document).on({
    ajaxStart: startLoad,
    ajaxStop: stopLoad
});

// Setup for loading new pages

$(".item").click(function() {
  var postUrl = $(this).data('post');
  var win = window.open(postUrl, '_blank');
  win.focus();
});

// Setup for scroll to projects
$(".scroll-label").click(function() {
    $('html, body').animate({
        scrollTop: $("#projects").offset().top
    }, 2000);
});

// Image's need to be autosized (Credits: Mariel Yonnadam for this part)
$(".item").height($(".item").width());

$(".item").hover(
  function() {
    $(this).find((".itemOverlay")).fadeOut();
  },
  function() {
    $(this).find((".itemOverlay")).fadeIn();
  }
);
