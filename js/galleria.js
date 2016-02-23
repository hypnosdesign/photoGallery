/* Galleria (Gallery) 
***********************************************/

// Variabili (Variables) **********************

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

      
 
$('#gallery li').children().click( function(e){
  e.preventDefault();
  getLocalItem(this);
  $overLay.show();
  

  $('.prev').click(function() { getPrevItem(); });
  $('.next').click(function() { getNextItem(); });

}); // fine click item-gallery



// Functions *************************

function getLocalItem (localItem) {  
    thisItem = localItem;
    var locationItem = $(localItem).attr("href");
    $img.attr("src", locationItem);

    var $captionText = $(localItem).find('figcaption').text();
    $caption.text($captionText); }

function getPrevItem() {
    $imageParent = $(thisItem).parent().prev();
      thisItem = $($imageParent).children();
    getLocalItem(thisItem);}
    

function getNextItem() {
    $imageParent = $(thisItem).parent().next();
    thisItem = $($imageParent).children();
    getLocalItem(thisItem);}
    

// reload the document
$(".close").on( "click", (function() { location.reload(); }) );


// Keyboard Navigation  **************************
$("body").on("keyup", function(e){
  if(e.keyCode === 37) {
    getPrevItem();
    $('.container p').remove();
  } else if(e.keyCode === 39) {
    getNextItem();
    $('.container p').remove();      
    }
}); // end Keyboard Navigation
