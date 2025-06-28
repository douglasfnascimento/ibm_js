const employees = [
  { id: 1, name: "John Doe", age: 30, department: "IT", salary: 50000, specialization: "Swift" },
  { id: 2, name: "Alice Smith", age: 28, department: "HR", salary: 45000, specialization: "JavaScript" },
  { id: 3, name: "Bob Johnson", age: 35, department: "Finance", salary: 60000, specialization: "Python" },
  { id: 4, name: "Emily Davis", age: 32, department: "Marketing", salary: 55000, specialization: "Java" },
  { id: 5, name: "Michael Brown", age: 40, department: "Sales", salary: 70000, specialization: "C#" },
  { id: 6, name: "Sarah Wilson", age: 29, department: "IT", salary: 48000, specialization: "Ruby" },
  { id: 7, name: "David Lee", age: 38, department: "HR", salary: 52000, specialization: "Swift" },
  { id: 8, name: "Laura Garcia", age: 31, department: "Finance", salary: 58000, specialization: "JavaScript" },
  { id: 9, name: "James Martinez", age: 45, department: "Marketing", salary: 62000, specialization: "Swift" },
  { id: 10, name: "Linda Taylor", age: 27, department: "Sales", salary: 47000, specialization: "Python" },
];

 // Function to display all employees

function displayEmployees() {
    const totalEmployees = employees.map((employee, index) => `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
document.getElementById('employeesDetails').innerHTML = totalEmployees

}


function calculateTotalSalaries() {
      const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
      alert(`Total Salaries: $${totalSalaries}`);
    }

function displayHREmployees() {
     const hrEmployees = employees.filter(employee => employee.department === 'HR');
      const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
      document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}

function findEmployeeById(employeeId) {
      const foundEmployee = employees.find(employee => employee.id === employeeId);
      if (foundEmployee) {
      document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
      }
      else{
        document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this ID';
       }
   }

function findEmployeeBySpecialization(specialization) {
      const foundEmployees = employees.filter(employee => employee.specialization.toLowerCase() === specialization.toLowerCase());
      if (foundEmployees.length > 0) {
        const foundEmployeesDisplay = foundEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary} - ${employee.specialization}</p>`).join('');
        document.getElementById('employeesDetails').innerHTML = foundEmployeesDisplay;
      } else {
        document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this specialization';
      }
   }