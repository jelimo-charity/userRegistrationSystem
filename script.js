let selectedRow = null;
function submitData(){
    let formData = readFormData();
    if( selectedRow == null ){
        insertData(formData);

    }else{
        updateRecords(formData);

    }
}
resetForm();
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
    cell5.innerHTML = `<a onClick="updateBtn(this)">Update</a>
                        <a>Delete</a>`;

 }

 //update data
  function updateBtn(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('username').value = selectedRow.cells[0].innerHTML;
    document.getElementById('idnumber').value = selectedRow.cells[1].innerHTML;
    document.getElementById('language').value = selectedRow.cells[2].innerHTML;
    document.getElementById('country').value = selectedRow.cells[3].innerHTML;


  }
  function updateRecords(formData){
    selectedRow.cells[0].innerHTML = formData.username;
  selectedRow.cells[1].innerHTML = formData.idnumber;
  selectedRow.cells[2].innerHTML = formData.language;
  selectedRow.cells[3].innerHTML = formData.country;

  }
  //Delete data
  function deleteData(td){
    if( confirm( 'Are you sure you want to delete the user data?')){
        rowDeleted = td.parentElement.parentElement;
        document.getElementById('userList').deleteRow(rowDeleted.rowDeletedIndex);
        resetForm(); 

    }
  
}

