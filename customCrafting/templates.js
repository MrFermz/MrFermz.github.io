function gridGenerate() {
    let breakIndex = [2, 5, 8]
    let markup = `
    ${GRID_TEMP.map((ele, i) => {
        return (`
            <div class="grid-bg">${ele}</div>
        `)
    }).join('')}
    `
    return markup
}