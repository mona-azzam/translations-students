window.onload = function () {
  const year = new Date().getFullYear();
  $(".footer span").html("&copy; " + year + " הדס קריתי | ");
}

privacyClicked = function() {
  $("#privacy-policy").css("display", "block");
}

privacyClosed = function() {
  $("#privacy-policy").css("display", "none");
}
