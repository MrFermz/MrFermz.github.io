async function onLoad() {
    // load server status
    let statProtocol = config.statusServer.protocol
    let statHost = config.statusServer.host
    let statUrl = config.statusServer.url
    let statIp = config.statusServer.ip
    let statReq = `${statProtocol}://${statHost}/${statUrl}/${statIp}`
    let stat = await queriesGET(statReq)
    console.log(stat)


    let display = ''
    if (stat.online) {
        let motd = stat.description.text.split('-')
        motd = `-${motd[1]}-`
        display = `
        <div>IP: ${statIp} [${stat.online ? 'online' : 'offline'}]</div>
        <div>Motd: ${motd}</div>
        <div>Version: ${stat.version.name}</div>
        <div>Players: ${stat.players.online} / ${stat.players.max}</div>
        <br>
        <div>${stat.players.sample.length > 0 ? stat.players.sample.map((ele, i) => {
            return (`
            ${i + 1}. ${ele.name}
        `)
        }).join('') : '-'}</div>
    `
    } else {
        display = `
            <div>IP: ${statIp} [${stat.online ? 'online' : 'offline'}]</div>
        `
    }
    document.getElementById('container').innerHTML = display
}

// setInterval(() => {
//     onLoad()
// }, 1000);