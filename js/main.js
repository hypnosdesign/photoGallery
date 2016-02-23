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
  var doc = document.getElementById('gallery');
  doc.innerHTML = message;
}

function appendBody(inner) {
  var doc = document.getElementsByTagName('body');
  doc.innerHTML = inner;
}

// return html of the thumbnail
function getFigure() {
  report += '<li class="item-gallery"><a class="item" href="'+ photo.image + '">';
  report += '<figure class="images">';
  report += '<img class="thumb" src="'+ photo.thumb +'" alt="'+ photo.title +'">';
  report += '<figcaption class="caption">'+ photo.caption +'</figcaption>';
  report += "</figure></a></li>"; 
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

// Ligthbox
var $overlay      = $('<div class="overlay"></div>');
var $img          = $('<img>');
var $container    = $('<div class="container"></div>');
var $controllers  = $('<div class="controllers">'+
'<img class="close" src="img/icons/cross.svg">'+
'<img class="next" src="img/icons/chevron-thin-right.svg">'+
'<img class="prev" src="img/icons/chevron-thin-left.svg">'+                     
'</div>');

$("body").append($overlay);
$overlay.append($container);
$container.append($img);
$container.append($controllers);


$('.item-gallery').click(function(e){
  e.preventDefault();
  var $location = $(this).children().attr("href");
  $img.attr("src", $location);

  var $caption = $(this).find("figcaption").text();
  $container.append('<p>'+ $caption +'</p>');
  $overlay.show();
});

$('.close').click(function(){$overlay.hide();$('.container p').remove();});

// Navigation
$('.next').click(function(e){
  e.stopPropagation();
  var $locationNext = $('.item-gallery').children().attr("href");
  console.log($locationNext);
  $img.attr("src", $locationNext);
})


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