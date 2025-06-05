document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("FirstName").addEventListener('blur', firstName, false);
    document.getElementById("LastName").addEventListener('blur', lastName, false);
    
});

function isValid(event) {
    // Clear submit error
    document.getElementById("submiterror").innerHTML = "";

    // Validate all fields
    if (firstName() &&
        lastName() &&
        // email() &&
        // phone() &&
        // username() &&
        // password() &&
        // address() &&
        // city() &&
        // state() &&
        // country() &&
        // zipCode()
    ) {
        return true;
    }
        
    else {
        document.getElementById("submiterror").innerHTML = "<p><strong>Error Submitting — See Above</strong></p>";
        event.preventDefault();
        return false;
    }
}

function firstName(){
    //1) Create variable
    var validFirstname=false;

    //2) Read value from HTML
    var firstname = document.getElementById("FirstName").value;
    var errorMessages = "";

    //3) Do validation
    if (firstname === "" || firstname.length > 20 ) {
        errorMessages += "<p>The first name is required and cannot be greater than 20 characters</p>";
        console.log("First name invalid — length")
    }
        
    else if (!firstname.match(/^[a-zA-Z ,.'-]+$/)) {
        errorMessages += "<p>Invalid character in first name (accepts only A-Z, a-z, and ,.'-)</p>";
        console.log("First name invalid — bad characters");
    }
        
    else {
        validFirstname = true;
        console.log("First name valid");
    }

    //4) Send error message to HTML
    document.getElementById("fname").innerHTML = errorMessages;

    //5) Return status of each field
    return (validFirstname);
};

function lastName() {
    //1) Create variable
    var validLastname=false;

    //2) Read value from HTML
    var lastname = document.getElementById("LastName").value;
    var errorMessages = "";

    //3) Do validation
    if (lastname === "" || lastname.length > 20 ) {
        errorMessages += "<p>The last name is required and cannot be greater than 20 characters</p>";
        console.log("First last invalid — length")
    }

    else if (!lastname.match(/^[a-zA-Z ,.'-]+$/)) {
        errorMessages += "<p>Invalid character in last name (accepts only A-Z, a-z, and ,.'-)</p>";
        console.log("Last name invalid — bad characters");
    }
        
    else {
        validLastname = true;
        console.log("Last name valid");
    }

    //4) Send error message to HTML
    document.getElementById("lname").innerHTML = errorMessages;

    //5) Return status of each field
    return (validLastname);

    
