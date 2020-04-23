

function template_info() {
    let markup = `
        <div class="card-left card">
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
                            <li id="li-info-${i}" class="detail">
                                <label>${ele[0]}: ${ele[1]}</label>
                            </li>
                        `)}).join('')}
                    </ul>
                </div>
            </div>
        </div>
    `
    return markup
}