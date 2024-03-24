/* Issue if not added data type
    3+5 = 8
    "3"+5 = 35
*/
function add1(num1, num2){
    console.log(typeof num1)
    return num1+num2
}
var result1 = add1('3',5)
console.log("add1: "+ result1)
//== add data type
function add2(num1: number, num2: number){
    return num1+num2
}
var result2 = add2(3,5)
console.log("add2: "+ result2)