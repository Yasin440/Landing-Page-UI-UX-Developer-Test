const barBtn = document.getElementById("bar_btn");
const navList = document.getElementById("nav_list");
const topUp = document.getElementById("topUp");

barBtn.addEventListener('click', () => {
    navList.classList.toggle('show_navBar');
})
window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
});
topUp.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
});
