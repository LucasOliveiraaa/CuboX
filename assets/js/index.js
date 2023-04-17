// Scroll animation
const section1_menu = document.querySelector("li#sec1")
const section2_menu = document.querySelector("li#sec2")
const section3_menu = document.querySelector("li#sec3")
const section4_menu = document.querySelector("li#sec4")
const section1_div = document.querySelector("div#sec1")
const section2_div = document.querySelector("div#sec2")
const section3_div = document.querySelector("div#sec3")
const section4_div = document.querySelector("div#sec4")

document.addEventListener("scroll", e => {
    const scrollTab = document.documentElement.scrollTop + 40

    if (scrollTab >= section1_div.offsetTop && scrollTab <= section1_div.offsetHeight + section1_div.offsetTop) {
        section1_menu.setAttribute("active", true)
        section2_menu.removeAttribute("active")
        section3_menu.removeAttribute("active")
        section4_menu.removeAttribute("active")
    } else if (scrollTab >= section2_div.offsetTop && scrollTab <= section2_div.offsetHeight + section2_div.offsetTop) {
        section1_menu.removeAttribute("active")
        section2_menu.setAttribute("active", true)
        section3_menu.removeAttribute("active")
        section4_menu.removeAttribute("active")
    } else if (scrollTab >= section3_div.offsetTop && scrollTab <= section3_div.offsetHeight + section3_div.offsetTop) {
        section1_menu.removeAttribute("active")
        section2_menu.removeAttribute("active")
        section3_menu.setAttribute("active", true)
        section4_menu.removeAttribute("active")
    } else if (scrollTab >= section4_div.offsetTop && scrollTab <= section4_div.offsetHeight + section4_div.offsetTop) {
        section1_menu.removeAttribute("active")
        section2_menu.removeAttribute("active")
        section3_menu.removeAttribute("active")
        section4_menu.setAttribute("active", true)
    } else {
        section1_menu.removeAttribute("active")
        section2_menu.removeAttribute("active")
        section3_menu.removeAttribute("active")
        section4_menu.removeAttribute("active")
    }
})