const homeContainer = document.querySelector('.home')
const navigatorLinks = document.querySelectorAll('.links')

navigatorLinks.forEach((linkElement,index) => {
    linkElement.addEventListener('click',() => {
        // homeContainer.innerHTML = `
        // element where innertext is <div style="color: #f281f4;">${linkElement.innerText}</div> it's index is ${index}
        // `
        _displayPage(index)
    })
})

function _displayPage(index) {
    const navigatorPages = document.querySelectorAll('.link')
    navigatorPages.forEach((page)=>{
        page.style.display = 'none'
    })
    navigatorPages[index].style.display = 'block'
}