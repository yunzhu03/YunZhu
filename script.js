// Array of images, descriptions, and dates
const diaryEntries = [
    { src: "./images/default.png", alt: "Dog playing in the park", description: "Had a fun day at the park! 🏀", date: "March 15, 2025" },
    { src: "./images/default.png", alt: "Dog sleeping", description: "My doggo fell asleep in the cutest way ever! 💤", date: "March 10, 2025" },
    { src: "./images/default.png", alt: "Dog eating treats", description: "Tried new treats today, and he loved them! 🍖", date: "March 5, 2025" },
    { src: "./images/default.png", alt: "Dog with a toy", description: "Got a new squeaky toy—best day ever! 🧸", date: "March 1, 2025" }
];

// Function to generate the diary entries dynamically
function generateDiary() {
    const galleryContainer = document.getElementById("gallery-container");

    diaryEntries.forEach(entry => {
        // Create entry container
        const entryContainer = document.createElement("div");
        entryContainer.classList.add("diary-entry");

        // Create image element
        const img = document.createElement("img");
        img.src = entry.src;
        img.alt = entry.alt;

        // Create text container
        const textContainer = document.createElement("div");
        textContainer.classList.add("entry-text");

        // Create date and description
        const date = document.createElement("p");
        date.classList.add("entry-date");
        date.innerHTML = `<strong>Date:</strong> ${entry.date}`;

        const description = document.createElement("p");
        description.classList.add("entry-description");
        description.textContent = entry.description;

        // Append elements
        textContainer.appendChild(date);
        textContainer.appendChild(description);
        entryContainer.appendChild(img);
        entryContainer.appendChild(textContainer);
        galleryContainer.appendChild(entryContainer);
    });
}

// Call the function to generate the diary on page load
generateDiary();

function loadHeader() {
    fetch('https://yunzhu03.github.io/YunZhu/components/header.html', { cache: "no-store" }) 
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-container').innerHTML = data;
        })
        .catch(error => console.error('Error loading header:', error));
}

function loadFooter() {
    fetch('https://yunzhu03.github.io/YunZhu/components/footer.html', { cache: "no-store" }) 
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-container').innerHTML = data;
        })
        .catch(error => console.error('Error loading footer:', error));
}

window.onload = function() {
    loadHeader();
    loadFooter();
};
