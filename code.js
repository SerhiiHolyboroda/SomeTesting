// document.querySelector(".circle").onclick = function() {myFunction()};

// function myFunction() {
//   document.querySelector(".circle").style.transform = 'rotate(80deg)';
// }

 
let circle = document.querySelector('.circle');
console.log(circle)
let x = 0;
window.addEventListener('click', function(){ 
   
 

    // // circle.style.animation = "circle1 1s linear";
    // x = x + 1;
    // if(x == 0){
    //     circle.style.animation = "circle1 1s linear";
    //     var rect = circle.getBoundingClientRect();
       circle.style.transform += 'rotate(20deg)';
    //     circle.style.top = rect.top; //or whatever 
    //     circle.style.left = rect.left; // or whatever
    //     console.log(x)
    // }
    // if(x == 1){
    //     circle.style.animation = "circle2 1s linear";
    //     console.log(x)
    // }
    // if(x == 2){
    //     circle.style.animation = "circle3 1s linear";
    //     console.log(x)
    // }
    // if(x == 3){
    //     circle.style.animation = "circle3 1s linear";
    //     console.log(x)
    // }
 });