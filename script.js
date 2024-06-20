function displayCalendar() {
    let month = document.getElementById("month").value;
    let year = document.getElementById("year").value;
    let daysInMonth = new Date(year, month, 0).getDate();
    let firstDay = new Date(year, month - 1, 1).getDay();
    let calendar = "<table><tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>";
    let date = 1;
    for (let i = 0; i < 6; i++) {
        calendar += "<tr>";
        for (let j = 0; j < 7; j++) {
            if (i == 0 && j < firstDay) {
                calendar += "<td></td>";
            } else if (date > daysInMonth) {
                break;
            } else {
                calendar += "<td>" + date + "</td>";
                date++;
            }
        }
        calendar += "</tr>";
    }
    calendar += "</table>";
    document.getElementById("calendar").innerHTML = calendar;
}
