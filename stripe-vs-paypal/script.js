function calc(){
let usage=parseFloat(document.getElementById('usage').value)||0;
let a=parseFloat(document.getElementById('a').value)||0;
let b=parseFloat(document.getElementById('b').value)||0;

let costA = usage * a;
let costB = usage * b;

document.getElementById('result').innerText=
"Option A: $"+costA.toFixed(2)+" | Option B: $"+costB.toFixed(2)+" | Difference: $"+Math.abs(costA-costB).toFixed(2);
}