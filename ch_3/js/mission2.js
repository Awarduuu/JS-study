var num = 1;
var t = "<table border=1>";
for (var i = 1; i <= 5; i++) {
    t += "<tr>";
    for (var j = 1; j <= 5; j++) {
        t += "<td>" + num + "</td>"
        num++;
    }
    t += "</tr>";
}

t += "</table>";
console.log(t);
document.write(t);

