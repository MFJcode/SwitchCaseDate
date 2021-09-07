
const h1 = document.querySelector('.container h1'); 
const data = new Date();


function getDayWeekText(dayWeek) {

    let dayWeekaText; // essa variavel nao existe fora da funcao, esta dentro do escopo da funcao.

    switch (dayWeek) { 
        case 0:
            dayWeekaText = 'Sunday';
            return dayWeekaText; // neste caso nao precisa do break por que a instrucao return em uma funcao para execucao e sai.
        case 1:
            dayWeekaText = 'Monday';
            return dayWeekaText;
        case 2:
            dayWeekaText = 'Tuesday';
            return dayWeekaText;
        case 3:
            dayWeekaText = 'Wednesday';
            return dayWeekaText;
        case 4:
            dayWeekaText = 'Thursday';
            return dayWeekaText;
        case 5:
            dayWeekaText = 'Friday';
            return dayWeekaText;
        case 6:
            dayWeekaText = 'Saturday';
            return dayWeekaText;            
          
        default:
            dayWeekaText = ''; // pode usar o break mas como e a ultima nao tem necessidade.
    }
}

function getnameMonth(numberMonth) {

    let nameMonth; // essa variavel nao existe fora da funcao, esta dentro do escopo da funcao.

    switch (numberMonth) { 
        case 0:
            nameMonth = 'January';
            return nameMonth; // neste caso nao precisa do break por que a instrucao return em uma funcao para execucao e sai.
        case 1:
            nameMonth = 'February';
            return nameMonth;
        case 2:
            nameMonth = 'March';
            return nameMonth;
        case 3:
            nameMonth = 'April';
            return nameMonth;
        case 4:
            nameMonth = 'May';
            return nameMonth;
        case 5:
            nameMonth = 'June';
            return nameMonth;
        case 6:
            nameMonth = 'July';
            return nameMonth;
        case 7:
            nameMonth = 'August';
            return nameMonth;
        case 8:
            nameMonth = 'September';
            return nameMonth;
        case 9:
            nameMonth = 'October';
            return nameMonth;
        case 10:
            nameMonth = 'November';
            return nameMonth;
        case 11:
            nameMonth = 'December';
            return nameMonth;
        
        default:
            nameMonth = ''; // pode usar o break mas como e a ultima nao tem necessidade.
    }
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