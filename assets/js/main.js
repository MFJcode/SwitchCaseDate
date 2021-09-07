const h1 = document.querySelector('.container h1'); 

const data = new Date();


function getDayWeekText(dayWeek) {

    const weekDays = ['Sunday', 'Monday', 'Tuesday','Wednesday','Thursday','Friday','Saturday']
    return weekDays[dayWeek];
   
}

function getnameMonth(numberMonth) {
    const month = ['January', 'February', 'March', 'April', 'May','June','July','August','September','October','November','December'];
    return month[numberMonth];
}

function zeroLeft (num) {
    return num >= 10 ? num : `0${num}`;
}


function createDate (data) {
    const dayWeek = data.getDay();
    const numberMonth = data.getMonth();

    const dayName = getDayWeekText(dayWeek);
    const monthName = getnameMonth(numberMonth);

    return ( `${dayName}, ${monthName} ${data.getDate()},  ` + ` ${data.getFullYear()} , ${zeroLeft(data.getHours())} : ${zeroLeft(data.getMinutes())}`
    
    )
    
}

    h1.innerHTML = createDate(data);

