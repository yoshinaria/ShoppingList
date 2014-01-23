$(document).ready(function(){


$("#submitItem").click(function() {
        var newItem = $("#newItem").val();


		while (newItem=="") {
            alert("Please enter name of the items");
            return false;
        };


        $("#itemList").append('<li class="items">' + newItem + '<i class=" fa fa-shopping-cart"></i></li>').slideDown;
        document.getElementById("newItem").value="";


	$("li").click(function() {
		$(this).children().css( "color", "#FF0099" );
        $(this).css( "color", "#FF0099" );
        $(this).addClass("selected");
	});

});
    $("#removeSelected").on("click", function () {
            $(".selected").slideUp(function() { $(this).remove(); });
	});


	$("#clearButton").on("click", function () {
            $("li").slideUp(function() { $(this).remove(); });
	});
});