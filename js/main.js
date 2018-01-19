$(".videoPart").css('display', 'none');
$(".showBtn").click(function() {
    if($(".videoPart").css('display') == "none"){
    	$(".textPart").hide();
    	$(".videoPart").show();
    } else {
    	$(".textPart").show();
    	$(".videoPart").hide();
    }
});
