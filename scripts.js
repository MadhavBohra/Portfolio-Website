function toggleMobileMenu() {
    document.getElementById("menu").classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", () => {
    const projectArticles = document.querySelectorAll(".jobs article");

    projectArticles.forEach((article) => {
        // Open project links in a new tab on click
        article.addEventListener("click", () => {
            const url = article.getAttribute("data-url");
            if (url) window.open(url, "_blank");
        });
    });


});

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50, // Adjust offset if needed
                    behavior: "smooth"
                });
            }
        });
    });
});