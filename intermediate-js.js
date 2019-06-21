// Intermediate Javascript Assessments

// 1. Write an arrow function that takes one argument of type array and returns the contents of that array in reverse order.

var originalArray = [1, 2, 3, 4, 5, 6, 7]

const reverseArray = (arr) => {
	let holdArr = []
	for (let i = 0; i < arr.length; i){
		holdArr.push(arr.pop())
	}
	return holdArr
}
console.log(reverseArray(originalArray) + "\n")

// 2. Given the object below, complete the console.log to find specific information:

var bicycle = {
	type: "Roadbike",
	gear: ["comfy seat", "cool handlebars", "vintage bell", "toe clips"],
	wheels: {
		count: 2,
		specs: ["road tires", "AX-7563", "80-115 PSI"],
		brand: "Trek"
	}
}

// Log the type of bicycle:
console.log(bicycle.type)

// Log the bell:
console.log(bicycle.gear[2])

// Log the PSI:
console.log(bicycle.wheels.specs[2] + "\n")


// 3. Write a function called letterCounter that logs the number of times the letter "l" appears in ourString.

var ourString = "Hello Learn Students!"

const letterCounter = (str) => {
	let holdStr = str.split("")
	let count = 0
	holdStr.map(value => {
		if (value === 'l' || value === 'L') {
			count++
		}
	})
	return count
}
console.log(letterCounter(ourString) + "\n")

// 4. Write a function called getFib that returns the first 10 numbers of the Fibonacci sequence in an array. [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

const getFib = (input) => {
	let holdInt = 1
	let arrFib = [0,1]
	for (let i = 0; i < input-1; i++){
		holdInt += arrFib[i]
		arrFib.push(holdInt)
	}
	arrFib.shift()
	return arrFib
}
console.log(getFib(10) + "\n")

//5. Write a function called oddChecker that takes in the fullArr and uses a for loop to return a new array of only odd numbers. Copy and paste your code and refactor using ES6 syntax.

var fullArr = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]

const oddChecker = (arr) => {
	let holdArr = []
	for (let i = 0; i < arr.length; i++){
		if (parseInt(arr[i], 10)%2 === 1){
			holdArr.push(arr[i])
		}
	}
	return holdArr
}
console.log(oddChecker(fullArr))
