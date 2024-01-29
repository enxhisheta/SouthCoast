$(document).ready(function () {
    var bookings = [];

    const settings = {
        async: true,
        crossDomain: true,
        url: 'http://localhost:5112/api/Bookings/',
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    };

    $.ajax(settings).done(function (_bookings) {
        // Call a function to update the bookings on the bookings.js page
        bookings = _bookings;
        console.log('bookings = ', bookings);
        createBookingCard();
    });

    const bookingsContainer = $("#bookingsContainer");
    bookingsContainer.empty();

    // Function to create booking cards
    function createBookingCard() {
        $.each(bookings, function(index,booking){
            console.log('booking = ', booking);
                const bookingCard = `
                <div data-booking-id="${booking.id}" class="booking-card">
                    <h4>${booking.tripName}</h4>
                    <p>Name: ${booking.name}</p>
                    <p>Surname: ${booking.surname}</p>
                    <p>Date: ${booking.bookingDate}</p>
                    <p>Departure time: ${booking.departureTime}</p>
                    <p>Email: ${booking.emailAddress}</p>
                    <p>Phone number: ${booking.phoneNumber}</p>
                    <p>Number of adults: ${booking.numberOfAdults}</p>
                    <p>Number of kids: ${booking.numberOfKids}</p>
                    <button class="delete-booking">Delete Booking</button>
                </div>`;
                bookingsContainer.append(bookingCard);
            });
    }

    // Function to update the view after deleting a booking
       function updateView(bookingId) {
          console.log("updateView called");
          console.log("bookingId = ", bookingId);
          /*bookingsContainer.empty();
          createBookingCard(); */

    }

    $(bookingsContainer).on('click', ".delete-booking", function () {
        //const bookingId = $(this).data('booking-id');
        const bookingId = $(this).closest('.booking-card').data('booking-id');
        console.log("bookingId = ", bookingId);

        // Make a DELETE request to the backend API to delete the booking
        const deleteSettings = {
            async: true,
            crossDomain: true,
            url: `http://localhost:5112/api/Bookings/${bookingId}`,
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        };

        $.ajax(deleteSettings).done(function () {
            alert('Booking deleted successfully!', bookingId);
            console.log("Before updateView");
            location.reload();
            updateView(bookingId); // Update the view after successful deletion
            console.log("after updateView");
        });
    });
});