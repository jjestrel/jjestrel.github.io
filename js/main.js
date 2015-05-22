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
  $.get(postUrl, {}, function(data) {
    savedScroll = $(window).scrollTop();

    $("#home").hide();
    $("#post-content").html(data);
    $("#post").show();
  });
});

$("#back-btn").click(function() {
  startLoad();

  $("#post-content").html("");
  $("#post").hide();
  $("#home").show();

  $(window).scrollTop(savedScroll);

  stopLoad();
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
