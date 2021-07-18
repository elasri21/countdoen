
function countDown(){
    const nextDate = (new Date("18 jully, 2022 13:45:00")).getTime()
    const currentDate = (new Date()).getTime()
    const dayly = nextDate - currentDate;

    let second = 1000;
    let minute = 60 * second;
    let hour = 60 * minute;
    let day = 24 * hour;

    let textDay = (Math.floor(dayly / day)).toString();
    let textHour = (Math.floor((dayly % day) / hour)).toString()
    let textMinute = (Math.floor((dayly % hour) / minute)).toString()
    let textSecond = (Math.floor((dayly % minute) / second)).toString()
    if(textDay.length <2){
        textDay = `0${textDay}`
    }
    if(textHour.length <2){
        textHour = `0${textHour}`
    }
    if(textMinute.length <2){
        textMinute = `0${textMinute}`
    }
    if(textSecond.length <2){
        textSecond = `0${textSecond}`
    }


    if(dayly > 0){
        document.querySelector('.day h2').innerHTML = textDay
        document.querySelector('.hour h2').innerHTML = textHour
        document.querySelector('.minute h2').innerHTML = textMinute
        document.querySelector('.second h2').innerHTML = textSecond

    } else {
        // document.querySelector('.day h2').innerHTML = "00"
        // document.querySelector('.hour h2').innerHTML =  "00"
        // document.querySelector('.minute h2').innerHTML = "00" 
        // document.querySelector('.second h2').innerHTML = "00" 

        document.getElementById('page').innerHTML =
        "<span class='test'>Welcome</span?"
    }

}

setInterval(countDown, 1000)




