// QUESTION 1: NUMBER ANALYZER

let sum = 0;
let evenNumbers = 0;
let oddNumbers = 0;

// Loop from 1 to 100
for (let number = 1; number <= 100; number++) {

    // Add the current number to the total sum
    sum = sum + number;

    // Check if the number is even or odd
    if (number % 2 === 0) {
        console.log(number + " - Even");
        evenNumbers++;
    } else {
        console.log(number + " - Odd");
        oddNumbers++;
    }
}

// Display the results
console.log("Total Sum: " + sum);
console.log("Even Numbers: " + evenNumbers);
console.log("Odd Numbers: " + oddNumbers);


// QUESTION 2: STUDENT SCORE ANALYZER

let scores = [45, 78, 92, 34, 67, 88, 51, 73, 29, 95];

let highest = scores[0];
let lowest = scores[0];
let total = 0;
let passed = 0;
let failed = 0;

// Loop through all the scores
for (let i = 0; i < scores.length; i++) {

    let score = scores[i];

    // Display the score
    console.log("Student " + (i + 1) + ": " + score);

    // Find the highest score
    if (score > highest) {
        highest = score;
    }

    // Find the lowest score
    if (score < lowest) {
        lowest = score;
    }

    // Calculate total score
    total = total + score;

    // Check if student passed or failed
    if (score >= 50) {
        console.log("Result: PASS");
        passed++;
    } else {
        console.log("Result: FAIL");
        failed++;
    }

    // Display the grade
    if (score >= 70) {
        console.log("Grade: A");
    } else if (score >= 60) {
        console.log("Grade: B");
    } else if (score >= 50) {
        console.log("Grade: C");
    } else if (score >= 40) {
        console.log("Grade: D");
    } else {
        console.log("Grade: F");
    }

    console.log("--------------------");
}

// Calculate average
let average = total / scores.length;

// Display final results
console.log("Highest Score: " + highest);
console.log("Lowest Score: " + lowest);
console.log("Total Score: " + total);
console.log("Average Score: " + average);
console.log("Students Passed: " + passed);
console.log("Students Failed: " + failed);