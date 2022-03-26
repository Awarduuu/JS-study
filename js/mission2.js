var val_1 = 1200;
var val_2 = 1300;
var val_3 = 1000;

var val_mean = (1200 + 1300 + 1000) / 3;

var val_4 = prompt("4분기 판매량은?", "0");

var result = val_4 >= val_mean ? "판매량이 평균 이상입니다." : "판매량이 평균 미달입니다.";

document.write(result);