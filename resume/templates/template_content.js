var LENGTH_MAX




function template_home() {
    let markup = `
        ${MENU_LIST['th'].map((ele, i) => { let eng = MENU_LIST['en'][i]; return (
            `<div id="content-${eng}" class="container-content card"></div>`
        )}).join('')}`
    return markup
}


function template_about() {
    let title_about = ABOUT[LANG]['title']
    let title_hobby = HOBBY[LANG]['title']
    let title_skill_design = SKILLS[LANG]['title_design']
    let title_skill_coding = SKILLS[LANG]['title_coding']
    let markup = `
        <div class="title">${capitalizer(title_about)}</div>
        <div class="content">${ABOUT[LANG]['content']}</div>

        <div class="title">${capitalizer(title_hobby)}</div>
        <div class="container-hobby">
            ${HOBBY[LANG]['content'].map((ele, i) => { return (`
                <div id="card-hobby-${i}" class="card">
                    <i class="${ele[0]}"></i>
                    <div class="hobby-title">${ele[1]}</div>
                    <div class="hobby-content">${ele[2]}</div>
                </div>
            `)}).join('')}
        </div>

        <div class="container-skill">
            <div class="skill-design">
                <div class="title">${capitalizer(title_skill_design)}</div>
                ${SKILLS[LANG]['content_design'].map((ele, i) => { return (`
                    <div class="content-skill-title">${ele[0]}</div>
                    <progress id="file" value="${ele[1]}" max="100"></progress>
                `)}).join('')}
            </div>
            <div class="skill-coding">
                <div class="title">${capitalizer(title_skill_coding)}</div>
                ${SKILLS[LANG]['content_coding'].map((ele, i) => { return (`
                    <div class="content-skill-title">${ele[0]}</div>
                    <progress id="file" value="${ele[1]}" max="100"></progress>
                `)}).join('')}
            </div>
        </div>
    `
    return markup
}


function template_resume() {
    let title_resume = RESUME[LANG]['title']
    let title_timeline = [RESUME[LANG]['working_title'], RESUME[LANG]['education_title']]
    let title_exp = EXP[LANG]['title']
    let markup = `
        <div class="title">${capitalizer(title_resume)}</div>
        <div class="container-timeline">
            <div class="timeline-working">
                <div class="container-title">
                    <div class="container-icon">
                        <i id="icon-working" class="fas fa-briefcase"></i>
                    </div>
                    <label class="title-timeline">${capitalizer(title_timeline[0])}</label>
                </div>
                <div class="container-timeline-content">
                    <ul class="container-group">
                    ${RESUME[LANG]['working_content'].map((ele, i) => { return (`
                        <li class="border-left-light" id="li-working-${i}">
                            <label>${ele[0]}</label>
                            <span>${ele[1]}</span>
                            <p>${ele[2]}</p>
                        </li>
                    `)}).join('')}
                    </ul>
                </div>
            </div>
            <div class="timeline-education">
                <div class="container-title">
                    <div class="container-icon">
                        <i id="icon-education" class="fas fa-graduation-cap"></i>
                    </div>
                    <label class="title-timeline">${capitalizer(title_timeline[1])}</label>
                </div>
                <div class="container-timeline-content">
                    <ul class="container-group">
                        ${RESUME[LANG]['education_content'].map((ele, i) => { return (`
                            <li class="border-left-light" id="li-education-${i}">
                                <label>${ele[0]}</label>
                                <span>${ele[1]}</span>
                                <p>${ele[2]}</p>
                            </li>
                        `)}).join('')}
                    </ul>
                </div>
            </div>
        </div>

        <div class="container-exp">
            <div class="title">${capitalizer(title_exp)}</div>
            <div class="container-exp-sub">
                ${EXP[LANG]['content'].map((ele, i) => { return (`
                        <label id="card-exp-${i}" class="card">${ele}</label>
                `)}).join('')}
            </div>
        </div>
    `
    return markup
}


function template_port() {
    let title_port = PORT[LANG]['title']
    let markup = `
        <div class="title">${capitalizer(title_port)}</div>
        <div class="container-port">
            ${PORT[LANG]['content'].map((ele, i) => { return (`
                <div id="card-port-${i}" class="card card-port">
                    ${ele[0].length == 0 ? `` : `<img src="./assets/images/port${i}/${ele[0][0]}.png" onclick="toggleModal(${i})" class="port-img">`}
                    <div class="more" onclick="toggleModal(${i})">
                        <span class="fa-stack fa-2x">
                            <i id="icon-bg" class="fas fa-circle fa-stack-2x"></i>
                            <i id="icon" class="fas fa-search fa-stack-1x fa-inverse"></i>
                        </span>
                    </div>
                    <div class="detail">
                        <div class="port-title">${ele[1]}</div>
                        <div class="port-content">${ele[2]}</div>
                        <div class="container-link"><i class="${ele[3]} link-btn" onclick="newTab('${ele[4]}')"></i></div>
                    </div>
                </div>
            `)}).join('')}
        </div>
    `
    return markup
}


function template_contact() {
    let title_contact = CONTACT[LANG]['title']
    let markup = `
        <div class="title">${capitalizer(title_contact)}</div>
        <div class="container-contact">
            <div class="contact-detail">
                ${CONTACT[LANG]['content'].map((ele, i) => { return (`
                    <label>${capitalizer(ele[0])}: ${ele[1]}</label>
                `)}).join('')}
            </div>
        </div>
    `
    return markup
}


function templateModal(index) {
    var content = []
    var images = []
    if (index >= 0) { //index only result is > 0 or true only.
        content = PORT[LANG]['content'][index]
        images = content[0]
        LENGTH_MAX = content[0].length
    }
    let markup = `
        <div id="modal-content" class="modal-content">
            <div class="modal-container-content">
                <div class="modal-top">
                    <div class="modal-remain-container">
                        <span id="modal-remain-count">1</span><span> of ${LENGTH_MAX}</span>
                    </div>
                </div>
                <div class="modal-close-container">
                    <span class="modal-close" onclick="toggleModal()"><i class="fas fa-times fa-lg icon"></i></span>
                </div>
                <div class="content">
                    ${images.map((ele, i) => { return (`
                        <img id="modal-img-${i}" src="./assets/images/port${index}/${ele}.png">
                    `)}).join('')}
                </div>
                <div class="container-arrow">
                    <span class="modal-previous" onclick="previousImage()"><i class="fas fa-arrow-left fa-lg icon"></i></span>
                    <span class="modal-next" onclick="nextImage()"><i class="fas fa-arrow-right fa-lg icon"></i></span>
                </div>
            </div>
        </div>
    `
    return markup
}