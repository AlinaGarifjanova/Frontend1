
// Funktion för att växla (toggle) klassen 'active' på elementet med klassen 'nav-list'
function toggleMenu() {
    // Hämta elementet med klassen 'nav-list'
    var navList = document.querySelector('.nav-list');
    // Växla (toggle) klassen 'active' för elementet
    navList.classList.toggle('active');
}
