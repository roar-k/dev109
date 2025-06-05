document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("FirstName").addEventListener('blur', firstName, false);
    document.getElementById("LastName").addEventListener('blur', lastName, false);
    document.getElementById("Email").addEventListener('blur', email, false);
    document.getElementById("Phone").addEventListener('blur', phone, false);
    
});

function isValid(event) {
    // Clear submit error
    document.getElementById("submitError").innerHTML = "";

    // Validate all fields
    if (firstName() &&
        lastName() &&
        email() &&
        phone() &&
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
        document.getElementById("submitError").innerHTML = "<p><strong>Error Submitting — See Above</strong></p>";
        event.preventDefault();
        return false;
    }
}

function firstName(){
    //1) Create variable
    var validFirstname = false;

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
    document.getElementById("firstNameError").innerHTML = errorMessages;

    //5) Return status of each field
    return (validFirstname);
};

function lastName() {
    //1) Create variable
    var validLastname = false;

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
    document.getElementById("lastNameError").innerHTML = errorMessages;

    //5) Return status of each field
    return validLastname;
}

function email() {
    var validEmail = false;
    var userEmail = document.getElementById("Email").value;
    var errorMessages = "";
    
    var atpos = userEmail.indexOf("@");
    var dotpos = userEmail.lastIndexOf(".");
    
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= userEmail.length) {
        errorMessages += "<p>Invalid email</p>";
        console.log("Email invalid");
    }
            
    else {
        validEmail = true;
        console.log("Email valid");
    }

    document.getElementById("emailError").innerHTML = errorMessages;

    return validEmail;
}

function phone() {
    var validPhone = false;
    var phone = document.getElementById("Phone").value;
    var errorMessages = "";

    if (isNaN(phone) || phone.length > 15 || phone === "") {
        errorMessages += "<p>Invalid phone number</p>";
        console.log("Phone number invalid");
    }

    else {
        validPhone = true;
        console.log("Phone number valid");
    }

    document.getElementById("phoneError").innerHTML = errorMessages;

    return validPhone;
}


    
