function showCurrentDate() {
    const now = new Date();

    const days = ['неділя','понеділок','вівторок','середа','четвер','п’ятниця','субота'];
    const months = ['січня','лютого','березня','квітня','травня','червня',
        'липня','серпня','вересня','жовтня','листопада','грудня'];

    let minutes = now.getMinutes().toString().padStart(2, '0');

    let result = `
    Дата: ${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()} року<br>
    День тижня: ${days[now.getDay()]}<br>
    Час: ${now.getHours()}:${minutes}
    `;

    document.getElementById('res1').innerHTML = result;
}



function getDayInfo(date) {
    const days = ['неділя','понеділок','вівторок','середа','четвер','п’ятниця','субота'];
    let d = date.getDay();
    return {
        dayNumber: d === 0 ? 7 : d,
        dayName: days[d]
    };
}



function getDateDaysAgo(n) {
    let d = new Date();
    d.setDate(d.getDate() - n);
    return d;
}



function getLastDayOfMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
}



function getSecondsToday() {
    let now = new Date();
    return now.getHours()*3600 + now.getMinutes()*60 + now.getSeconds();
}
function getSecondsToTomorrow() {
    return 86400 - getSecondsToday();
}



function formatDateFull(date) {
    let d = String(date.getDate()).padStart(2,'0');
    let m = String(date.getMonth()+1).padStart(2,'0');
    let y = date.getFullYear();
    return `${d}.${m}.${y}`;
}



function dateDiff(d1, d2) {
    return Math.abs(d1 - d2)/(1000*60*60*24);
}



function formatDateSmart(date) {
    let diff = (new Date() - date)/1000;

    if (diff < 1) return "тільки що";
    if (diff < 60) return Math.floor(diff)+" сек. назад";
    if (diff < 3600) return Math.floor(diff/60)+" хв. назад";

    return formatDateFull(date);
}



function parseDate(str) {
    if (str.includes('.')) {
        let [d,m,y] = str.split('.');
        return new Date(y, m-1, d);
    }
    return new Date(str);
}



function formatDateLocale(date, lang) {
    return date.toLocaleString(lang, {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
}