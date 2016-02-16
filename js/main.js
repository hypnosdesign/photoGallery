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
