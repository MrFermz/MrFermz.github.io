

function template_home() {
    let markup = `
        ${menuList.map((ele, i) => { return (
            `<div id="content-${ele}" class="container-content card"></div>`
        )}).join('')}`
    return markup
}


function template_about() {
    let title_about = ABOUT.title
    let title_hobby = HOBBY.title
    let title_skill_design = SKILLS.title_design
    let title_skill_coding = SKILLS.title_coding
    let markup = `
        <div class="title">${capitalizer(title_about)}</div>
        <div class="content">${ABOUT.content}</div>

        <div class="title">${capitalizer(title_hobby)}</div>
        <div class="container-hobby">
            ${HOBBY.content.map((ele, i) => { return (`
                <div class="card">
                    <img src="./assets/icons/${ele[0]}.svg">
                    <div class="hobby-title">${ele[1]}</div>
                    <div class="hobby-content">${ele[2]}</div>
                </div>
            `)}).join('')}
        </div>

        <div class="container-skill">
            <div class="skill-design">
                <div class="title">${capitalizer(title_skill_design)}</div>
                ${SKILLS.content_design.map((ele, i) => { return (`
                    <div class="content-skill-title">${ele[0]}</div>
                    <progress id="file" value="${ele[1]}" max="100"></progress>
                `)}).join('')}
            </div>
            <div class="skill-coding">
                <div class="title">${capitalizer(title_skill_coding)}</div>
                ${SKILLS.content_coding.map((ele, i) => { return (`
                    <div class="content-skill-title">${ele[0]}</div>
                    <progress id="file" value="${ele[1]}" max="100"></progress>
                `)}).join('')}
            </div>
        </div>
    `
    return markup
}


function template_resume() {
    let title_resume = RESUME.title
    let title_timeline = ['working history', 'Education history']
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
                    <ul>
                    ${TIMELINE.working_title.map((ele, i) => { return (`
                        <li id="li-working-${i}">
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
                    ${TIMELINE.education_title.map((ele, i) => { return (`
                        <li id="li-education-${i}">
                            <label>${ele[0]}</label>
                            <span>${ele[1]}</span>
                            <p>${ele[2]}</p>
                        </li>
                    `)}).join('')}
                </div>
            </div>
        </div>
    `
    return markup
}


function template_port() {
    let title_port = PORT.title
    let markup = `
        <div class="title">${capitalizer(title_port)}</div>
        <div class="container-port">
            ${PORT_CONTENT.port_card.map((ele, i) => { return (`
                <div class="card">
                    <img src="./assets/images/${ele[0]}">
                    <div class="detail">
                        <div class="port-title">${ele[1]}</div>
                        <div class="port-content">${ele[2]}</div>
                    </div>
                </div>
            `)}).join('')}
        </div>
    `
    return markup
}


function template_contact() {
    let title_contact = CONTACT.title
    let markup = `
        <div class="title">${capitalizer(title_contact)}</div>
        <div class="content">${CONTACT.content}</div>
    `
    return markup
}