// ---1---
function sumEvenNumbers(numbers) {
    let sumEven = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            sumEven += numbers[i];
        }
    }
    return sumEven;
}

const numbers = [2, 3, 4, 5, 7, 8, 9];
const result = sumEvenNumbers(numbers);
console.log(result);

// ---2---
for (let num = 1; num <= 100; num++) {
    if (num % 3 === 0 && num % 5 === 0) {
        console.log("FizzBuzz");
    } else if (num % 3 === 0) {
        console.log("Fizz");
    } else if (num % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(num);
    }
}

//   ---3---
const car = {
    make: "Toyota",
    model: "Camry",
    year: 2022,
};

function displayCarInfo(carObj) {
    for (let key in carObj) {
        console.log(key + ": " + carObj[key]);
    }
}

displayCarInfo(car);

// ---4---
const strings = ["Saad", "Ali", "Ahmed", "Laraib", "Yasir", "Munna"];
const sortedStrings = strings.sort();

console.log(sortedStrings);

// ---5---
class School{
    constructor(name, Class, grade, number, percentage){
        (this.name=name),
        (this.class=Class),
        (this.grade=grade),
        (this.number=number),
        (this.percentage=percentage)
    }
}
class Exam extends School{
    constructor(name, Class, grade, number, percentage, remarks) {
      super(name,Class, grade, number, percentage);
      (this.remarks=remarks);
    } 
}
let school = new School("Ali","12th","A","780","78%");
let exam = new Exam("Ali","12th","A","780","78%","Excellent");
console.log(school);
console.log(exam);

