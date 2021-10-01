// 1. Create an array named numbers and store 5 number values in it
let numbers = [12,257,30,41,565];

// 2. Calculate the sum of array items and print it to the console using console.log()
let sum = 0;
for (let number of numbers){
    sum += number;
}

console.log(sum);

// 3. Calculate the average of array items and print it to the console using console.log()
console.log(sum / numbers.length);

// 4. Find the highest number in the array and print it to the console using console.log()
let highestNumber = numbers[0];

for (let number of numbers){
    if(number > highestNumber){
        highestNumber = number;
    }
}

console.log(highestNumber, "highest");

// 5. Find the lowest number in the array and print it to the console using console.log()
let LowestNumber = numbers[4];

for (let number of numbers){
    if(number < LowestNumber){
        LowestNumber = number;
    }
}

console.log(LowestNumber,"lowest");

// 6. Find the even numbers in the array and print them to the console using console.log()
for (let number of numbers){
    if(number % 2 == 0){
        console.log(number, "even");
    }
}

// 7. Find the odd numbers in the array and print them to the console using console.log()
for (let number of numbers){
    if(number % 2 !== 0){
        console.log(number, "odd");
    }
}

// 8. Find the numbers in the array that is divisible by 5 and print them to the console using console.log()
for (let number of numbers){
    if(number % 5 == 0){
        console.log(number, "divisible by 5");
    }
}

// 9. Log all the element of the array one by one
for (let number of numbers){
        console.log(number, "each value");
}

// 10. Find all the number in the array that is divisible by 3
for (let number of numbers){
    if(number % 3 == 0){
        console.log(number, "divisible by 3");
    }
}