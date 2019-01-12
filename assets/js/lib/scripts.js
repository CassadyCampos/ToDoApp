$("ul").on("click", "li", function() {
   $(this).toggleClass("completed");
});

$("ul").on("click", "span", function() {
   $(this).parent().remove();
});

$("input[type='text").keypress(function(event) {
   if(event.which === 13) {
     var nextTask = $(this).val(); 
     $(this).val("");
     $("ul").append("<li><span>X</span> " + nextTask + "</li>");
   }
});

