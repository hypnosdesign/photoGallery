  /* Variabili (Variables)
  ***********************************************/

  var report = " ";
  


  /* Funzioni (Functions)
  ***********************************************/

  function print(message) {
    var doc = document.getElementById("gallery");
    doc.innerHTML = message;
  }

  function getFigure() {
    report += "<figure class='images'>";
    report += '<a href="'+ photo.image +'"><img class="thumb" src="'+ photo.thumb +'" alt="'+ photo.alt_tag +'">';
    report += '<figcaption><span>'+ photo.title +'</span>'+ photo.caption +'</figcaption></a>';
    report += "</figure>"; 
    return report;
  }


  /* Cicli (Loops) 
  ***********************************************/

  for (var i = 0; i < photos.length; i++) {
    photo = photos[i];
    messages = getFigure(photo);
    print(messages);
  } // fine ciclo for (End for cicle)
