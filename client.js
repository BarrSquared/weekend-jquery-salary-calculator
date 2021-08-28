$(document).ready(readyNow);

function readyNow(){
    console.log('DOM Ready');
    $('#submit-button').on('click', submit);
    $('#delete-button').on('click', deleteRow);

} // end readyNow function

function deleteRow(){
    console.log('in delete row');
}

function submit(){
    console.log('in submit button');
}// end submit function

