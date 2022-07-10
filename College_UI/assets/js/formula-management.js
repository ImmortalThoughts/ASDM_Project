$(document).ready(function() {
    
    $("#Calculation-tab").load("templates/Formula-management/formula-management/formula-management-tab.html");
   

});
function Truncated(){  
    $.ajax({
        headers: {
            "Content-Type": "application/json",
            "Authorization": sessionStorage.getItem("tokenType")+" "+sessionStorage.getItem("accessToken"),
        },
        method: "GET",
        url: "http://localhost:8090/api/cppTpsOverview/CsvTruncate",
    }).done(function(data) {
        console.log(data)  
    })
}
