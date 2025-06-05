document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("FirstName").addEventListener('blur', firstName, false);
    document.getElementById("LastName").addEventListener('blur', lastName, false);
    document.getElementById("Email").addEventListener('blur', email, false);
    document.getElementById("Phone").addEventListener('blur', phone, false);
    document.getElementById("Username").addEventListener('blur', username, false);
    document.getElementById("Password").addEventListener('blur', password, false);
    document.getElementById("Address").addEventListener('blur', address, false);
    document.getElementById("City").addEventListener('blur', city, false);
    document.getElementById("State").addEventListener('blur', state, false);
    document.getElementById("Country").addEventListener('blur', country, false);
    document.getElementById("ZipCode").addEventListener('blur', zipCode, false);

    document.getElementById("myform").addEventListener("submit", function(event) {
        if (!isValid(event)) {
            event.preventDefault();
        }
    });
    
});

function isValid(event) {
    // Clear submit error
    document.getElementById("submitError").innerHTML = "";

    // Validate all fields
    if (firstName() &&
        lastName() &&
        email() &&
        phone() &&
        username() &&
        password() &&
        address() &&
        city() &&
        state() &&
        country() &&
        zipCode()
    ) {
        return true;
    }
        
    else {
        document.getElementById("submitError").innerHTML = "<p><strong>Error Submitting — See Above</strong></p>";
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
    //1) Create variable
    var validEmail = false;

    //2) Read value from HTML
    var userEmail = document.getElementById("Email").value;
    var errorMessages = "";
    
    var atpos = userEmail.indexOf("@");
    var dotpos = userEmail.lastIndexOf(".");

    //3) Do validation
    if (userEmail === "") {
        errorMessages += "<p>Email is required</p>";
        console.log("Email invalid — empty");
    }
    
    else if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= userEmail.length) {
        errorMessages += "<p>Invalid email format. Should be like user@example.com</p>";
        console.log("Email invalid — invalid format");
    }
            
    else {
        validEmail = true;
        console.log("Email valid");
    }

    //4) Send error message to HTML
    document.getElementById("emailError").innerHTML = errorMessages;

    //5) Return status of each field
    return validEmail;
}

function phone() {
    //1) Create variable
    var validPhone = false;
    
    //2) Read value from HTML
    var phone = document.getElementById("Phone").value;
    var errorMessages = "";

    //3) Do validation
    if (phone.length > 15 || phone === "") {
        errorMessages += "<p>The phone number is required and cannot be greater than 15 characters</p>";
        console.log("Phone number invalid — length");
    }

    else if (isNaN(phone)) {
        errorMessages += "<p>Invalid characters in phone number (accepts only numerical values)</p>";
        console.log("Phone number invalid — bad characters");
    }

    else {
        validPhone = true;
        console.log("Phone number valid");
    }

    //4) Send error message to HTML
    document.getElementById("phoneError").innerHTML = errorMessages;

    //5) Return status of each field
    return validPhone;
}

function username() {
    //1) Create variable
    var validUsername = false;

    //2) Read value from HTML
    var username = document.getElementById("Username").value;
    var errorMessages = "";

    //3) Do validation
    if (username === "" || username.length > 12) {
        errorMessages += "<p>The username is required and cannot be greater than 12 characters</p>";
        console.log("Username invalid — length");
    }

    else {
        validUsername = true;
        console.log("Username valid");
    }

    //4) Send error message to HTML
    document.getElementById("usernameError").innerHTML = errorMessages;

    //5) Return status of each field
    return validUsername;
}

function password() {
    //1) Create variable
    var validPassword = false;

    //2) Read value from HTML
    var password = document.getElementById("Password").value;
    var errorMessages = "";

    //3) Do validation
    if (password === "" || password.length > 7) {
        errorMessages += "<p>The password is required and cannot be greater than 7 characters</p>";
        console.log("Password invalid — length");
    }

    else {
        validPassword = true;
        console.log("Password valid");
    }

    //4) Send error message to HTML
    document.getElementById("passwordError").innerHTML = errorMessages;

    //5) Return status of each field
    return validPassword;
}

function address() {
    //1) Create variable
    var validAddress = false;

    //2) Read value from HTML
    var address = document.getElementById("Address").value;
    var errorMessages = "";

    //3) Do validation
    if (address === "") {
        errorMessages += "<p>The address is required</p>";
        console.log("Address invalid — empty");
    }

    else {
        validAddress = true;
        console.log("Address valid");
    }

    //4) Send error message to HTML
    document.getElementById("addressError").innerHTML = errorMessages;

    //5) Return status of each field
    return validAddress;
}

function city() {
    //1) Create variable
    var validCity = false;

    //2) Read value from HTML
    var city = document.getElementById("City").value;
    var errorMessages = "";

    //3) Do validation
    if (city === "") {
        errorMessages += "<p>The city is required</p>";
        console.log("City invalid — empty");
    }

    else {
        validCity = true;
        console.log("City valid");
    }

    //4) Send error message to HTML
    document.getElementById("cityError").innerHTML = errorMessages;

    //5) Return status of each field
    return validCity;
}

function state() {
    //1) Create variable
    var validState = false;

    //2) Read value from HTML
    var state = document.getElementById("State").value;
    var errorMessages = "";

    //3) Do validation
    if (state === "") {
        errorMessages += "<p>The state is required</p>";
        console.log("State invalid — empty");
    }

    else {
        validState = true;
        console.log("State valid");
    }

    //4) Send error message to HTML
    document.getElementById("stateError").innerHTML = errorMessages;

    //5) Return status of each field
    return validState;
}

function country() {
    //1) Create variable
    var validCountry = false;

    //2) Read value from HTML
    var country = document.getElementById("Country").value;
    var errorMessages = "";

    //3) Do validation
    if (country === "") {
        errorMessages += "<p>The country is required</p>";
        console.log("Country invalid — empty");
    }

    else {
        validCountry = true;
        console.log("Country valid");
    }

    //4) Send error message to HTML
    document.getElementById("countryError").innerHTML = errorMessages;

    //5) Return status of each field
    return validCountry;
}

function zipCode() {
    //1) Create variable
    var validZipCode = false;

    //2) Read value from HTML
    var zipCode = document.getElementById("ZipCode").value;
    var country = document.getElementById("Country").value;
    var errorMessages = "";

    //3) Do validation
    if (country === "USA") {
        if (zipCode === "" || zipCode.length > 5) {
            errorMessages += "<p>The zip code is required and cannot be greater than 5 characters</p>";
            console.log("Zip code invalid — empty");
        }

        else {
            validZipCode = true;
            console.log("Zip code valid");
        }
    }

    else {
        validZipCode = true;
        console.log("Zip code skipped");
    }

    //4) Send error message to HTML
    document.getElementById("zipCodeError").innerHTML = errorMessages;

    //5) Return status of each field
    return validZipCode;
}

    
