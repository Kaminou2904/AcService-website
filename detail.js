const nav = document.querySelector('#nav');
const sticky = nav.offsetTop;
// const offset = 200;

//function for the tabs
window.onscroll = function () { stickyFunc() };

const stickyFunc = () => {
    if (window.scrollY >= sticky) {
        nav.classList.add('sticky');
    } else {
        nav.classList.remove('sticky');
    };
}

// const scrollToSection = (sectionId) => {
//     const section = document.getElementById(sectionId)
//     const sectionTop = section.offsetTop - offset;
//     window.scrollTo({ top: sectionTop, behavior: 'smooth' });
// }