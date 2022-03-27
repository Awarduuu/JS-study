for (var i = 1; i <= 100; i++) {
    if (i % 5 == 0 && i % 7 != 0) {
        document.write("<p style=color:red;>" + i + "</p>");
    } else if (i % 5 != 0 && i % 7 == 0) {
        document.write("<p style=color:green;>" + i + "</p>");
    } else if (i % 5 == 0 && i % 7 == 0) {
        document.write("<p style=color:aqua;>" + i + "</p>");
    }
}