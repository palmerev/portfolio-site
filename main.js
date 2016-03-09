// requires jQuery

// code to manage the 'active' class on nav links 
$(".nav a").on("click", function(){
   $(".nav").find(".active").removeClass("active");
   $(this).parent().addClass("active");
});
