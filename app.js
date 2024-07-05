let customers = [
    {
        name:"Saman",
        age:25,
        addres:"Colombo"
    },
    {
        name:"Kamal",
        age:30,
        addres:"Kandy"
    },
    {
        name:"Nimal",
        age:35,
        addres:"Galle"
    },
    {
        name:"Sunil",
        age:40,
        addres:"Matara"
    },
    {
        name:"Kasun",
        age:45,
        addres:"Jaffna"
    },
    {
        name:"Rajitha",
        age:76,
        addres:"Anuradhapura"
    }
];

function btnSubmit() {
    addCustomer();
    loadTable();
};

function addCustomer() {
    let name = document.getElementById("txtName").value;
    let age = document.getElementById("txtAge").value;
    let address = document.getElementById("txtAddress").value;

    customers.push({
        name: name,
        age: age,
        addres: address
    });
};

function loadTable() {
    let tblCustomers = document.getElementById("tblCustomers");
    
    let tableBody = ` <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Address</th>
                    </tr>`;
    
    customers.forEach(data => {
        tableBody += `<tr>
                        <td>${data.name}</td>
                        <td>${data.age}</td>
                        <td>${data.addres}</td>
                     </tr>`;
    });

    tblCustomers.innerHTML = tableBody;
};