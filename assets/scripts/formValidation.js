function validateAndSubmit(event){
    event.preventDefault();

    var isValidated = true;

    $("#nameSpn").html("");
    $("#surnameSpn").html("");
    $("#emailSpn").html("");
    $("#phoneSpn").html("");
    $("#noAdultsSpn").html("");
    $("#noKidsSpn").html("");


    const name = $("#name").val();
    const surname = $("#surname").val();
    const email = $("#email").val();
    const phoneNumber = $("#phone").val();
    const noAdults = $("#adults").val();
    const noKids = $("#kids").val();


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

    if(isValidated == false)
    {
        return 
    }

}

$(document).ready(function(){
    $("#bookBtn").click(validateAndSubmit)
})