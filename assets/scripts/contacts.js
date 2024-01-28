function validateAndSubmit(event) {
    event.preventDefault();

    var isValidated = true;

    $("#nameSpn").html("");
    $("emailAddressSpn").html("");
    $("#phoneNumberSpn").html("");
    $("#querySpn").html("");

    const name = $("#name").val();
    const emailAddress = $("#emailAddress").val();
    const phoneNumber = $("#phoneNumber").val();
    const query = $("#query").val();

    if (name.length < 2) {
        $("#nameSpn").html("Name must contain at least 2 characters");
        isValidated = false;
    }

    const emailAddressRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailAddressRegex.test(emailAddress)) {
        $("emailAddressSpn").html("Enter a valid email address");
        isValidated = false;
    }

    const phoneNumberRegex = /^[0-9]{10}$/;
    if (!phoneNumberRegex.test(phoneNumber)) {
    $("#phoneNumberSpn").html("Enter 10-digit phone number");
    isValidated = false;
    }


    if (query.length < 2) {
        $("#querySpn").html("Query must contain at least 2 characters");
        isValidated = false;
    }

    if (!isValidated) {
        return;
    }

    handleSubmit(name, emailAddress, phoneNumber, query);   
}

function handleSubmit(_name, _email, _phone, _query) {
    var newContact = {
        name: _name,
        emailAddress: _email,
        phoneNumber: _phone,
        query: _query
    };

console.log(newContact);

    

const settings = {
    async: true,
    crossDomain: true,
    url: 'http://localhost:5112/api/Contacts',
    method: 'POST',
    headers: {
        'content-type': 'application/json'
    },
    data: JSON.stringify(newContact)
};

$.ajax(settings).done(function () {
    alert('Contact confirmed!');
});
}


$(document).ready(function () {
    $("#contactsBtn").click(validateAndSubmit);
});