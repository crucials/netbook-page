window.addEventListener('load', () => {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                const viewedElement = entry.target

                if(viewedElement.classList.contains('hero-illustration')) {
                    let timeoutTime = 0
                    viewedElement.querySelectorAll('.avatar').forEach(avatar => {
                        setTimeout(() => {
                            avatar.classList.add('avatar-animated')
                        }, timeoutTime)

                        timeoutTime += 300
                    })
                }
                else if(viewedElement.classList.contains('hero-heading')) {
                    viewedElement.classList.add('hero-heading-animated')
                }
                else if(viewedElement.classList.contains('features-image')) {
                    viewedElement.classList.add('features-image-animated')
                }

                observer.unobserve(viewedElement)
            }
        })
    }, { threshold: 0.2 })

    observer.observe(document.querySelector('.hero-illustration'))
    observer.observe(document.querySelector('.hero-heading'))
    document.querySelectorAll('.features-image').forEach(image => {
        observer.observe(image)
    })
})