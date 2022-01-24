var selectedRow  = null

function onFormSubmit() {
    if (Validate()) {
        var formData = readFormData ();
        if (selectedRow == null)
            insertNewRecord(formData);
    } else {
        updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["name1"] = document.getElementById("name1").value;
    formData["addr"] = document.getElementById("addr").value;
    formData["phone1"] = document.getElementById("phone1").value;
    formData["email1"] = document.getElementById("email1").value;
    formData["status1"] = document.getElementById("status1").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("nameList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.name1;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.addr;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.phone1;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.email1;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = data.status1;
    cell4 = newRow.insertCell(5);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>`;

}