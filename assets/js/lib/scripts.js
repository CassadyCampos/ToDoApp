// Mark a ToDo as completed
$("ul").on("click", "li", function() {
   $(this).toggleClass("completed");
});

// To delete ToDo's
$("ul").on("click", "span", function() {
   $(this).parent().fadeOut(500, function() {
      $(this).remove();
   })
});

// To add new ToDo's
$("input[type='text").keypress(function(event) {
   if(event.which === 13) {
      var nextTask = $(this).val(); 
      $(this).val("");
      $("ul").append("<li><span><img class='deleteX' src='https://img.icons8.com/metro/26/000000/close-window.png'></span>" + nextTask + "</li>");
   }
});

