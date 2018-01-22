$(".videoPart").css('display', 'none');
$(".showBtn").click(function() {
    if($(".videoPart").css('display') == "none"){
    	$(".textPart").hide();
    	$(".videoPart").show();
        $(".mail").css("background", "#f9f9f9");
    	$(".showBtn").html("CLOSE");
    } else {
    	$(".textPart").show();
    	$(".videoPart").hide();
        $(".mail").css("background", "repeating-linear-gradient(45deg, #f0f0f0 10px, #f0f0f0 20px, #58c 20px, #58c 30px, #f0f0f0 30px, #f0f0f0 40px, #e55 40px, #e55 50px)");
    	$(".showBtn").html("to: Alice");
    }
});
