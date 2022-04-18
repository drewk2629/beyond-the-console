$(document).ready(function(){
    // Establishing connection with anything that has a class of carousel
    $('.carousel').carousel(
    {
      dist: 0,
      padding: 0,
      fullWidth: true,
      indicators: true,
      duration: 100,
    }
    );
    // Expands sidenav (hamburger)
    // TODO: Figure out how to close sidenav
    $('.sidenav').sidenav();
    // Triggers modal
    $('.modal').modal();
    autoplay()   

  });
  
// Tells anything that has a class of carousel to slide
// setTimeout sets time to display carousel screen
  function autoplay() {
      console.log("start autoplay");
      $('.carousel').carousel('next');
      setTimeout(autoplay, 4500);
  }

