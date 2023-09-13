import AOS from 'aos';
import 'aos/dist/aos.css';

// AOS.init({
//     duration: 1000,
//     offset: 100,
// });

function initializeAOS() {
    AOS.init({
        duration: 1000,
        offset: 100,
    });
}

// Initialize AOS when the page initially loads
window.onload = function () {
    initializeAOS();
};

// Reinitialize AOS when DOM changes (e.g., after a hot reload)
const observer = new MutationObserver(function (mutationsList) {
    for (const mutation of mutationsList) {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
            // New content has been added to the DOM; reinitialize AOS
            initializeAOS();
        }
    }
});

observer.observe(document.body, { childList: true, subtree: true });


const menuBtn = document.getElementById('menu-btn');
const menuBody = document.getElementById("menuOverlay")

menuBtn.addEventListener('click', () => {


    if (menuBtn.classList.toggle("change") == true) {
        menuBody.style.right = '-3.5%'
    } else {
        menuBody.style.right = '-75%'

    }


})
