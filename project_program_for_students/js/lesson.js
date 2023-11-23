const phoneInput = document.querySelector('#phone_input')
const phoneButton = document.querySelector('#phone_button')
const phoneResult = document.querySelector('#phone_result')


const regExpression = /^\+996 [2579]\d{2} \d{2} \d{2} \d{2}$/


phoneButton.addEventListener('click', () => {
    if (regExpression.test(phoneInput.value)) {
        phoneResult.innerHTML = 'OK'
        phoneResult.style.color = 'green'
    } else {
        phoneResult.innerHTML = 'Not OK'
        phoneResult.style.color = 'red'
    }
})



const tabContent = document.querySelectorAll('.tab_content_block')
const tabs = document.querySelectorAll('.tab_content_item')
const tabsParent = document.querySelector('.tab_content_items')


// const hideTabContent = () => {
//     tabContent.forEach(tabBlock => {
//         tabBlock.style.display = 'none'
//     })
//     tabs.forEach(tabItem => {
//         tabItem.classList.remove('tab_content_item_active')
//     })
// }
// const showTabContent = (indexElement = 0) => {

//     tabContent[indexElement].style.display = 'block'
//     tabs[indexElement].classList.add('tab_content_item_active')
// }

// hideTabContent()
// showTabContent()

// tabsParent.onclick = (event) => {
//     if (event.target.classList.contains('tab_content_item')) {
//         tabs.forEach((tabItem, tabIndex) => {
//             if (event.target === tabItem)
//             hideTabContent()
//             showTabContent(tabIndex)
//         })
//     }
// }

const hideTabContent = () => {    tabContent.forEach(tabBlock => {
    tabBlock.style.display = 'none'    })
tabs.forEach(tabItem => {        tabItem.classList.remove('tab_content_item_active')
})}
const showTabContent = (indexElement = 0) => {    tabContent[indexElement].style.display = 'block'
tabs[indexElement].classList.add('tab_content_item_active')}
hideTabContent()    
showTabContent()
tabsParent.onclick = (event) => {    if (event.target.classList.contains('tab_content_item')) {
    tabs.forEach((tabItem, tabIndex) => {            if (event.target === tabItem) {
            hideTabContent()                
            showTabContent(tabIndex)
        }        })
}
}
const autoSlider = (i = 0) => {
    setInterval(() => {
        i++
        if (i > tabContent.length - 1) {
            i = 0
        }
        hideTabContent()
        showTabContent(i)
    }, 3000)
}
autoSlider()