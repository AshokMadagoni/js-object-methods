// 1.Answer

var a="madagoniashokgoud";
var extract=a.slice(8,13).toUpperCase();
console.log(extract);

// 2.Answer

var a="ashok";
var result=a.toUpperCase();
var length=a.length;
console.log(result);
console.log(length);

// 3.Answer

var a="ashok";
var charat=a.charCodeAt(a.charAt(2));
console.log(charat);

// 4.Answer

var a="     ashok      "
var result=a.trim().slice(2,5);
console.log(result);

// 5.Answer

var a="Ashok";
var b="GouD";
var result=a.concat(b.toLowerCase());
console.log(result);

// 6.Answer

var a="     ashokgoud";
var trim=a.trimStart().slice(2);
console.log(trim);

// 7.Answer

var a="ashokgoud";
var result=a.toLocaleUpperCase().charAt(4)
console.log(result);

// 8.Answer

var a="ashok       ";
var b="goud";
var result=a.trimEnd().concat(b);
console.log(result);

// 9.Answer

var a="        ashokgoud       ";
var result=a.trim().toUpperCase().slice(5).slice(2,5);
console.log(result);

// 10.Answer

var a="AsHok";
var b="GOuD";
var result=a.toLowerCase().concat("  ",b.toLowerCase()).charAt(1)
console.log(result);






