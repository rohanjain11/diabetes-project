function openImage(src) {
    document.getElementById("fullImage").src = src;
    document.getElementById("imageModal").style.display = "block";
}

function closeImage() {
    document.getElementById("imageModal").style.display = "none";
}
// Function to open the modal and display the clicked image
function openModal(image) {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImg");
    
    modal.style.display = "block";
    modalImg.src = image.src;
}

// Function to close the modal
function closeModal() {
    var modal = document.getElementById("imageModal");
    modal.style.display = "none";
}
document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".zoomable");

    images.forEach(img => {
        img.addEventListener("click", function () {
            openImageModal(this.src, this.alt);
        });
    });

    function openImageModal(src, alt) {
        // Create a modal container
        let modal = document.createElement("div");
        modal.classList.add("image-modal");
        
        // Create image element
        let modalImg = document.createElement("img");
        modalImg.src = src;
        modalImg.alt = alt;
        modalImg.classList.add("modal-image");

        // Create close button
        let closeButton = document.createElement("span");
        closeButton.innerHTML = "&times;";
        closeButton.classList.add("close-button");

        // Close modal when clicked
        closeButton.addEventListener("click", function () {
            modal.remove();
        });

        // Append elements to modal
        modal.appendChild(closeButton);
        modal.appendChild(modalImg);
        document.body.appendChild(modal);
    }
});

