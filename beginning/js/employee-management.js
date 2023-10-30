/*eslint-env browser*/

var employee_list = new Array();
    employee_list.push(["Ram","Manager",9999]);
    employee_list.push(["Lily","VP Sales",3346]);
    employee_list.push(["Sharad","Developer",2222]);
    employee_list.push(["Daisy","Sr. Developer",8989]);
    employee_list.push(["Bowen","Developer",1111]);

window.addEventListener("load", function () {
    $("registration_form").reset();
    for(var i=0;i<employee_list.length;i++) {
        addEmployee(employee_list[i][0],employee_list[i][1],employee_list[i][2]);
    }
    $("employeeCount").innerHTML = "Showing " + employee_list.length + " Employees";
    $("addButton").addEventListener("click",function(e) {
        e.preventDefault();
        addEmp();
    });
});

var $ = function(id) {
    "use strict";
    return window.document.getElementById(id);
}

function addEmployee(name, title, extension) {
    "use strict";
    var empTable = $("employeeDetails");
    var row = empTable.insertRow(-1);
    var cell = row.insertCell(-1);
    cell.innerHTML = name;
    cell = row.insertCell(-1);
    cell.innerHTML = title;
    cell = row.insertCell(-1);
    cell.innerHTML = extension;
    cell = row.insertCell(-1);
    var delButton = document.createElement("BUTTON");
    delButton.innerHTML = "Delete";
    delButton.setAttribute("class","del");
    delButton.setAttribute("onclick", "deleteEmp(this);");
    cell.appendChild(delButton);
}

function deleteEmp(button) {
    var row = button.parentNode.parentNode;
    var table = $("employeeDetails");
    table.deleteRow(row.rowIndex);
    employee_list.splice(row.rowIndex,1);
    $("employeeCount").innerHTML = "Showing " + employee_list.length + " Employees";
}

function addEmp() {
    "use strict";
    var tableCells = window.document.getElementsByTagName("td");
    var name, title, extension, required, flag=false;
    required = "<span>Required Field</span>";
    name = $("name").value;
    title = $("title").value;
    extension = $("extension").value;
    if(name === "") {
        tableCells[2].innerHTML = required;
        flag=true;
    }
    if(title === "") {
        tableCells[5].innerHTML = required;
        flag=true;
    }
    if(extension === "") {
        tableCells[8].innerHTML = required;
        flag=true;
    }
    if(!flag){
        tableCells[2].innerHTML = "";
        tableCells[5].innerHTML = "";
        tableCells[8].innerHTML = "";
        employee_list.push([name,title,extension]);
        addEmployee(name, title, extension);
        $("employeeCount").innerHTML = "Showing " + employee_list.length + " Employees";
        $("registration_form").reset();
    }
};