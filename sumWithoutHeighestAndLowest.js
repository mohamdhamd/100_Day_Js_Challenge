let number = [11, 3, 5, 4, 1];

var sum = 0;
let max = Math.max(...number);
let min = Math.min(...number);
number.map(item => {
    // if (item !== max && item !== min) {
    //     sum += item;
    // }
    item !== max && item !== min ? sum += item : 0;


});
console.log(sum)



// ////////////////   OR ///////
// console.log(number.sort((a, b) => a - b))
var sum2 = 0;
let newArr = number.sort((a, b) => a - b).slice(1 , -1)
// console.log(newArr) 
newArr.forEach(element => {
    sum2 += element;
});
console.log(sum2)







