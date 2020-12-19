// document.querySelector(".circle").onclick = function() {myFunction()};

// function myFunction() {
//   document.querySelector(".circle").style.transform = 'rotate(80deg)';
// }

 
let circle = document.querySelector('.circle');
console.log(circle)
let x = 0;
let y = 0
let scrollPos = 0;
let lastScrollTop = 0;

 
   
 
//  window.addEventListener('scroll', function() {
     
//     if ((document.body.getBoundingClientRect()).top < scrollPos){
//         x += 1;
//         if(x == 1){
//             circle.style.animation =  "moveDown1  3s forwards"
//             console.log(  x)
//         }
//         if(x == 2){
//             circle.style.animation =  "moveDown2 3s forwards "
//             console.log( x)
//         }
//         if(x == 3){
//             circle.style.animation =  "moveDown3 3s forwards "
//             console.log(  x)
//         }
//         if(x == 4){
//             circle.style.animation =  "moveDown4 3s forwards"
//             console.log(  x)
//         }
//         scrollPos = (document.body.getBoundingClientRect()).top;
 
//     }
//     if ((document.body.getBoundingClientRect()).top > scrollPos){
//         x += 1;
//         if(x == 1){
//             circle.style.animation =  "moveUp1  3s forwards"
//             console.log(  x)
//         }
//         if(x == 2){
//             circle.style.animation =  "moveUp2 3s forwards "
//             console.log( x)
//         }
//         if(x == 3){
//             circle.style.animation =  "moveUp3 3s forwards "
//             console.log(  x)
//         }
//         if(x == 4){
//             circle.style.animation =  "moveUp4 3s forwards"
//             console.log(  x)
//         }
//         scrollPos = (document.body.getBoundingClientRect()).top;
   
//     }
 
// });

window.addEventListener('scroll', function() {
   let st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
   if (st > lastScrollTop){
    x +=1
        if(y >= 0){
            y -=1
        }
   
    if(x == 1){
        
        circle.style.animation =  "moveDown1  3s forwards"
        console.log( "x = " +  x)
    }
    if(x == 2){
        x +=1
        if(y <= 0){
            y -=1
        }
        circle.style.animation =  "moveDown2 3s forwards "
        console.log( "x = " +  x)
    }
    if(x == 3){
        x +=1
        if(y <= 0){
            y -=1
        }
        circle.style.animation =  "moveDown3 3s forwards "
        console.log( "x = " +  x)
    }
    if(x == 4){
        x +=1
        if(y <= 0){
            y -=1
        }
        circle.style.animation =  "moveDown4 3s forwards"
        console.log( "x = " +  x)
    }
    if(x == 5){
        x +=1
        if(y <= 0){
            y -=1
        }
        circle.style.animation =  "moveDown5 3s forwards"
        console.log( "x = " +  x)
    }
   } else {
      
    y +=1
    if(x >= 0){
        x -=1
    }
    if(y == 1){
        
        circle.style.animation =  "moveUp1  3s forwards"
        console.log( "y = " +  y)
    }
    if(y == 2){
        circle.style.animation =  "moveUp2  3s forwards"
        console.log( "y = " +  y)
    }
    if(y == 3){
        circle.style.animation =  "moveUp3 3s forwards "
        console.log( "y = " +  y)
    }
    if(y == 4){
        circle.style.animation =  "moveUp4 3s forwards "
        console.log( "y = " +  y)
    }
    if(y == 5){
        circle.style.animation =  "moveUp5 3s forwards"
        console.log( "y = " +  y)
    }
   }
   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
//    https://stackoverflow.com/questions/31223341/detecting-scroll-direction
}, false);