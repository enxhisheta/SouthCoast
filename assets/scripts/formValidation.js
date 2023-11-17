function validateAndSubmit(event){
    event.preventDefault();

    var isValidated = true;

    document.getElementById("nameSpn").innerHTML = "";
    document.getElementById("surnameSpn").innerHTML = "";
    document.getElementById("emailSpn").innerHTML = "";
    document.getElementById("phoneSpn").innerHTML = "";
    document.getElementById("noAdultsSpn").innerHTML = "";
    document.getElementById("noKidsSpn").innerHTML = "";


    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const email = document.getElementById("email").value;
    const phoneNumber = document.getElementById("phone").value;
    const noAdults = parseInt(document.getElementById("adults").value);
    const noKids = parseInt(document.getElementById("kids").value);


    if(name.length < 2){
        document.getElementById("nameSpn").innerHTML = "Name must contain at least 2 characters";
        isValidated = false;
    }

    if(surname.length < 2){
        document.getElementById("surnameSpn").innerHTML = "Surname must contain at least 2 characters";
        isValidated = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)){
        document.getElementById("emailSpn").innerHTML = "Enter a valid email";
        isValidated = false;
    }

    const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(phoneNumber)) {
            document.getElementById("phoneSpn").innerHTML = "Enter a valid 10-digit phone number.";
        }

    if(noAdults < 1){
        document.getElementById("noAdultsSpn").innerHTML = "Enter at least 1 adult";
        isValidated = false;
    }
    else if(noAdults + noKids > 10){
        document.getElementById("noAdultsSpn").innerHTML = "The maximum capacity is 10 people";
        document.getElementById("noKidsSpn").innerHTML = "The maximum capacity is 10 people";
        isValidated = false;
    }

    if(isValidated == false)
    {
        return 
    }

}

document.addEventListener('DOMContentLoaded', (event) => {
    const bookNowBtn = document.getElementById("bookBtn")
    if(bookNowBtn){
        bookNowBtn.addEventListener("click", validateAndSubmit)
    }
})