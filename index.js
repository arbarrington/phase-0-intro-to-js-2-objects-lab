// Write your solution in this file!
const employee = {name: "Austin", streetAddress: "Main Street"};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newObj = {...employee};
    newObj[key]=value;
    return newObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, streetAddress, value) {
    employee.streetAddress = value;
    return employee;
}

function deleteFromEmployeeByKey(employee,name) {
    const newObj = {...employee};
    delete newObj.name;
    return newObj;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name; 
    return employee;
}
