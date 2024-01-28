function validateAndSubmit(event){
    event.preventDefault();

    var isValidated = true;

    $("#nameSpn").html("");
    $("#surnameSpn").html("");
    $("#emailSpn").html("");
    $("#dateSpn").html("");
    $("#phoneSpn").html("");
    $("#tripSpn").html("");
    $("#departureSpn").html("");
    $("#noAdultsSpn").html("");
    $("#noKidsSpn").html("");


    const name = $("#name").val();
    const surname = $("#surname").val();
    const emailAddress = $("#email").val();
    const bookingDate = $("#date").val();
    const phoneNumber = $("#phone").val();
    const tripName = $("#trip").val();
    const departureTime = $("#departure").val();
    const numberOfAdults = parseInt($("#adults").val(),10);
    const numberOfKids = parseInt($("#kids").val());



    if(name.length < 2){
        $("#nameSpn").html("Name must contain at least 2 characters");
        isValidated = false;
    }

    if(surname.length < 2){
        $("#surnameSpn").html("Surname must contain at least 2 characters");
        isValidated = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(emailAddress)){
        $("#emailSpn").html("Enter a valid email address");
        isValidated = false;
    }


    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phoneNumber)) {
            $("#phoneSpn").html("Enter 10-digit phone number");
            isValidated = false;
        }
        
    if(numberOfAdults < 1){
        $("#noAdultsSpn").html("Enter at least 1 adult");;
        isValidated = false;
    }
    else if(numberOfAdults + numberOfKids > 10){
        $("#noAdultsSpn").html("The maximum capacity is 10 people");
        $("#noKidsSpn").html("The maximum capacity is 10 people");
        isValidated = false;
    }

    if (!isValidated) {
        return;
    }


    handleSubmit(name, surname, emailAddress, bookingDate, phoneNumber, tripName, departureTime, numberOfAdults, numberOfKids);
}

function handleSubmit(_name, _surname, _email, _date, _phoneNumber, _trip, _departure, _noAdults, _noKids) {
    // Create Object
    var newBooking = {
        name: _name,
        surname: _surname,
        emailAddress: _email,
        bookingDate: _date,
        phoneNumber: _phoneNumber,
        tripName: _trip,
        departureTime: _departure,
        numberOfAdults: _noAdults,
        numberOfKids: _noKids
    }

    console.log('newBooking Object = ', newBooking);

    //Retreive items from localstorage
    // var bookings = JSON.parse(localStorage.getItem('bookings')) || []; 
    // if no items in localstorage, return empty array


    //Add order to bookings array
    //bookings.push(newBooking);

    //Update localstorage with new items
    //localStorage.setItem('bookings', JSON.stringify(bookings)); //stringify e kthen ne string prap

    const settings = {
        async: true,
        crossDomain: true,
        url: 'http://localhost:5112/api/Bookings',
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        data: JSON.stringify(newBooking)
    };

    $.ajax(settings).done(function () {
        alert('Booking confirmed!');
    });;
}


     $(document).ready(function(){
        $("#bookBtn").click(validateAndSubmit)
    })