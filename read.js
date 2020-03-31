let userData = [
    { 
        "firstName":"John", 
        "middleName":"Smith",
        "lastName":"Doe", 
        "eMail":"john@sf.com", 
        "phone":"84561", 
        "roll":"Engineer", 
        "address":"Chandigarh" 
    },
    { 
        "firstName":"Anna", 
        "middleName":"Smith", 
        "lastName":"John", 
        "eMail":"anna@sf.com", 
        "phone":"78965", 
        "roll":"QA", 
        "address":"Mohali" 
    },
    { 
        "firstName":"Tink", 
        "middleName":"Tong", 
        "lastName":"Tang", 
        "eMail":"ting@sf.com", 
        "phone":"83478", 
        "roll":"DevOps", 
        "address":"Panchkula" 
    }
];

function showData() {
    document.getElementById("showButton").innerHTML = "Refresh Data";
    document.getElementById("dataTable").style.visibility = "visible";

    updateTable();
}

function updateTable(){
    let oldBody = document.getElementById("tableBody");
    let obj, j;
    
    let newBody = document.createElement("tbody");
    newBody.setAttribute("id", "tableBody");
    for(j=0; j<userData.length; j++) {
        obj = userData[j]; 
        let tr = document.createElement('tr');
        tr.setAttribute("id", "row"+j);
        tr.innerHTML = '<td contenteditable="false" class="editable' + j + '">' + obj.firstName + '</td>' +
        '<td contenteditable="false" class="editable' + j + '">' + obj.middleName + '</td>' +
        '<td contenteditable="false" class="editable' + j + '">' + obj.lastName + '</td>' +
        '<td contenteditable="false" class="editable' + j + '">' + obj.eMail + '</td>' +
        '<td contenteditable="false" class="editable' + j + '">' + obj.phone + '</td>' +
        '<td contenteditable="false" class="editable' + j + '">' + obj.roll + '</td>' +
        '<td contenteditable="false" class="editable' + j + '">' + obj.address + '</td>' +
        '<td> <button type="button" class="edit btn btn-primary" onclick="editData(' + j + ')" id="editButton' + j + '">Edit Data</button></td>' +
        '<td> <button type="button" class="delete btn btn-primary" onclick="deleteData(' + j + ')" id="deleteButton' + j + '">Delete Data</button></td>';
        newBody.appendChild(tr);
    }

    oldBody.parentNode.replaceChild(newBody, oldBody);
}

