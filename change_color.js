
let gadget = document.querySelector(".gadget");

let color_calculadora = document.querySelector("#color_calculadora");
function mudarCorCalculadora(){
    gadget.style.backgroundColor = color_calculadora.value;  
}
mudarCorCalculadora() 


let color_borda_calc = document.querySelector("#color_borda_calc");
function mudarCorBordaCalc(){
    gadget.style.borderColor = color_borda_calc.value;
    
}
mudarCorBordaCalc()

// let color_button_calc = document.querySelector("#color_button_calc");
// let btn_calc = document.querySelectorAll(".btn_calc");
// console.log(color_button_calc.value)
// mudarCorButtonCalc()

// btn_calc.forEach("onchange", (e) =>{
//     let ele = ele
//         function mudarCorButtonCalc(ele){
//         e.style.backgroundColor = color_button_calc.value;
//     }
// })
