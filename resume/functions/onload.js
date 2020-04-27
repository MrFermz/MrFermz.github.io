var THEME = localStorage.getItem('dark-mode')
var borderLeftValue  = '2px solid #212F3D'
var containerNav = 'container-nav'
if (localStorage.getItem('lang')) {
    var LANG = localStorage.getItem('lang')
} else {
    localStorage.setItem('lang', 'en')
    var LANG = localStorage.getItem('lang')
}
var COUNT_NEXT_PREVIOUS = 0






//      [ Onload function ]

function onLoad() {
    titleSetter('home')
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

    document.getElementById(`li-info-0`).style.paddingTop    = '40px'
}


document.getElementById('container-modal').autofocus