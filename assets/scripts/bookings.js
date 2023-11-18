
    var bookings = JSON.parse(localStorage.getItem('bookings')) || [];

    const bookingsContainer = $("#bookingsContainer");
    bookingsContainer.empty();

    function createBookingCard() {

    $.each(bookings, function (index, booking) {
        // Create a card for each booking
        const bookingCard = `<p>Name: ${booking.name}</p>
        <p>Surname: ${booking.surname}</p>
        <p>Email: ${booking.email}</p>
    </div>`;
    
        // Append the card to the bookings container
        bookingsContainer.append(bookingCard);
    });
};

createBookingCard();