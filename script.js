let x = "";
for ( let i = 0; i < 8; i++){
  for ( let j = 0; j < 8; j++){
    if((i + j) % 2 == 0){
      x += " ";
    }else
      x += "#"
    
  }
  x += "\n";
}
console.log(x);



for( let i = 1; i < 100 + 1; i ++){
  if ( i % 3 == 0 && i % 5 != 0){
    console.log((i) + " Fizz")
  }else if ( i % 3 != 0 && i % 5 ==0){
    console.log((i) + " Buzz")
  }else console.log((i) + " FizzBuzz")
}

function str(){
  let y = prompt("введите слова");
  y = y.toLowerCase().replace(/[^a-z0-9]+/g,'');
  let z = y.split("");
  z.reverse();
  z = z.join("");
  if( y == z){
    console.log("Палиндром")
  }else console.log("Не палиндром")
}
str()