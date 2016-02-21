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
  report += "<figure class='images'>";
  report += '<a href="'+ photo.image +'"><img class="thumb" src="'+ photo.thumb +'" alt="'+ photo.alt_tag +'">';
  report += '<figcaption><span>'+ photo.title +'</span>'+ photo.caption +'</figcaption></a>';
  report += "</figure>"; 
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

//append overlay
$("body").append($overLay);
// append images to averlay and store this in a variable
var $controllers = $overLay.append($photo);
// append icons to images
$controllers.append($icons);
$overLay.hide();

//click image and show overlay
$(".images a").click(function(e){
  e.preventDefault();
  var $location = $(this).attr("href");
  $overLay.show();
  $photo.attr("src", $location);

  console.log(this);
  console.log($location);
});

// click and hide overlay
$(".icon-hide").click(function(){
  $overLay.hide();
})
































