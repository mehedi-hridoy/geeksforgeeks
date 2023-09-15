// Wait for the DOM to be ready
document.addEventListener("DOMContentLoaded", function () {
    // Get references to the button and card container
    const loadCardButton = document.getElementById("loadCardButton");
    const cardContainer = document.getElementById("cardContainer");

    // Add a click event listener to the button
    loadCardButton.addEventListener("click", function () {
        // Create a new card element
        const card = document.createElement("div");
        card.classList.add("card");

        // Add the card's content
        card.innerHTML = `
            
            <div class="header">
                <h1>Happy Birthday <br>&#127881;Umme Salma Lamyea&#127881;</h1>
            </div>
            <div class="image-container">
                 <img src="mahira.jpg" alt="Birthday Balloons">
            </div>

            
            <div class="content">
            <p id="birthdayMessage">On your special day, I just want to take a moment to celebrate the birthday of an incredible person. Wishing a fantastic day to a (2 days aged newborn&#128517; ) multitalented baby girl who is a talented singer, amazing chef, and truly a wonderful human being. May this year be filled with joy, laughter, and unforgettable moments for you. May almighty bless you with all of your wishes and fulfill all your dreams...</p>
            </div>

            
        `;

        // Hide the button
        loadCardButton.style.display = "none";


        


        // Append the card to the card container
        cardContainer.appendChild(card);
    });
});
