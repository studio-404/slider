$(document).ready(function(){
	var bigw = parseInt($(".slider-center img").width());
	var bigh = parseInt($(".slider-center img").height());
	var smallw = parseInt($(".slider-left .col-md-4 img").width());
	var smallh = parseInt($(".slider-left .col-md-4 img").height());

	var marginTop = (bigh - smallh) / 2;
	var marginLeft = smallw / 2;
	$(".slider-left").css({
		"margin-top": marginTop+"px"
	});
	// $(".slider-left .col-md-4:first-child").css({
	// 	"margin-left": "-"+marginLeft+"px"
	// });
	$(".slider-right").css({
		"margin-top": marginTop+"px"
	});
});