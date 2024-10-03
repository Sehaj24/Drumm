
//detecting button press...........................................................


var numberOfDrumButtons= document.querySelectorAll(".drum").length;

for(var i=0; i<numberOfDrumButtons; i++)
{
document.querySelectorAll(".drum")[i].addEventListener("click", function (){
var buttonInnerHTMl = this.innerHTML;
  
makeSound(buttonInnerHTMl);

buttonAnimation(buttonInnerHTMl);

    });
  }

  // detecting keyboard press.................................................................


document.addEventListener("keypress", function(event){

  makeSound(event.key);

  buttonAnimation(event.key);
});


  function makeSound(key){

    switch (key) {

      case "s":
        var tom1 = new Audio("sounds/tom-1.mp3");  
         tom1.play();
        break;
    
        case "e":
          var tom2 = new Audio("sounds/tom-2.mp3"); 
            tom2.play();
         break;
  
         case "h":
          var tom3 = new Audio("sounds/tom-3.mp3");  
           tom3.play();
          break;
  
          case "a":
            var tom4 = new Audio("sounds/tom-4.mp3");
               tom4.play();
            break;
  
          case "j":
            var snare = new Audio("sounds/snare.mp3");   
            snare.play();
            break;
          
          case "D":
              var crash = new Audio("sounds/crash.mp3");  
               crash.play();
              break;
  
          case "J":
            var kickBass = new Audio("sounds/kick-bass.mp3");   kickBass.play();
  
      default:
        
    }}
    
function buttonAnimation(currentKey){

  var activeButton= document.querySelector("." + currentKey);

   activeButton.classList.add("pressed");
   setTimeout(function(){
    activeButton.classList.remove("pressed");
   }, 100);
}
    
    
//________________________________________________________________________________________________________________________________
  
    // document.querySelectorAll("button")[1].addEventListener("click", function (){ alert("Hi dear");});
  //  document.querySelectorAll("button")[2].addEventListener("click", function (){ alert("Hi dear");});
    //document.querySelectorAll("button")[3].addEventListener("click", function (){
    //    alert("Hi dear");
   // });
   //// document.querySelectorAll("button")[4].addEventListener("click", function (){
     //   alert("Hi dear");
    //});
   // document.querySelectorAll("button")[5].addEventListener("click", function (){
     //   alert("Hi dear");
   // });
    //document.querySelectorAll("button")[6].addEventListener("click", function (){
      //  alert("Hi dear");
   // });

   // as I created the above code so that I can apply alert of evey button, sure we can
   // do this but this is too much code
   
   // instead create a for loop.............

 