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

    `
    return markup
}


function template_nav_bar() {
    let length = menuList.length
    let markup = `
        <div class="container-nav card">
            ${menuList.map((ele, i) => { return (`
                <input id="nav-item-${ele}" ${ele == 'home' ? `style="color:orange;"` : ``}
                ${i == 0 ? `class="nav-item-left"` : i == length - 1 ? `class="nav-item-right"` : `class="nav-item"`}
                type="button" value="${ele.toUpperCase()}" onclick="changeMenu('${ele}')">
            `)}).join('')}
        </div>
    `
    return markup
}


function template_footer_bar() {
    let markup = `
        <div class="content-footer card">
            <label>Copyright 2020</label>
        </div>
    `
    return markup
}