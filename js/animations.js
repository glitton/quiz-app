// JavaScript for GS Warriors quiz app
$(document).ready(function(){

  // Animate start-quiz button using animate.css
  // Invokes animationClick() function
  animationHover('#start-quiz', 'wobble');  

  // function to use animate.css on hover
  function animationHover(element, animation){
    element = $(element);
    element.hover(
        function() {
            element.addClass('animated ' + animation);        
        },
        function(){
            //wait for animation to finish before removing classes
            window.setTimeout( function(){
                element.removeClass('animated ' + animation);
            }, 3000);         
        });
}
 // function to use animate.css on click
  function animationClick(element, animation){
    element = $(element);
    element.click(
      function() {
        element.addClass('animated ' + animation);
        //wait for animation to finish before removing classes
        window.setTimeout( function(){
          element.removeClass('animated ' + animation);
        }, 3000);
      }
    );
  };




});
