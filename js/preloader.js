document.addEventListener("DOMContentLoaded", function () {
    const preloader = document.getElementById('preloader');
    const content = document.getElementById('content');
    const images = document.querySelectorAll('img');
    let loadedImages = 0;

    function imageLoaded() {
        loadedImages++;
        if (loadedImages === images.length) {
            // All images are loaded
            preloader.style.display = 'none';
            content.style.display = 'block';
        }
    }

    images.forEach(img => {
        if (img.complete) {
            imageLoaded();
        } else {
            img.addEventListener('load', imageLoaded);
            img.addEventListener('error', imageLoaded);
        }
    });
});