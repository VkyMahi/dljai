var Employees = [];

var EmployeeHardData = [
    {
        Employee_Name: "bala",
        Employee_Id: 101,
        Employee_Age: 26,
        Employee_Department: "Marketing",
        Employee_Role: "collecting",
        Employee_Address: "Madurai"
    },

    {
        Employee_Name: "ashwin",
        Employee_Id: 102,
        Employee_Age: 26,
        Employee_Department: "trading",
        Employee_Role: "customer",
        Employee_Address: "coimbatore"
    },

    {
        Employee_Name: "suresh",
        Employee_Id: 103,
        Employee_Age: 26,
        Employee_Department: "Digital Marketing",
        Employee_Role: "Developer",
        Employee_Address: "T-nagar"
    },

    {
        Employee_Name: "Raja",
        Employee_Id: 104,
        Employee_Age: 26,
        Employee_Department: "productivity",
        Employee_Role: "sales Manager",
        Employee_Address: "north chennai"
    },

    {
        Employee_Name: "kumar",
        Employee_Id: 105,
        Employee_Age: 23,
        Employee_Department: "salesman",
        Employee_Role: "manager",
        Employee_Address: "south chennai"
    }
];

if (localStorage.getItem("EmployeeSavedData")) {
    Employees = JSON.parse(localStorage.getItem("EmployeeSavedData"));
}
else {
    Employees = EmployeeHardData;

    localStorage.setItem("EmployeeSavedData", JSON.stringify(Employees));
}



var tableEmployee = document.getElementById("table_employee");
onLoad();

//function for employee's

function onLoad() {

    //insert a row

    for (let i = 0; i < Employees.length; i++) {
        var row = tableEmployee.insertRow(i + 1);
        for (let key in Employees[i]) {
            var cell = row.insertCell(-1);
            cell.innerHTML = Employees[i][key];
        }
        var cell = row.insertCell(-1);
        cell.innerHTML = `
        <button type="button" class="btn" data-bs-toggle="modal" onclick="onEdit(${Employees[i].Employee_Id})"data-bs-target="#exampleModal">
            <i class="fa fa-pencil-square" aria-hidden="true">
            </i>
        </button>
        <button type="button" class="btn" data-bs-toggle="modal" onclick="onDeleteReq(${Employees[i].Employee_Id})" data-bs-target="#staticBackdrop">
            <i class="fa fa-trash" aria-hidden="true"></i>
        </button>
        `;


    }
}


var empId = '';

function onDeleteReq(id) {

    empId = id;
}

function onDelete() {
    if (Employees.length <= 0) {
        return;
    }
    for (let i = 0; i < Employees.length; i++) {
        if (Employees[i].Employee_Id == empId) {
            Employees.splice(i, 1);
            tableEmployee.deleteRow(i + 1);
            break;
        }
    }


    localStorage.setItem("EmployeeSavedData", JSON.stringify(Employees));
}



function onEdit(id) {
    document.getElementById('updateBtnId').style.display = 'block';
    document.getElementById('addBtnId').style.display = 'none';
    document.getElementById('updateEmpNo').readOnly = true;
    empId = id;
    for (let i = 0; i < Employees.length; i++) {
        if (Employees[i].Employee_Id == id) {

            document.getElementById('updateEmpName').value = Employees[i].Employee_Name;
            document.getElementById('updateEmpNo').value = Employees[i].Employee_Id;
            document.getElementById('updateEmpAge').value = Employees[i].Employee_Age;
            document.getElementById('updateEmpDep').value = Employees[i].Employee_Department;
            document.getElementById('updateEmpRole').value = Employees[i].Employee_Role;
            document.getElementById('updateEmpAddress').value = Employees[i].Employee_Address;

        }
    }

}


function onUpdateData() {
    for (let i = 0; i < Employees.length; i++) {
        if (Employees[i].Employee_Id == empId) {
            Employees[i].Employee_Name = document.getElementById('updateEmpName').value;
            Employees[i].Employee_Id = document.getElementById('updateEmpNo').value;
            Employees[i].Employee_Age = document.getElementById('updateEmpAge').value;
            Employees[i].Employee_Department = document.getElementById('updateEmpDep').value;
            Employees[i].Employee_Role = document.getElementById('updateEmpRole').value;
            Employees[i].Employee_Address = document.getElementById('updateEmpAddress').value;
            tableEmployee.deleteRow(i + 1);

            var row = tableEmployee.insertRow(i + 1);
            for (let key in Employees[i]) {
                var cell = row.insertCell(-1);
                cell.innerHTML = Employees[i][key];
            }
            var cell = row.insertCell(-1);
            cell.innerHTML = `
            <button type="button" class="btn" data-bs-toggle="modal" onclick="onEdit(${Employees[i].Employee_Id})"data-bs-target="#exampleModal">
                <i class="fa fa-pencil-square" aria-hidden="true">
                </i>
            </button>
            <button type="button" class="btn" data-bs-toggle="modal" 
            onclick="onDeleteReq(${Employees[i].Employee_Id})" data-bs-target="#staticBackdrop">
                <i class="fa fa-trash" aria-hidden="true"></i>
            </button>
            `;
            break;
        }
    }
    localStorage.setItem("EmployeeSavedData", JSON.stringify(Employees));
}

function onAddOpen() {
    document.getElementById('updateBtnId').style.display = 'none';
    document.getElementById('addBtnId').style.display = 'block';
    document.getElementById('updateEmpNo').readOnly = false;

    document.getElementById('updateEmpName').value = '';
    document.getElementById('updateEmpNo').value = '';
    document.getElementById('updateEmpAge').value = '';
    document.getElementById('updateEmpDep').value = '';
    document.getElementById('updateEmpRole').value = '';
    document.getElementById('updateEmpAddress').value = '';
}

function onAddData() {
    let newEmp = {
        Employee_Name: '',
        Employee_Id: '',
        Employee_Age: '',
        Employee_Department: '',
        Employee_Role: '',
        Employee_Address: ''
    };

    newEmp.Employee_Name = document.getElementById('updateEmpName').value;
    newEmp.Employee_Id = document.getElementById('updateEmpNo').value;
    newEmp.Employee_Age = document.getElementById('updateEmpAge').value;
    newEmp.Employee_Department = document.getElementById('updateEmpDep').value;
    newEmp.Employee_Role = document.getElementById('updateEmpRole').value;
    newEmp.Employee_Address = document.getElementById('updateEmpAddress').value;



    var row = tableEmployee.insertRow(-1);
    for (let key in newEmp) {
        var cell = row.insertCell(-1);
        cell.innerHTML = newEmp[key];
    }
    var cell = row.insertCell(-1);
    cell.innerHTML = `
    <button type="button" class="btn" data-bs-toggle="modal" onclick="onEdit(${newEmp.Employee_Id})"data-bs-target="#exampleModal">
        <i class="fa fa-pencil-square" aria-hidden="true">
        </i>
    </button>
    <button type="button" class="btn" data-bs-toggle="modal" onclick="onDeleteReq(${newEmp.Employee_Id})" data-bs-target="#staticBackdrop">
        <i class="fa fa-trash" aria-hidden="true"></i>
    </button>
    `;

    Employees.push(newEmp);
    localStorage.setItem("EmployeeSavedData", JSON.stringify(Employees));

}