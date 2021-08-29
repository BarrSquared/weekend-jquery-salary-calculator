$(document).ready(readyNow);
//total monthly container
let totalMonthly = 0;
function readyNow(){
    console.log('DOM Ready');
    // $('#employeeTable').empty();
    $('#submit-button').on('click', submit);
    //call to check salary
    // $('.submit').on('', salaryWarning);
    $('.submit')
    $('.delete-button').on('click', deleteRow);
} // end readyNow function

function deleteRow(){
    let tableRow =$(this).parent();
    console.log($(this));
    console.log('in delete row');
    tableRow.removeClass('.delete-button');
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
    <tr>
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

//take whole delete button call function
//in ready now, reference somthing that starts loading on the page
//$('parent of delete button').on('click', 'id or class for delete', function)
//      'table'

// $('table').on('click', 'delete-button', removeClass('delete-button'));

// toFixed();

