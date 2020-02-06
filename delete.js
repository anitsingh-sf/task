let bodyBeforeEditable;

function deleteData(num) {
    let id = "row"+num;
    let curr = document.getElementById("deleteButton"+num).innerHTML;
    if(curr === "Delete Data") {
        let delRow = document.getElementById(id);
        delRow.parentNode.removeChild(delRow);
    } else {
        let currBody = document.getElementById("tableBody");
        currBody.parentNode.replaceChild(bodyBeforeEditable, currBody);
    }
}

function savePrevBody(tableBody) {
    bodyBeforeEditable = tableBody;
}