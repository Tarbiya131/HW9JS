let arr = [5, 67, 142, 23, 1, 456, 86, 136, 234, 12];
let min = Math.min(...arr);
console.log(min);
let max = Math.max(...arr);
console.log(max);

let arr1= [];
for(let i = 0; i < 5; i++){
    let a = +prompt("Введите число");
    array.push(a);
}
console.log(arr1);

let c = 0;
for(let i = 0; i < arr1.length; i++){
    c += array[i]
}
console.log(c);

let d = c / arr1.length;
console.log(d);


let arr_1 = [254, 5, 56, 65, 143, 42, 3];
let arr_2 = [15, 6, 56, 63, 143, 142, 13];
for ( let i = 0; i < arr_1.length; i++){
    let arr =[]
    for( let j = i; j < i +1; j++){
        if( arr_1[i] == arrTwo[j]){
            arr.push("=")
        }else if( arr_1[i] < arrTwo[j]){
            arr.push("<")
        }else if( arr_1[i] > arrTwo[j]){
            arr.push(">")
        } 
    }
    console.log(arr);
}






let arr2 = [254, 5, 56, 65, 143, 42, 3, 241, 176, 10];
let newArr = [];
for (let i = 0; i < arr2.length; i++){
    if(arr2[i]%2 == 0){
        newArr.push(arr2[i])
    }
   
}
console.log(arr2)
console.log(newArr)