// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
    // Get references to elements
    const bookButton = document.getElementById("book-button");
    const movieSelect = document.getElementById("movie-select");
    const cinemaSelect = document.getElementById("cinema-select");
    const timeSelect = document.getElementById("time-select");
    const seatsSelect = document.getElementById("seats-select");
    const summaryTable = document.getElementById("summary-table");

    // Event listener for the "Book" button
    bookButton.addEventListener("click", function () {
        // Validate selections
        if (
            movieSelect.value === "" ||
            cinemaSelect.value === "" ||
            timeSelect.value === "" ||
            seatsSelect.value === ""
        ) {
            alert("Please select all options before booking.");
            return;
        }

        // Get selected values
        const movie = movieSelect.value;
        const cinema = cinemaSelect.value;
        const time = timeSelect.value;
        const seats = seatsSelect.value;

        // Map movie values to display names and images
        const movieDetails = {
            "top-gun-maverick": {
                name: "Top Gun: Maverick (English) (U/A)",
                image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTb0I81g39NGDx0sKP5F_DECCsdzoOwh9MVUD0PLSVvQpf3rpIM", 
            },
            "pathan-hindi": {
                name: "Pathan - Hindi",
                image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR9d4A_ocMn4S5XlrpD_gmxlGXAufiWvvPuGmGFhZJnuHbL9Y26", 
            },
        };

        // Map cinema values to display names
        const cinemaDetails = {
            "inox-gvk": "INOX GVK",
            "inox-ameerpet": "INOX Ameerpet",
        };

        // Generate booking summary table
        const table = document.createElement("table");
        table.classList.add("table", "table-striped");

        // Table header
        const headerRow = document.createElement("tr");
        headerRow.innerHTML = `
            <th>Field</th>
            <th>Value</th>
        `;
        table.appendChild(headerRow);

        // Movie details
        const movieRow = document.createElement("tr");
        movieRow.innerHTML = `
            <td>Movie</td>
            <td>
                <img src="${movieDetails[movie].image}" alt="${movieDetails[movie].name}" width="100">
                ${movieDetails[movie].name}
            </td>
        `;
        table.appendChild(movieRow);

        // Cinema details
        const cinemaRow = document.createElement("tr");
        cinemaRow.innerHTML = `
            <td>Cinema</td>
            <td>${cinemaDetails[cinema]}</td>
        `;
        table.appendChild(cinemaRow);

        // Time details
        const timeRow = document.createElement("tr");
        timeRow.innerHTML = `
            <td>Showtime</td>
            <td>${time}</td>
        `;
        table.appendChild(timeRow);

        // Seats details
        const seatsRow = document.createElement("tr");
        seatsRow.innerHTML = `
            <td>Seats</td>
            <td>${seats}</td>
        `;
        table.appendChild(seatsRow);

        // Clear previous summary and append new table
        summaryTable.innerHTML = "";
        summaryTable.appendChild(table);
    });
});