// toggle price
let pricingToggle = document.querySelector('.pricing-toggle')



pricingToggle.addEventListener('click', e => {
  let monthPrices = document.querySelectorAll('.plan-price-month')
  let yearPrices = document.querySelectorAll('.plan-price-year')
  if (e.target.checked) {
    monthPrices.forEach(price => {
      price.style.display = 'inline'
    })
    yearPrices.forEach(price => {
      price.style.display = 'none'
    })
  }
  if (!e.target.checked) {
    yearPrices.forEach(price => {
      price.style.display = 'inline'
    })
    monthPrices.forEach(price => {
      price.style.display = 'none'
    })
  }
})

pricingToggle.click()









// card animation
let wrapper = document.querySelector('.cards-container')
let list = document.querySelectorAll('.card');


// utility function
function reset() {
  list = document.querySelectorAll('.card')
  list.forEach((item => {
    item.style.transform = 'scale(1)'
    item.style.transition = '0s'
    item.style.zIndex = '0'
  }))
}


// main code

let speed = 300; // in mili seconds, must be greater than or equal to the middle card transition




function change1() {
  list[1].style.transform = 'scale(1)'
  setTimeout(() => {
    [list[0].innerHTML, list[1].innerHTML] = [list[1].innerHTML, list[0].innerHTML]
    list[1].style.transform = 'scale(1.1)'
  }, speed);
}


function change2() {
  list[1].style.transform = 'scale(1)'
  setTimeout(() => {
    [list[2].innerHTML, list[1].innerHTML] = [list[1].innerHTML, list[2].innerHTML]
    list[1].style.transform = 'scale(1.1)'
  }, speed);
}


// function scaleTransition() {
//   reset()
//   setTimeout(() => {
//     list = document.querySelectorAll('.card')
//     list[1].style.transform = 'scale(1.1)'
//     list[1].style.zIndex = '1'
//     list[1].classList.add('middle')
//     list[1].style.transition = `all ${speed / 1000}s`
//   }, 50);
// }



let change = list.forEach((item) => {
  item.addEventListener('click', function (e) {
    if (window.innerWidth <= 450) {
      return
    }
    if (e.target.tagName === 'BUTTON') return
    let index = [...list].indexOf(this)
    if (index === 0) change1();
    if (index === 2) change2();
  })
})

