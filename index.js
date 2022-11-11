//main calculator tools
let inp=document.getElementById("result")

function display(val){
    inp.value += val
    return val
}

function solve(){
    let x = inp.value
    let y = eval(x);
    inp.value = y
    return y
}

function clearScreen(){
    inp.value = ''
}

//more tools
let main=document.getElementById("main");
let moreBtn=document.getElementById("optBut");
let moreToolDiv=document.getElementById("more_tool_div")

function a(){
    moreToolDiv.style.visibility="visible"
}
function b(){
    moreToolDiv.style.visibility="hidden"
}
moreBtn.addEventListener('click',myFunction)

let clicked = 0;
function myFunction(){
  clicked++;
  if (clicked%2!==0){
    a()
  }else{
    b()
  }
};


let rootSquare=document.querySelectorAll("button");
//square root
function sqrt2(){
  let x = inp.value
  let y = Math.sqrt(x);
  inp.value = y
  return y
}
rootSquare[17].addEventListener("click",sqrt2)

//cube root
function sqrt3(){
  let x = inp.value
  let y = Math.cbrt(x);
  inp.value = y
  return y
}
rootSquare[18].addEventListener("click",sqrt3)

//pow2
function pow2(){
  let x = inp.value
  let y = Math.pow(x,2);
  inp.value = y
  return y
}
rootSquare[19].addEventListener("click",pow2)

//pow3
function pow3(){
  let x = inp.value
  let y = Math.pow(x,3);
  inp.value = y
  return y
}
rootSquare[20].addEventListener("click",pow3)
