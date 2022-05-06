/*______________________IMAGE CAROUSEL__________________________*/ 
const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})


/*______________________MENU BUTTON__________________________*/ 
const toggle = document.getElementById('toggle');
const menu = document.getElementById('menu');
const ul = document.querySelector('ul');
const logo = document.getElementById('logo');

document.onclick = function(e){
    if(e.target.id !== 'sidebar' && e.target.id !== 'toggle')
    {
        toggle.classList.remove('active')
        menu.classList.remove('active')
        ul.classList.remove('active')
        logo.classList.remove('active')
    }
}

toggle.onclick = function(){
    toggle.classList.toggle('active')
    menu.classList.toggle('active')
    ul.classList.toggle('active')
    logo.classList.toggle('active')
}
