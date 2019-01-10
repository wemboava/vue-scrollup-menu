// Hide Header on scroll down
let lastScrollTop = 0

const delta = 5

const hasScrolled = element => {
    const top = document.body.scrollTop === 0
        ? document.documentElement.scrollTop 
        : document.body.scrollTop

    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - top) <= delta) {
        return
    }

    if (top > lastScrollTop && top > element.offsetHeight) {
        element.style.top = `${element.offsetHeight * -1}px`
    } else {
        element.style.top = '0px'
    }
    lastScrollTop = top
}

export default {
    // When the linked element is inserted into the DOM

    bind(el) {
        let didScroll = true
        
        document.addEventListener('scroll', () => {    
            didScroll = true
        })

        setInterval(() => {
            if (didScroll === true) {
            
                hasScrolled(el)
                didScroll = false
            }
        }, 250)
    }
}