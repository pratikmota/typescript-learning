console.log('Hello');

let userName: string;
// ...

userName = 'Max'

function add(a: number, b = 5){
    return a+ b
}

add(10)
//add('10')
add(10,12)