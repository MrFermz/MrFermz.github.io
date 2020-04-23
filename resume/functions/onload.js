




//      [ Onload function ]

function onLoad() {
    genContent()
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

    document.getElementById(`li-working-0`).style.paddingTop    = '40px'
    document.getElementById(`li-education-0`).style.paddingTop  = '40px'
    document.getElementById(`li-working-${TIMELINE.working_title.length - 1}`).style.borderLeft     = '2px solid white'
    document.getElementById(`li-education-${TIMELINE.education_title.length - 1}`).style.borderLeft = '2px solid white'

    document.getElementById(`li-info-0`).style.paddingTop    = '40px'
    document.getElementById(`li-info-${INFO.content.length - 1}`).style.borderLeft     = '2px solid white'
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