/***************************
  JAVASCRIPT
***************************/

/* Variabili (Variables)
***********************************************/

var report = " ";



/* Funzioni (Functions)
***********************************************/

// print a message and append it in the gallery id.
function print(message) {
  var doc = document.getElementById("gallery");
  doc.innerHTML = message;
}

// return html of the thumbnail
function getFigure() {
  report += '<a class="phot" href="'+ photo.image +'"><figure class="images">';
  report += '<img class="thumb" src="'+ photo.thumb +'" alt="'+ photo.alt_tag +'">';
  report += '<figcaption class="caption"><span>'+ photo.title +'</span>'+ photo.caption +'</figcaption>';
  report += "</figure></a>"; 
  return report;
}



/* Cicli (Loops) 
***********************************************/

// show images in the page
for (var i = 0; i < photos.length; i++) {
  photo = photos[i];
  print(getFigure(photo));
} // fine ciclo for (End for cicle)



/***************************
  jQuery
***************************/

/* Galleria (Gallery) 
***********************************************/
var $overLay = $("<div class='overlay'></div>");
var $photo = $("<img>");
var $icons = $('<img class="icon icon-hide" src="img/icons/cross.svg">'
               +'<img class="icon icon-right" src="img/icons/chevron-thin-right.svg">'
               +'<img class="icon icon-left" src="img/icons/chevron-thin-left.svg">'
               );

//append overlay to body
$("body").append($overLay);
// append images to overlay and store in a variable
var $controllers = $overLay.append($photo);
// append icons to images
$controllers.append($icons);
// hide overlay
$overLay.hide();

//click image and show overlay
$("a.phot").click(function(e){
  e.preventDefault();
  var $location = $(this).attr("href");
  $overLay.show();
  $photo.show();
  $photo.attr("src", $location);

  // test
  console.log(this);
  console.log($location);
});

// click and hide overlay
$(".icon-hide").click(function(){
  $overLay.fadeOut('slow');
  $photo.fadeOut('fast');
});


/* Barra di ricerca (Search bar) 
***********************************************/
// I use:
// .keyup()
// :Contains()

// searching function
function searching(input, list) {
  
  // Oni volta che input cambia allora...
  $(input).keyup( function () {
    
    // setto variabile per i valori e trasformo in lower case
    // https://css-tricks.com/snippets/jquery/make-jquery-contains-case-insensitive/
    $.expr[":"].contains = $.expr.createPseudo(function(arg) {
      return function( elem ) {
        return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
      };
    });

    var typed = $(this).val().toLowerCase();
      
      // if typed is not a blank space
      if(typed !== " ") {

        // fadeout the anchors if type is not contained in list
        $(list).find("a:not(:contains("+typed+"))").fadeOut("fast");
        // fadein the anchors is contained in list
        $(list).find("a:contains("+typed+")").fadeIn("slow");

      }else {

        // if type is equal to a white space or result not found
        $(list).find("figure").show();

      }

  });
}
//start searching function passing the arguments
searching($("#search"),$("#gallery"));





















/*
// $("#search").keypress(function(e) {
//   var typed = e.val().toLowerCase();
//     $( "figcaption:contains(e)" ).hide(); 
// });

/* note:
jQuery(":contains(text)");
$( "div:contains('John')" ).css( "text-decoration", "underline" );


$("#search").on("keyup", function() {

    var userQuery = $(this).val().toLowerCase();
    
    $('li p').each(function() {
        var name = $(this).text().toLowerCase();
        $(this).closest('li')[ name.indexOf(userQuery) !== -1 ? 'show' : 'hide' ]();
        
    });
    
}); 
*/





























