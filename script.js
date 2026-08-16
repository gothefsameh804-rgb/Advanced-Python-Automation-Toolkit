// ================= YEAR =================

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// ================= MOBILE MENU =================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {

    menuBtn.addEventListener("click", function () {

        navMenu.classList.toggle("active");

    });


    const navLinks = navMenu.querySelectorAll("a");

    navLinks.forEach(function(link) {

        link.addEventListener("click", function() {

            navMenu.classList.remove("active");

        });

    });

}


// ================= THEME =================

const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {

        document.body.classList.add("light");

        themeBtn.textContent = "☀️";

    }


    themeBtn.addEventListener("click", function() {

        document.body.classList.toggle("light");

        const isLight =
            document.body.classList.contains("light");


        if (isLight) {

            localStorage.setItem("theme", "light");

            themeBtn.textContent = "☀️";

        } else {

            localStorage.setItem("theme", "dark");

            themeBtn.textContent = "🌙";

        }

    });

}


// ================= CONTACT FORM =================

const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (form && formMessage) {

    form.addEventListener("submit", function(event) {

        event.preventDefault();

        formMessage.textContent =
            "تم استلام الرسالة تجريبيًا ✅";

        form.reset();

    });

}