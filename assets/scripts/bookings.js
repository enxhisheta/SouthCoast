
$(document).ready(function() {
    var bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    const bookingsContainer = $("#bookingsContainer");
    bookingsContainer.empty();

    // Function to create booking cards
    function createBookingCard() {
        $.each(bookings, function (index, booking) {
            const bookingCard = `
                 <div class="booking-card">
                    <p>Name: ${booking.name}</p>
                    <p>Surname: ${booking.surname}</p>
                    <p>Email: ${booking.email}</p>
                    <p>Date: ${booking.date}</p>
                    <p>Number of Adults: ${booking.noAdults}</p>
                    <p>Number of Kids: ${booking.noKids}</p>
                    <p>Selected Trip: ${booking.trip}</p>
                    <p>Selected Departure: ${booking.departure}</p>
                    <button class="delete-booking" data-id="${index}">Cancel Booking</button>
                </div>`;
            bookingsContainer.append(bookingCard);
        });
    }

    createBookingCard();

    // Function to update the view after deleting a booking
    function updateView() {
        bookingsContainer.empty();
        createBookingCard();
    }

    // Event listener for delete button
    bookingsContainer.on('click', '.delete-booking', function() {
        const bookingIndex = $(this).data('id');
        bookings.splice(bookingIndex, 1);
        localStorage.setItem('bookings', JSON.stringify(bookings));
        updateView();
    });

});
