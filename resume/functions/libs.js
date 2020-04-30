function capitalizer(params) {
    return params.charAt(0).toLocaleUpperCase() + params.slice(1)
}


function newTab(params) {
    window.open(params)
}


function titleSetter(params) {
    document.title = `${capitalizer(params)} - Mr.Fermz`
}


function ageCalculator(params) {
    return new Date().getFullYear() - params
}