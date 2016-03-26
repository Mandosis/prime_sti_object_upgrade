var Employee = function(name, employeeId, income, rating) {
  this.name = name;
  this.id = employeeId;
  this.income = income;
  this.rating = rating;
};

var atticus = new Employee("Atticus", "2405", "47000", 3)
var jem = new Employee("Jem", "62347", "63500", 4);
var boo = new Employee("Boo", "11435", "54000", 3);
var scout = new Employee("Scout", "6243", "74750", 5);

var employees = [atticus, jem, boo, scout];

calcSti(employees);

function calcSti(employee) {
  var result = [];
  for(var i = 0; i < employee.length;i++){
    // Setting employee name
    result[0] = employee[i].name;

    // Checking employee rating and setting bonus
    switch (employee[i].rating) {
      case 3:
        result[1]=.04;
        break;
      case 4:
        result[1]=.06;
        break;
      case 5:
        result[1]= .1;
        break;
      default:
        result[1]= 0;
      }

      // Additional bonus based on length of time at company
      if (employee[i].id.length <= 4) {
        result[1] += .05;
      }

      // Remove 1% if income is over $65,000
      if (employee[i].income > 65000) {
        result[1] -= .01;
      }

      // If bonus is over 13% lower it to 13%
      if (result[1] > .13) {
        result[1] = .13;
      }

      // Annual Income + STI
      var sti = parseInt(employee[i].income)*result[1];  //calculates STI
      result[2] = sti + parseInt(employee[i].income); // adds income and STI
      //console.log("Income + STI = " + result[2]);

      //Total bonus
      // Math.round()
      result[3] = Math.round(employee[i].income * result[1]);


      // Convert decimal to percentage string with %
      result[1] = result[1] * 100 + "%";

      // Build object
      var employeeBonus = {
        name: result[0],
        percent: result[1],
        income: result[2].toLocaleString('en-US', {style: 'currency', currency: 'USD', currencyDisplay: 'symbol'}),
        bonus: result[3].toLocaleString('en-US', {style: 'currency', currency: 'USD', currencyDisplay: 'symbol'}),
      };

      // Final result
      console.log(employeeBonus);
  }
}
