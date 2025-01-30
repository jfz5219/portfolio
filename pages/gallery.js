var image_length = 0;
const metaTags = document.getElementsByTagName('meta');
const meta1 = document.querySelector('meta[data-id="page_name"]');

// Length of gallery will be different depending on the page
const page_name = meta1.content
if (page_name == "roomshare") {
    image_length = 14
} else if (page_name == "collecto") {
    image_length = 12
}


const images = Array.from({ length: image_length }, (_, i) => ({
    src: `https://jxz-portfolio-images.s3.us-east-1.amazonaws.com/projects/${page_name}/fullsize/${i + 1}.webp`,
    thumb: `https://jxz-portfolio-images.s3.us-east-1.amazonaws.com/projects/${page_name}/thumbnail/${i + 1}.webp`,
}));

// create gallery
const galleryContainer = document.getElementById("gallery");

images.forEach((image, index) => {
    const link = document.createElement("a");
    link.href = image.src;
    link.dataset.fancybox = "gallery";
    link.dataset.src = image.src;
    link.dataset.thumb = image.thumb;
    link.dataset.index = index;
    link.classList.add("thumbnail-link")

    const img = document.createElement("img");
    img.src = image.thumb;
    img.alt = `Image ${index + 1}`;
    img.classList.add("thumbnail-img")
    img.loading = "lazy";

    link.appendChild(img);
    galleryContainer.appendChild(link);
});

// initialize Fancybox
Fancybox.bind("[data-fancybox='gallery']", {
});



// Get the button
const backToTopButton = document.getElementById("back-to-top");

// Show the button when the user scrolls down 200px
window.onscroll = function () {
if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    backToTopButton.style.display = "block";
} else {
    backToTopButton.style.display = "none";
}
};

// Scroll to the top when the button is clicked
backToTopButton.addEventListener("click", () => {
document.body.scrollTop = 0; // For Safari
document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
});