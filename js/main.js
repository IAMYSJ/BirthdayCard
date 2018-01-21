$(".videoPart").css('display', 'none');
$(".showBtn").click(function() {
    if($(".videoPart").css('display') == "none"){
    	$(".textPart").hide();
    	$(".videoPart").show();
    	$(".mail").css("height", "630px");
    	$(".videoPart").css("height", "590px");
    	$(".showBtn").html("CLOSE");
    } else {
    	$(".textPart").show();
    	$(".videoPart").hide();
    	$(".mail").css("height", "300px");
    	// $(".textPart").css("height", "386px");
    	$(".showBtn").html("TO: Alice");
    }
});
