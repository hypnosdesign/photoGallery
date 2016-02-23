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
  report += '<li class="item-gallery"><a class="item" href="'+ photo.image +'"><figure class="images">';
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

  // Variabili
  var $overLay = $('<div class="overlay"></div>');
  var $container = $('<div class="container"></div>');
  var $controllers = $('<div class="controllers"></div>');
  var $img = $('<img>');
  


  // struttura
  var structure = function() {
    $("body").append($overLay);
    $overLay.append($container);
    $container.append($img);
    // append controllers
    $container.append($controllers);
    $controllers.append('<img class="close" src="img/icons/cross.svg">'
                 +'<img class="next" src="img/icons/chevron-thin-right.svg">'
                 +'<img class="prev" src="img/icons/chevron-thin-left.svg">'
                 );
  } // FINE struttura



  // Funzioni

  function getItem(thisItem) { 
    structure(); 
    var $thisLocation = $(thisItem).children();
    var $location = $($thisLocation).attr("href"); 
    $img.attr("src", $location);
    console.log($location);

  } // fine funzione getItem




  function getNextItem() {
    var $nextLocation = $(thisItem).parent().next();
    var $nextItem = $($nextLocation).children();
    var $nextImageLocation = $($nextItem).attr("href");
    $img.attr("src", $nextImageLocation);
    getItem($nextLocation);
  }



  //*********************************************
  // apri immagine in overlay quando ci clicchi sopra
  /**********************************************/
  
  $(".item-gallery").click( function(e){
    e.preventDefault();
    // show overlay
    $overLay.show();
    // function getItem
    getItem(this);

    // set title
  var $title = $(this).find(".thumb").attr("alt");
  // set caption
  var $caption = $(this).find("figcaption").text();
  // append caption
  $container.append('<p>'+$caption+'</p>');


    // /**********************************************/
    // // click and hide overlay and caption
    // /**********************************************/
     
    $(".controllers img.close").on("click", (function(){ //hides the overlay and image when you click out
      $('.overlay').hide();
      $('.container p').remove();
      $('.controllers').remove();
    }));

    // //*********************************************
    // // fine chiudi overlay
  
  }); // fine click gallery a



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