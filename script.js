
let toggleBtn=document.getElementById('nav-toggle');
let navFlex=document.getElementById('nav-flex');
let menuNav=document.getElementById('menu-nav');

     toggleBtn.onclick = function addClass(){
        navFlex.classList.toggle('links-sec-m');

        
        menuNav.classList.toggle('fa-bars');
        menuNav.classList.toggle('fa-xmark');

}
document.addEventListener('click', function(e) {
if (!navFlex.contains(e.target) && !toggleBtn.contains(e.target)) {
if (navFlex.classList.contains('links-sec-m')) {
    navFlex.classList.remove('links-sec-m');
    menuNav.classList.remove('fa-xmark');
    menuNav.classList.add('fa-bars');
}
}
});


/*-------------*/


  window.onload = function() {
    function createCounter(elementId, endValue, duration) {
        let start = 1;
        let counterElement = document.getElementById(elementId);
        let increment = endValue / (duration / 100); 
        let current = start;

        function updateCounter() {
            current += increment;
            if (current > endValue) current = endValue;
            counterElement.innerText = Math.floor(current);
            if (current < endValue) {
                setTimeout(updateCounter, 100);
            }
        }

        updateCounter();
    }

    createCounter('counter1', 150, 2000);
    createCounter('counter2', 256, 2000);
    createCounter('counter3', 418, 2000);
    createCounter('counter4', 1785, 2000);
}

    let start = 1;
    let end = 100;
    let duration = 2000; 
    let counterElement = document.getElementById('counter');
    let increment = end / (duration / 100); 
    let current = start;

    function updateCounter() {
        current += increment;
        if (current > end) current = end;
        counterElement.innerText = Math.floor(current);
        if (current < end) {
            setTimeout(updateCounter, 100); 
        }
    }

    updateCounter();

/*-----------*/

