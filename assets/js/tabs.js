class Tabs {
    constructor(container) {
        this.container = container;
        this.buttons = container.querySelectorAll(".tab-button");
        this.contents = container.querySelectorAll(".tab-content");
        this.carousel = container.querySelector(".tabs-carousel");
        this.leftArrow = container.querySelector(".arrow.left");
        this.rightArrow = container.querySelector(".arrow.right");

        this.currentIndex = 0;
        this.init();
    }

    init() {
        this.buttons.forEach((button, index) => {
            button.addEventListener("click", () => {
                this.currentIndex = index;
                this.switchTab(button);
                this.scrollToTab(index);
                this.updateArrowState();
            });
        });

        if (this.leftArrow && this.rightArrow) {
            this.leftArrow.addEventListener("click", () => this.prevTab());
            this.rightArrow.addEventListener("click", () => this.nextTab());
        }

        // Khởi tạo tab đầu tiên
        this.switchTab(this.buttons[0]);
        this.scrollToTab(0);
        this.updateArrowState();
    }

    switchTab(selectedButton) {
        this.buttons.forEach((btn) => btn.classList.remove("active"));
        this.contents.forEach((content) => content.classList.remove("active"));

        selectedButton.classList.add("active");

        const targetContent = this.container.querySelector(
            `#${selectedButton.dataset.tab}`
        );

        if (targetContent) {
            targetContent.classList.add("active");
        } else {
            console.error(
                `No tab content found for ID: ${selectedButton.dataset.tab}`
            );
        }
    }

    scrollToTab(index) {
        if (!this.carousel) return;

        const tab = this.buttons[index];
        if (!tab) return;

        const carouselRect = this.carousel.getBoundingClientRect();
        const tabRect = tab.getBoundingClientRect();

        const scrollLeft = this.carousel.scrollLeft;
        const offset = tabRect.left - carouselRect.left;
        const centerOffset = offset - (carouselRect.width / 2) + (tabRect.width / 2);

        this.carousel.scrollTo({
            left: scrollLeft + centerOffset,
            behavior: "smooth"
        });
    }
    nextTab() {
        if (this.currentIndex < this.buttons.length - 1) {
            this.currentIndex++;
            const nextButton = this.buttons[this.currentIndex];
            this.switchTab(nextButton);
            this.updateArrowState();
            this.scrollToTab(this.currentIndex);
        }
    }

    prevTab() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            const prevButton = this.buttons[this.currentIndex];
            this.switchTab(prevButton);
            this.updateArrowState();
            this.scrollToTab(this.currentIndex);
        }
    }

    updateArrowState() {
        const atStart = this.currentIndex === 0;
        const atEnd = this.currentIndex === this.buttons.length - 1;

        if (this.leftArrow) {
            this.leftArrow.disabled = atStart;
            this.leftArrow.style.opacity = atStart ? "0.4" : "1";
            this.leftArrow.style.cursor = atStart ? "default" : "pointer";
        }

        if (this.rightArrow) {
            this.rightArrow.disabled = atEnd;
            this.rightArrow.style.opacity = atEnd ? "0.4" : "1";
            this.rightArrow.style.cursor = atEnd ? "default" : "pointer";
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const tabsContainers = document.querySelectorAll(".tabs-container");
    tabsContainers.forEach((container) => {
        new Tabs(container);
    });
});
