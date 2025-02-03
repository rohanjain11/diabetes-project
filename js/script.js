function openImage(src) {
    document.getElementById("fullImage").src = src;
    document.getElementById("imageModal").style.display = "block";
}

function closeImage() {
    document.getElementById("imageModal").style.display = "none";
}
