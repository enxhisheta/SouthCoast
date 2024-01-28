function validateAndSubmit(event) {
    event.preventDefault();

    var isValidated = true;

    $("#nameSpn").html("");
    $("#emailAdressSpn").html("");
    $("#phoneSpn").html("");
    $("#querySpn").html("");

    const name = $("#name").val();
    const emailAddress = $("#email").val();
    const phoneNumber = $("#phone").val();
    const query = $("#query").val();

    if (name.length < 2) {
        $("#nameSpn").html("Name must contain at least 2 characters");
        isValidated = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailAddress)) {
        $("#emailAdressSpn").html("Enter a valid email address");
        isValidated = false;
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phoneNumber)) {
        $("#phoneSpn").html("Enter 10-digit phone number");
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
        email: _email,
        phone: _phone,
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