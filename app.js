var userAsk = prompt("enter any data you want to... \n checking data type");
var character = userAsk;


if (character >= '0' && character <= '9') {
    alert("The input is a number.");
} else if (character >= 'A' && character <= 'Z') {
    alert("The input is a uppercase letter.");
} else if (character >= 'a' && character <= 'z') {
    alert("The input is a lowercase letter.");
} else {
    alert("Invalid");
} 

// 2

var asking1 = prompt("Enter your first number");
var asking2 = prompt("Enter your second number");

if(asking1>asking2){
    alert(asking1 + " " + "is a greater number.");
} else if(asking1<asking2){
    alert(asking2 + " " + "is a greater number.");
} else if(asking1=asking2){
    alert(asking1  + " " + "both are equal number.");
} else {
    alert("Please enter you data in number.");
}

// 3
var askUser = parseInt(prompt("Enter any number. \n +number \n -number \n zero "));
if(askUser > 0  && askUser <= 10){
alert("It's a +number");
}
else if(askUser < -0  && askUser >= -10){
    alert("It's  a -number");
    }
     else if(askUser = 0){
        alert("It's a zero");
        }
         else{
            alert("Enter a number between -10 and 10 (inclusive)")
        }

// 4
var take = prompt("Enter a vowel (any one)");
var char = take.toLowerCase();

if(char === "a" || char === "e" || char === "i" || char === "o" || char === "a"){
    alert("True It's a vowel");
}else{
    alert("False it's not a vowel");
}

// 5 
var pass = "Javascript";

var takeData = prompt("Enter your password \n Hint: Javascript");

if (takeData=== null){
    alert("Please enter your password");
}else if (takeData===pass){
    alert("Succesfully login");
}else {
    alert("Incorrect password. Please try again.");
}

// 6

var greeting;
var hour = 13;

if (hour < 12) { 
  greeting = "Good morning";
} else if (hour < 18) { 
  greeting = "Good afternoon";
} else { 
  greeting = "Good evening";
}

console.log(greeting);

// 7

var time = prompt ("Enter your time \n Enter your time in a format \n Hint: 1900= 7pm ");

if(time>= "0000" && time <"1200" ){
    alert("Good morning");
} else if(time>= "1200" && time <"1700" ){
    alert("Good afternoon");
} else if(time>= "1700" && time <"2100" ){
    alert("Good evening");
} else if(time>= "2100" && time <"2359" ){
    alert("Good night");
}
