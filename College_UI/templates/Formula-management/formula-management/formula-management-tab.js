$(document).ready(function () {
    ServiceCall();
    getCalculatedTag();

    $("#datatablesCalculatedTag").on('click', '.editValues', function () {
        var Alias = $(this).closest('tr').find('td:eq(0)').text();
        var Formula = $(this).closest('tr').find('td:eq(1)').text();
        var Description = $(this).closest('tr').find('td:eq(2)').text();
        var das_write_back = $(this).closest('tr').find('td:eq(3)').text();
        var result_tag = $(this).closest('tr').find('td:eq(4)').text();
        var Result = $(this).closest('tr').find('td:eq(5)').text();
        var decimal_point = parseInt($(this).closest('tr').find('td:eq(6)').text());
        document.getElementById("alias").value = Alias;
        document.getElementById("formulaTag").value = Formula;
        document.getElementById("descriptionTag").value = Description;
        document.getElementById("result_tag").value = Result;
        document.getElementById("storeResulttag").value = das_write_back;
        document.getElementById("resultTag1").value = result_tag;
        document.getElementById("decimal_tag").value = decimal_point;
        $('#updateRow').show();
    });
    $("#searchSysConfing").on("click", function () {
        var value = $("#SearchInput").val().toLowerCase();
        $("#bodytablesCalculatedTag tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

    $('#updateRowBtn').click(function () {

        var alias1 = document.getElementById('alias').value;
        var Formula1 = document.getElementById('formulaTag').value;
        var Description1 = document.getElementById('descriptionTag').value;
        var storeResulttag1 = document.getElementById('storeResulttag').value;
        var resultTag1 = document.getElementById('resultTag1').value;
        var DecimalPointTag1 = document.getElementById('decimal_tag').value;
        var addRowValue1 = { 'alias': alias1, 'formula': Formula1, 'description': Description1, 'das_write_back': storeResulttag1, 'result_tag': resultTag1, 'decimal_point': DecimalPointTag1 };
        $.ajax({
            headers: {
                "Content-Type": "application/json",
                "Authorization": sessionStorage.getItem("tokenType") + " " + sessionStorage.getItem("accessToken"),
            },
            type: "post",

            url: "http://localhost:8090/formula/update",
            data: JSON.stringify(addRowValue1),
            success: function (status) {
                //  var msg1 = msg;
                //  console.log(msg1);

                if (status == 'Updated sucessfully') {
                    getCalculatedTag();
                    $('#updateRow').hide();

                    alert('Updated sucessfully');
                }

                else {


                    $('#updateRow').hide();
                    console.log(status, 'gggfff');
                    alert(status);

                }



            }

        });




    });
});

$("#SearchInput").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#bodytablesCalculatedTag tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });

var span = document.getElementsByClassName("close")[0];
span.onclick = function () {
    $('#updateRow').hide();

}

var span = document.getElementsByClassName("close1")[0];
span.onclick = function () {
    $('#addRowData').hide();

}

var span = document.getElementsByClassName("close2")[0];
span.onclick = function () {
    $('#protocol-main').hide();

}

function addRow() {

    const table = document.getElementById("datatablesSimple1");
    const table1 = document.getElementById("datatablebody");
    const lastrow = table1.rows[table1.rows.length - 1];
    console.log(lastrow);
    const lstrow = $(lastrow).find('td')[0];
    const lstrow1 = $(lastrow).find('td')[1];
    console.log(lstrow);
    const columnName = $(lstrow).find('#inputColumnName').val();
    const dataTypedrpdown = $(lstrow1).find('#tagValueManual').val();
    console.log(columnName);
    console.log(dataTypedrpdown);

    if (columnName.indexOf(' ') >= 0 || columnName.indexOf('-') >= 0 || columnName == "" || dataTypedrpdown == "") {
        document.getElementById("ERRORtblconfig").innerHTML = 'Column name and Data type should not contain blank space and hyphen sign';
    } else {
        $('#ERRORtblconfig').hide();
        var row = table.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        //  var cell6 = row.insertCell(5);
        cell1.innerHTML = '<input class="form-control" id="inputColumnName" type="text" placeholder="Enter Tag Name"/>';
        cell2.innerHTML = '<input class="form-control" id="tagValueManual" type="text" placeholder="Enter Values"/>';
        // cell3.innerHTML = '<input class="form-control" id="Timestampmanual" type="text" placeholder="Enter Timestamp"/>';
        cell3.innerHTML = '<input class="form-control" id="UOMmanual" type="text" placeholder="Enter UOM"/>';
        cell4.innerHTML = '<input class="form-control" id="descriptmanual" type="text" placeholder="Enter Description"/>';
        // cell5.innerHTML = '<input class="btn btn-primary" id="deleteRow" type="button" value="Delete" />';
    }
}

function getCalculatedTag() {
    $.ajax({
        headers: {
            "Content-Type": "application/json",
            "Authorization": sessionStorage.getItem("tokenType") + " " + sessionStorage.getItem("accessToken"),
        },
        method: "GET",
        url: "http://localhost:8090/formula/getAllData",

    }).done(function (data) {
        
        var student = '';
        student += '<tr>';
        for (const val of data) {
            student += '<td>' + val['alias'] + '</td>';
            student += '<td style="table-layout: fixed; width: 100px; overflow-wrap: anywhere;">' + val['formula'] + '</td>';
            student += '<td style=" width: 100px; overflow-wrap: anywhere;"> ' + val['description'] + '</td>';
            student += '<td class="w4">' + val['dasWriteBack'] + '</td>';
            student += '<td style="width: 100px; overflow-wrap: anywhere;">' + val['resultTag'] + '</td>';
            student += '<td class="w4">' + val['result'] + '</td>';
            student += '<td class="w4">' + val['decimalPoint'] + '</td>';
            // student += '<td class="w4">' + val['min'] + '</td>';
            // student += '<td class="w4">' + val['max'] + '</td>';
            // student += '<td class="w4">' + val['email_notification'] + '</td>';
            if (sessionStorage.getItem("userRole") != "enduser") {
                student += '<td><input class="editValues btn btn-primary" type="button" value="Edit"</input></td>';    
            }
            
            
            // student += '<td><input class="deleteValues btn btn-primary" type="button" name="delBox" value="Delete" /></td>';
            student += '</tr>';
        }
        document.getElementById("bodytablesCalculatedTag").innerHTML = student;
        console.log('hello');
    });

}



//Add popup
function addNewEntry() {
    $('#addRowData').show();

}

function protocolRule() {
    $('#protocol-main').show();
}

function getCalculatedTag() {
    $.ajax({
        headers: {
            "Content-Type": "application/json",
            "Authorization": sessionStorage.getItem("tokenType") + " " + sessionStorage.getItem("accessToken"),
        },
        url: "http://localhost:8090/College/getStudentData",
        method: "GET"
    }).done(function (data) {
        console.log(data)
        var tabledata = data;
        console.log(tabledata);
        var tbdb1 = tabledata;
        var student = '';
        student += '<tr>';
        for (const val of tabledata) {
            student += '<td>' + val['alias'] + '</td>';
            student += '<td>' + val['formula'] + '</td>';
            student += '<td>' + val['description'] + '</td>';
            student += '<td>' + val['resultTag'] + '</td>';
            student += '<td>' + val['dasWriteBack'] + '</td>';
            student += '<td>' + val['decimalPoint'] + '</td>';
            student += '<td><input class="editValues btn btn-primary" onclick="addRow()"  type="button" value="Edit"</input></td>';
            student += '<td><input class="deleteValues btn btn-primary" type="button" name="delBox" value="Delete" /></td>';
            student += '</tr>';
        }
        document.getElementById("bodytablesCalculatedTag").innerHTML = student;
        console.log('hello');
        //document.getElementById("count1").innerHTML = data.totalelectricityConsumption;

    });
}
//Delete
$("#datatablesCalculatedTag").on('click', '.deleteValues', function () {
    var Alias = $(this).closest('tr').find('td:eq(0)').text();
    console.log(Alias);
    var aliasValue = { "alias": Alias }
    $.ajax({
        headers: {
            "Content-Type": "application/json",
            "Authorization": sessionStorage.getItem("tokenType") + " " + sessionStorage.getItem("accessToken"),
        },
        type: "post",
        headers: {
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8090/formula/delete",
        data: JSON.stringify(aliasValue),
        success: function (msg) {
            var msg1 = msg;
            console.log(msg1);

            if (msg == 'Deleted sucessfully') {
                getCalculatedTag();
            }


        }
    });
});

//new entry add Row
function saveTable() {
    var addpRNNumber = $('#prnnumber').val();
    var addaddress = $("#address").val();
    var addrollNo = $("#rollnumber").val();
    var addstudentName = $("#studentname").val();
    var addphoneNumber = $("#contactnumber").val();
    var addfield = $("#branch").val();
   
    var tabledata = document.getElementById("datatablebody");

    // if (addUserType == 'Local') {
    //     $('#addempPassword').show();

    // }
    // var today = new Date();
    // var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    // var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    // const numberRow = $(tabledata).find('tr');
    // console.log('numberRow', $(numberRow).find('#inputColumnName').val());
    // if (addUser == "" || addUserRole == "" || addEmployeeName == "" || addEmployeeMiddeleName == "" || addEmployeeLasteName == "" || addEmailId == "" || addEmailNotification == "" || addMobile == "" || addUserType == "") {
    //     document.getElementById("eTableerroe").innerText = 'Please Enter Values.....';
    // }
    
        var dataObj = {
            "pRNNumber": addpRNNumber,
            "rollNo": addrollNo,
            "studentName": addstudentName,
            "address": addaddress,
            "field": addfield,
            "phoneNumber": addphoneNumber,
           
        }
        console.log(dataObj, "messa");
        var rowdata1 = JSON.stringify(dataObj)
        console.log('array', rowdata1);
        $.ajax({
            type: "post",
            headers: {
                "Content-Type": "application/json",
                "Authorization": sessionStorage.getItem("tokenType") + " " + sessionStorage.getItem("accessToken"),
            },
            url: "http://localhost:8090/insertuserdetails",
            data: rowdata1,
            success: function (msg) {
                var msg1 = msg.status;
                if (msg1 == 'Record Inserted Sucessfully') {
                    // document.getElementById("eTable").innerText = 'Manualtag inserted successfully';
                    alert("New record inserted successfully")
                    getCalculatedTag();
                    document.getElementById("inputColumnName").value = "";
                    document.getElementById("addUserRole").value = "";
                    document.getElementById("addUserName").value = "";
                    document.getElementById("addUserMiddleName").value = "";
                    document.getElementById("addUserLastName").value = "";
                    document.getElementById("addEmailId").value = "";
                    document.getElementById("addEmailNotification").value = "";
                    document.getElementById("addMobile").value = "";
                    document.getElementById("addMobile").value = "";
                    $('#AdduserRow').hide()

                }
                // if (msg1 == "Username Already Exists!") {
                //     alert("This User is Already Exists")
                // }
                // else {
                //     document.getElementById("eTableerroe").innerText = 'Please Enter Values.....';
                // }
            }
        });
    
}



