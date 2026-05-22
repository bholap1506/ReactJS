// const arr = [20,12,34,6,5,78,87,20,20]

// function secMax(arr) {
//     let max = -Infinity
//     let secondMax = -Infinity

//     for (let num of arr) {
//         if (num > max) {
//             secondMax = max
//             max = num
//         }  
//         else if (num !== max && num > secondMax) {
//             secondMax = num
//         }
//     }
//      return secondMax === -Infinity ? null : secondMax
// }

// console.log(secMax(arr))

// let str = "Bhola Ram"
// let reverseStr = ""
// for (let i = str.length-1; i >= 0; i--) {
//     reverseStr += str.charAt(i)
// }

// console.log(str);
// console.log(reverseStr);

// function reverseEach(str) {
//     return str.split(" ")
//     .map(word => word.split("").reverse().join(""))
//     .join(" ")
// }

// console.log(reverseEach("I am Bhola Ram"));

// function reverseString (str) {
//     return str.split(" ").reverse().join(" ")
// }

// console.log(reverseString("My name is Bhola Ram"))

// let str = "abdjrrjdba"

// function isPalindrome(str) {
//     // let rev = str.split("").reverse().join("")
//     // if (rev === str) {
//     //     return true;
//     // } else {
//     //     return false;
//     // }

//     let start = 0; 
//     let end = str.length-1;
//     while(start <= end) {
//         if (str[start] !== str[end]) {
//             return false;
//         } else {
//             return true;
//         }
//     }
// }

// console.log(isPalindrome(str));

// let arr1 = [100,200,300,400];
// let arr2 = [100,300,300,400];


// function checkEquals(arr1, arr2) {
//     for (let i = 0; i < arr1.length; i++) {
//         if (arr1[i] !== arr2[i]) {
//             return false;
//         }
//     }
//     return true;
// }

// console.log(checkEquals(arr1, arr2))

// const flag = arr1.every((val, i) => val === arr2[i]);

// console.log(flag)
// console.log(JSON.stringify(arr1) === JSON.stringify(arr2))


// let str1 = arr1.join(" ")
// let str2 = arr2.join(" ")

// // console.log(str1, str2)
// console.log(str1.length)

// console.log(str2.length)

// console.log(...str1);
// console.log(...str2)

// console.log(str1 === str2)

// let arr = [, , ,];
// console.log(arr)
// console.log(arr.length)

// const a = {
//     age : 23
// }
// b = a;
// b.age = 100;
// console.log(a.age);

// console.log([] == [])
// console.log([] === [])
// console.log([] == "")
// console.log([] === "")

// console.log(JSON.stringify([]) === JSON.stringify([]))
// console.log(JSON.stringify([]) == JSON.stringify([]))


// function outerFunction(outerVariable) {
//     return function innerFunction(innerVariable) {
//         console.log(`Outer: ${outerVariable}`);
//         console.log(`Inner: ${innerVariable}`);
//     };
// }



// const newFunction = outerFunction("outside"); 
// // outerFunction has finished running here!
// newFunction()

// newFunction("inside"); 
// Output:
// Outer: outside
// Inner: inside

// let str1 = "bhola"
// let str2 = str1.sort(
//     (a,b) => a - b
// )
// console.log(str2)
// let str = " bhola Ram"
// str = str.trim();
// let arr1 = str.split("").reduce()
// console.log(arr1)

// const arr = [2,4,5,2,3,4,21,3,4,3,2];
// const narr =  arr.sort();
// console.log(narr);

// function maxEl (arr) {
//     let max = arr[0];
//     let min = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//         if (arr[i] < min) {
//             min = arr[i];
//         }
//     }
//     return max-min;
// }

// console.log(maxEl(arr));

for (let i = 1; i <= 10; i++) {
    setTimeout(()=> {
        console.log(i)
    },i*500)
}

var a = 10
function add() {
    var a = 20
    console.log(a)
}
add()
console.log(a)
add()