        // Show popup and overlay on page load
        window.onload = function() {
            document.getElementById('popup').classList.add('show');
            document.getElementById('popupOverlay').classList.add('show');
        };

        // Close the popup and overlay
        function closePopup() {
            document.getElementById('popup').classList.remove('show');
            document.getElementById('popupOverlay').classList.remove('show');
        };
        document.addEventListener("DOMContentLoaded", function () {
    const testimonials = document.querySelectorAll(".testimonial");

    function revealTestimonials() {
        testimonials.forEach(testimonial => {
            const rect = testimonial.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) {
                testimonial.classList.add("in-view");
            }
        });
    }

    window.addEventListener("scroll", revealTestimonials);
    revealTestimonials(); // Run on page load in case they are already in view
});
