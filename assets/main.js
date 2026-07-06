document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('load', function () {
        var loader = document.getElementById('pageLoader');
        setTimeout(function () {
            loader.classList.add('fade-out');
            loader.addEventListener('transitionend', function () { loader.remove(); }, { once: true });
        }, 900); // keep it visible briefly so the animation reads as intentional, not a flicker
    });

    // navbar 

    (function () {
        let lastScrollTop = 0;
        const header = document.querySelector(".navbar");

        window.addEventListener("scroll", function () {

            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            let headerHeight = header.offsetHeight;

            // Show menu after scrolling 40px
            if (scrollTop >= 40) {
                header.classList.add("menu-show");
            } else {
                header.classList.remove("menu-show");
            }

            // Hide header when scrolling down
            if (scrollTop > lastScrollTop && scrollTop > headerHeight) {
                header.classList.add("menu-hide");
            }
            // Show header when scrolling up
            else {
                header.classList.remove("menu-hide");
            }

            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;

        });

    })();



});