let employeeCount = 0;

document.getElementById('employeeForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent page reload

    // Get form values
    const name = document.getElementById('empName').value;
    const age = document.getElementById('empAge').value;
    const desti = document.getElementById('empDesti').value;
    const salary = document.getElementById('empSalary').value;

    // Optional: Log to console
    console.log(`Employee: ${name}, Age: ${age}, Designation: ${desti}, Salary: ${salary}`);

    // Increase count
    employeeCount++;

    // Update the counter on screen
    document.getElementById('employeeCount').textContent = employeeCount;

    // Reset the form
    this.reset();
});
