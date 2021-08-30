$(document).ready(readyNow);
//total monthly container
let totalMonthly = 0;
function readyNow(){
    console.log('DOM Ready');
    // $('#employeeTable').empty();
    $('#submit-button').on('click', submit);
    //call to check salary
    $('#employeeTable').on('click', '.delete-button', deleteRow);
    // $('#delete-button').on('click', deleteRow);
} // end readyNow function

function deleteRow(){
    let tableRow = $(this).parent().parent();
    // console.log('what is this', $(this).parent().parent());
    // console.log('in delete row');
    tableRow.remove();
}


function submit(){
    // setting the val to whats input on dom
    let firstName = $('#firstName').val(); 
    let lastName = $('#lastName').val();
    let id = $('#id').val();
    let title = $('#title').val();
    let annualSalary = $('#annualSalary').val();
    let monthlySalary = annualSalary / 12;
    //now to append to the dom
    $('#employeeTable').append(`
    <tr class="tableRow">
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${id}</td>
        <td>${title}</td>
        <td>${annualSalary}</td>
        <td><button class="delete-button">Delete</button></td>
    </tr>
    `);
    //total monthly input and update to DOM
    totalMonthly +=  parseInt(monthlySalary);
    $('#totalMonthly').text(`${totalMonthly}`);
    //css color for monthly cost >20k
    if(totalMonthly > 20000){
     //applying color
     // $('#totalMonthlyBox').empty();
     $('#totalMonthlyBox').replaceWith(`
     <div class="warning">Total Monthly: ${totalMonthly}</div>
     `);
    }
    console.log('in submit button, test input', firstName);
}// end submit function



