let previousScrollY = window.scrollY;  
let previousPageHeight = document.documentElement.scrollHeight;

function updateScrollVariables() {
    previousScrollY = window.scrollY;  
    previousPageHeight = document.documentElement.scrollHeight;
}

function handleResize() {
    const newPageHeight = document.documentElement.scrollHeight;
    const newScrollY = (previousScrollY / previousPageHeight) * newPageHeight;

    window.scrollTo(0, newScrollY);

    previousPageHeight = newPageHeight;
    previousScrollY = window.scrollY;
}

window.addEventListener('scroll', updateScrollVariables);
window.addEventListener('resize', handleResize);
