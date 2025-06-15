// window.alert("Hey");
// let user= prompt("Hey!! whats your name");
// console.log("@"+user+ user.length)
// let age= prompt("Whats your age!!")
// if(age=18){
//     console.log("You are an adult");
// }
// else if(age>=30 && age<=60){
//     console.log("you're a middle aged person. ");
// }
// else{
//     console.log("Grow up!!");}

// let age = prompt("Enter your age");

// if (age !== null) {
//   age = parseInt(age); // Convert from string to number

//   if (isNaN(age)) {
//     console.log("Please enter a valid number.");
//   } else {
//     if (age < 18) {
//       console.log("You are a minor.");
//     } else if (age >= 18 && age < 60) {
//       console.log("You are an adult.");
//     } else {
//       console.log("You are a senior citizen.");
//     }
//   }
// } else {
//   console.log("You cancelled the prompt.");
// }
let arr=["amazon","ola","dior"]
arr.push("pinnacle");
console.log(arr);
console.log(arr.toString())
// console.log(`THe array  is ${arr}`)
for(let val of arr){
  console.log(val);
}
let price=[200,788,90,458]
for(let i=0;i<price.length;i++)
{
  let offer=price[i]/10;
  price[i]-=offer;
}
console.log(price);