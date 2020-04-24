var THEME = localStorage.getItem('dark-mode')
var borderLeftValue  = '2px solid #212F3D'
var containerNav = 'container-nav'




//      [ Onload function ]

function onLoad() {
    if (THEME == 'dark') {
        genContent()
        toggleClass()
    } else {
        borderLeftValue = '2px solid #fff'
        containerNav = 'container-nav card'
        genContent()
    }
}





//      [ Generator function ]

function genContent() {
    let container   = template_container()

    document.getElementById('container').innerHTML = container

    let top             = template_top_bar()
    let footer          = template_footer_bar()
    let info            = template_info()
    let nav             = template_nav_bar()
    let content_home    = template_home()
    let content         = content_home

    let footer_temp     = `<div id="container-footer" class="container-footer"></div>`

    document.getElementById('container-top').innerHTML      = top
    document.getElementById('container-left').innerHTML     = info
    document.getElementById('container-right').innerHTML    = nav + content + footer_temp
    document.getElementById('container-footer').innerHTML   = footer

    let about       = template_about()
    let resume      = template_resume()
    let portfolio   = template_port()
    let contact     = template_contact()

    document.getElementById('content-home').innerHTML           = about
    document.getElementById('content-resume').innerHTML         = resume
    document.getElementById('content-portfolio').innerHTML      = portfolio
    document.getElementById('content-contact').innerHTML        = contact
    
    document.getElementById('container-nav').className          = containerNav
    document.getElementById(`li-working-0`).style.paddingTop    = '40px'
    document.getElementById(`li-education-0`).style.paddingTop  = '40px'
    document.getElementById(`li-working-${TIMELINE.working_title.length - 1}`).style.borderLeft = borderLeftValue
    document.getElementById(`li-education-${TIMELINE.education_title.length - 1}`).style.borderLeft = borderLeftValue

    document.getElementById(`li-info-0`).style.paddingTop    = '40px'
    document.getElementById(`li-info-${INFO.content.length - 1}`).style.borderLeft = borderLeftValue
}




//      [ Change menu function ]

function changeMenu(menu) {
    let card_home       = document.getElementById(`content-home`)
    let card_resume     = document.getElementById(`content-resume`)
    let card_portfolio  = document.getElementById(`content-portfolio`)
    let card_contact    = document.getElementById(`content-contact`)

    let btn_home        = document.getElementById(`nav-item-home`)
    let btn_resume      = document.getElementById(`nav-item-resume`)
    let btn_portfolio   = document.getElementById(`nav-item-portfolio`)
    let btn_contact     = document.getElementById(`nav-item-contact`)

    card_home.style.display         = 'none'
    card_resume.style.display       = 'none'
    card_portfolio.style.display    = 'none'
    card_contact.style.display      = 'none'

    btn_home.style.color        = ''
    btn_resume.style.color      = ''
    btn_portfolio.style.color   = ''
    btn_contact.style.color     = ''

    let color = '#ffc500'

    switch (menu) {
        case 'home'     : { 
            card_home.style.display         = 'flex'
            btn_home.style.color            = color
        }
            break
        case 'resume'   : { 
            card_resume.style.display       = 'flex'
            btn_resume.style.color          = color
        }
            break
        case 'portfolio': { 
            card_portfolio.style.display    = 'flex'
            btn_portfolio.style.color       = color
        }
            break
        case 'contact'  : { 
            card_contact.style.display      = 'flex'
            btn_contact.style.color         = color
        }
            break
        default:
            break
    }
}


function toggleDarkMode(check) {
    let container_btn   = document.getElementById('container-nav')
    let leftLineWork    = document.getElementById(`li-working-${TIMELINE.working_title.length - 1}`)
    let leftLineEdu     = document.getElementById(`li-education-${TIMELINE.education_title.length - 1}`)
    let leftLineInfo    = document.getElementById(`li-info-${INFO.content.length - 1}`)
    if (check.checked === true) {
        localStorage.setItem('dark-mode', 'dark')
        container_btn.className = 'container-nav'
        leftLineWork.style.borderLeft = '2px solid #212F3D'
        leftLineEdu.style.borderLeft = '2px solid #212F3D'
        leftLineInfo.style.borderLeft = '2px solid #212F3D'
        toggleClass()
    } 
    if (check.checked === false) {
        localStorage.setItem('dark-mode', 'light')
        container_btn.className = 'container-nav card'
        leftLineWork.style.borderLeft = '2px solid #fff'
        leftLineEdu.style.borderLeft = '2px solid #fff'
        leftLineInfo.style.borderLeft = '2px solid #fff'
        toggleClass()
    }
}


function toggleClass() {
    // Body
    let body            = document.body
    body.classList.toggle('dark-mode')



    // Button
    let btn_home        = document.getElementById(`nav-item-home`)
    let btn_resume      = document.getElementById(`nav-item-resume`)
    let btn_portfolio   = document.getElementById(`nav-item-portfolio`)
    let btn_contact     = document.getElementById(`nav-item-contact`)
    btn_home.classList.toggle('btn-dark')
    btn_resume.classList.toggle('btn-dark')
    btn_portfolio.classList.toggle('btn-dark')
    btn_contact.classList.toggle('btn-dark')



    // Cards
    let card        = document.getElementById('card-left')
    card.classList.toggle('card-dark')

    HOBBY.content.forEach((ele, i) => {
        document.getElementById(`card-hobby-${i}`).classList.toggle('card-dark-sub')
    })

    PORT_CONTENT.port_card.forEach((ele, i) => {
        document.getElementById(`card-port-${i}`).classList.toggle('card-dark-sub')
    })



    // Content
    let content_home    = document.getElementById('content-home')
    let content_resume  = document.getElementById('content-resume')
    let content_port    = document.getElementById('content-portfolio')
    let content_contact = document.getElementById('content-contact')
    content_home.classList.toggle('content-dark')
    content_resume.classList.toggle('content-dark')
    content_port.classList.toggle('content-dark')
    content_contact.classList.toggle('content-dark')
}