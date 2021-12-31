const htmlDateToUnix = (date) => {
    const newDate = new Date(date)
    return newDate.getTime() / 1000
}
const UnixTimeToDate = (time) => {
    const newDate = new Date(time)
    const mm = newDate.getMonth() + 1
    const dd = newDate.getDate()
    const yyyy = newDate.getFullYear()
    return (`${dd}/${mm}/${yyyy}`)
}

export {htmlDateToUnix, UnixTimeToDate}