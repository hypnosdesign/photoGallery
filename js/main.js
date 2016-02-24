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
  report += '<li class="item-gallery"><a href="'+ photo.image +'"><figure>';
  report += '<img src="'+ photo.thumb +'" alt="'+ photo.title +'">';
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

// Variabili (Variables)

var $overLay = $('<div class="overlay"></div>');
var $container = $(
  '<div class="container">' 
    +'<div class="controllers">'
      +'<img class="close" src="img/icons/cross.svg">'
      +'<img class="next" src="img/icons/chevron-thin-right.svg">'
      +'<img class="prev" src="img/icons/chevron-thin-left.svg">'
    +'</div>'
  +'</div>');
var $img = $('<img>');
var $caption = $("<p></p>");


// alls append
$('body').append($overLay);
  $overLay.append($container);
    $container.append($img);
      $container.append($caption);

      
// clicks
$('#gallery li').children().click( function(e){
  e.preventDefault();
  getLocalItem(this);
  $overLay.show("fast", "linear");
  $container.show("slow");

$('.prev').click(function() { getPrevItem(); });
$('.next').click(function() { getNextItem(); });

}); // fine click item-gallery



// Functions

function getLocalItem (localItem) {  
  thisItem = localItem;
    var locationItem = $(localItem).attr("href");
      $img.attr("src", locationItem);

    var $captionText = $(localItem).find('figcaption').text();
      $caption.text($captionText); }
// end getLocalItem *********************************************

function getPrevItem() {
  $imageParent = $(thisItem).parent().prev();
    thisItem = $($imageParent).children("a");
      getLocalItem(thisItem);}
// end getPrevItem **********************************************   

function getNextItem() {
  $imageParent = $(thisItem).parent().next();
    thisItem = $($imageParent).children("a");
      getLocalItem(thisItem);}
// end getNextItem **********************************************     

// reload the document
$(".close").on( "click", (function() { location.reload(); }) );


// Keyboard Navigation 
$("body").on("keyup", function(e){
  if(e.keyCode === 37) {
    getPrevItem();
    //$('.container p').remove();
  } else if(e.keyCode === 39) {
    getNextItem();
    //$('.container p').remove();      
    }
}); 
// end Keyboard Navigation ***************************************


/* Barra di ricerca (Search bar) 
***********************************************/
// I use:
// .keyup()
// :Contains()

// searching function
function searching(input, list) {
  
  // Ogni volta che input cambia allora...
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
        $(list).find("li:not(:contains("+typed+"))").fadeOut("fast");
        // fadein the anchors is contained in list
        $(list).find("li:contains("+typed+")").fadeIn("slow");
      }else {
        // if type is equal to a white space or result not found
        $(list).find("figure").show();
      }
  }); // end keyup
} // end function searching ***********************************

//start searching function passing the arguments
searching($("#search"),$("#gallery"));