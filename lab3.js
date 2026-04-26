function run1(){ showCurrentDate(); }

function run2(){
    let info = getDayInfo(new Date());
    document.getElementById('res2').innerHTML =
        `Номер дня: ${info.dayNumber}<br>Назва дня: ${info.dayName}`;
}

function run3(){
    let n = document.getElementById('daysAgo').value;
    document.getElementById('res3').innerHTML = getDateDaysAgo(n);
}

function run4(){
    let y = document.getElementById('year').value;
    let m = document.getElementById('month').value;
    document.getElementById('res4').innerHTML = getLastDayOfMonth(y,m);
}

function run5(){
    document.getElementById('res5').innerHTML =
        `Секунд від початку: ${getSecondsToday()}<br>
         До завтра: ${getSecondsToTomorrow()}`;
}

function run6(){
    document.getElementById('res6').innerHTML =
        formatDateFull(new Date());
}

function run7(){
    let d1 = new Date(document.getElementById('d1').value);
    let d2 = new Date(document.getElementById('d2').value);
    document.getElementById('res7').innerHTML =
        dateDiff(d1,d2);
}

function run8(){
    let d = new Date(document.getElementById('d3').value);
    document.getElementById('res8').innerHTML =
        formatDateSmart(d);
}

function run9(){
    let str = document.getElementById('dateStr').value;
    document.getElementById('res9').innerHTML =
        parseDate(str);
}

function run10(){
    let lang = document.getElementById('lang').value;
    document.getElementById('res10').innerHTML =
        formatDateLocale(new Date(), lang);
}