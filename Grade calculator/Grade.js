// Input marks (0 to 100)
// Output grade:
// A (90+)
// B (75-89)
// C (50-74)
// F (<50)

let marks = 85;

if (marks >= 90) {
    console.log("Grade: A");
}
else if (marks >= 75 && marks < 90) {
    console.log("Grade: B");
}
else if (marks >= 50 && marks < 75) {
    console.log("Grade: C");
}
else{
    console.log("Grade: F");
}