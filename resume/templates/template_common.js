var menuList    =   [
                        'home',
                        'resume',
                        'portfolio',
                        'contact'
                    ]



function template_container() {
    let markup = `
        <div class="container-main">
            <div id="container-top" class="container-top"></div>
            <div class="container-main-content">
                <div id="container-left" class="container-left"></div>
                <div id="container-right" class="container-right"></div>
            </div>
        </div>
    `
    return markup
}


function template_top_bar() {
    let markup = `
        <div class="container-switch">
            <label class="switch-label">Dark Theme</label>
            <label class="switch">
                <input type="checkbox" ${THEME == 'dark' ? `checked` : ``} onclick="toggleDarkMode(this)">
                <span class="slider round"></span>
            </label>
        </div>
    `
    return markup
}


function template_nav_bar() {
    let length = menuList.length
    let markup = `
        <div id="container-nav" class="container-nav card">
            ${menuList.map((ele, i) => { return (`
                <div id="nav-item-${ele}" ${ele == 'home' ? `style="color:#ffc500;"` : ``}
                ${i == 0 ? `class="nav-item-left"` : i == length - 1 ? `class="nav-item-right"` : `class="nav-item"`}
                onclick="changeMenu('${ele}')">${ele.toUpperCase()}</div>
            `)}).join('')}
        </div>
    `
    return markup
}


function template_footer_bar() {
    let markup = `
        <div id="container-footer" class="content-footer card">
            <label>Mr.Fermz.</label>
            <label>© 2020 All rights reserved.</label>
        </div>
    `
    return markup
}