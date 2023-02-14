// Task 1
// let num = 1;
// num += 12;
// num -= 14;
// num *= 5;
// num /= 7;
// num++;
// num--;
// alert(num);

// Task 2
// let a = 10;
// let b = 2;
// alert(a + b);
// alert(a - b);
// alert(a * b);
// alert(a / b);

// Task 3
// let c = 15;
// let d = 2;
// let result = c + d;
// alert(result);

// Task 4
// let a = 10;
// let b = 2;
// let c = 5;
// alert(a + b + c);

// Task 5
// let a = 17;
// let b = 10;
// let c = a - b;
// let d = 7;
// let result = c + d;
// alert(result);

// Task 6
// let str = "Hello World";
// alert(str);

// Task 7
// let str1 = "Hello";
// let str2 = "World";
// alert(str1 + str2);

// Task 8
// let name = "Ivan";
// alert("Hello " + name);

// Task 9
// let age = 19;
// alert("Im " + age + " years old");

// Task 10
// let getName = prompt("Enter your name:");
// if (getName === null) {
//     alert("Incorrect name");
// } else {
//     alert("Hello, " + getName);
// }

// Task 11
// let getNumber = prompt("Enter any number:")
// if (getNumber === null) {
//     alert("Incorrect number")
// } else {
//     alert(getNumber * getNumber);
// }

// Task 12
// let str = "abcde";
// alert(str[0]);
// alert(str[1]);
// alert(str[4]);

// Task 13
// let num = "12345";
// let sum = num[0] * num[1] * num[2] * num[3] * num[4]
// alert(sum);

// Task 14
// let hour = 60 * 60;
// let day = 24 * 60;
// let month = 31 * 60;
// let transferDay = day * 60;
// let transferMonth = month * 60;
// alert("In hour: " + hour + " seconds");
// alert("In day: " + transferDay + " seconds");
// alert("In month: " + transferMonth + " seconds");

// Task 15
// let date = new Date();
// let hours = date.getHours();
// let minutes = date.getMinutes();
// let seconds = date.getSeconds();
// const time = hours + ":" + minutes + ":" + seconds;
// alert(time);

// Task 16
// let number = 123443424643;
// let square = number * number;
// alert(square);

// Task 17
// let num = 47;
// num += 7;
// num -= 18;
// num *= 10;
// num /= 15;
// alert(num);

// Task 18
// let num = 10;
// num++;
// num++;
// num--;
// alert(num);

// < ------- ARRAYS------->

//     Task 19
// let arr = ['Hello, ', 'World', '!'];
// alert(arr[0] + arr[1] + arr[2]);

// Task 20
// let arr = ['Hello, ', 'World', '!']
// let text = arr[0] + arr[1] + arr[2];
// alert(text);

// Task 21
// let arr = ['Hello, ', 'World', '!']
// arr[0] = 'Goodbye, ';
// alert(arr[0] + arr[1] + arr[2]);

// < ------- OBJECTS------->

//     Task 22
// let obj = {
//     'Ivan': '15000$',
//     'Ben': '5000$',
//     'Andrew': '2000$'
// };
// alert(obj['Ivan']);

// Task 23
// let arr = {
//     'ru': ['синий', 'красный', 'зеленый'],
//     'en': ['blue', 'red', 'green']
// };
// alert(arr['ru'][2]);

// Task 24
// let arr = ['a', 'b', 'c'];
// alert(arr);

// Task 25
// let arr = ['a', 'b', 'c'];
// alert(arr[0] + arr[1] + arr[2]);

// Task 26
// let arr = ['a', 'b', 'c', 'd'];
// alert(arr[0] + "+" + arr[1] + ", " + arr[2] + "+" + arr[3]);

// Task 27
// let arr = [2, 5, 3, 9];
// let result = arr[0] * arr[1] + arr[2] * arr[3];
// alert(result);

// Task 28
// let obj = { a: 1, b: 2, c: 3 }
// alert(obj['c']); // sposob kvadrat skobki
// alert(obj.c); // svojstvo objecta

// Task 29
// let obj = {
//     Kolja: '23442$',
//     Vasiok: '4234$',
//     Ivan: '999999$'
// }
// alert(obj.Kolja + obj.Ivan);
// alert(obj['Kolja'] + " " + obj['Ivan']);

// Task 30
// let days = {
//     1: 'Monday',
//     2: 'Tuesday',
//     3: 'Wednesday',
//     4: 'Thursday',
//     5: 'Friday',
//     6: 'Saturday',
//     7: 'Sunday'
// }
// alert('Today is: ' + days['7']);

// Task 31
// let days = {
//     1: 'Monday',
//     2: 'Tuesday',
//     3: 'Wednesday',
//     4: 'Thursday',
//     5: 'Friday',
//     6: 'Saturday',
//     7: 'Sunday'
// }
// let day = 5;
// alert(days[day]);

// Task 31
// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// alert(
//     arr[1][0]
// )

// Task 32
// let arr = {
//     js: ['jQuery', 'Angular '],
//     php: 'Hello,', css: 'World'
// }
// let jQuery = arr['js'] + arr['php'] + arr['css'];
// alert(jQuery)

// Task 33
// let obj = {
//     'ru': [
//         'Понедельник',
//         'Вторник',
//         'Среда',
//         'Четверг',
//         'Пятница',
//         'Суббота',
//         'Воскресенье',
//     ],
//     'en': [
//         'Monday',
//         'Tuesday',
//         'Wednesday',
//         'Thursday',
//         'Friday',
//         'Saturday',
//         'Sunday'
//     ]
// }
// alert(obj['ru'][0] + "/" + obj['en'][2]);

// Task 34
// let obj = {
//     'ru': [
//         'Понедельник',
//         'Вторник',
//         'Среда',
//         'Четверг',
//         'Пятница',
//         'Суббота',
//         'Воскресенье',
//     ],
//     'en': [
//         'Monday',
//         'Tuesday',
//         'Wednesday',
//         'Thursday',
//         'Friday',
//         'Saturday',
//         'Sunday'
//     ]
// }
// let lang = 'ru'
// let day = 2;
// alert(obj[lang][day]);

// Task 35
// let num = 10;
// if (num == 10) {
//     alert('Good');
// } else {
//     alert('Wrong');
// }

// Task 36
// let min = 10;
// if (min >= 0 && min <= 14) {
//     alert('В первую четверть.');
// }
// if (min >= 15 && min <= 30) {
//     alert('Во вторую четверть.');
// }
// if (min >= 31 && min <= 45) {
//     alert('В третью четверть.');
// }
// if (min >= 46 && min <= 59) {
//     alert('В четвертую четверть.');
// }

// Task 37
// let lang = 'ru';
// if (lang == 'ru') {
//     let arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// }
// if (lang == 'en') {
//     arr = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];
// }
// alert(arr);
// let lang = 'ru';
// switch (lang) {
//     case 'ru':
//         let arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
//         break;
//     case 'en':
//         arr = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];
//         break;
// }
// alert(arr);

// Task 38
// let lang = 'ru';
// let arr = {
//     'ru': ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
//     'en': ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'],
// };
// alert(arr[lang]);

// Task 39
// let a = 0;
// if (a == 0) {
//     alert('Good');
// } else {
//     alert('Wrong');
// }

// Task 40
// let a = -3;
// if (a > 0) {
//     alert('Good')
// } else {
//     alert('Wrong')
// }

// Task 41
// let a = 122;
// if (a < 0) {
//     alert('Good')
// } else {
//     alert('Wrong')
// }

// Task 42
// let a = 1;
// if (a >= 0) {
//     alert('Good')
// } else {
//     alert('Wrong')
// }

// Task 43
// let a = 1;
// if (a <= 0) {
//     alert('Good')
// } else {
//     alert('Wrong')
// }

// Task 44
// let a = 1;
// if (a !== 0) {
//     alert('Good')
// } else {
//     alert('Wrong')
// }

// Task 45
// let a = 'Test';
// if (a == 'Test') {
//     alert('Good')
// } else {
//     alert('Wrong')
// }

// Task 46
// let a = '1';
// if (a === '1') {
//     alert('Good')
// } else {
//     alert('Wrong')
// }

// Task 47
// let test = true;
// if (test == true) {
//     alert('True')
// } else if (test == false) {
//     alert('False')
// }
// test == true ? alert('True') : alert('False');

// Task 48
// let test = false;
// if (test !== true) {
//     alert('Good')
// } else {
//     alert('Wrong')
// }
// test !== true ? alert('True') : alert('False');

// Task 49
// let a = -1;
// if (a > 0 && a < 5) {
//     alert('Good')
// } else {
//     alert('Wrong')
// }

// Task 50
// let a = -1;
// if (a == 0 || a == 2) {
//     alert(a + 7);
// } else {
//     alert(a / 10)
// }

// Task 51
// let a = 1;
// let b = 13;
// if (a <= 1 && b >= 3) {
//     alert(a + b);
// } else {
//     alert(a - b);
// }

// Task 52
// let a = 35;
// let b = 23;
// if (a > 2 || a < 11 && b >= 6 || b < 14) {
//     alert('Good')
// } else {
//     alert('Error')
// }

// Task 53
// let arr = ['Winter', 'Summer', 'Autumn', 'Spring'];
// let num = '3';
// let result = arr[num];
// switch (num) {
//     case '1':
//         alert(arr[num])
//         break;
//     case '2':
//         alert(arr[num])
//         break;
//     case '3':
//         alert(arr[num])
//         break;
//     case '4':
//         alert(arr[num])
//         break;
// }

// Task 54
// let day = 23;
// if (day >= 0 && day <= 10) {
//     alert('First');
// }
// if (day >= 11 && day <= 20) {
//     alert('Second')
// }
// if (day >= 21 && day <= 31) {
//     alert('Third')
// }

// Task 55
// let month = 7;
// if (month > 1 && month <= 2) {
//     alert('Winter')
// } else if (month == 12) {
//     alert('Winter')
// }
// if (month >= 3 && month <= 5) {
//     alert('Spring')
// }
// if (month >= 6 && month <= 8) {
//     alert('Summer')
// }
// if (month >= 9 && month <= 11) {
//     alert('Autumn')
// }

// Task 56
// let str = 'abcde';
// if (str[0] == 'a') {
//     alert('Good')
// } else {
//     alert('Wrong')
// }

// Task 57
// let num = '12345'
// if (num[0] == 1) {
//     alert('Good')
// } else {
//     alert('Wrong')
// }

// Task 58
// let str = '342';
// let sum = Number(str[0]) + Number(str[1]) + Number(str[2]);
// alert(sum);

// Task 59
// let str = '112321'
// let sum1 = Number(str[0]) + Number(str[1]) + Number(str[2]);
// let sum2 = Number(str[3]) + Number(str[4]) + Number(str[5]);
// if (sum1 == sum2) {
//     alert('Correct')
// } else {
//     alert('Wrong')
// }

// Task 60
// let i = 1;
// while (i <= 50) {
//     document.write(i + '<br>');
//     i++;
// }
// for (let i = 1; i <= 50; i++) {
//     document.write(i + '<br>')
// }

// Task 61
// let arr = ['1', '2', '3', '4', '5'];
// for (let i = 0; i < arr.length; i++) {
//     document.write(arr[i] + '<br>');
// }

// Task 62
// let result = 1;
// let arr = ['2', '3', '4', '5'];
// for (let i = 0; i < arr.length; i++) {
//     result = result * arr[i];
//     // result *= arr[i];
// }
// alert(result);

// Task 63
// let obj = {
//     'Минск': 'Беларусь',
//     'Москва': 'Россия',
//     'Киев': 'Украина'
// };
// for (let key in obj) {
//     alert(key + ' - is ' + obj[key]);
// }

// Task 64
// let i = 1;
// while (i <= 100) {
//     document.write(i + '<br>');
//     i++;
// }
// for (let i = 1; i <= 100; i++) {
//     document.write(i + '<br>');
// }

// Task 65
// let i = 11;
// while (i <= 33) {
//     document.write(i + '<br>');
//     i++;
// }
// for (let i = 11; i <= 33; i++) {
//     document.write(i + '<br>');
// }

// Task 66
// for (let i = 2; i <= 100; i++) {
//     if (i % 2 == 0) {
//         document.write(i + '<br>');
//     }
// }
// let i = 1;
// while (i <= 100) {
//     if (i % 2 == 0) {
//         document.write(i + '<br>');
//     }
//     i++;
// }

// Task 67
// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//     sum += i;
//     alert(sum);
// }
// let sum = 0;
// let i = 1;
// while (i <= 100) {
//     sum += i;
//     document.write(sum += i);
// }

// Task 68
// let arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
//     document.write(arr[i]);
// }

// Task 69
// let arr = [1, 2, 3, 4, 5];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//     alert(sum);
// }

// Task 70
// let obj = {
//     green: 'зеленый',
//     red: 'красный',
//     blue: 'синий'
// }
// for (let key in obj) {
//     document.write(obj[key] + ' ');
// }

// Task 71
// let obj = {
//     Kolja: '200',
//     Vasiok: '300',
//     Petya: '400'
// }
// for (let key in obj) {
//     document.write(
//         key + ' - зарплата ' + obj[key] + ' долларов' + '<br>'
//     )
// }

// Task 72
// let arr = [2, 5, 9, 15, 0, 4];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 3 && arr[i] < 10) {
//         alert(arr[i]);
//     }
// }

// Task 73
// let arr = [2, 5, 7, -7, 74, -3,];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//         sum += arr[i];
//     }
//     alert(sum);
// }

// Task 74
// let arr = [1, 2, 5, 9, 4, 13, 4, 10];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == 4) {
//         alert('Contains 4');
//         break;
//     }
// }

// Task 75
// let arr = [30, 20, 30, 50, 235, 3000];
// for (let i = 0; i < arr.length; i++) {
//     let num = String(arr[i]);
//     let char = num[0];
//     if (char == 1 || char == 2 || char == 5) {
//         alert('Good')
//     }
// }

// Task 76
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let i = 0; i < arr.length; i++) {
//     document.write(
//         '-' + arr[i]
//     )
// }
// document.write('-');

// Task 77
// let arr = [
//     'Monday',
//     'Tuesday',
//     'Wednesday',
//     'Thursday',
//     'Friday',
//     'Saturday',
//     'Sunday'
// ]
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == 'Saturday' || (arr[i] == 'Sunday')) {
//         arr[i] = '<b>' + arr[i] + '</b>'
//     }
//     document.write(
//         arr[i] + '<br>'
//     )
// }

// Task 78
// let arr = [
//     'Monday',
//     'Tuesday',
//     'Wednesday',
//     'Thursday',
//     'Friday',
//     'Saturday',
//     'Sunday'
// ]
// let date = new Date();
// let day = date.toLocaleString('en-us',
//     { weekday: 'long' }
// );

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == day) {
//         arr[i] = '<b>' + arr[i] + '</b>'
//     }
//     document.write(
//         arr[i] + '<br>'
//     )
// }

// Task 79
// for (let n = 1000, num = 0; n > 50; num++) {
//     n /= 2;
//     alert(n);
// }

// Task 80
// let a = 10;
// let b = 3;
// alert(
//     a % b
// );

// Task 81
// let a = 132411111;
// let b = 2213411111342;
// let res = a % b;
// if (res) {
//     alert(
//         'Good ' + res
//     )
// } else {
//     alert('Wrong')
// }

// Task 82
// let st = Math.pow(2, 3);
// alert(st)

// Task 83
// let a = Math.sqrt(245);
// alert(a)

// Task 84
// let arr = [4, 2, 5, 19, 13, 0, 10];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum += Math.pow(arr[i], 3);
// }
// alert(sum)

// Task 85
// let a = 379;
// let b = Math.sqrt(a);
// alert(
//     a.toPrecision(2)
// )
// alert(
//     a.toPrecision(3)
// )
// alert(
//     a.toPrecision(4)
// )

// Task 86
// let a = Math.sqrt(587);
// let obj = {
//     'floor': 1,
//     'ceil': 2
// }
// let ceil = Math.ceil(a);
// let floor = Math.floor(a);
// for (let key in obj) {
//     obj.floor = floor;
//     obj.ceil = ceil;
// }

// Task 87
// let arr = [4, -2, 5, 19, -130, 0, 10];
// let resMax = Math.max.apply(null, arr);
// let resMin = Math.min.apply(null, arr);
// alert(resMin)

// Task 88
// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// document.write(getRandomInt(1, 100))

// Task 89
// let arr = [];
// for (let i = 0; i < 10; i++) {
//     arr[i] = (Math.random() * (100 - 1 + 1)) + 1
// }
// alert(arr)

// Task 90
// let a = -11;
// let b = -234;
// let sum = Math.abs(a)
// alert(sum)

// Task 90
// let a = -456;
// let b = -2;
// let decrease = Math.abs(a - b);
// let c = decrease;
// alert(c)

// Task 91
// let arr = [12, 15, 20, 25, 59, 79];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }
// alert(sum / arr.length);

// Task 92
// let num = 4;
// let fact = 1;
// for (let i = 1; i < num; i++) {
//     fact *= i;
// }
// alert(fact)

// Task 93
// let str = 'a@@@@aa@bbb@ccc';
// alert(
//     str.replace(/@/g, '!')
// )

// Task 94
// let str = 'aaa bbb ccc';
// alert(str.substr(4, 3));
// alert(str.substring(4, 7));
// alert(str.slice(4, 7));

// 95
// let str = 'js';
// alert(
//     str.toUpperCase()
// )

// Task 96
// let str = 'JS';
// alert(
//     str.toLowerCase()
// )

// Task 97
// let str = 'im learning js';
// alert(str.length)

// Task 98
// let str = 'im learning js';
// alert(
//     str.substr(3, 12)
// )
// alert(
//     str.substring(3, 14)
// )
// alert(
//     str.slice(3, 14)
// )

// Task 99
// let str = 'im learning js';
// alert(
//     str.indexOf('learning')
// )

// Task 100
// let str = 'adsasdfsdfsdgsdgdfgdfg';
// let n = 7;
// let result = str.slice(0, n)  + '...';

// if(str => n){
//     alert(result)
// }

// Task 101
// let str = 'Я-учу-javascript!'
// alert(
//     str.replace(/-/g, '!')
// )

// Task 102
// let str = 'im learning js';
// alert(str.split(' '))

// Task 103
// let str = 'im learning js';
// alert(str.split(''))

// Task 104
// let date = '2022-13-6';
// let split = date.split('-');
// alert(split[0] + '.' + split[1] + '.' + split[2]);

// Task 105
// let arr = ['я', 'учу', 'javascript', '!'];
// let str = arr.join('+');
// alert(str)

// Task 106
// let str = "fsadfasdf";
// alert(
//     str[0].toUpperCase()
// )

// Task 107
// let str = 'sdfgdfgsdg';
// let str2 = 'mhjkghjkhj';
// let str3 = 'wrtyrtyry';
// alert(str.replace('s', 'S'));
// alert(str2.replace('m', 'M'));
// alert(str3.replace('w', 'W'));

// Task 108
// let str = 'var_test_text';
// let res = str.split('_');
// for(let i = 0; i < res.length; i++){
//     res[i] = res[i].slice(0, 1).toUpperCase() + res.slice(1);

// };

// let new1 = res.join('');
// alert(new1)

// Task 109
// let a = [1, 2, 3];
// let b =  [4, 5, 6];
// alert(
//     a.concat(b)
// )

// Task 110
// let a = [1, 2, 3];
// alert(
//     a.reverse()
// )

// Task 111
// let arr = [1, 2, 3];
// arr.push(4, 5, 6);
// alert(arr);

// Task 112
// let arr = [1, 2, 3];
// arr.unshift(4, 5, 6);
// alert(arr)

// Task 113
// let arr = ['js', 'css', 'jq'];
// let get = arr.shift();
// alert(get)

// Task 114
// let arr = ['js', 'css', 'jq'];
// let get = arr.pop();
// alert(get)

// Task 115
// let arr = [1, 2, 3, 4, 5];
// let be = arr.slice(0, 3);
// alert(be)

// Task 116
// let arr = [1, 2, 3, 4, 5];
// let be = arr.slice(2, 5);
// alert(be)

// Task 117
// let arr = [1, 2, 3, 4, 5];
// arr.splice(1, 2);
// alert(arr)

// Task 118
// let arr = [1, 2, 3, 4, 5];
// arr.splice(1, 3);
// alert(arr)

// Task 119
// let arr = [3, 4, 1, 2, 7];
// arr.sort();
// alert(arr)

// Task 120
// let obj = { js: 'test', jq: 'hello', css: 'world' }
// alert(Object.keys(obj))

// Task 121
// let str = 'dfgdfgdf';
// str = str[0].toUpperCase() + str.substring(1);
// alert(str);

// Task 122
// let str = 'dfgsdfg';
// str = str.split('');
// str[0] = str[0].toUpperCase();
// let result = str.join('')
// alert(result)

// Task 123
// let str = "123456";
// let res = str.split('').reverse().join('');
// alert(
//     res
// )

// Task 124
// let str = 'http://google.com';
// if(str.substring(0, 7) ==  'http://'){
//     alert(str)
// } else{
//     alert('No http://')
// }

// Task 125
// let str = 'dog.html';
// if(str.substr(-5) == '.html'){
//     alert('good');
// } else{
//     alert('wr')
// }

// Task 126
// function cube(num) {
//     return num * num * num
// }
// alert(cube(11))

// Task 127
// function sum(num, num2) {
//     return num + num2
// }
// alert(sum(11,323))

// Task 128
// function sum(num, num2, num3) {
//     return (num - num2) / num3;
// }
// alert(sum(11, 22, 1))

// Task 129
// function getDay(num) {
//     if (num == 1) {
//         alert('Monday')
//     }
//     if (num == 2) {
//         alert('Tuesday')
//     }
//     if (num == 3) {
//         alert('Wednesday')
//     }
//     if (num == 4) {
//         alert('Thursday')
//     }
//     if (num == 5) {
//         alert('Friday')
//     }
//     if (num == 6) {
//         alert('Saturday')
//     }
//     if (num == 7) {
//         alert('Sunday')
//     }
// }
// getDay(7)

// Task 130
// let arr = [1, 2, 3, 4, 5];
// let flag = false;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == 5) {
//         flag = true;
//         break;
//     }
// }
// if (flag === true) {
//     alert('Есть');
// } else {
//     alert('Нет');
// }

// Task 131
// let number = 31;
// let flag = false;
// for(let i = 2; i < number; i++){
//     if(number % i == 0){
//         flag = true;
//         break;
//     }
// }
// if(flag === true){
//     alert('Go')
// } else{
//     alert('Error')
// }

// Task 132
// let arr = [1, 2, 3, 4, 5, 6, 7];
// let flag = false;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == arr[i - 1]) {
//         flag = true;
//         break;
//     }
// }
// if (flag === true) {
//     alert('Есть')
// } else {
//     alert('Нет')
// }

// Task 133
// function go(num1, num2){
//     let flag = false;
//     if(num1 == num2){
//         flag = true;
//     }
//     if(flag == true){
//         alert(flag)
//     } else{
//         alert(flag)
//     }
// }
// go(11,11)

// Task 134
// function go(num1, num2){
//     let flag = false;
//     if(num1 + num2 >= 10){
//         flag = true;
//     }
//     if(flag == true){
//         alert(flag)
//     } else{
//         alert(flag)
//     }
// }
// go(1,9)

// Task 135
// function go(num1){
//     let flag = false;
//     if(num1 < 0){
//         flag = true;
//     }
//     if(flag == true){
//         alert(flag)
//     } else{
//         alert(flag)
//     }
// }
// go(-1)

// Task 136
// let str = '';
// for (let i = 1; i <= 9; i++) {
//     str = str + i;
//     alert(str);
// }

// Task 137
// let str = '';
// for (let i = 1; i <= 10; i++) {
//     str = str + 'x'
// }
// alert(str);

// Task 138
// let str = '';
// for (let i = 1; i <= 9; i++) {
//     str = str + i;
// }
// let strSpl = str.split('');
// strSpl.reverse();
// let strJ = strSpl.join('');
// alert(strJ)

// Task 139
// let str = ''
// for(let i = 1; i <= 9; i++){
//     str = str + i + '-';
// }
// alert(str)

// Task 140
// let str = '';
// for(let i = 1; i <= 20; i++){
//     str = str + 'x';
//     document.write(str + '<br>')
// }

// Task 141
// for (let i = 1; i <= 9; i++) {
//     for (let j = 1; j <= i; j++) {
//         document.write(i);
//     }
//     document.write('<br >')
// }

// Task 142
// let str = '';
// for(let i = 1; i <= 10; i++){
//     str = str + 'xx';
//     document.write(str + '<br>')
// }

// Task 143
// let arr = [];
// let str = '';
// for (let i = 1; i <= 10; i++) {
//     arr.push(str);
//     str += 'x';
// }
// document.write(arr)

// Task 144
// let arr = [];
// for(let i = 1; i < 10; i++){
//     let str = '';
//     for(let j = 0; j < i; j++){
//         str += i;
//     }
//     arr.push(str);
// }
// document.write(arr);

// Task 145
// function arrayFill(word, num) {
//     let arr = [];
//     for (let i = 0; i <= num; i++) {
//         arr.push(word);
//     }
//     return arr;
// }

// document.write(arrayFill('b', 111));

// Task 146
// function go(arr){
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++){
//         sum += arr[i];
//         if(sum > 10){
//             return i + 1
//         }
//     }
// }
// console.log(go([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// Task 147
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let res = [];
// for(let i = arr.length; i >= 1; i--){
//     res.push(i)
// }
// alert(res)

// Task 148
// let arr = [[1, 2, 3], [4, 5], [6]];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         sum += arr[i][j];
//     }
// }
// alert(sum);

// Task 149
// let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         for (let k = 0; k < arr[j].length; k++) {
//             sum += arr[i][j][k];
//         }
//     }
// }
// alert(sum)

// Task 150
// let arr = [1, 2, 3, -1, -2, -3];
// let res = [];
// function isPositive(num) {
//     if (num > 0) {
//         return true;
//     } else {
//         return false;
//     }
// }
// for (let i = 0; i <= arr.length; i++) {
//     if (isPositive(arr[i])){
//         res.push(arr[i]);
//     }
// }
// alert(res)

// Task 151
// function isNumberInRange(num){
//     if(num > 0 && num < 10){
//         return true;
//     } else{
//         return false;
//     }
// }
// alert(isNumberInRange(1))

// Task 152
// function isNumberInRange(num){
//     if(num > 0 && num < 10){
//         return true;
//     } else{
//         return false;
//     }
// }
// let arr = [223, 41, 3, 65, 3, 7, 9, 0];
// let res = [];
// for(let i = 0; i < 10; i++){
//     if(isNumberInRange(arr[i])){
//         res.push(arr[i]);
//     }

// }
// document.write(res)

// Task 153
// function getDigitsSum(digit){
//     return digit + digit;
// }
// alert(getDigitsSum(411))

// Task 154
// function getDigitsSum(digit) {
//     let result = String(digit);
//     let digitSum = 0;
//     for(let i = 0; i < result.length; i++){
//         digitSum += Number(result[i]);
//     }
//     return digitSum;
// }
// let result = [];
// for (let i = 1; i <= 2023; i++) {
//     if (getDigitsSum(i) == 13) {
//         result.push(i)
//     }
// }
// document.write(result);

// Task 155
// function isEven(number){
//     if(number % 2 == 0){
//         alert('Even');
//     } else{
//         alert('Odd')
//     }
// }
// isEven(12);

// Task 156
// function isEven(number) {
//     return number % 2 == 0;
// }
// let arr = [23, 42, 4, 34, 432, 4, 560, 6, 1, 789, 6, 2, 4];
// let result = [];
// for (let i = 0; i < arr.length; i++) {
//     if (isEven(arr[i])) {
//         result.push(arr[i])
//     }
// }
// document.write(result)

// Task 157
// function getDivisors(num){
//     let result = [];
//     for(let i = 1; i < num; i++){
//         if(num % i == 0){
//             result.push(i)
//         }
//     }
//     return result;
// }
// document.write(getDivisors(1000));

// Task 158
// function ucfirst(str){
//     return str[0].toUpperCase() + str.substr(1, str.length)
// }
// alert(ucfirst('fsddf'));

// Task 159
// function ucfirst(str) {
//     return str[0].toUpperCase() + str.substr(1, str.length)
// }
// let str = 'var_text_hello';
// let arr = str.split('_');
// for (let i = 1; i < arr.length; i++) {
//     arr[i] = ucfirst(arr[i]);
// }
// str = arr.join('');
// alert(str);

// Task 160
// function inArray(text, arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (text === arr[i]) {
//             return true;
//         } else {

//         };
//     } return false;
// }
// alert(
//     inArray('fghsfgh', ['Go', 'Good', 'Bad', 'abc', 'ab'])
// )

// Task 161
// let str = '123456';
// let arr = str.split('');
// for(let i = 0; i < arr.length; i++){
//     if(i % 2 !== 0){
//         let b = arr[i - 1]
//         arr[i - 1] = arr[i]
//         arr[i] = b;
//     }
// }
// str = arr.join('');
// alert(str)

// Task 162
// let arr = [2, 4, 4, 4, 67, 3, 7,];
// function doIt() {
//     document.write(arr[0] + '<br>')
//     arr.shift()
//     if (arr.length > 0) {
//         doIt(arr)
//     }
// }
// doIt()

// Task 163
// function calc(num) {
//     let result = (num + '').split('').map(function (item) {
//         return item * 1;
//     }).reduce(function (sum, item) {
//         return sum + item;
//     });
//     num = result;
//     if (result > 9) {
//         return calc(num);
//     }
// }
// alert(calc(2))

// Task 164
// for (let i = 1; i <= 100; i++) {
//     document.write(i + '<br>')
// }

// Task 165
// for (let i = 100; i > 0; i--) {
//     document.write(i + '<br>')
// }

// Task 166
// for(let i = 1; i <= 100; i++){
//     if(i % 2 == 0){y
//         document.write(i + '<br>')
//     }
// }

// Task 167
// let arr = [];
// for(let i = 0; i < 10; i++){
//     arr[i] = 'x'

// }
// document.write(arr);

// Task 168
// let arr = [];
// for(let i = 1; i <= 10; i++){
//     arr.push(i)
// }
// document.write(arr)

// Task 169
// let arr = [];
// for (let i = 0; i < 10; i++) {
//     arr.push(
//         Math.random().toFixed(2)
//     )
// }
// alert(arr)

// Task 170
// let arr = []
// for (let i = 0; i <= 10; i++) {
//     arr[i] = (Math.round(Math.random() * 10) + 1);
// }
// document.write(arr)

// Task 171
// let arr = [7,4,4,5,9,5,4,11,5,11,6];
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] > 0 && arr[i] < 10){
//         document.write(arr[i] + '<br>')
//     }
// }

// Task 172
// let arr = [7, 4, 4, 5, 9, 5, 4, 11, 5, 11, 6];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == 5) {
//         document.write('true')
//         break;
//     }
// }

// Task 173
// let arr = [7, 4, 4, 5, 9, 5, 4, 11, 5, 11, 6];
// let sum = 0;
// for(let i = 0; i < arr.length; i++){
//     sum += arr[i];
// }
// alert(sum)

// Task 174
// let arr = [7, 4, 4, 5, 9, 5, 4, 11, 5, 11, 6];
// let sum = 0;
// for(let i = 0; i < arr.length; i++){
//     sum += arr[i] * arr[i]
// }
// alert(sum)

// Task 175
// let arr = [2, 4, 4, 5, 9, 5, 4, 11, 5, 11, 6];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//     result = sum / arr.length;
// }
// alert(result)

// ------------DOM--------------

// Task 176
// let button = document.querySelector('.btn');
// button.onclick = go;
// function go(){
//     alert('Go')
// }

// Task 177
// let btn = document.querySelector('. btn');
// btn.onmouseover = go;
// function go(){
//     alert('hoooo')
// }

// Task 178
// let btn = document.querySelector('.btn');
// btn.ondblclick = go;
// function go(){
//     alert('aaa');
// }

// Task 179
// let block = document.querySelector('.block');
// block.onmouseout = go;
// function go(){
//     alert('Go')
// }

// Task 180
// let btn = document.querySelector('.click');
// let inp = document.querySelector('.input');
// btn.onclick = func;
// function func(){
//     alert(inp.value)
// }

// Task 181
// let btn = document.querySelector('.click');
// let inp = document.querySelector('.input');
// btn.onclick = func;
// function func(){
//     inp.value = '343423';
// }

// Task 182
// let btn = document.querySelector('.click');
// let imageMain = document.querySelector('.imageMain');
// let imageSec = document.querySelector('.imageSec');
// btn.onclick = func;
// function func() {
//     imageMain.classList.add('hide');
//     imageSec.classList.remove('hide');
// }

// Task 183
// let inp = document.querySelector('.input');
// inp.onclick = func;
// function func() {
//     alert(inp.value)
// }

// ------- ADVANCED ---------

// Task 1
// Создайте переменную a.Запишите в нее сумму чисел 1, 2 и 3. С помощью функции alert выведите на экран содержимое переменной a.
// let a = 1 + 2 + 3
// alert(a)

// Task 2
// Создайте переменную a со значением 10 и переменную b со значением 2. Выведите на экран их сумму, разность, произведение и частное(результат деления).
// let a = 10,
//     b = 2
// alert(a + b)
// alert(a - b)
// alert(a * b)
// alert(a / b)

// Task 3
// Создайте переменную c со значением 10 и переменную d со значением 5. Просуммируйте их, а результат присвойте переменной result.Выведите на экран значение переменной result.
// let c = 10,
//     d = 5,
//     result = c + d
// document.write(result)

// Task 4
// Создайте переменную a со значением 1, переменную b со значением 2 и переменную c со значением 3. Выведите на экран их сумму.
// let a = 1,
//     b = 2,
//     c = 3
// document.write(a + b + c)

// Task 5
// Создайте переменную a со значением 10 и переменную b со значением 5. Отнимите от a переменную b и результат присвойте переменной c.
// Затем создайте переменную d, присвойте ей значение 7. Сложите переменные c и d, а результат запишите в переменную result.Выведите на экран значение переменной result.
// let a = 10,
//     b = 5,
//     c = a - b,
//     d = 7,
//     result = c + d
// document.write(result)

// Task 6
// Запишите в переменную a число 1.5, а в переменную b - число 0.75.Найдите сумму значений этих переменных и выведите ее на экран.
// let a = 1.5,
//     b = 0.75
// document.write(a + b)

// Task 7
// Создайте переменную a, запишите в нее какое - нибудь положительное или отрицательное число.Выведите на экран это число с обратным знаком.
// let a = -12
// a < 0 ? alert(+a) : ''
// a > 0 ? alert(-a) : ''

// Task 8
// Найдите остаток от деления следующих переменных:
// let a = 13,
//     b = 5
// alert(a % b)

// Task 9
// Возведите число 2 в 10 - ю степень.Выведите результат на экран.
//     alert(2 ** 10)

// Task 10
// Создайте переменную с текстом 'java' и переменную с текстом 'script'.С помощью этих переменных и операции сложения строк выведите на экран строку 'javascript'.
// let str = 'java',
//     str2 = 'script'
// alert(str + str2)

// Task 11
// Запишите в переменную какую - нибудь строку.Выведите на экран длину вашей строки.
// let str = '1132134235vwdfdsftgdfgdgvtrtewbertb'
// alert(str.length)

// Task 12
// Сделайте константу PI и с ее помощью вычислите длину какой - нибудь окружности по ее радиусу.
// const PI = 3.14,
//     I = PI * 23
// alert(I)

// Task 13
// Дана переменная a со значением '10' и переменная b со значением '20'.Сложите данные переменные как числа.
// let a = '10',
//     b = '20'
// alert(Number(a) + Number(b))

// Task 14
// С помощью описанного приема с плюсом исправьте приведенный код так, чтобы в переменные a и b присваивалось число, а не строка, ну и результатом, соответственно, было не '23', а 5.
// let a = '2';
// let b = '3';
// alert(a + b);
// alert(Number(a) + Number(b))

// Task 15
// Дана переменная со значением '5px' и переменная со значением '6px'.Найдите сумму пикселей из значений этих переменных и выведите ее на экран.
// let a = '5px',
//     b = '6px'
// alert(parseInt(a) + parseInt(b))

// Task 16
// Дана переменная со значением '5.5px' и переменная со значением '6.25px'.Найдите сумму пикселей из значений этих переменных и выведите ее на экран.
// let a = '5.5px',
//     b = '6.25px'
// alert(parseFloat(a) + parseFloat(b) + 'px')

// Task 17
// Даны две переменные с числами. Сложите значения этих переменных как строки и выведите результат на экран.
// let a = 1,
//     b = 344
// alert(String(a) + String(b))

// Task 18
// Дана переменная с числом. Найдите количество цифр в этом числе.
// let a = 2838922567652141
// alert(String(a).length)

// Task 19
// Даны две переменные с числами. Найдите количество цифр в одном и во втором числе, результаты сложите и выведите на экран.
// let a = 2342,
//     b = 3523
// alert(String(a).length + String(b).length)

// Task 20
// Дана строка 'abcde'. Обращаясь к отдельным символам этой строки выведите на экран символ 'a', символ 'c', символ 'e'.
// let str = 'abcde'
// alert(str[0] + ',' + str[2] + ',' + str[4])

// Task 21
// Дана переменная со строкой 'abcde'. Обращаясь к отдельным символам этой строки запишите в новую переменную символы этой строки в обратном порядке, то есть 'edcba'.
// let str = 'abcde'
// alert(str[4]+str[3]+str[2]+str[1]+str[0])

// Task 22
// Дана переменная str со строкой 'abcde' и переменная num с номером символа. Выведите на экран символ, номер которого хранится в переменной num.
// let str = 'abcde'
//     num = 4
// alert(str[num])

// Task 23
// Дана строка. Выведите на экран ее последний символ.
// let str = '2341235sdfager'
// alert(str[str.length - 3])

// Task 24
// Дана строка '12345'. Найдите сумму цифр этой строки.
// let str = '12345'
// alert(Number(str[0]) + Number(str[1]) + Number(str[2]) + Number(str[3]) + Number(str[4]) + Number(str[5]))

// Task 25
// Дано число 12345. Найдите сумму цифр этого числа.
// let str = String(12345);
// alert(Number(str[0]) + Number(str[1]) + Number(str[2]) + Number(str[3]) + Number(str[4]));

// Task 26
// Дано число 12345. Найдите произведение цифр этого числа.
// let num = String(12345);
// alert(Number(num[0]) * Number(num[1]) * Number(num[2]) * Number(num[3]) * Number(num[4]))

// Task 27
// Дано число 12345. Переставьте цифры этого числа в обратном порядке.
// let str = String(12345)
// alert(str[4] + str[3] + str[2] + str[1] + str[0])

// Task 28
// Переделайте этот код так, чтобы в нем использовались описанные сокращенные операции:
// let num = 47;
// num += 7;
// num -= 18;
// num *= 10;
// num /= 15;
// alert(num);

// Task 29
// Спросите возраст пользователя с помощью функции prompt. Выведите с помощью alert введенный пользователем возраст.
// alert('Ваше имя: ' + prompt('Введите имя:'));

// Task 30
// Переделайте приведенный выше код так, чтобы суммировались числа, а не строки.
// let num1 = prompt('Введите первое число');
// let num2 = prompt('Введите второе число');
// alert(Number(num1) + Number(num2));

// Task 31
// С помощью функции prompt спросите у пользователя сторону квадрата. Выведите на экран площадь введенного квадрата.
// let num1 = prompt('Введите число');
// alert(Number(num1) * Number(num1))

// Task 32
// С помощью двух функций prompt спросите у пользователя стороны прямоугольника. Выведите на экран периметр введенного прямоугольника.
// let num1 = prompt('Число 1:'),
//     num2 = prompt('Число 2:'),
//     num3 = prompt('Число 3:'),
//     num4 = prompt('Число 4:')
// alert(Number(num1) + Number(num2) + Number(num3) + Number(num4))

// Task 33
// Узнайте длину следующего массива:
// let arr = [];
// arr[3] = 'a';
// arr[8] = 'b';
// alert(arr.length)

// Task 34
// Заполните массив числами 1, 2 и 3.
// let arr = [];
// arr.push(1)
// arr.push(2)
// arr.push(3)
// alert(arr)

// Task 35
// Пусть дан такой массив, Добавьте ему в конец элементы 4 и 5.
// let arr = [1, 2, 3];
// arr.push(4)
// arr.push(5)
// alert(arr)

// Task 36
// Найдите сумму элементов, ключи которых хранятся в наших переменных.
// let arr = [1, 2, 3, 4, 5];
// let key1 = 1;
// let key2 = 2;
// alert(arr[key1] + arr[key2])

// Task 37
// Удалите из него два элемента. Проверьте, какое станет значение свойства length после этого.
// let arr = ['a', 'b', 'c', 'd', 'e'];
// delete arr[4]
// delete arr[0]
// alert(arr.length - 1)

// Task 38
// Создайте объект с ключами от 1 до 7, в качестве значений содержащий имена дней недели. Выведите на экран все его элементы.
// let obj = {
//     1: 'Monday',
//     2: 'Tuesday',
//     3: 'Wednesday',
//     4: 'Thursday',
//     5: 'Friday',
//     6: 'Saturday',
//     7: 'Sunday'
// }
// alert(obj[1] + obj[2] + obj[3] + obj[4] + obj[5] + obj[6] + obj[7])

// Task 39
// Создайте объект с ключами от 1 до 12, в качестве значений содержащий названия месяцев. Выведите этот объект в консоль.
// let obj = {
//     1: 'January',
//     2: 'February',
//     3: 'March',
//     4: 'April',
//     5: 'May',
//     6: 'June',
//     7: 'July',
//     8: 'August',
//     9: 'September',
//     10: 'November',
//     11: 'October',
//     12: 'December'
// }
// console.log(obj)

// Task 40
// Создайте объект user с ключами 'name', 'surname', 'patronymic' и какими-то произвольными значениями. Выведите на экран фамилию, имя и отчество через пробел.
// let obj = {
//     'name': 'Ivan',
//     'surname': 'Me',
//     'patronymic': 'none'
// }
// console.log(obj['surname'] + ' ' + obj['name'] + ' ' +  obj['patronymic'])

// Task 41
// Создайте объект date с ключами 'year', 'month' и 'day' и значениями, соответствующими текущему дню. Выведите созданную дату на экран в формате год-месяц-день.
// let date = {
//     year: 2023,
//     month: 02,
//     day: 02
// }
// console.log(date.year + '-' + date.month + '-' + date.day)

// Task 42
// Возведите в квадрат каждый элемент этого объекта.
// let obj = {x: 1, y: 2, z: 3};
// console.log('' + (obj.x * obj.x) + (obj.y * obj.y) + (obj.z * obj.z))

// Task 43
// Создайте пустой объект, а затем заполните его значениями.
// let obj = {}
// obj['first'] = 123
// obj['seconds'] = 321
// obj['third'] = 456
// obj.a = 'hi'
// obj.b = 'qq'
// obj.c = 'aaa'
// console.log(obj)

// Task 45
// Получите массив ключей следующего объекта
// let obj = {x: 1, y: 2, z: 3};
// console.log(Object.keys(obj))

// Task 46
// Найдите количество элементов в следующем объекте:
// let obj = {x: 1, y: 2, z: 3};
// console.log(Object.keys(obj).length)

// Task 47
// Дана переменная key, в которой хранится один из ключей нашего объекта. Выведите с помощью этой переменной соответствующий элемент объекта.
// let obj = {x: 1, y: 2, z: 3};
// let key = 'z'
// console.log(obj[key])

// Task 48
// В следующем коде ключ должен был взяться из переменной. Исправьте допущенную ошибку:
// let key = 'x';
// let obj = {
// 	[key]: 1,
// 	y: 2,
// 	z: 3
// };

// Task 49
// Найдите сумму четных чисел от 2 до 100.
// let sum = 0;
// for(let i = 1; i <= 100; i++){
// 	i % 2 === 0 ? sum += i : '';
// }
// console.log(sum);

// Task 50
// Найдите сумму нечетных чисел от 1 до 99.
// let sum = 0;
// for(let i = 1; i <= 99; i++){
// 	i % 2 === 1 ? sum += i : ''
// }
// console.log(sum)

// Task 51
// Найдите произведение целых чисел от 1 до 20.
// let sum = 0;
// for (let i = 1; i <= 20; i++) {
// 	sum += i
// }
// alert(sum)

// Task 52
// Найдите сумму элементов этого массива.
// let sum = 0;
// let arr = [2, 5, 9, 3, 1, 4];
// for (let i = 0; i < arr.length; i++) {
// 	sum += arr[i]
// }
// alert(sum)

// Task 53
// Найдите сумму элементов элементов, являющихся четными числами.
// let arr = [2, 5, 9, 3, 1, 4];
// let sum = 0;
// for (let i = 0; i < arr.length; i++){
// 	arr[i] % 2 === 0 ? sum += arr[i] : ''
// }
// alert(sum)

// Task 54
// Найдите сумму квадратов элементов этого массива.
// let arr = [2, 5, 9, 3, 1, 4];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
// 	let str = arr[i] * arr[i]
// 	sum += str
// }
// alert(sum)

// Task 55
// Найдите произведение элементов этого массива.
// let arr = [2, 5, 9, 3, 1, 4];
// let sum = 1;
// for (let i = 0; i < arr.length; i++) {
// 	sum *= arr[i]
// }
// console.log(sum)

// Task 56
// Выведите с помощью цикла столбец чисел от 1 до 100.
// for(let i = 1; i <= 100; i++){
//     console.log(i)
// }

// Task 57
// Выведите с помощью цикла столбец чисел от 100 до 1.
// for(let i = 100; i >= 1; i--){
//     console.log(i)
// }

// Task 58
// Выведите с помощью цикла столбец четных чисел от 1 до 100.
// for(let i = 1; i <= 100; i++){
//     i % 2 === 0 ? console.log(i) : ''
// }

// Task 59
// Заполните массив 10-ю иксами с помощью цикла.
// let arr = []
// for(let i = 0; i < 10; i++){
//     arr.push('x')
// }
// console.log(arr)

// Task 60
// Заполните массив числами от 1 до 10 с помощью цикла.
// let arr = []
// for(let i = 1; i <= 10; i++){
//     arr.push(i)
// }
// console.log(arr)

// Task 61
// Дан массив с числами. С помощью цикла выведите только те элементы массива, которые больше нуля и меньше 10-ти.
// let arr = [-2, 4, 6, -15, 346, 34, 62, 7, -4]
// for (let i = 0; i < arr.length; i++) {
//     arr[i] > 0 && arr[i] < 10 ? console.log(arr[i]) : ''
// }

// Task 62
// Дан массив с числами. С помощью цикла проверьте, что в нем есть элемент со значением 5
// let arr = [-2, 4, 6, -15, 346, 34, 62, 7, -5]
// for (let i = 0; i < arr.length; i++){
//     arr[i] === 5 || arr[i] === -5  ? console.log(arr[i]) : ''
// }

// Task 63
// Дан массив с числами. С помощью цикла найдите сумму элементов этого массива.
// let arr = [-2, 4, 6, -15, 346, 34, 62, 7, -5]
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i]
// }
// console.log(sum)

// Task 64
// Дан массив с числами. С помощью цикла найдите сумму квадратов элементов этого массива.
// let arr = [-2, 4, 6, -15, 346, 34, 62, 7, -5]
// let sum = 0;
// for (let i = 0; i < arr.length; i++){
//     let sqr = arr[i] * arr[i]
//     sum += sqr
// }
// console.log(sum)

// Task 65
// Дан массив с числами. Найдите среднее арифметическое его элементов
// let arr = [5, 5, 2, 4, 6, 10, 6, 10]
// let res = 0;
// let sum = 0;
// for(let i = 0; i < arr.length; i++){
//     sum += arr[i]
//     res = sum / arr.length
// }
// console.log(res)

// Task 66
// Напишите скрипт, который будет находить факториал числа. Факториал - это произведение всех целых чисел от единицы до заданного числа
// let num = 10;
// let fact = 1;
// for(let i = 1; i <= num; i++){
//     fact *= i
// }
// console.log(fact)

// Task 67
// Заполните массив числами от 10 до 1 с помощью цикла
// let arr = []
// for(let i = 10; i >= 1; i--){
//     arr.push(i)
// }
// console.log(arr)

// Task 68
// Дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму положительных элементов массива
// let arr = [2, 4, 1, 6, , -5, 7, -52, -8, -9]
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     arr[i] > 0 ? sum += arr[i] : ''
// }
// console.log(sum)

// Task 69
// Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5
// let arr = [10, 20, 30, 50, 235, 3000];
// for (let i = 0; i < arr.length; i++) {
//     let num = String(arr[i])
//     let char = num[0]
//     if(char ==1 || char == 2 || char == 5){
//         console.log(num)
//     }
// }
// console.log()

// Task 70
// Дан массив с числами. Выведите элементы этого массива в обратном порядке.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// arr.reverse()
// console.log(arr)

// Task 71
// Дан массив с числами. С помощью цикла выведите на экран все элементы, значение которых совпадает с их порядковым номером в массиве.
// let arr = [3, 2, 6, 4, 5, 6, 7, 8]
// for (let i = 0; i < arr.length; i++) {
//     arr[i] == i + 1 ? console.log(arr[i]) : ''
// }

// Task 72
// Дан массив с числами. С помощью цикла for и функции document.write выведите каждый элемент массива с новой строки. Используйте для этого тег br.
// let arr = [3, 2, 6, 4, 5, 6, 7, 8]
// for(let i = 0; i < arr.length; i++){
//     document.write(arr[i] + '<br>')
// }

// Task 73
// Дан массив с числами. С помощью цикла for и функции document.write выведите каждый элемент массива в отдельном абзаце.
// let arr = [3, 2, 6, 4, 5, 6, 7, 8]
// for(let i = 0; i < arr.length; i++){
//     document.write(arr[i] + '<br>')
// }

// Task 74
// Составьте массив дней недели. С помощью цикла for выведите все дни недели, а выходные дни выведите жирным.
// let arr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
// for (let i = 0; i < arr.length; i++) {
//     arr[4] += '<b>'
// }
// document.write(arr)

// Task 75
// Составьте массив дней недели. С помощью цикла for выведите все дни недели, а текущий день выведите курсивом. Номер текущего дня должен храниться в переменной day.
// let arr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
// for (let i = 0; i < arr.length; i++) {
//     let date = new Date();
//     let day = date.getDay();
//     document.write(arr[day] + <br>)
// }

// Task 76
// Увеличьте зарплату каждого работника на 10%.
// let obj = {
// 	employee1: 100,
// 	employee2: 200,
// 	employee3: 300,
// 	employee4: 400,
// 	employee5: 500,
// 	employee6: 600,
// 	employee7: 700,
// };
// for(let key in obj){
//     console.log(obj[key] += obj[key] *= 0.100)
// }

// Task 78
// Модифицируйте предыдущую задачу так, чтобы зарплата увеличивалась только тем работникам, у которых она меньше или равна 400.
// let obj = {
// 	employee1: 100,
// 	employee2: 200,
// 	employee3: 300,
// 	employee4: 400,
// 	employee5: 500,
// 	employee6: 600,
// 	employee7: 700,
// };
// for(let key in obj){
//     if(obj[key] <= 400){
//         console.log(obj[key] += obj[key] *= 0.100)
//     }
// }

// Task 79
// С помощью этих массивов создайте новый объект, сделав его ключами элементы первого массива, а значениями - элементы второго.
// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [6, 7, 8, 9, 10];
// let obj = {}
// for (let i = 0; i < arr1.length; i++) {
//     obj[arr1[i]] = arr2[i]
// }
// console.log(obj)

// Task 80
// Найдите сумму ключей этого объекта и поделите ее на сумму значений.
// let obj = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10};
// let sumKey = 0;
// let sumElem = 0
// let res = 0;
// for(let key in obj){
//     sumKey += Number(key)
//     sumElem += obj[key]
//     res = sumKey / sumElem
// }
// console.log(res)

// Task 81
// Запишите ключи этого объекта в один массив, а значения - в другой.
// let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
// let keyArr = []
// let valArr = []
// for(let key in obj){
//     keyArr.push(key)
//     valArr.push(obj[key])
// }
// console.log(keyArr + ' - ' + valArr)

// Task 82
// Запишите в новый массив элементы, значение которых начинается с цифры 1 или цифры 2. То есть у вас в результате получится вот такой массив: [125,225,128,145,281]
// let obj = {
//   1: 125,
//   2: 225,
//   3: 128,
//   4: 356,
//   5: 145,
//   6: 281,
//   7: 452,
// };
// let arr = [];
// for(let key in obj){
//     let objVal = String(obj[key])
//     if(objVal[0] == '1' || objVal[0] == '2'){
//         arr.push(Number(objVal))
//     }
// }
// console.log(arr)

// Task 83
// Выведите с его помощью элементы с текстом 'l', 'e', 'g' и 'a'.
// let arr = [
// 	['a', 'b', 'c'],
// 	['d', 'e', 'f'],
// 	['g', 'h', 'i'],
// 	['j', 'k', 'l'],
// ];
// console.log(arr[3][2] + arr[1][1] + arr[2][0] + arr[0][0])

// Task 84
// Обращаясь к каждому элементу массива найдите сумму всех его элементов.
// let arr = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];
// arr = arr.flat(Infinity);
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// console.log(sum);

// Task 85
// Обращаясь к каждому элементу массива найдите сумму всех его элементов.
// let arr = [
//   [
//     [1, 2],
//     [3, 4],
//   ],
//   [
//     [5, 6],
//     [7, 8],
//   ],
// ];
// arr = arr.flat(Infinity);
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// console.log(sum)

// Task 86
// let arr = [['a', 'b', [1, 2, 3], [4, 5]], ['d', ['e', 'f']]];
// arr = arr.flat(Infinity)
// console.log(arr)

// Task 87
// Вручную, без цикла, найдите сумму элементов этого массива.
// let arr = [
//   [1, 2, 3, [4, 5, [6, 7]]],[8, [9, 10]],
// ];
// arr = arr.flat(Infinity)
// let sum = arr[0] + arr[1] + arr[2] + arr[3] + arr[4] + arr[5] + arr[6] + arr[7] + arr[8] + arr[9]
// console.log(sum)

// Task 88
// С помощью вложенных циклов найдите сумму элементов этого массива.
// let arr = [[1, 2, 3], [4, 5], [6]];
// let sum = 0
// for (let subArr of arr) {
//     for(let elem of subArr){
//         sum += elem
//     }
// }
// console.log(sum)

// Task 89
//С помощью вложенных циклов найдите сумму элементов этого массива.
// let arr = [
//   [
//     [1, 2],
//     [3, 4],
//   ],
//   [
//     [5, 6],
//     [7, 8],
//   ],
// ];
// let sum = 0;
// for(let subArr of arr){
//     for(let elem of subArr){
//         for(let item of elem){
//             sum += item
//         }
//     }
// }
// console.log(sum)

// Task 90
// Решите предыдущие две задачи через цикл for.
// let arr = [[1, 2, 3], [4, 5], [6]];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     sum += arr[i][j];
//   }
// }
// console.log(sum);
// let arr = [
//   [
//     [1, 2],
//     [3, 4],
//   ],
//   [
//     [5, 6],
//     [7, 8],
//   ],
// ];
// let sum = 0
// for (let i = 0; i < arr.length; i++) {
//     for(let j = 0; j < arr[i].length; j++){
//         for(let k = 0; k < arr[j].length; k++){
//             sum += arr[i][j][k]
//         }
//     }
// }
// console.log(sum)

// Task 91
// Сформируйте с помощью двух вложенных циклов следующий массив: [[1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5]]
// let arr = [];
// for(let i =0; i < 3; i++){
//     arr[i] = []
//     for(let j = 0; j < 5; j++){
//         arr[i].push(j + 1)
//     }
// }
// console.log(arr)

// Task 92
// Сформируйте с помощью двух вложенных циклов следующий массив: [['x', 'x', 'x', 'x'],['x', 'x', 'x', 'x'],['x', 'x', 'x', 'x']]
// let arr = [];
// for (let i = 0; i < 3; i++) {
//   arr[i] = [];
//   for (let j = 0; j < 4; j++) {
//     arr[i].push('x');
//   }
// }
// console.log(arr);

// Task 93
// Сформируйте с помощью трех вложенных циклов следующий массив: [[[1, 2, 3, 4, 5],[1, 2, 3, 4, 5],],[[1, 2, 3, 4, 5],[1, 2, 3, 4, 5],],[[1, 2, 3, 4, 5],[1, 2, 3, 4, 5]]]
// let arr = []
// for(let i = 0; i < 3; i++){
//   arr[i] = [];
//   for(let j = 0; j < 6; j++){
//     arr[j] = []
//     for(let k = 1; k <= 5; k++){
//       arr[j].push(k)
//     }
//   }
// }
// console.log(arr)

// Task 94
// Сформируйте с помощью двух вложенных циклов следующий массив: [[1, 2], [3, 4], [5, 6], [7, 8]]
// let arr = [];
// for (let i = 0, k = 1; i < 4; i++) {
//   arr[i] = [];
//   for (let j = 0; j < 2; j++) {
//     arr[i].push(k++);
//   }
// }
// console.log(arr);

// Task 95
// Сформируйте с помощью двух вложенных циклов следующий массив: [[2, 4, 6], [8, 10, 12], [14, 16, 18], [20, 22, 24]]
// let arr = [];
// for (let i = 0, k = 1; i < 4; i++) {
//   arr[i] = [];
//   for (let j = 0; j < 6; j++) {
//     k++;
//     if(k % 2 == 0){
//       arr[i].push(k);
//     }
//   }
// }
// console.log(arr);

// Task 96
// Сформируйте с помощью трех вложенных циклов следующий трехмерный массив: [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]
// let arr = [];
// for (let i = 0, k = 0; i < 4; i++) {
//   arr[i] = [];
//   for (let j = 0; j < 2; j++) {
//     k++;
//     arr[i].push(k);
//   }
// }
// console.log(arr);

// Task 97
// Найдите сумму элементов приведенного объекта.
// let obj = {
//   key1: {
//     key1: 1,
//     key2: 2,
//     key3: 3,
//   },
//   key2: {
//     key1: 4,
//     key2: 5,
//     key3: 6,
//   },
//   key3: {
//     key1: 7,
//     key2: 8,
//     key3: 9,
//   },
// };
// let sum = 0;
// for (let key in obj) {
//     for(let nextKey in obj[key]){
//         sum += obj[key][nextKey]
//     }
// }
// // console.log("sum", sum)

// Task 98
// Выведите на экран элемент 'b2' и элемент 'c1'.
// let obj = {
// 	1: {
// 		1: 'a1',
// 		2: 'a2',
// 		3: 'a3',
// 	},
// 	2: {
// 		1: 'b1',
// 		2: 'b2',
// 		3: 'b3',
// 	},
// 	3: {
// 		1: 'c1',
// 		2: 'c2',
// 		3: 'c3',
// 	},
// }
// console.log(obj['2']['2'] + ' ' + obj['3']['1'])

// Task 99
// Вручную, без цикла, найдите сумму всех элементов-чисел.
// let obj = {
//   key1: {
//     a: 1,
//     b: 2,
//     c: {
//       d: 3,
//       e: 4,
//     },
//     f: 5,
//   },
//   key2: {
//     g: 6,
//     h: 7,
//   },
// };
// sum =
//   obj.key1["a"] +
//   obj.key1["b"] +
//   obj.key1["c"]["d"] +
//   obj.key1["c"]["e"] +
//   obj.key1["f"] + obj.key2['g'] + obj.key2['h']
// console.log("sum", sum);

// Task 100
// Используя циклы, найдите сумму элементов этого объекта.
// let obj = {
//   1: {
//     1: 11,
//     2: 12,
//     3: 13,
//   },
//   2: {
//     1: 21,
//     2: 22,
//     3: 23,
//   },
//   3: {
//     1: 24,
//     2: 25,
//     3: 26,
//   },
// };
// let sum = 0;
// for (let key in obj) {
//   let subObj = obj[key];
//   for (let subKey in subObj) {
//     sum += subObj[subKey];
//   }
// }
// console.log("sum", sum)

// Task 101
//  Используя циклы, найдите сумму элементов этого объекта.
// let obj = {
//   1: {
//     1: {
//       1: 111,
//       2: 112,
//       3: 113,
//     },
//     2: {
//       1: 121,
//       2: 122,
//       3: 123,
//     },
//   },
//   2: {
//     1: {
//       1: 211,
//       2: 212,
//       3: 213,
//     },
//     2: {
//       1: 221,
//       2: 222,
//       3: 223,
//     },
//   },
//   3: {
//     1: {
//       1: 311,
//       2: 312,
//       3: 313,
//     },
//     2: {
//       1: 321,
//       2: 322,
//       3: 323,
//     },
//   },
// };
// let sum = 0;
// for (let key in obj) {
//   let subObj = obj[key];
//   for (let subKey in subObj) {
//     let finObj = subObj[subKey]
//     for (let finKey in finObj) {
//       sum += finObj[finKey];
//     }
//   }
// }
// console.log("sum", sum);

// Task 102
// Выведите на экран первого студента из третьей группы.
// let students = {
// 	'group1': ['name11', 'name12', 'name13'],
// 	'group2': ['name21', 'name22', 'name23'],
// 	'group3': ['name31', 'name32', 'name33'],
// };
// console.log(students['group3'][0])

// Task 103
// С помощью вложенных циклов выведите на экран все строки с данными.
// let data = {
// 	1: [
// 		'data11',
// 		'data12',
// 		'data13',
// 	],
// 	2: [
// 		'data21',
// 		'data22',
// 		'data23',
// 	],
// 	3: [
// 		'data31',
// 		'data32',
// 		'data33',
// 	],
// 	4: [
// 		'data41',
// 		'data42',
// 		'data43',
// 	],
// };
// for(let dataBlock in data){
//     for(let datas of data[dataBlock]){
//         console.log(datas)
//     }
// }

// Task 104
// С помощью вложенных циклов выведите на экран все строки с данными.
// let data = [
// 	{
// 		1: 'data11',
// 		2: 'data12',
// 		3: 'data13',
// 	},
// 	{
// 		1: 'data21',
// 		2: 'data22',
// 		3: 'data33',
// 	},
// 	{
// 		1: 'data31',
// 		2: 'data32',
// 		3: 'data33',
// 	},
// ];
// for(let dataBlock of data){
//     for(let datas in dataBlock){
//         console.log(dataBlock[datas])
//     }
// }

// Task 105
// С помощью вложенных циклов выведите на экран все строки с данными.
// let data = [
//   {
//     1: ["data111", "data112", "data113"],
//     2: ["data121", "data122", "data123"],
//   },
//   {
//     1: ["data211", "data212", "data213"],
//     2: ["data221", "data222", "data223"],
//   },
//   {
//     1: ["data411", "data412", "data413"],
//     2: ["data421", "data422", "data423"],
//   },
// ];
// for (let key in data) {
//     let subData = data[key]
//     for(let subKey in subData){
//         let inData = subData[subKey]
//         for(let innerData in inData){
//             console.log(inData[innerData])
//         }
//     }
// }

// Task 106
// Выведите на экран данные каждого работника в формате имя - зарплата.
// let employees = [
//   {
//     name: "name1",
//     salary: 300,
//   },
//   {
//     name: "name2",
//     salary: 400,
//   },
//   {
//     name: "name3",
//     salary: 500,
//   },
// ];
// for (let employee of employees) {
//   console.log(employee.name + " - " + employee.salary);
// }

// Task 107
// Выведите на экран сумму зарплат всех работников.
// let sum = 0;
// let employees = [
//   {
//     name: "name1",
//     salary: 300,
//   },
//   {
//     name: "name2",
//     salary: 400,
//   },
//   {
//     name: "name3",
//     salary: 500,
//   },
// ];
// for(let employee of employees){
//     sum += employee.salary
// }
// console.log(sum)

// Task 108
// Выведите на экран сумму зарплат тех работников, возраст которых равен или более 30 лет.
// let employees = [
//   {
//     name: "name1",
//     salary: 300,
//     age: 28,
//   },
//   {
//     name: "name2",
//     salary: 400,
//     age: 29,
//   },
//   {
//     name: "name3",
//     salary: 500,
//     age: 30,
//   },
//   {
//     name: "name4",
//     salary: 600,
//     age: 31,
//   },
//   {
//     name: "name5",
//     salary: 700,
//     age: 32,
//   },
// ];
// let sum = 0;
// for (let employee of employees) {
//   if (employee.age >= 30) {
//     sum += employee.salary
//   }
// }
// console.log(sum);

// Task 109
// Дан следующий объект с названиями месяцев, Выведите на экран название месяца, соответствующее значениям переменных lang и month.
// let months = {
// 	'ru': [
// 		'январь',
// 		'февраль',
// 		'март',
// 		'апрель',
// 		'май',
// 		'июнь',
// 		'июль',
// 		'август',
// 		'сентябрь',
// 		'октябрь',
// 		'ноябрь',
// 		'декабрь',
// 	],
// 	'en': [
// 		'january',
// 		'february',
// 		'march',
// 		'april',
// 		'may',
// 		'june',
// 		'july',
// 		'august',
// 		'september',
// 		'october',
// 		'november',
// 		'december',
// 	],
// };
// let lang = 'ru';
// let month = 6;
// console.log(months[lang][month - 1])

// Task 110
//  Дана вот такая структура для хранения списка дел за года, месяцы и дни: Пусть даны также три переменные, содержащие год, месяц и день. Выведите дело, соответствующее значениям переменных.
// let affairs = {
//   2018: {
//     11: {
//       29: ["дело111", "дело112", "дело113"],
//       30: ["дело121", "дело122", "дело123"],
//     },
//     12: {
//       30: ["дело211", "дело212", "дело213"],
//       31: ["дело221", "дело222", "дело223"],
//     },
//   },
//   2019: {
//     12: {
//       29: ["дело311", "дело312", "дело313"],
//       30: ["дело321", "дело322", "дело323"],
//       31: ["дело331", "дело332", "дело333"],
//     },
//   },
// };
// let year = 2019
// let month = 12
// let day = 31
// console.log(affairs[year][month][day])

// Task 111
// Автор следующего кода хотел вывести элемент со значением '24':
// let obj = {
//   key1: {
//     key2: "12",
//     key3: "13",
//   },
//   key2: {
//     key4: "24",
//     key5: "25",
//   },
// };
// console.log(obj.key2.key4);

// Task 112
// let obj = {
//   key1: {
//     key2: "12",
//     key3: "13",
//   },
//   key2: {
//     key4: "24",
//     key5: "25",
//   },
// };

// console.log(obj.key2.key4);

// Task 113
// let obj = {
//   key1: {
//     key2: "12",
//     key3: "13",
//   },
//   key2: {
//     key4: "24",
//     key5: "25",
//   },
// };
// console.log(obj.key2.key4);

// Task 114
// let obj = {
//   key1: {
//     key2: "12",
//     key3: "13",
//   },
//   key2: {
//     key4: "24",
//     key5: "25",
//   },
// };
// console.log(obj.key2.key4);

// Task 115
// Добавьте в следующий массив еще одного работника:
// let employees = [
//   {
//     name: "name1",
//     salary: 300,
//     age: 28,
//   },
//   {
//     name: "name2",
//     salary: 400,
//     age: 29,
//   },
//   {
//     name: "name3",
//     salary: 500,
//     age: 30,
//   },
// ];
// console.log("employees", employees)
// employees.push({ name: "name4", salary: 700, age: 31 });

// Task 116
// Добавьте еще одно дело в дату '2019-12-29'. Добавьте еще два дела в дату '2019-12-31'.
// let affairs = {
// 	'2019-12-28': ['data11', 'data12', 'data13'],
// 	'2019-12-29': ['data21', 'data22', 'data23'],
// 	'2019-12-30': ['data31', 'data32', 'data33'],
// }
// console.log("affairs", affairs)
// affairs['2019-12-29'].push('data24')
// affairs['2019-12-31'] = []
// affairs['2019-12-31'].push('data34')
// affairs['2019-12-31'].push('data35')

// Task 117
// Добавьте нового студента в подгруппу 'subgroup11'. Добавьте в первую группу еще одну подгруппу. Сделайте четвертую группу, в ней сделайте подгруппу и добавьте в нее двух новых студентов.
// let students = {
// 	'group1': {
// 		'subgroup11': ['student111', 'student112', 'student113'],
// 		'subgroup12': ['student121', 'student122', 'student123'],
// 	},
// 	'group2': {
// 		'subgroup21': ['student211', 'student212', 'student213'],
// 		'subgroup22': ['student221', 'student222', 'student223'],
// 	},
// 	'group3': {
// 		'subgroup31': ['student311', 'student312', 'student313'],
// 		'subgroup32': ['student321', 'student322', 'student323'],
// 	},
// };
// students.group1.subgroup11.push('students114')
// students.group1.subgroup13 = []
// students.group4 = {}
// students.group4.subgroup33 = []
// students.group4.subgroup33.push('student324')
// students.group4.subgroup33.push('student325')
// console.log("students", students)

// Task 118
// Возведите 2 в 10 степень.
// Math.pow(2, 10)
// console.log("Math.pow(2, 10)", Math.pow(2, 10))

// Task 119
// Найдите квадратный корень из 245.
// Math.sqrt(245)
// console.log("Math.sqrt(245)", Math.sqrt(245))

// Task 120
// Найдите квадратный корень из суммы кубов его элементов. Для решения воспользуйтесь циклом for.
// let arr = [4, 2, 5, 19, 13, 0, 10];
// let sum = 0;
// for(let num of arr){
//     sum += Math.pow(num, 3)
// }
// console.log("num", Math.sqrt(sum))

// Task 121
// Найдите квадратный корень из 379. Результат округлите до целых, до десятых, до сотых.
// let num = 379;
// let sqrtRes = Math.sqrt(num)
// let final1 = Math.round(sqrtRes)
// let final2 = sqrtRes.toFixed(1)
// let final3 = sqrtRes.toFixed(2)
// console.log("final1", final1)
// console.log("final2", final2)
// console.log("final3", final3)

// Task 122
// Найдите квадратный корень из 587. Округлите результат в большую и меньшую стороны, запишите результаты округления в объект с ключами 'floor' и 'ceil'.
// let num = 587;
// let sqrtRes = Math.sqrt(num);
// let resFloor = Math.floor(sqrtRes);
// let resCeil = Math.ceil(sqrtRes);
// let obj = {};
// obj.floor = [];
// obj.ceil = [];
// obj.floor.push(resFloor);
// obj.ceil.push(resCeil);
// console.log("obj", obj);

// Task 123
// Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число.
// let maxNum = Math.max(4, -2, 5, 19, -130, 0, 10)
// let minNum = Math.min(4, -2, 5, 19, -130, 0, 10);
// console.log("minNum", minNum)
// console.log("maxNum", maxNum)

// Task 124
// Выведите на экран случайное целое число от 1 до 100.
// let num = Math.floor(Math.random() * (100 - 1)) + 1
// console.log("num", num)

// Task 125
// С помощью цикла заполните массив 10-ю случайными целыми числами.
// let arr = []
// for(let i = 0; i < 10; i++){
//     arr[i] = Math.floor(Math.random() * (100 - 1)) + 1
// }
// console.log(arr)

// Task 126
// Даны переменные a и b. Найдите модуль разности a и b. Проверьте работу скрипта самостоятельно для различных a и b.
// let a = 13;
// let b = 21;
// let res = a - b;
// Math.abs(res)
// console.log("Math.abs(res)", Math.abs(res))

// Task 127
// Дана строка 'js'. Сделайте из нее строку 'JS'.
// let str = "js";
// console.log(str.toUpperCase());

// Task 128
// Дана строка 'JS'. Сделайте из нее строку 'js'.
// let str = "JS";
// console.log(str.toLowerCase());

// Task 129
// Дана строка 'я учу javascript!'. Вырежьте из нее слово 'учу' и слово 'javascript' тремя разными способами (через substr, substring, slice).
// let str = "я учу javascript!";
// let subStr = str.substr(1, 4);
// let stringStr = str.substring(1, 5);
// let sliceStr = str.slice(1, 5)
// console.log("sliceStr", sliceStr)
// console.log("stringStr", stringStr)
// console.log("subStr", subStr);

// Task 130
// Дана строка 'abcde'. Определите позицию буквы 'c' в этой строке.
// let str = "acbde";
// console.log(str.indexOf('c'))

// Task 131
// Дана строка. Проверьте, есть ли в этой строке символ 'a'.
// let str = "acbde";
// let strSub = str.substring(0, str.length)
// let strItem = strSub.indexOf("a");
// str[strItem] == "a" ? console.log("true") : "";

// Task 132
// Дана строка. Проверьте, начинается ли эта строка с символа 'a'.
// let str = "acbde";
// str[0] == "a" ? console.log("begins with a") : "";

// Task 133
// Дана строка. Проверьте, заканчивается ли эта строка на символ 'a'.
// let str = "acbdesdfgdfgsdfgdfg";
// str[str.length - 1] == "a" ? console.log("true") : "";

// Task 134
// Дана строка. Проверьте, начинается ли эта строка на 'http://'.
// let str = "http://google.com";
// let strSliced = str.slice(0, 7);
// if(strSliced == 'http://'){
//     console.log('yes')
// } else{
//     console.log('none')
// }

// Task 135
// Дана строка. Проверьте, заканчивается ли эта строка на '.html'
// let str = "index.html";
// let strIndex = str.lastIndexOf(".html");
// let strSubstr = str.substring(0, strIndex);
// let strSliced = str.slice(strIndex, str.length);
// strSliced == ".html" ? console.log("true") : "";

// Task 136
// Дана строка. Проверьте, начинается ли эта строка на 'http://'.
// let str = "http://google.com";
// console.log(str.startsWith('http://'))

// Task 137
// Дана строка. Проверьте, заканчивается ли эта строка на '.html'.
// let str = "index.html";
// console.log(str.endsWith('.html'))

// Task 138
// Дана строка '1-2-3-4-5'. С помощью метода split запишите каждое число этой строки в отдельный элемент массива.
// let str = "1-2-3-4-5";
// let arr = str.split('-')
// console.log("arr", arr)

// Task 139
// Дана строка '12345'. С помощью метода split запишите каждый символ этой строки в отдельный элемент массива.
// let str = "12345";
// let arr = str.split('')
// console.log("arr", arr)

// Task 140
// С помощью метода join слейте его в строку '1-2-3-4-5'.
// let arr = [1, 2, 3, 4, 5];
// let str = arr.join('-')
// console.log("str", str)

// Task 141
// Добавьте ему в конец элементы 4, 5, 6.
// let arr = [1, 2, 3];
// arr.push(4, 5, 6);
// console.log("arr", arr)

// Task 142
// Добавьте ему в начало элементы 4, 5, 6.
// let arr = [1, 2, 3];
// arr.unshift(4, 5, 6);
// console.log("arr", arr)

// Task 143
// Выведите на экран первый элемент этого массива.
// let arr = [1, 2, 3];
// let arrItem = arr.shift();
// console.log("arrItem", arrItem);

// Task 144
// Выведите на экран последний элемент этого массива.
// let arr = [1, 2, 3];
// let arrItem = arr.pop();
// console.log("arrItem", arrItem)

// Task 145
// Сделайте из этого массива следующий:
// let arr = [1, 2, 3, 4, 5];
// let newArr = arr.slice(0, 3);
// console.log("newArr", newArr)

// Task 146
// Используя этот массив, запишите в новую переменную следующий массив:
// let arr = [1, 2, 3, 4, 5];
// let newArr = arr.slice(3, 5);
// console.log("newArr", newArr)

// Task 147
// С помощью метода splice преобразуйте массив в следующий:
// let arr = [1, 2, 3, 4, 5];
// let newArr = arr.splice(1, 2);
// console.log("newArr", arr);

// Task 148
// С помощью метода splice сделайте из него массив:
// let arr = [1, 2, 3, 4, 5];
// arr.splice(2, 0, "a", "b", "c");
// console.log("arr", arr);

// Task 149
// С помощью метода splice сделайте из него массив:
// let arr = [1, 2, 3, 4, 5];
// arr.splice(1, 0, "a", "b");
// arr.splice(5, 0, "c");
// arr.splice(7, 0, "e");
// console.log("arr", arr);

// Task 150
// Найдите позицию числа 3 в этом массиве.
// let arr = [1, 2, 3, 4, 5];
// let arrIndex = arr.indexOf(3)
// console.log("arrIndex", arrIndex)

// Task 151
// Проверьте, есть ли в этом массиве число 3.
// let arr = [1, 2, 3, 4, 5];
// let res = arr.includes(3)
// console.log("res", res)

// Task 152
// Преобразуйте последнюю букву строки в верхний регистр.
// let str = "london";
// let result = str.slice(0, 5) + str.slice(5).toUpperCase();
// console.log("result", result);



