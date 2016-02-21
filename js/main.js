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
  report += '<a class="link-photo" href="'+ photo.image +'"><figure class="images">';
  report += '<img class="thumb" src="'+ photo.thumb +'" alt="'+ photo.title +'">';
  report += '<figcaption class="caption">'+ photo.caption +'</figcaption>';
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
var $overLay = $('<div class="overlay"></div>');
var $container = $('<div class="container"></div>');
var $controllers = $('<div class="controllers"></div>');
var $img = $('<img>');
var $icons = $('<img class="close" src="img/icons/cross.svg">'
               +'<img class="next" src="img/icons/chevron-thin-right.svg">'
               +'<img class="prev" src="img/icons/chevron-thin-left.svg">'
               );

//structure
$("body").append($overLay);
$overLay.append($container);
$container.append($img);
$container.append($controllers);
$controllers.append($icons);
var $title = $("img").attr("alt");
console.log($title);
// hide overlay
$overLay.hide();

//click image and show overlay
$("#gallery").children().click(function(e){
  e.preventDefault();
  var $location = $(this).attr("href");
  var $title = $(this).attr("alt");
  console.log($title);
  var $caption = $(this).text();
  var $desc = $container.append('<p>'+$caption+'</p>')

  $img.attr("src", $location);
  $overLay.show();
  
  // test
  console.log(this);
  console.log($location);
  console.log($caption)

  // click and hide overlay and caption
  $(".overlay").click(function(){
    $(this).hide('slow');
    $('.container p').remove();

  });

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