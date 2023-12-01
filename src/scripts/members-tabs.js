window.addEventListener('load', () => {
    const tabButtonsContainer = document.querySelector('.tab-buttons')
    const tabButtons = document.querySelectorAll('.tab-button')
    const tabs = document.querySelectorAll('.members-tab')
    const currentTabIndicator = document.querySelector('.current-tab-indicator')

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabs.forEach(tab => {
                tab.classList.add('tab-hidden')
            })
            tabButtons.forEach(tabButton => tabButton.classList.remove('tab-button-selected'))

            button.classList.add('tab-button-selected')
            tabs[[...tabButtons].indexOf(button)].classList.remove('tab-hidden')

            currentTabIndicator.style.left = button.offsetLeft + 'px'
        })
    })
})