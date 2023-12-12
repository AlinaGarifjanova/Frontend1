const submitButtons = document.querySelectorAll('[data-submit-target]')
const closeButtons = document.querySelectorAll('[data-close-button]')
const overlay =document.getElementById('overlay')

submitButtons.forEach(button =>{
    button.addEventListener('click',()=> {
        const submit =document.querySelector(button.dataset.submitTarget)
        openSubmit(submit)
    })
})

overlay.addEventListener('click', ()=> {
    const submit = document.querySelectorAll('.submit.active')
    submit.forEach(submit =>{
        closeSubmit(submit)
    })
})

closeButtons.forEach(button =>{
    button.addEventListener('click',()=> {
        const submit = button.closest('.submit')
        closeSubmit(submit)
    })
})

function openSubmit(submit){
    if (submit == null) return
    submit.classList.add('active')
    overlay.classList.add('active')
}

function closeSubmit(submit){
    if (submit == null) return
    submit.classList.remove('active')
    overlay.classList.remove('active')
}