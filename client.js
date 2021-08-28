$(document).ready(readyNow);
//total monthly container
let totalMonthly = 0;
function readyNow(){
    console.log('DOM Ready');
    $('#submit-button').on('click', submit);
    $('.delete-button').on('click', deleteRow);
    //call to check salary
    $('.submit').on('function', salaryWarning);

} // end readyNow function

function deleteRow(){
    console.log('in delete row');
}

function salaryWarning(){
    //css color for monthly cost >20k
    if(totalMonthly > 20000){
    //applying color
    // $('#totalMonthlyBox').empty();
    $('#totalMonthlyBox').replaceWith(`
    <div class="warning">Total Monthly: ${totalMonthly}</div>
    `);
    }
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

    console.log('in submit button, test input', firstName);
}// end submit function

