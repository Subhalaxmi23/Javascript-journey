// BMI=weight(kg)/height (m)* height(m)
// objective:Input height & weight, calculate BMI and show category (Underweight, Normal, Overweight).


let weight = 53;
let height = 5.4;

let BMI = weight / (height * height);
console.log("BMI is:", BMI.toFixed(2));
console.log("BMI is:", BMI)

if (BMI < 30) {
    console.log("Underweight");
}
else if (BMI >= 30 && BMI < 60) {
    console.log("Normal");
}
else {
    console.log("Overweight");
}

