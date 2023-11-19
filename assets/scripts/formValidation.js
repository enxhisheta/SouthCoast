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
    const email = $("#email").val();
    const date = $("#date").val();
    const phoneNumber = $("#phone").val();
    const trip = $("#trip").val();
    const departure = $("#departure").val();
    const noAdults = parseInt($("#adults").val(),10);
    const noKids = parseInt($("#kids").val());



    if(name.length < 2){
        $("#nameSpn").html("Name must contain at least 2 characters");
        isValidated = false;
    }

    if(surname.length < 2){
        $("#surnameSpn").html("Surname must contain at least 2 characters");
        isValidated = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)){
        $("#emailSpn").html("Enter a valid email address");
        isValidated = false;
    }


    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phoneNumber)) {
            $("#phoneSpn").html("Enter 10-digit phone number");
            isValidated = false;
        }

    if(noAdults < 1){
        $("#noAdultsSpn").html("Enter at least 1 adult");;
        isValidated = false;
    }
    else if(noAdults + noKids > 10){
        $("#noAdultsSpn").html("The maximum capacity is 10 people");
        $("#noKidsSpn").html("The maximum capacity is 10 people");
        isValidated = false;
    }

    if (!isValidated) {
        return;
    }


    handleSubmit(name, surname, email, date, phoneNumber, trip, departure, noAdults, noKids);
}

function handleSubmit(_name, _surname, _email, _date, _phoneNumber, _trip, _departure, _noAdults, _noKids){
    // Create Object
    var newBooking = {
        id: Math.floor(Math.random()*1000),
        name: _name,
        surname: _surname,
        email: _email,
        date: _date,
        phoneNumber: _phoneNumber,
        trip: _trip,
        departure: _departure,
        noAdults: _noAdults,
        noKids: _noKids,

    }

    console.log('newBooking Object = ', newBooking);

    //Retreive items from localstorage
    var bookings = JSON.parse(localStorage.getItem('bookings')) || []; 
    // if no items 
    //in localstorage, return empty array

    
    //Add order to existingOrders array
    bookings.push(newBooking);

    //Update localstorage with new items
    localStorage.setItem('bookings', JSON.stringify(bookings)); //strngify e kthen ne string prap

    alert('Order added to localstorage'); 
}

     $(document).ready(function(){
        $("#bookBtn").click(validateAndSubmit)
    })