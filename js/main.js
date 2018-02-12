$(document).ready(function() {
	$(".videoPart").css("display", "none");
	$(".showBtn").click(function() {
		if($(".videoPart").css("display") == "none"){
			$(".textPart").hide();
			$(".videoPart").show();
			$(".showBtn").html("YSJ 2018/02/16");
		} else {
			$(".textPart").show();
			$(".videoPart").hide();
			$(".showBtn").html("TO: Alice");
		}
	});
});