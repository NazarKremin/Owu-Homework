// -- створити об'єкт (не меньше 5ти властивостей) який описує
// - собаку
// - людину
// - автомобіль
// - квартиру
// - книгу
//
// const dog = {
//     name: 'Json',
//     age: 1,
//     color: 'white',
//     poroda: 'vivcharka',
//     eye: 'blue'
// }
// console.log(dog);
//
// const human = {
//     name: "Naxar",
//     age:22,
//     job:{
//         company:'ok10',
//     },
//     title: 'student'
// }
// console.log(human);
//
// const car = {
//     name: 'opel',
//     model: 'omega',
//     motor: 2.0,
//     color: ' black',
//     wheel: 'false',
// }
// console.log(car);
// const house = {
//     city:'Lviv',
//     house:{
//         street:'sobrui',
//         number:5,
//     },
//     homMuvhlive:1,
// }
// console.log(house);
// const book ={
//     name:'js',
//     pages:404,
//     love:false,
//     rasy:true,
// }
// console.log(book);
//

//
// -- Створити масив та вивести його в консоль:
// - з 5 собак
// - 3 5 людей
// - з 5 автомобілів
// let arr= ['Ricky' , 'Doggy', 'Fire', 'Caysi', 'Momo', 'Alex', 'Dima', 'Nazar', 'Sasha', 'Viktor', 'BMW' , 'Geely', 'passat', ' skoda']
// console.log(arr);
//

// -- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
// - будинок
// - водій
// - іграшку
// - стіл
// - сумка
// const obj={
//     house:{
//         isBig:true,
//         color:'white',
//         floor:5,
//         pool:false,
//         windows:10,
//     },
//     driver:{
//         name:'Viktor',
//         isGood:true,
//         whatCarDrive:['BNW','OPEL','KIA'],
//         catogory:'B',
//         yearsDriving:5,
//     },
// }
// console.log(obj);
//
//
//
// Дан массив:
//     let users = [
//         {name: 'vasya', age: 31, status: false},
//         {name: 'petya', age: 30, status: true},
//         {name: 'kolya', age: 29, status: true},
//         {name: 'olya', age: 28, status: false},
//         {name: 'max', age: 30, status: true},
//         {name: 'anya', age: 31, status: false},
//         {name: 'oleg', age: 28, status: false},
//         {name: 'andrey', age: 29, status: true},
//         {name: 'masha', age: 30, status: true},
//         {name: 'olya', age: 31, status: false},
//         {name: 'max', age: 31, status: true}
//     ];
// - звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
// - статус Андрія console.log(users[0].status);
// - статус Максима console.log(users[4].status);
// - ім'я передостаннього об'єкту console.log(users[9].name);
// - ім'я третього об'єкта console.log(users[2].name);
// - вік Олега console.log(users[6].age);
// - вік Олі console.log(users[3].age); console.log(users[9].age);
// - вік + ім'я 5го об'єкта console.log(users[5].age, users[5].name);
// - вік + сатус Анни console.log(users[5].age, users[5].status);
//

// -Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.
//
// -- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// - отримує текст з параграфа з id "content"
//
// let conten = document.getElementById("content");
// console.log(conten);
//

// - отримує текст з блоку з id "rules"
//
// let rules = document.getElementById("rules");
// console.log(rules);
//

// - замініть текст параграфа з id 'content' на будь-який інший
//
// let conten = document.getElementById("content");
// conten.innerText = 'Куркаме буль';
// console.log(conten);
//

// - замініть текст параграфа з id 'rules' на будь-який інший
//
// let rules = document.getElementById('rules')
// rules.innerText = 'Чого так часто пропадаєш?';
// console.log(rules);
//

// - змініть кожному елементу колір фону на червоний
//
// let fc_rules = document.getElementsByClassName('fc_rules');
// for (let i = 0; i < fc_rules.length; i++) {
//     fc_rules[i].style.backgroundColor = 'red';
// }
// console.log(fc_rules);
//

// - змініть кожному елементу колір тексту на синій
//
// let fc_rules = document.getElementsByClassName('fc_rules');
// for (let i = 0; i < fc_rules.length; i++){
//     fc_rules[i].style.color = 'blue';
// }
// console.log(fc_rules);
//

// - отримати весь список класів елемента з id=rules і вивести їх в console.log
// let rules = document.getElementById('rules');
// console.log(rules);

// - отримати всі елементи з класом fc_rules
// let fc_rules = document.getElementsByClassName('fc_rules');
// console.log(fc_rules);

// - поміняти колір тексту у всіх елементів fc_rules на червоний
// let fc_rules = document.getElementsByClassName('fc_rules');
// for (let i = 0; i < fc_rules.length; i++){
//     fc_rules[i].style.color = 'red';
// }
// console.log(fc_rules);
