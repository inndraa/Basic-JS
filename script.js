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
// while( i <= 50){
//     document.write(i + '<br>');
//     i++;
// }
// for(let i = 1; i <= 50; i++){
//     document.write(i + '<br>')
// }

// Task 61
// let arr = ['1', '2', '3', '4', '5'];
// for(let i = 0; i < arr.length; i++){
//     document.write(arr[i] + '<br>');      
// }

// Task 62
// let result = 1;
// let arr = ['2', '3', '4', '5'];
// for(let i = 0; i < arr.length; i++){
//     result = result * arr[i];
//     // result *= arr[i];
// }
// alert(result);

// Task 63
// let obj = {
//     'Минск': 'Беларусь',
// 	'Москва': 'Россия',
// 	'Киев': 'Украина'
// };
// for(let key in obj){
//     alert(key + ' - is ' + obj[key]);
// }

// Task 64
// let i = 1;
// while (i <= 100) {
//     document.write(i + '<br>');
//     i++;
// }
// for(let i = 1; i <= 100; i++){
//     document.write(i + '<br>');
// }

// Task 65
// let i = 11;
// while(i <= 33){
//     document.write(i + '<br>');
//     i++;
// }
// for(let i = 11; i <= 33; i++){
//     document.write(i + '<br>');
// }

// Task 66
// for(let i = 2; i <=100; i++){
//     if( i % 2 == 0){
//         document.write(i + '<br>');
//     }
// }
// let i = 1;
// while(i <= 100){
//     if( i % 2 == 0){
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
// while(i <= 100){
//     sum += i;
//     document.write(sum += i);
// }

// Task 68
// let arr = [1, 2, 3, 4, 5];
// for(let i = 0; i < arr.length; i++){
//     document.write(arr[i]);
// }

// Task 69
// let arr = [1, 2, 3, 4, 5];
// let sum = 0;
// for(let i = 0; i < arr.length; i++){
//     sum += arr[i];
//     alert(sum);
// }

// Task 70
// let obj = {
//     green: 'зеленый',
//     red: 'красный',
//     blue: 'синий'
// }
// for(let key in obj){
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
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] > 3 && arr[i] < 10){
//         alert(arr[i]);
//     }
// }

// Task 73
// let arr = [2, 5, 7, -7, 74, -3,];
// let sum = 0;
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] > 0){
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
// for(let i = 0; i < arr.length; i++){
//     let num = String(arr[i]);
//     let char = num[0];
//     if(char == 1 || char == 2 || char == 5){
//         alert('Good')
//     }
// }   