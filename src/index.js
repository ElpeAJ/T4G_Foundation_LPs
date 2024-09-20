// script.js
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.toggle-btn');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Toggle the next sibling element (the lesson content)
            const lessonContent = this.nextElementSibling;
            if (lessonContent.style.display === "none" || !lessonContent.style.display) {
                lessonContent.style.display = "block";
            } else {
                lessonContent.style.display = "none";
            }
        });
    });
});
