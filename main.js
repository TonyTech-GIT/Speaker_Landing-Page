const menuBtn = document.getElementById('menu-btn');
const menuBody = document.getElementById("menuOverlay")

menuBtn.addEventListener('click', () => {


    if (menuBtn.classList.toggle("change") == true) {
        menuBody.style.right = '-3.5%'
    } else {
        menuBody.style.right = '-75%'

    }


})
