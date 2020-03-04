var PERM            = [0, 1, 2, 3, 4]
var LEAVETYPE       = 'sick'
const contentImages = [
    'jpeg',
    'jpg',
    'png',
    'pdf'
]
var DATESTART, DATEEND, REASONS, VALUES, FILES


function onLoad() {
    if (PERM.includes(TYPE) && TOKEN) {
        genContent()
    } else {
        notFound()
    }
}


async function genContent() {
    let sidebar         = await templateSidebar()
    let header          = await templateHeader()
    let max             = await sqlQueriesGET('listsleavemax')
    let remain          = await sqlQueriesGET('listsleavedays')
    let selector        = await templateLeaveSelector()
    max                 = max.data[0]
    remain              = remain.data
    let cards           = await templateCardLeave(contentImages)
    let markup          = sidebar + header + selector + cards
    document.getElementById('container').innerHTML  =   markup
    let textDecoration  = 'line-through'
    let disabled        = true
    if (remain.sick >= max.sick) {
        document.getElementById('leave-card-container').removeChild(document.getElementById('leave-card-sick'))
        document.getElementById('leave-select-sick').disabled                       = disabled
        document.getElementById('leave-select-sick').style.textDecoration           = textDecoration
    }
    if (remain.business >= max.business) {
        document.getElementById('leave-card-container').removeChild(document.getElementById('leave-card-business'))
        document.getElementById('leave-select-business').disabled                   = disabled
        document.getElementById('leave-select-business').style.textDecoration       = textDecoration
    }
    if (remain.vacation >= max.vacation) {
        document.getElementById('leave-card-container').removeChild(document.getElementById('leave-card-vacation'))
        document.getElementById('leave-select-vacation').disabled                   = disabled
        document.getElementById('leave-select-vacation').style.textDecoration       = textDecoration
        document.getElementById('leave-select-sick').onmouseover                    = 'lightgray'
    } 
    if (remain.substitution >= remain.substitutionMax) {
        document.getElementById('leave-card-container').removeChild(document.getElementById('leave-card-substitution'))
        document.getElementById('leave-select-substitution').disabled               = disabled
        document.getElementById('leave-select-substitution').style.textDecoration   = textDecoration
    }
}


function onChangeLeaveType(type) {
    LEAVETYPE                       = type
    VALUES                          = undefined
    let sick                        = document.getElementById('leave-card-sick')
    let business                    = document.getElementById('leave-card-business')
    let vacation                    = document.getElementById('leave-card-vacation')
    let substitution                = document.getElementById('leave-card-substitution')
    let sickSelect                  = document.getElementById('leave-select-sick')
    let businessSelect              = document.getElementById('leave-select-business')
    let vacationSelect              = document.getElementById('leave-select-vacation')
    let substitutionSelect          = document.getElementById('leave-select-substitution')
    let dateStart                   = document.getElementsByName(`date-start-${type}`)
    let dateEnd                     = document.getElementsByName(`date-end-${type}`)
    let reasons                     = document.getElementsByName(`reasons-${type}`)
    let sum                         = document.getElementById(`summary-${type}`)
    let days                        = document.getElementById(`days-${type}`)
    let file                        = document.getElementById(`upload-${type}`)
    let fileLabel                   = document.getElementById(`file-name-${type}`)
    if (sick) {
        sickSelect.style.backgroundColor    = ''
        sick.style.display              = 'none'
    } if (business) {
        businessSelect.style.backgroundColor    = ''
        business.style.display          = 'none'
    } if (vacation) {
        vacationSelect.style.backgroundColor    = ''
        vacation.style.display          = 'none'
    } if (substitution) {
        substitutionSelect.style.backgroundColor    = ''
        substitution.style.display      = 'none'
    } 
    dateStart[0].value              = ''
    dateEnd[0].value                = ''
    sum.innerHTML                   = 'START - END'
    days.innerHTML                  = 'DAYS'
    if (file) {
        file.value                  = null
        fileLabel.innerHTML         = '<label>No file </label><span>*</span>'
    }
    switch (type) {
        case 'sick'             :   {
                                        sickSelect.style.backgroundColor        = '#E74C3C'
                                        sick.style.display                      = 'block'
                                        reasons[0].value                        = ''
                                    }    
            break
        case 'business'         :   {
                                        businessSelect.style.backgroundColor    = '#3498DB'
                                        business.style.display                  = 'block'
                                        reasons[0].value                        = ''
                                    } 
            break
        case 'vacation'         :   {
                                        vacationSelect.style.backgroundColor    = '#F39C12'
                                        vacation.style.display                  = 'block'
                                    } 
            break
        case 'substitution'     :   {
                                        substitutionSelect.style.backgroundColor    = '#2ECC71'
                                        substitution.style.display                  = 'block'
                                    } 
            break
        default:            
            break
    }
}


function onChangeFile(type) {
    FILES = document.getElementById(`upload-${type}`).files
    document.getElementById(`file-name-${type}`).innerHTML = FILES[0].name
}


async function onChange() {
    let leaveType       = LEAVETYPE
    DATESTART           = document.getElementsByName(`date-start-${leaveType}`)
    DATEEND             = document.getElementsByName(`date-end-${leaveType}`)
    let summaryValue    = await summary(DATESTART[0].value, DATEEND[0].value)
    document.getElementById(`summary-${leaveType}`).innerHTML    = summaryValue.sum
    if (summaryValue.days > -1) {
        document.getElementById(`days-${leaveType}`).innerHTML   = `${summaryValue.days} DAYS`
    }
    if (summaryValue.days == 0) {
        document.getElementById(`days-${leaveType}`).innerHTML   = `1 DAYS`
    }
    REASONS             = document.getElementsByName(`reasons-${leaveType}`)
    VALUES              = {
                            leaveType   : leaveType,
                            dateStart   : DATESTART[0].value,
                            dateEnd     : DATEEND[0].value,
                            reasons     : '',
                            uploadid    : null,
                            status      : 0
                          }
    if (leaveType == 'sick' || leaveType == 'business') {
        if (FILES) {
            VALUES['file']      = FILES[0]
        }
        VALUES['reasons']   = REASONS[0].value
    }
}


async function onSubmit() {
    let message, name, ext, size, file
    let data            = VALUES
    if (FILES && (data.leaveType == 'sick' || data.leaveType == 'business') && (data.dateStart !== '' && data.dateEnd !== '' && data.reasons !== '')) {
        file                = FILES[0]
        size                = file.size
        size                = Number(((size / 1024) / 1024).toFixed(2))
        name                = file.name.split('.')
        ext                 = name[name.length - 1]
        if (size <= 10 && contentImages.includes(ext)) {
            let upload          = await sqlQueriesPOST('uploaders', file, 'file')
            let uploadID        = upload.data
            data['uploadid']    = uploadID
            let result          = await sqlQueriesPOST('createleaves', data)
            if (result.result == 'success') {
                location.reload()
            }
        } else {
            let ext         = ''
            contentImages.forEach(ele => { ext += ' ' + ele })
            message         = `File must be less than 10MB\nFile ext is not${ext}.`
            alert(message)
        }
    }
    if ((data.leaveType == 'vacation' || data.leaveType == 'substitution') && (data.dateStart !== '' && data.dateEnd !== '')) {
        let result          = await sqlQueriesPOST('createleaves', data)
        if (result.result == 'success') {
            location.reload()
        }
    }
}


function summary(dateStart, dateEnd) {
    const days          = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const months        = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    let finale_start    = ''
    let final_end       = ''

    // START
    let start               = new Date(dateStart)
    let start_day           = start.getDate()
    let start_day_short     = days[start.getDay()]
    let start_month         = start.getMonth()
    let start_month_short   = months[start_month]
    let start_year          = start.getUTCFullYear()
    finale_start            = `${start_day_short} ${start_day} ${start_month_short} ${start_year}`

    // END
    let end                 = new Date(dateEnd)
    let end_day             = end.getDate()
    let end_day_short     = days[end.getDay()]
    let end_month           = end.getMonth()
    let end_month_short     = months[end_month]
    let end_year            = end.getUTCFullYear()
    final_end               = `${end_day_short} ${end_day} ${end_month_short} ${end_year}`

    // SUMMARY
    let final_summary, sum, diffDays

    if (!end_day || !end_month || !end_year) {
        final_end = 'END'
    }

    if (!start_day || !start_month || !start_year) {
        finale_start = 'START'
    }

    sum     = `${finale_start} - ${final_end}`

    if ((start_month == end_month) && (start_year == end_year)) {
        final_summary = `${start_day} - ${end_day} ${start_month_short} ${start_year}`
        sum     = final_summary
    }

    let final    = { sum, days: -1 }

    if (start && end) {
        diffDays        = rangeDays(start, end)
        final.days      = diffDays
    }

    return final
}