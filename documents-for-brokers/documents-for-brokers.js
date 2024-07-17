document.addEventListener("DOMContentLoaded", function () {
    const boxes = document.querySelectorAll(".box-content-top");

    boxes.forEach(box => {
        box.addEventListener("mouseenter", function () {
            boxes.forEach(b => b.classList.remove("background-hover"));
            box.classList.add("background-hover");
        });

        box.addEventListener("mouseleave", function () {
            box.classList.remove("background-hover");
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const boxes = document.querySelectorAll(".box-content-top-mobile");

    boxes.forEach(box => {
        box.addEventListener("mouseenter", function () {
            boxes.forEach(b => b.classList.remove("background-mobile-hover"));
            box.classList.add("background-mobile-hover");
        });

        box.addEventListener("mouseleave", function () {
            box.classList.remove("background-mobile-hover");
        });
    });
});
