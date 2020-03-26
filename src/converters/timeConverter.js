

export function timeConverter(UNIX_timestamp) {

    let stamp = new Date(UNIX_timestamp * 1000)
    let months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec']
    let year = stamp.getFullYear()
    let month = months [stamp.getMonth()]
    let date = stamp.getDate()
    let hour = stamp.getHours()
    let min = stamp.getMinutes()
    let sec = stamp.getSeconds()
    let time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    
    return time;

}

