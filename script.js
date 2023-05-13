function submitData(){
    let formData = readFormData();
    insertData(formData);

}
 function readFormData(){
    let formData = {};
    formData['username'] = document.getElementById('username').value;
    formData['idnumber'] = document.getElementById('idnumber').value;
    formData['language'] = document.getElementById('language').value;
    formData['country'] = document.getElementById('country').value;
    return formData;
 }

 //insert data

 function insertData(data){
    let table = document.getElementById('userList').getElementsByTagName('tbody')[0];
    let newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.username; 
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.idnumber;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.language; 
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.country; 
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<a>Update</a>
                        <a>Delete</a>`;

 }