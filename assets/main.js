//1
function EvenNumbers(a, b) {
    for (let i = a; i <= b; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

const a = parseInt(prompt("Введите начальное число a:"));
const b = parseInt(prompt("Введите конечное число b:"));

console.log(`Чётные числа от ${a} до ${b}:`);
EvenNumbers(a, b);

//2
function MinNumber(a2, b2) {
    if (a2 < b2) {
        console.log(a2);
    }
    else if (b2 < a2){
        console.log(b2);
    }
    else{
        console.log("Они равны друг другу". a)
    }
}

const a2 = parseInt(prompt("Введите число a:"))
const b2 = parseInt(prompt("Введите число b:"))

console.log(`Минимальное число`);
MinNumber(a2,b2);

// 3
let styles = ["Джаз", "Блюз"];
console.log(styles);

styles.push("Рок-н-ролл");
console.log(styles);

const middleIndex = Math.floor((styles.length - 1) / 2); 

styles[middleIndex] = "Классика";
console.log(styles); 


const firstElement = styles.shift();
console.log("Удаленный элемент:", firstElement); 
console.log(styles); 

styles.unshift("Рэп", "Регги");
console.log(styles); 