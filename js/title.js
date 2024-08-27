document.addEventListener("DOMContentLoaded", function () {
    const titleElements = document.querySelectorAll('.title'); // Select all elements with the class 'title'

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            } else {
                entry.target.classList.remove('in-view');
            }
        });
    }, {
        threshold: 0.1
    });

    titleElements.forEach(element => {
        observer.observe(element); // Observe each element individually
    });
});