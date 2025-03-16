// Array of images, descriptions, and dates
const diaryEntries = [
    { src: "./images/2.jpg", alt: "Andy em Barcelos", description: "Andy em Barcelos. Não queria voltar para casa.", date: "March 16, 2025" },
    { src: "./images/1.jpg", alt: "No veterinário", description: "Baby no vet. Que medo!", date: "March 15, 2025" }
    
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

document.addEventListener("DOMContentLoaded", function() {
    const birthDate = new Date("2021-05-24");
    const currentDate = new Date();
    const age = currentDate.getFullYear() - birthDate.getFullYear();
    const month = currentDate.getMonth() - birthDate.getMonth();
    const dogAge = month < 0 || (month === 0 && currentDate.getDate() < birthDate.getDate()) ? age - 1 : age;

    const dogAgeElement = document.getElementById("dog-age");
    if (dogAgeElement) {
        dogAgeElement.textContent = dogAge;
    }
});
