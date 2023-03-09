const scrollEvents = () => {
    const documentTop = document.documentElement.scrollTop;
    const animationContents = document.querySelectorAll(".animationContents");
    if (animationContents) {
        animationContents.forEach((el) => {
            if (documentTop >= el.offsetTop) {
                el.classList.add("active");
            }
        });
    }
};
document.addEventListener("scroll", scrollEvents);
