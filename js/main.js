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
  $.get("http://localhost:2833/personal/" + postUrl, {}, function(data) {
    savedScroll = $(window).scrollTop();
    console.log("Saving scroll pos: " + savedScroll);

    $("#home").hide();
    $("#post-content").html(data);
    $("#post").show();

    // Come back to the top of the page
    window.scrollTo(0, 0);

    console.log("Showing (", postUrl, "): ", data);
  });
});

$("#back-btn").click(function() {
  startLoad();

  $("#post-content").html("");
  $("#post").hide();
  $("#home").show();

  console.log("Scrolling to: " + savedScroll);
  $(window).scrollTop(savedScroll);

  // Artificial load time, since things look like they're too fast
  setTimeout(stopLoad, 500);
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
