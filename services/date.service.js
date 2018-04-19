exports.getDate = () => {
    let moment = new Date(Date.now());
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let year = moment.getFullYear();
    let month = months[moment.getMonth()];
    let date = moment.getDate();
    let hour = moment.getHours();
    // var min = a.getMinutes();
    // var sec = a.getSeconds();
    let min = moment.getMinutes() < 10 ? '0' + moment.getMinutes() : moment.getMinutes();
    let sec = moment.getSeconds() < 10 ? '0' + moment.getSeconds() : moment.getSeconds();
    let time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
    return time;
}

exports.getTime = () => {
    let moment = new Date(Date.now());
    // Hours part from the timestamp
    let hours = moment.getHours();
    // Minutes part from the timestamp
    let minutes = "0" + moment.getMinutes();
    // Seconds part from the timestamp
    let seconds = "0" + moment.getSeconds();

    // Will display time in 10:30:23 format
    let time = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    return time;
}