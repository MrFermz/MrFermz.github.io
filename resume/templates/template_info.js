var temp    =   [
                    'Name',
                    'Birthday',
                    'Email'
                ]

var info    =   [
                    'Krittanupong Suksai',
                    '04 Aug 1995',
                    'Mr.Fermz@hotmail.com'
                ]


function template_info() {
    let markup = `
        <div class="card-left card">
            <div class="container-info">
                <img class="avatar" src="./assets/icons/user.svg">
                <div class="container-label">
                    ${temp.map((ele, i) => {  return(`<label>${ele}: ${info[i]}</label>`)}).join('')}
                </div>
            </div>
        </div>
    `
    return markup
}