(function($) {
  "use strict"; // Start of use strict
  $(document).ready(function() {

    // Syntax highlighting
    //hljs.initHighlightingOnLoad();

    // Header
    var menuToggle = $('#js--mobile-menu').unbind();
    $('#js--navigation-menu').removeClass("show");
    menuToggle.on('click', function(e) {
      e.preventDefault();
      $('#js--navigation-menu').slideToggle(function(){
        if($('#js--navigation-menu').is(':hidden')) {
          $('#js--navigation-menu').removeAttr('style');
        }
      });
    });

    // Lightbox2 options
    lightbox.option({
      'wrapAround': true
    });

    // fitvid on embed
    $('.media').fitVids();

    // flexslider
    $('.flexslider').flexslider({
      animation: "fade",
      controlNav: false,
      directionNav: true,
      slideshowSpeed: 5000,
      animationSpeed: 600,
      touch: true
    });

    /* thumbnail switch on products */
    if(document.body.contains(document.getElementById('featured'))){

      let thumbnails = document.getElementsByClassName('thumbnail')
      
      let activeImages = document.getElementsByClassName('active')

      for (var i=0; i < thumbnails.length; i++){

          thumbnails[i].addEventListener('click', function(){

              console.log(activeImages)
              
              if (activeImages.length > 0){
                  activeImages[0].classList.remove('active')
              }
              
              this.classList.add('active')

              document.getElementById('featured').src = this.src
              let original = document.getElementById('featured').src
              let result = original.replace(/100/g, 1200)

              document.getElementById('featured').src = result
              $('#featured').removeAttr('width').removeAttr('height');

              document.getElementById('zoom').style.backgroundImage = "url('" + result + ")";

          })
      }

      // magnify on zoom
      const zoomtarget = document.getElementById('zoom')

      zoomtarget.addEventListener('mousemove', (e) => {

          let zoomer = e.currentTarget;

          let offsetX = ''
          let offsetY = ''
          let x = ''
          let y = ''
          e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
          e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX
          x = offsetX/zoomer.offsetWidth*100
          y = offsetY/zoomer.offsetHeight*100
          zoomer.style.backgroundPosition = x + '% ' + y + '%';

      })
    
    } // end if element exists

  }); // end doc ready

})(jQuery); // End of use strict
