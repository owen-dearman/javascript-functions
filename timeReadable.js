function timeReadable(seconds){
    let totalHours = seconds/3600
    let hours = Math.trunc(totalHours);
    let fullSeconds = hours*3600;
    let remainingSeconds = seconds - fullSeconds;
    let remainingMinutes = remainingSeconds/60;
    let minutes = Math.trunc(remainingMinutes);
    let fullminutes = minutes*60;
    let lastSeconds = remainingSeconds - fullminutes;
    if (lastSeconds < 10){
        lastSeconds = ('0' + lastSeconds).slice(-2);
    }
    if (minutes < 10){
        minutes = ('0' + minutes).slice(-2);
    }
    if (hours < 10){
        hours = ('0' + hours).slice(-2);
    }
    return(`${hours}:${minutes}:${lastSeconds}`)
}

let answer = timeReadable(233025)
console.log(answer)