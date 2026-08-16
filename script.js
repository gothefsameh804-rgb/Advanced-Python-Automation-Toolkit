// السنة الحالية
document.getElementById("year").textContent =
    new Date().getFullYear();


// القائمة في الهاتف
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});


// إغلاق القائمة بعد الضغط على رابط
document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });

});


// الوضع الليلي / النهاري
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        themeBtn.textContent = "☀️";
        localStorage.setItem("theme", "light");
    } else {
        themeBtn.textContent = "🌙";
        localStorage.setItem("theme", "dark");
    }

});


// حفظ المظهر
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    document.body.classList.add("light");
    themeBtn.textContent = "☀️";
}


// نموذج التواصل
const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", (event) => {

    event.preventDefault();

    formMessage.textContent =
        "تم استلام الرسالة تجريبيًا. سنضيف الإرسال الحقيقي لاحقًا.";

    form.reset();

});