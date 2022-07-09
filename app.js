//Open and close all the accordion items with a ForEach loop
const accordions = Array.from(document.querySelectorAll('.accordion'))

accordions.forEach(accordion => {
    //find the accordion header 
    const accordionHeader = accordion.querySelector('.accordion__header')

    //add event listener to the header
    accordionHeader.addEventListener('click', event => {
         //toggle the is-open class
            accordion.classList.toggle('is-open')
            accordion.classList.toggle('colorToggle')
    })

})