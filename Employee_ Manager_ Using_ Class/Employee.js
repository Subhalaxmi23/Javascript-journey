// ✅ Objective:
// Create an Employee class
// Store employee name, salary
// Add a method to calculate bonus (10% of salary)

class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  getBonus() {
    return this.salary * 0.1;
  }

  showDetails() {
    console.log(
      `name:${this.name} earns ${this.salary} and bonus is ${this.getBonus()}`
    );
  }
}

let emp1=new Employee("John", 50000);
let emp2=new Employee("Jane", 60000);

emp1.showDetails();
emp2.showDetails();