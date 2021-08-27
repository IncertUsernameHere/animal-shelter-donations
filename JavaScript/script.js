window.onload = function() {
    var listLinks = document.querySelectorAll(".list-link");
    listLinks[0].style = "color: white; text-decoration: underline;"
  
    var active = "color: white; text-decoration: underline;"
    //Scroll Position//
    var updatePosition = function(scrollPosition) {
      var activeLink;
  
      var activate = function(num, array) {
        for (var i = 0; i < array.length; i++) {
          if (i == num) {
            array[i].style = active;
          } else {
            array[i].style = "";
          }
        }
      };
  
      if (scrollPosition < 170 || scrollPosition == 170) {
        activate(0, listLinks);
      } else if (scrollPosition > 169 & scrollPosition < 825) {
        activate(1, listLinks);
      } else if (scrollPosition > 824 & scrollPosition < 1040) {
        activate(2, listLinks);
      } else {
        activate(3, listLinks);
      }
    };
  
    //Scroll Position//
    document.addEventListener("scroll", function() {
      updatePosition(window.scrollY);
    });
}
  