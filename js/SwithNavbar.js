$(document).ready(function() {
	$.get("WelcomePage.html", function(data) {
		$("#iframeDiv").html(data);
	})
})

$(".navbar-brand").on('click', function() {
	$.get($(this).find("a").attr("target"), function(data) {
		$("#iframeDiv").html(data);
	});
})

$("#navbarSelectMod li").on('click', function() {
	$.get($(this).find("a").attr("target"), function(data) {
		$("#iframeDiv").html(data);
	});
})