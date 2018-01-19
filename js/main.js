$(".videoPart").css('display', 'none');
$(".showBtn").click(function() {
    if($(".videoPart").css('display') == "none"){
    	$(".textPart").hide();
    	$(".videoPart").show();
    	$(".showBtn").html("看字 &raquo;");
    } else {
    	$(".textPart").show();
    	$(".videoPart").hide();
    	$(".showBtn").html("看影片 &raquo;");
    }
});
