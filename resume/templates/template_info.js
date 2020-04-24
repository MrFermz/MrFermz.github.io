

function template_info() {
    let markup = `
        <div id="card-left" class="card-left card">
            <div class="container-info">
                <img class="avatar" src="./assets/images/avatar2.png">
                <div class="container-detail">
                    <div class="container-title">
                        <div class="container-info-icon">
                            <img class="title-icon" src="./assets/icons/glasses.svg">
                        </div>
                    </div>
                    <ul>
                        ${INFO.content.map((ele, i) => { return (`
                            <li class="border-left-light" id="li-info-${i}" class="detail">
                                <label>${capitalizer(ele[0])}: ${ele[1]}</label>
                            </li>
                        `)}).join('')}
                    </ul>
                </div>
            </div>
            <div class="container-info-social">
                ${INFO_ICON.social.map((ele, i) => { return (`
                    <label class="social-btn" onclick="newTab('${ele[1]}')"><i class="${ele[0]}"></i></label>
                `)}).join('')}
            </div>
        </div>
    `
    return markup
}