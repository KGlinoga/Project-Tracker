//js file
var tableRow = document.querySelectorAll("<tr>");
var tableDetail = document.querySelectorAll("<td>");

var tableBody = document.querySelector("<tbody>");

// appending the td elements to the table row
    var completeRow = tableDetail.append(tableRow);
    console.log(completeRow.textContent);
// appending the row with appended elements to the tbody element
    var combinedBody = completeRow.append(tableBody);

    //when user creates a new row, need to add a td for a button for deletions
//new row with new project

    //button to add project in the card would trigger this creation of button deletions if one already exists --so new project would be attached to the button, firstProject is the original button input
newProject = tableDetail.oninput = function(){
    oninput = document.createElement("<tr>");
        return() var deleteDetail = "<tr>"
    newProject.addEventListener("input",(firstProject) {
        deleteDetail.append(tableDetail)
    });
}
        
 
        //user input for adding a new o upon this create element
     

