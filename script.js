//Hämtar alla element med attributet 'data-submit-target' och lagarar dem i en NodeList
const submitButtons = document.querySelectorAll('[data-submit-target]')
const closeButtons = document.querySelectorAll('[data-close-button]')
//Hämtar det elementet som har id 'overlay'
const overlay =document.getElementById('overlay')

//Lägger till klickhändelse för varje element med attributet data-submit-target
submitButtons.forEach(button =>{
    button.addEventListener('click',()=> {
        //hämtar det elementet som matchar det värde som finns i data-submit-target attribut
        const submit =document.querySelector(button.dataset.submitTarget)
        // Anropar funktionen för att öppna submit-elementet
        openSubmit(submit)
        openSubmit(submit)
    })
})

// Lägger till en klickhändelse för overlay-elementet
overlay.addEventListener('click', ()=> {
    // Hämtar alla element med klassen 'submit' och 'active'
    const submit = document.querySelectorAll('.submit.active')
    // För varje submit-element anropas funktionen för att stänga submit-elementet
    submit.forEach(submit =>{
        closeSubmit(submit)
    })
})

// Lägger till en klickhändelse för varje element med attributet 'data-close-button'
closeButtons.forEach(button =>{
    // Hämtar det närmaste överordnade elementet med klassen 'submit'
    button.addEventListener('click',()=> {
        const submit = button.closest('.submit')
        // Anropar funktionen för att stänga submit-elementet
        closeSubmit(submit)
    })
})

// Funktion för att öppna ett submit-element
function openSubmit(submit){
    // Kontrollerar om submit-elementet är null (inte hittat)
    if (submit == null) return
    // Lägger till klassen 'active' för att visa submit-elementet
    submit.classList.add('active')
   // Lägger till klassen 'active' för att visa overlay-elementet
    overlay.classList.add('active')
}

// Funktion för att stänga ett submit-element
function closeSubmit(submit){
    // Kontrollerar om submit-elementet är null (inte hittat)
    if (submit == null) return
    // Tar bort klassen 'active' för att dölja submit-elementet
    submit.classList.remove('active')
    // Tar bort klassen 'active' för att dölja overlay-elementet
    overlay.classList.remove('active')
}