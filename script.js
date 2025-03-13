// Array of images and descriptions
const images = [
    { src: "https://via.placeholder.com/600x400", alt: "Image 1", description: "Description for Image 1" },
    { src: "https://via.placeholder.com/600x400", alt: "Image 2", description: "Description for Image 2" },
    { src: "https://via.placeholder.com/600x400", alt: "Image 3", description: "Description for Image 3" },
    { src: "https://via.placeholder.com/600x400", alt: "Image 4", description: "Description for Image 4" },
    { src: "https://via.placeholder.com/600x400", alt: "Image 5", description: "Description for Image 5" },
    { src: "https://via.placeholder.com/600x400", alt: "Image 6", description: "Description for Image 6" }
];

// Function to generate the gallery items dynamically
function generateGallery() {
    const galleryContainer = document.getElementById("gallery-container");

    images.forEach(image => {
        const galleryItem = document.createElement("div");
        galleryItem.classList.add("gallery-item");

        const img = document.createElement("img");
        img.src = image.src;
        img.alt = image.alt;

        const figcaption = document.createElement("figcaption");
        figcaption.textContent = image.description;

        galleryItem.appendChild(img);
        galleryItem.appendChild(figcaption);
        galleryContainer.appendChild(galleryItem);
    });
}

// Call the function to generate the gallery on page load
generateGallery();
