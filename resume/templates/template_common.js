

function template_container() {
    let markup = `
        <div id="container-main" class="container-main">
            <div id="container-top" class="container-top"></div>
            <div class="container-main-content">
                <div id="container-left" class="container-left"></div>
                <div id="container-right" class="container-right"></div>
            </div>
        </div>
        <div id="container-modal" class="container-modal" tabindex="0" onkeydown="onKeyDown(event)"></div>
    `
    return markup
}


function template_top_bar() {
    let lang = ['en', 'th']
    let select = localStorage.getItem('lang')
    let markup = `
        <div class="container-corner">
            <div class="container-lang">
                ${lang.map((ele, i) => { return (`
                    <input type="button" value="${ele}" onclick="langSwitcher('${ele}')" ${select == ele ? `disabled` : ``}>
                `)}).join('')}
            </div>
            <div class="container-switch">
                <label class="switch-label">Dark Theme</label>
                <label class="switch">
                    <input type="checkbox" ${THEME == 'dark' ? `checked` : ``} onclick="toggleDarkMode(this)">
                    <span class="slider round"></span>
                </label>
            </div>
        </div>
    `
    return markup
}


function template_nav_bar() {
    let length = MENU_LIST[LANG].length
    let markup = `
        <div id="container-nav" class="container-nav card">
            ${MENU_LIST[LANG].map((ele, i) => { let eng = MENU_LIST['en'][i]; return (`
                <div id="nav-item-${eng}" ${eng == 'home' ? `style="color:#ffc500;"` : ``}
                ${i == 0 ? `class="nav-item-left"` : i == length - 1 ? `class="nav-item-right"` : `class="nav-item"`}
                onclick="changeMenu('${eng}')">${ele.toUpperCase()}</div>
            `)}).join('')}
        </div>
    `
    return markup
}


function template_footer_bar() {
    let markup = `
        <div id="container-footer" class="content-footer card">
            <label>Mr.Fermz.</label>
            <label>© ${new Date().getFullYear()} All rights reserved.</label>
        </div>
    `
    return markup
}