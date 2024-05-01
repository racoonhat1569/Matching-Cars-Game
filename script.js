let clickedIds = [];
// Game container
let game = document.querySelector(".game");
// 4 buttons
let buttonShow = document.querySelector(".show");
let buttonDouble = document.querySelector(".double");
let buttonShuffle = document.querySelector(".shuffle");
let buttonFlip = document.querySelector(".flip");
// Array containing image URLs
let url = "https://cdn.glitch.global/553d7960-0631-43d8-a7c6-edbdad992c46/";
let cards = [
    "5.png?",
    "car5%20copy.png?",
    "car6.png?",
    "newcar4-Recovered.png?",
    "newcar3-Recovered.png?",
    "newcar6-Recovered.png?",
    "newcar7-Recovered.png?",
    "newcar10-Recovered.png?",
];

// Button to Show Deck
buttonShow.onclick = function() {
    // Log message
    console.log("Showing the deck...");
    // For of loop
    for (let card of cards) {
        game.insertAdjacentHTML("beforeend",
            "<div style='background-image: url(" + url +
            card +
            ")' class='card'>");
    }
};
// play a sound
let audio = document.querySelector(".audio");
audio.play();

// Button to Double Deck
buttonDouble.onclick = function() {
    console.log("Deck has" + cards.length + "cards.");
    for (let card of cards) {
        if (cards.length !== 16) {
            cards.push(card);
            game.insertAdjacentHTML("beforeend",
                "<div style='background-image: url(" + url +
                card +
                ")' class='card'>");
        }
    }
};
console.log("deck has" + cards.length + "cards.");
// Button to Shuffle Cards
buttonShuffle.onclick = function() {
    shuffle(cards);
    game.innerHTML = "";
    console.log("I'm shuffling the cards!");
    let i = 0;
    for (let card of cards) {
        game.insertAdjacentHTML("beforeend",
            "<div style='background-image: url(" + url + card + ")' class='card' id='" + i + "'>");
        i = i + 1;
    }
};

/* ---------------------------------------------------
DON'T CHANGE THE Fisher-Yates SHUFFLE FUNCTION BELOW!
--------------------------------------------------- */
function shuffle(array) {
    let currentIndex = array.length,
        randomIndex;
    // While there are elements to shuffle...
    while (currentIndex > 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex = currentIndex - 1;
        // Swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    }
    return array;
}
// Button to Flip All Cards
buttonFlip.onclick = function() {
    let i = 0;
    for (card of cards) {
        document.getElementById(i).style.backgroundImage = "";
        i = i + 1;
    }
};

// Here we need a function for clicking on individual cards.
// (It won't work until we finish writing it.)
$(document).click(function(event) {
    // Get the id property of the clicked thing.
    let clickedId = event.target.id;
    console.log(clickedId);
    // If a card was clicked...
    if (clickedId !== "") {
        // Make the background image appear!
        document.getElementById(clickedId).style.backgroundImage =
            "url('" + url + cards[clickedId] + "')";
        // Also add the Id to an array (and log it)
        clickedIds.push(clickedId);
        console.log(clickedIds);
        // If 1 card was clicked 
        if (clickedIds.length === 2) {
            // Get both image URLs (and log them )
            let card1picture = document.getElementById(clickedIds[0]).style.backgroundImage;
            let card2picture = document.getElementById(clickedIds[1]).style.backgroundImage;
            console.log(card1picture);
            console.log(card2picture);
            //If they stay the same. just empty array!
            if (card1picture === card2picture) {
                console.log("match");
                document.getElementById(clickedIds[0]).id = "";
                document.getElementById(clickedIds[1]).id = "";
                clickedIds = [];
                console.log(clickedIds);
            }
            //If they are not the same...
            //reset both background images and empty array 
        } else if (clickedIds.length > 2) {
            document.getElementById(clickedIds[0]).style.backgroundImage = "";
            document.getElementById(clickedIds[1]).style.backgroundImage = "";
            clickedIds = [];
            clickedIds.push(clickedId);
            console.log(clickedIds);
        }
    }
});