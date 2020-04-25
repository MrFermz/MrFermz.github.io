

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
                        <img class="title-icon" src="./assets/icons/work.svg">
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
                        <img class="title-icon" src="./assets/icons/graduate.svg">
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
                <div id="card-port-${i}" class="card">
                    ${ele[0] == `` ? `` : `<img src="./assets/images/${ele[0]}">`}
                    <div class="detail">
                        <div class="port-title">${ele[1]}</div>
                        <div class="port-content">${ele[2]}</div>
                        <label class="link-btn" onclick="newTab('${ele[4]}')"><i class="${ele[3]}"></i></label>
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