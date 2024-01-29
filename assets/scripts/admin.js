 const tripsData = [
    { tripID: "1", tripName: "Trip 1", visits: "Visits", departure: "2024-02-01", duration: "2 hours", price:"$100" },
];

const bookingsData = [
    { bookingID: 1, tripName: "Trip 1", clientName: "Peter",clientSurname:"Parker", bookingDate: "2024-01-29",departureTime:"11:00",clientEmail:"peter@parker.com",
    clientPhone:"0123456789",noOfAdults: 2, noOfKids: 1 },
];

function populateTripsTable() {
    const tripsTableBody = document.getElementById("tripsTableBody");
    tripsData.forEach(trip => {
        const row = document.createElement("tr");
        row.innerHTML = `<td>${trip.tripID}</td><td>${trip.tripName}</td><td>${trip.visits}</td><td>${trip.departure}</td><td>${trip.duration}</td><td>${trip.price}</td>`;
        tripsTableBody.appendChild(row);
    });
}

function populateBookingsTable() {
    const bookingsTableBody = document.getElementById("bookingsTableBody");
    bookingsData.forEach(booking => {
        const row = document.createElement("tr");
        row.innerHTML = `<td>${booking.bookingID}</td><td>${booking.tripName}</td><td>${booking.clientName}</td><td>${booking.clientSurname}</td><td>${booking.bookingDate}
        </td><td>${booking.departureTime}</td><td>${booking.clientEmail}</td><td>${booking.clientPhone}</td><td>${booking.noOfAdults}</td><td>${booking.noOfKids}</td>`;
        bookingsTableBody.appendChild(row);
    });
}

populateTripsTable();
populateBookingsTable();