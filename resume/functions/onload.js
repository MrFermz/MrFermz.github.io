




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

    document.getElementById('container-top').innerHTML      = top
    document.getElementById('container-left').innerHTML     = info
    document.getElementById('container-right').innerHTML    = nav + content
    document.getElementById('container-footer').innerHTML   = footer
}




//      [ Change menu function ]

function changeMenu(menu) {
    console.log(menu)
    let card_home       = document.getElementById(`content-home`)
    let card_resume     = document.getElementById(`content-resume`)
    let card_portfolio  = document.getElementById(`content-portfolio`)
    let card_contact    = document.getElementById(`content-contact`)

    card_home.style.display         = 'none'
    card_resume.style.display       = 'none'
    card_portfolio.style.display    = 'none'
    card_contact.style.display      = 'none'

    switch (menu) {
        case 'home'     : { card_home.style.display = 'flex' }
            break
        case 'resume'   : { card_resume.style.display = 'flex' }
            break
        case 'portfolio': { card_portfolio.style.display = 'flex' }
            break
        case 'contact'  : { card_contact.style.display = 'flex' }
            break
        default:
            break
    }
}