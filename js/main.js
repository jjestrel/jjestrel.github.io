// Setup for loading spinner
$body = $("body");

$(document).on({
    ajaxStart: function() { $body.addClass("loading");    },
    ajaxStop: function() { $body.removeClass("loading"); }
});

// Setup for loading new pages
$(".item").click(function() {
  var postUrl = $(this).data('post');
  $.get(postUrl, {}, function(data) {
    $("#home").hide();
    $("#post-content").html(data);
    $("#post".show());
  });
});

$("#back-btn").click(function() {
  $("#post-content").html("");
  $("#post").hide();
  $("#home").show();
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
