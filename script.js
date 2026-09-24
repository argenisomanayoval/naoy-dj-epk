/* =========================================
   LISTEN NOW
========================================= */

const botonListen = document.querySelector(
    '#inicio a[href="#music"]'
);


if (botonListen) {

    botonListen.addEventListener(
        "click",
        function () {

            console.log(
                "El usuario hizo clic en Listen Now"
            );

        }
    );

}


/* =========================================
   MOBILE MENU
========================================= */

const menuToggle = document.querySelector(
    "#menu-toggle"
);


const menu = document.querySelector(
    "nav ul"
);


function toggleMenu() {

    if (!menu || !menuToggle) {
        return;
    }


    const abierto =
        menu.classList.toggle(
            "menu-abierto"
        );


    menuToggle.setAttribute(
        "aria-expanded",
        abierto
    );

}


function closeMenu() {

    if (!menu || !menuToggle) {
        return;
    }


    menu.classList.remove(
        "menu-abierto"
    );


    menuToggle.setAttribute(
        "aria-expanded",
        "false"
    );

}


if (menuToggle) {

    menuToggle.addEventListener(
        "click",
        toggleMenu
    );

}


/* =========================================
   MOBILE MENU LINKS
========================================= */

const menuLinks =
    document.querySelectorAll(
        "nav ul a"
    );


menuLinks.forEach(function (link) {

    link.addEventListener(
        "click",
        closeMenu
    );

});


/* =========================================
   CLOSE MOBILE MENU WHEN RESIZING
========================================= */

window.addEventListener(
    "resize",
    function () {

        if (window.innerWidth > 600) {

            closeMenu();

        }

    }
);


/* =========================================
   SCROLL REVEAL
========================================= */

const sections =
    document.querySelectorAll(
        "main > section"
    );


sections.forEach(function (section) {

    section.classList.add(
        "scroll-reveal"
    );

});


const observer =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(
                function (entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "visible"
                        );

                    }

                }
            );

        },

        {
            threshold: 0.12
        }

    );


sections.forEach(function (section) {

    observer.observe(section);

});


/* =========================================
   NAVBAR ON SCROLL
========================================= */

const header =
    document.querySelector(
        "header"
    );


function updateHeader() {

    if (!header) {
        return;
    }


    if (window.scrollY > 50) {

        header.classList.add(
            "scrolled"
        );

    } else {

        header.classList.remove(
            "scrolled"
        );

    }

}


window.addEventListener(
    "scroll",
    updateHeader
);


updateHeader();


/* =========================================
   SOCIAL LINKS
========================================= */

const socialLinks =
    document.querySelectorAll(
        "#contact ul a"
    );


socialLinks.forEach(function (link) {

    link.addEventListener(
        "click",
        function (event) {

            const href =
                link.getAttribute(
                    "href"
                );


            if (href === "#") {

                event.preventDefault();

                console.log(
                    "Link social:",
                    link.textContent.trim()
                );

            }

        }
    );

});


/* =========================================
   HERO SOCIAL LINKS
========================================= */

const heroSocialLinks =
    document.querySelectorAll(
        ".hero-socials a"
    );


heroSocialLinks.forEach(function (link) {

    link.addEventListener(
        "click",
        function (event) {

            const href =
                link.getAttribute(
                    "href"
                );


            if (href === "#") {

                event.preventDefault();

                console.log(
                    "Link social del Hero:",
                    link.textContent.trim()
                );

            }

        }
    );

});


/* =========================================
   BACK TO TOP
========================================= */

const backToTop =
    document.querySelector(
        "#back-to-top"
    );


function updateBackToTop() {

    if (!backToTop) {
        return;
    }


    if (window.scrollY > 500) {

        backToTop.classList.add(
            "visible"
        );

    } else {

        backToTop.classList.remove(
            "visible"
        );

    }

}


window.addEventListener(
    "scroll",
    updateBackToTop
);


updateBackToTop();


if (backToTop) {

    backToTop.addEventListener(
        "click",
        function () {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        }
    );

}


/* =========================================
   GALLERY LIGHTBOX
========================================= */

const galleryImages =
    document.querySelectorAll(
        "#gallery figure img"
    );


const lightbox =
    document.querySelector(
        "#lightbox"
    );


const lightboxImage =
    document.querySelector(
        "#lightbox-image"
    );


const lightboxClose =
    document.querySelector(
        "#lightbox-close"
    );


galleryImages.forEach(
    function (image) {

        image.addEventListener(
            "click",
            function () {

                if (
                    !lightbox ||
                    !lightboxImage
                ) {
                    return;
                }


                lightboxImage.src =
                    image.src;


                lightboxImage.alt =
                    image.alt;


                lightbox.classList.add(
                    "visible"
                );


                document.body.style.overflow =
                    "hidden";

            }
        );

    }
);


/* =========================================
   CLOSE LIGHTBOX
========================================= */

function closeLightbox() {

    if (!lightbox) {
        return;
    }


    lightbox.classList.remove(
        "visible"
    );


    document.body.style.overflow =
        "";

}


if (lightboxClose) {

    lightboxClose.addEventListener(
        "click",
        closeLightbox
    );

}


if (lightbox) {

    lightbox.addEventListener(
        "click",
        function (event) {

            if (
                event.target === lightbox
            ) {

                closeLightbox();

            }

        }
    );

}


/* =========================================
   CLOSE LIGHTBOX WITH ESC
========================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape" &&
            lightbox &&
            lightbox.classList.contains(
                "visible"
            )
        ) {

            closeLightbox();

        }

    }
);


/* =========================================
   BOOKING NOTIFICATION
========================================= */

const bookingButton =
    document.querySelector(
        '#inicio a[href="#contact"]'
    );


const notification =
    document.createElement(
        "div"
    );


notification.classList.add(
    "booking-notification"
);


notification.textContent =
    "Booking / Contacto";


document.body.appendChild(
    notification
);


if (bookingButton) {

    bookingButton.addEventListener(
        "click",
        function () {

            notification.classList.add(
                "visible"
            );


            setTimeout(
                function () {

                    notification.classList.remove(
                        "visible"
                    );

                },
                2500
            );

        }
    );

}


/* =========================================
   RELEASE LINKS
========================================= */

const releaseLinks =
    document.querySelectorAll(
        "#music article a"
    );


releaseLinks.forEach(function (link) {

    link.addEventListener(
        "click",
        function () {

            console.log(
                "Abriendo release:",
                link.textContent.trim()
            );

        }
    );

});


/* =========================================
   HERO LOGO ANIMATION
========================================= */

const heroLogo =
    document.querySelector(
        ".hero-logo"
    );


if (heroLogo) {

    heroLogo.classList.add(
        "hero-logo-visible"
    );

}


/* =========================================
   PAGE READY
========================================= */

console.log(
    "NAOY EPK cargado correctamente."
);