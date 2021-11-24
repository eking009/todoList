// function greet(){
//     console.log("HII ILOVE YOU!!")
// }
// function diss(){
//     console.log("You are the worst :(")
// }

// let funcs = [greet, diss]

// const myFuncs = function add(x,y){
//     return x+y;
// }

// function repeatThreeTimes(func){
//     func();
//     func();
//     func();
// }
// // function repeat (num, func){
// //     for (let i=0; i<num;i++){
// //         func()
// //     }
// // }
// //  function giveBirth(){
// //      console.log("GIVING BIRTH!!!")
// //      return function cry(){
// //          return "WAAAAAHHHH"
// //      }
// //  }


// //  function makeMultiplyFuc(num){
// //      return function mult(x){
// //          return num * x;
// //      }
// //  }

// // //  greet();
// // //  alert("I AM ALERT")
// // //  diss();

// // // greet();
// // // setTimeout(diss, 3000);

// // //  

// // function countDown(Number){
// //     let counting_Down  = setInterval (() => {Number--; 
        
// //         if (Number <= 0){
// //             clearInterval(counting_Down);
// //             console.log("DONE!");
// //         }
// //         else {
// //             console.log(Number);
// //         }
// //     },1000)
// // } 

// function randomGame(){
//         let random_Number;
//         let counter = 0;
//         let set_Timer = setInterval(() => {random_Number = Math.random();
//             counter++
            
//             if(random_Number > .75) {
//                 clearInterval(set_Timer);
//                 console.log("It took " + counter + " try/tries.");
//             }
//         },1000)
//     }

//     function countDown(time){
//         let timer = setInterval(function(){
//           time--;
//           if(time <= 0){
//             clearInterval(timer);
//             console.log('DONE!');
//           }
//           else {
//             console.log(time);
//           }
      
//         },1000)
//       }

// //click 
// function makeBody(color){
//     document.body.style.backgroundColor = color;
// }

// const h1 = document.querySelector('h1');


// const btn = document.querySelector('#teal');
// btn.ondblclick = function(){
//     makeBody('teal');
// };

// const violetBtn = document.querySelector('#violet');
// violetBtn.addEventListener('click', function(){
//     makeBody('violet');
// });

// violetBtn.addEventListener('click', function(){
//     h1.style.color = 'cyan';
// });

document.addEventListener("DOMContentLoaded", function() {
    let todoForm = document.getElementById("newToDoForm");
    let todoList = document.getElementById("todoList");
  
    todoForm.addEventListener("submit", function(event) {
      event.preventDefault();
  
      let removeButton = document.createElement("button");
      removeButton.innerText = "X";
  
      let newTodo = document.createElement("li");
      newTodo.innerText = document.getElementById("task").value;
  
      todoList.appendChild(newTodo);
      newTodo.appendChild(removeButton);
  
      todoForm.reset();
    });
  
    todoList.addEventListener("click", function(event) {
      const targetTagToLowerCase = event.target.tagName.toLowerCase();
      if (targetTagToLowerCase === "li") {
        event.target.style.textDecoration = "line-through";
      } else if (targetTagToLowerCase === "button") {
        event.target.parentNode.remove();
      }
    });
  });