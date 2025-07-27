const activateFixedHeader = (
    headerSelector,
    scrollOffset = 100,
    activeClass = "header--fixed",
) => {
    const header = document.querySelector(headerSelector);
    if (!header) return;

    const handleScroll = () => {
        if (window.scrollY > scrollOffset) {
            header.classList.add(activeClass);
        } else {
            header.classList.remove(activeClass);
        }
    };

    window.addEventListener("scroll", handleScroll);
};

const setActiveNavItem = () => {
    const header = document.querySelector(".header");
    const activePage = header.getAttribute("data-header");

    document.querySelectorAll(".nav-item").forEach((item) => {
        if (item.getAttribute("data-name") === activePage) {
            item.classList.add("active");

            let parentDropdown = item.closest(".dropdown");
            if (parentDropdown) {
                parentDropdown.classList.add("active");
            }
        }
    });
};

const initHeader = () => {
    const body = document.querySelector("body");
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".header__nav");

    if (!hamburger || !navMenu) return;

    // Toggle menu on click
    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("active");
        hamburger.classList.toggle("active");
        body.classList.toggle("no-scroll");
    });

    // Close menu when clicking outside
    document.addEventListener("click", (event) => {
        if (
            !hamburger.contains(event.target) &&
            !navMenu.contains(event.target)
        ) {
            navMenu.classList.remove("active");
            hamburger.classList.remove("active");
            body.classList.remove("no-scroll");
        }
    });
};

const lazyImages = () => {
    const images = document.querySelectorAll("img.lazy");
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.onload = () => {
                    img.classList.remove("lazy");
                    img.classList.add("lazy-loaded");
                };
                observer.unobserve(img);
            }
        });
    });

    images.forEach((img) => observer.observe(img));
};

document.addEventListener("DOMContentLoaded", () => {
    lazyImages();
    initHeader();
    activateFixedHeader(".header", 100, "header--scrolled");
    setActiveNavItem();
});
