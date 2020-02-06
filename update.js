function editData(num) {
    let curr = document.getElementById("editButton"+num).innerHTML;
    if(curr === "Edit Data") {
        let table = document.getElementById("tableBody");
        let bodyBeforeEditable = table.cloneNode(true);
        savePrevBody(bodyBeforeEditable);

        closeButtons(num);
        let idEdit = "editable"+num, index; 
        let ele = document.getElementsByClassName(idEdit);
        for (index=0; index<ele.length; index++) {
            ele[index].setAttribute("contenteditable", "true");
        } 

        changeButton(num);
    } else {
        openButtons(num);

        let idE = "editable"+num, index; 
        let ele = document.getElementsByClassName(idE);
        for (index=0; index<ele.length; index++) {
            ele[index].setAttribute("contenteditable", "false");
        } 

        changeButton(num);
    }
}

function changeButton(num) {
    console.log("Changing");
    let idEditButton = "editButton"+num;
    let idDeleteButton = "deleteButton"+num;

    let curr = document.getElementById(idEditButton).innerHTML;
    console.log(curr);

    if(curr === "Edit Data") {
        console.log("NOOOO");
        document.getElementById(idEditButton).innerHTML = "Save";
        document.getElementById(idDeleteButton).innerHTML = "Cancel";
    } else {
        document.getElementById(idEditButton).innerHTML = "Edit Data";
        document.getElementById(idDeleteButton).innerHTML = "Delete Data";
    }
}

function closeButtons(num) {
    let selector = document.getElementById("tableBody");
    let child = selector.firstChild;

    let editBtn, delBtn;
    while(child && true) {
        editBtn = child.querySelector(".edit");
        delBtn = child.querySelector(".delete");
    
        if(editBtn.id === ("editButton"+num)) {
            child = child.nextSibling;
            continue;
        } 
        editBtn.disabled = true;
        delBtn.disabled = true;
        if(!child.nextSibling) {
            break;
        } 
        child = child.nextSibling;
    }
}

function openButtons(num) {
    let selector = document.getElementById("tableBody");
    let child = selector.firstChild;

    let editBtn, delBtn;
    while(child && true) {
        editBtn = child.querySelector(".edit");
        delBtn = child.querySelector(".delete");
    
        editBtn.disabled = false;
        delBtn.disabled = false;

        if(!child.nextSibling) {
            break;
        } 
        child = child.nextSibling;
    }
}
