// JS code for active page
const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('nav a').
forEach(link => {
    //for each links that includes the reference in the activePage, where activePage = window.location.pathname; execute this lines of code
    if(link.href.includes(activePage)){
        link.classList.add('active');
    }
})

