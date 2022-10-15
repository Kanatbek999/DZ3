let a = prompt("Введите первое число")
let b = prompt("Введите второе число")
function num(a, b) {
   if(a < b) {
      alert(a + "меньше" + b)
   }else if (a > b) {
    alert(a + "больше" + b)
   }else if(a = b){
    alert( a + "равно" + b)
   }else{
    console.log(".");
   }
    
}
num(a, b)

let r = [1,2,3,4,5,6,7]
let p = [1,2,3,4,5,6,7,8,9]
function twoMass (r, p) {
    if(r.length < p.length) {
        console.log(p.length);
    }else {
        console.log(".");
    }
}
twoMass(r, p)

let k = "Hello"
function countChar(k) {
    if (k.length) {
        console.log(k.length);
    }else{
        console.log("g");
    }
}
countChar(k)