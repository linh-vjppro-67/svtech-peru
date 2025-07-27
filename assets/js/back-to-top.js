document.addEventListener("DOMContentLoaded", () => {
    const progressPath = document.querySelector(".progress-parent path");
    const pathLength = progressPath.getTotalLength();

    // Set initial styles
    progressPath.style.transition = "none";
    progressPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
    progressPath.style.strokeDashoffset = pathLength;

    // Trigger layout to apply styles
    progressPath.getBoundingClientRect();

    // Apply transition
    progressPath.style.transition = "stroke-dashoffset 10ms linear";

    // Update progress on scroll
    const updateProgress = () => {
        const scroll = window.scrollY;
        const height =
            document.documentElement.scrollHeight - window.innerHeight;
        const progress = pathLength - (scroll * pathLength) / height;
        progressPath.style.strokeDashoffset = progress;
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress);

    const offset = 50;
    const duration = 550;
    const progressParent = document.querySelector(".progress-parent");

    // Toggle back-to-top button visibility
    window.addEventListener("scroll", () => {
        if (window.scrollY > offset) {
            progressParent.classList.add("backto-top-active");
        } else {
            progressParent.classList.remove("backto-top-active");
        }
    });

    // Scroll to top on button click
    progressParent.addEventListener("click", (event) => {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
});
