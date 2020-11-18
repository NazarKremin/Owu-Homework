// =====class=======
// =================
// Взяти файл template_2.html та працювати в ньому
// - Напишіть код, який :
// -- змінює колір тексту елемнту з ід main_header на будь-який інший
// let main_header = document.getElementById('main_header');
// main_header.style.backgroundColor = "green";
// console.log(main_header);
//
// -- робить шириниу елементу ul 400 пікселів
// let ul = document.getElementsByTagName('ul');
// for (let i = 0; i < ul.length; i ++){
//     ul[i].style.width = '400px';
// }
// console.log(ul);
//
// -- робить шириниу всіх елементів з класом linkList шириною 50%
// let linklList = document.getElementsByClassName('linkList');
// for (let i = 0; i < linklList.length; i++){
//     linklList[i].style.width = '50%';
// }
// console.log(linklList);
//
// -- отримує текст який зберігається в елементі з класом listElement2
// let listElement2 = document.getElementsByClassName('listElement2')
// for (let i = 0; i < listElement2.length; i++){
//     listElement2[i].innerTex
// }
// console.log(listElement2);
//
// -- отримує всі елементи li та змінює ім колір фону на сірий
// let li = document.getElementsByTagName('li')
// console.log(li);
// for (let i = 0; i < li.length; i++){
//     li[i].style.backgroundColor ='silver';
// }
// console.log(li);
//
// -- отримує всі елементи 'a' та додає їм клас anchor
// let a = document.getElementsByTagName('a')
// console.log(a);
// for (let i = 0; i < a.length; i++) {
//     a[i].classList.add('anchor')
// }
// console.log(a);
//
// -- отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// let a = document.getElementsByTagName('a');
// console.log(a);
// for (let i = 0; i < a.length; i++) {
//     // a[i].innerText === 'link3' ? a[i].style.fontSize = '40px' : null;
//     if (a[i].innerText === 'link3') {
//         a[i].style.fontSize = '40px';
//     }
// }
//
// -- отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// let a = document.getElementsByTagName('a');
// for (let i = 0; i < a.length; i++) {
//     a[i].classList.add('element_XXX')
// }
// console.log(a);
// -- отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// let elements = document.getElementsByClassName('sub-header');
// for (let i = 0; i < elements.length; i++) {
//     if (elements[i].style.backgroundColor = prompt("Color?")); {
//
//     }
//     console.log(elements);
//
// }
// -- отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// let element = document.getElementsByClassName('sub-header');
// for (let i = 0; i < element.length; i++) {
//     if ( element[i] === 'content 2 segment' ){
//     }else if (element[i].style.backgroundColor = prompt("Color?")){
//
//     }
// }
//console.log(element);
// -- отримує елемент з класом content_1 та заміняє  в ньому теkст на довільний. Текст отримати з prompt()
// let element = document.getElementsByClassName('content_1');
// for ( let content1 of element ){
//     if (content1.innerText = prompt("Text?")){
//     }
// }
// console.log(element);
// -- отримати елементи p та змінити їм paddin на довільне значення
// let element = document.getElementsByTagName('p');
// for (let i = 0; i < element.length; i++) {
//     if (element[i].style.margin = prompt("Margin in px?")){
//
//     }
// }
// console.log(element);
// -- отримати елементи з класом text2 та змінити їм текст на довільне значення
// let element = document.getElementsByClassName('text2');
// for ( let text of element){
//     if (text.innerText = prompt('Text?')){
//     }
// }
// console.log(element);
//


// //- создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле name  должно присутствовать только 1 раз в одном объекте )
// let obj = {
//     name: 'Gab',
//     age: 2,
//     smoke: false,
// }
// //
// //
// // console.log(obj);
// //
// const obj2 ={
//     car:false,
//     brb:1,
//     isWife:false,
//     dog: 'Lucky'
// }
// // console.log(obj2);
// // - создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект. Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };
// const obj3 ={
//     cars: {
//       marka:'toyota',
//       kyzov:'sedan',
//       complaction:['dzerkala','masag','condyk'],
//     }
// }
// // console.log(obj3);
// //
// //
//
// // - При помощи for in вывести все ключи всех объектов из задания 1 и 2
// // for (const keys1 in obj){
// //     console.log(keys1);
// // }for (const keys2 in obj2){
// //     console.log(keys2);
// // }for (const keys3 in obj3){
// //     console.log(keys3);
// // }
// // //
// // - При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2
// // let keys1 = Object.keys(obj);
// // console.log(keys1);
// // let keys2 = Object.keys(obj2);
// // console.log(keys2);
// // let keys3 = Object.keys(obj3);
// // console.log(keys3);
// //
// // - Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)
// //
// let arrCar = [{
//     Bmw:{
//         marka: 'X5',
//         year: '2011',
//         horses:300,
//         color:'white',}  ,
//     Kia:{
//         marka: 'Sorento',
//         year: '2012',
//         horses:120,
//         color:'brown',
//     },
//     Mercedes:{
//         marka: 'w213',
//         year: '2016',
//         horses:630,
//         color:'silver',
//     },
//     Skoda:{
//         marka: 'Fabia',
//         year: '2008',
//         horses:70,
//         color:'white',
//     },
//     Lanus:{
//         marka: 'anus',
//         year: '2000',
//         horses: 5,
//         color:'sheet',
//     },
//     Jaguar:{
//         marka: 'F-type',
//         year: '2015',
//         horses:380,
//         color:'red',
//     },
//     Bugatti:{
//         marka: 'Veyron',
//         year: '2010',
//         horses:1001,
//         color:'blue',
//     },
//     Porsche:{
//         marka: 'Panamera',
//         year: '2012',
//         horses:300,
//         color:'white',
//     },
//     Dua:{
//         marka: 'Lipa',
//         year: '2019',
//         horses:3,
//         color:'white',
//     },
//     Cooper:{
//         marka: 'Mini',
//         year: '2011',
//         horses:203,
//         color:'Yellow',
//     }
//            }];
//
// //
// // - Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. (Значаения полей могу быть выдуманными)
// let cities = [{
//     city: {
//         Lviv: {
//             country: 'Ukraine', region: 'Lvivska', population:'1mln',
//         },
//         Kyiv:{
//             country: 'Ukraine', region: 'Kyivska', population:'1.5mln',
//         },
//         Dnipro:{
//             country: 'Ukraine', region: 'Dniprovska', population:'1mln',
//         },
//         Zmerenka:{
//             country: 'Ukraine', region: 'Zmerenivska', population:'10.5mln',
//         },
//         Rivne:{
//             country: 'Ukraine', region: 'Rivnenskui', population:500000,
//         },
//     }
//
// }]
// // - Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель. Водитель является отдельным объектом с полями имя, возраст, пол, стаж.
//
// let arrCarDriver = [{
//     Bmw:{
//         marka: 'X5', year: '2011', horses:300, color:'white',
//         driver:{
//             name:'Andriy',
//             age:25,
//             stage:5
//         }
//         },
//     Kia:{  marka: 'Sorento', year: '2012', horses:120,  color:'brown',
//         driver:{ name:'Andriy', age:25, stage:5
//         }
//     },
//     Mercedes:{
//         marka: 'w213',
//         year: '2016',
//         horses:630,
//         color:'silver',
//         driver:{
//             name:'Andriy',
//             age:25,
//             stage:5
//         }
//     },
//     Skoda:{
//         marka: 'Fabia',
//         year: '2008',
//         horses:70,
//         color:'white',
//         driver:{
//             name:'Andriy',
//             age:25,
//             stage:5
//         }
//     },
//     Lanus:{
//         marka: 'anus',
//         year: '2000',
//         horses: 5,
//         color:'sheet',
//         driver:{
//             name:'Andriy',
//             age:25,
//             stage:5
//         }
//     },
//     Jaguar:{
//         marka: 'F-type',
//         year: '2015',
//         horses:380,
//         color:'red',
//         driver:{
//             name:'Andriy',
//             age:25,
//             stage:5
//         }
//     },
//     Bugatti:{
//         marka: 'Veyron',
//         year: '2010',
//         horses:1001,
//         color:'blue',
//         driver:{
//             name:'Andriy',
//             age:25,
//             stage:5
//         }
//     },
//     Porsche:{
//         marka: 'Panamera',
//         year: '2012',
//         horses:300,
//         color:'white',
//         driver:{
//             name:'Andriy',
//             age:25,
//             stage:5
//         }
//     },
//     Dua:{
//         marka: 'Lipa',
//         year: '2019',
//         horses:3,
//         color:'white',
//         driver:{
//             name:'Andriy',
//             age:25,
//             stage:5
//         }
//     },
//     Cooper:{
//         marka: 'Mini',
//         year: '2011',
//         horses:203,
//         color:'Yellow',
//         driver:{
//             name:'Andriy',
//             age:25,
//             stage:5
//         }
//     }
// }];
// // - проитерировать каждый массив из задания 5,6,7 при помощи while.
//
// // let i =0;
// // while (i < arrCar.length){
// //     console.log(arrCar[i]);
// //     i++;
// // }
// // let i = 0;
// // while (i < cities.length){
// //     console.log(cities[i]);
// //     i++;
// // }
// // let i= 0;
// // while (i < arrCarDriver.length){
// //     console.log(arrCarDriver[i]);
// //     i++;
// // }
// // - проитерировать каждый массив из задания 5,6,7 при помощи for .
// // for (let i = 0; i < arrCar.length; i++) {
// //     console.log(arrCar[i]);
// // }
// // for (let i = 0; i < arrCarDriver.length; i++) {
// //     console.log(arrCarDriver[i]);
// //
// // }
// // for (let i = 0; i < cities.length; i++) {
// //     console.log(cities[i]);
// //
// // }
// // - проитерировать каждый массив из задания 5,6,7 при помощи  for of.
// // for( const car of arrCar ){
// //     console.log(car);
// // }
// // for ( const carDriver of arrCarDriver){
// //     console.log(carDriver);
// // }
// //
// // for ( const city of cities){
// //     console.log(city);
// // }
// // - взять объекты из задания 1 и превратить каждый в json.
// //  let s = JSON.stringify(obj);
// // console.log(s);
// // let s2 = JSON.stringify(obj2);
// // console.log(s2);
// // let s3 = JSON.stringify(obj3);
// // console.log(s3);
// // // - взять json из задания 11 и превратить их обратно в объекты.
// //
// // let object = JSON.parse(s);
// // console.log(object);
// // let object2 = JSON.parse(s2);
// // console.log(object2);
// // let object3 = JSON.parse(s3);
// // console.log(object3);
// // - взять массив из задания 5,в цикле перебрать его объекты превратив их в json .
// for (let i = 0; i < arrCar.length; i++) {
//     let s = JSON.stringify(arrCar[i])
//     console.log(s);
// }
// // - взять массив из задания 6,в цикле перебрать его объекты превратив их в json .
// for ( let s2 of arrCarDriver){
//   s2=JSON.stringify(arrCarDriver);
//     console.log(s2);
// }
// // - взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.
// let arrCity =[];
// for ( let s3 of cities){
//     s3 = JSON.stringify(cities)
//     console.log(s3);
//     arrCity.push[s3];
// }

// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле
// skills которое является массивом.
// let users = [
// 	{name: 'vasya', age: 31, status: false, skills: ['java', 'js']},
// 	{name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']},
// 	{name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']},
// 	{name: 'olya', age: 28, status: false, skills: ['java', 'js']},
// 	{name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}];
// // Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills
// for ( const user of users){
// 	console.log(user);
// }
// for (const user of users) {
// 	for (const skills of user.skills) {
// 		console.log(skills);
// 	}
// }
// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле
// skills которое является массивом. Проитерировать массив пользователей и в каждом
// пользователе проитерировать его массив skills. Скопировать все skills всех пользователей в отедльный массив
// let arr = [];
// for (const user of users) {
// 	for (const skills of user.skills) {
// 		arr.push(skills)
// 		console.log(arr);
// 	}
// }

// - За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.
// let users = [
// {name: 'vasya', age: 31, status: false, skills: ['java', 'js']},
// {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']},
// {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']},
// {name: 'olya', age: 28, status: false, skills: ['java', 'js']},
// {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}];
// for (let i = 0; i < users.length; i++) {
//     console.log(users[i]);
// }
//
// for (let user of users){
//     console.log(user);
// }
//
// for (let user in users){
//     console.log(`${user}:$users[user]}`);
// }

// let users = [{
// 	name: 'vasya',
// 	age: 31,
// 	status: false,
// 	address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
// }, {
// 	name: 'petya',
// 	age: 30,
// 	status: true,
// 	address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
// }, {
// 	name: 'kolya',
// 	age: 29,
// 	status: true,
// 	address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
// }, {
// 	name: 'olya',
// 	age: 28,
// 	status: false,
// 	address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
// }, {
// 	name: 'max',
// 	age: 30,
// 	status: true,
// 	address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
// }, {
// 	name: 'anya',
// 	age: 31,
// 	status: false,
// 	address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
// }, {
// 	name: 'oleg',
// 	age: 28,
// 	status: false,
// 	address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
// }, {
// 	name: 'andrey',
// 	age: 29,
// 	status: true,
// 	address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
// }, {
// 	name: 'masha',
// 	age: 30,
// 	status: true,
// 	address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
// }, {
// 	name: 'olya',
// 	age: 31,
// 	status: false,
// 	address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
// }, {
// 	name: 'max',
// 	age: 31,
// 	status: true,
// 	address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
// }];
// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
// let address = [];
// for (let i = 0; i < users.length;i++) {
//     address.push(users[i].address);
//     console.log(address);
// }

// for (const address1 of users) {
//     address.push(address1)
//     console.log(address);
// }
//Поясни будь ласка чому в консілі так багато масивів виходить, типу 10 обєктів і під кожен свій масив в якому масив юзерів?

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.
// for (let i = 0; i < users.length; i++) {
// 	const name = users[i].name;
// 	const age = users[i].age
// 	const status = users[i].status
// 	const adres = users[i].address
// 	let div = document.createElement('div');
// 	div.innerText=  name + age + status + adres;
// 	console.log(div);
// }

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам (div>div*4)
// for (let i = 0; i < users.length; i++) {
//  	const name = users[i].name;
//  	const age = users[i].age
// 	const status = users[i].status
//  	const adres = users[i].address
//  	let div = document.createElement('div');
//  	div.innerText=  name + age + status + adres;
//  	console.log(div);
//  }
// for (let i = 0; i < users.length; i++) {
// 	const user = users[i];
// 	const div = document.createElement('div');
// 	const h3 = document.createElement('h3');
// 	const p1 = document.createElement('p');
// 	const p2 = document.createElement('p');
//
// 	h3.innerText = user.name;
// 	p1.innerText = user.age;
// 	p2.innerText = user.address;
// }

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// for (let i = 0; i < users.length; i++) {
// 	const user = users[i];
// 	const div = document.createElement('div');
// 	const h3 = document.createElement('h3');
// 	const p1 = document.createElement('p');
// 	const p2 = document.createElement('p');
//
// 	h3.innerText = user.name;
// 	p1.innerText = user.age;
// 	p2.innerText = user.address;
//
// 	div.appendChild(h3);
// 	div.appendChild(p1);
// 	div.appendChild(p2);
//
// 	document.body.appendChild(div);
// }

// розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
//
// for (let i = 0; i < users.length; i++) {
// 	const user = users[i];
// 	const div = document.createElement('div');
// 	const name= document.createElement('h3');
// 	const age = document.createElement('p');
// 	const status = document.createElement('p');
// 	const address = document.createElement('div');
//
// 	for ( const item of user.address){
// 		item.innerHTML = item;
// 		address.appendChild(item);
// 	}
//
// 	name.innerText = user.name;
// 	age.innerText = user.age;
// 	status.innerText = user.status;
//
// 	div.appendChild(name);
// 	div.appendChild(age);
// 	div.appendChild(status);
// 	div.appendChild(address)
//
// 	document.body.appendChild(div);
// }

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//             let usersWithId = [
//             {id: 1, name: 'vasya', age: 31, status: false},
//             {id: 2, name: 'petya', age: 30, status: true},
//             {id: 3, name: 'kolya', age: 29, status: true},
//             {id: 4, name: 'olya', age: 28, status: false},];
//             let citiesWithId = [
//             {user_id: 3, country: 'USA', city: 'Portland'},
//             {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//             {user_id: 2, country: 'Poland', city: 'Krakow'},
//             {user_id: 4, country: 'USA', city: 'Miami'},];
// // З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// let arr = []
// for ( let user of usersWithId){
// 	for ( let city of citiesWithId){
// 		if ( user.id == city.user_id){
// 			user.address = city;
// 		}
// 	}
// }
// console.log(usersWithId);
//
// for ( let arr of usersWithId){
// 	arr.push(usersWithId)
// }
// let userCities = [];
// for (let i = 0; i < usersWithId.length; i++) {
// 	userCities[i] = usersWithId[i];
// 	for ( let city of citiesWithId){
// 		if (city.user_id === userCities[i].id){
// 			userCities[i].address = city;
// 		}
// 	}
//
// }
// console.log(userCities);
//
// Записати цей об'єкт в новий масив
// Частковий приклад реультату:
// let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false, address: {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....]

//
// - створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу
// let ids = document.getElementById('one')
// let clase = document.getElementsByClassName('world')
// console.log(ids);
// console.log(clase);
// - змінити цей текст використовуючи селектори id, class,tag
// ids.innerText = 'Привіт';
// for (let i = 0; i < clase.length; i++) {
// 	clases = clase[i];
// 	clases.innerText = 'Як ти?';
// }
// clase[0].innerText = 'Як ти?';
// - змінити висоту та ширину блоку використовуючи селектори id, class,  tag
// ids.style.width = '200px';
// ids.style.backgroundColor = 'blue';
// ids.style.height = '200px';
// ids.style.display = 'flex';
// clases.style.width = '200px';
// clases.style.backgroundColor = 'yellow';
// clases.style.height = '200px';
// - за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені
// const table =document.createElement('table')
// const tr = document.createElement('tr')
// const td = document.createElement('td')
// const td1 = document.createElement('td')
// const td2 = document.createElement('td')
//
// tr.appendChild(td);
// tr.appendChild(td1);
// tr.appendChild(td2);
//
// table.appendChild(tr)
//
// document.body.appendChild(table)

// - за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені
// const table =document.createElement('table')
// for (let i = 0; i < 10; i++) {
//     const tr = document.createElement('tr')
//     for (let i = 0; i < 3; i++) {
//         const td = document.createElement('td')
//         tr.appendChild(td)
//     }
//     table.appendChild(tr)
// }
// document.body.appendChild(table)

// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені
// const table = document.createElement('table')
// for (let i = 0; i < 10;i++){
//     let tr = document.createElement('tr')
//     for (let i = 0; i < 5; i++) {
//         let td = document.createElement('td')
//         tr.appendChild(td)
//     }
// table.appendChild(tr)
// }
// document.body.appendChild(table)

// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені. n та m отримати з prompt
// const table = document.createElement('table')
// let tr = prompt('Скільки?')
// let td = prompt('Скільки?')
// for (let i = 0; i < tr;i++){
//     let tr = document.createElement('tr')
//     for (let i = 0; i < td; i++) {
//         let td = document.createElement('td')
//         tr.appendChild(td)
//     }
// table.appendChild(tr)
// }
// document.body.appendChild(table)

// --Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл. У файлі прописати наступні доступи та дії
//  - знайти всі елементі, які мають class
//  - знайти всі параграфи ,та змінити текст на hello oktenweb!
//  - знайти всі div та змінити ім колір на червоний
// let cl =document.getElementsByTagName('rules')
// console.log(cl);
// let text = document.getElementsByTagName('p')
// for (let i = 0; i < text.length; i++) {
//     let texts = text[i];
//     texts.innerText = "hello oktenweb!";
// }
// console.log(text);
// let div = document.getElementsByTagName('div')
// for (let i = 0; i < div.length; i++) {
//     const elementDiv = div[i];
//     elementDiv.style.color = 'red';
//
// }
// console.log(div);

// ============
// ====class===
// ============
// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2)
// характеризують тему контенту яка вказана в параграфі.
// створити скрипт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li),
// який буде змістом того, що знаходиться на сторінці.
// Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.
//
// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить
// з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
//
// 			let rules = [
// 				{
// 					title: 'Первое правило Бойцовского клуба.',
// 					body: 'Никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Второе правило Бойцовского клуба.',
// 					body: 'Никогда никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Третье правило Бойцовского клуба.',
// 					body: 'В схватке участвуют только двое.'
// 				},
// 				{
// 					title: 'Четвертое правило Бойцовского клуба.',
// 					body: 'Не более одного поединка за один раз.'
// 				},
// 				{
// 					title: 'Пятое правило Бойцовского клуба.',
// 					body: 'Бойцы сражаются без обуви и голые по пояс.'
// 				},
// 				{
// 					title: 'Шестое правило Бойцовского клуба.',
// 					body: 'Поединок продолжается столько, сколько потребуется.'
// 				},
// 				{
// 					title: 'Седьмое правило Бойцовского клуба.',
// 					body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
// 				},
// 				{
// 					title: 'Восьмое и последнее правило Бойцовского клуба.',
// 					body: 'Новичок обязан принять бой.'
// 				},
//
// 			];
//
// for (let i = 0; i < rules.length; i++) {
// let div = document.createElement('div')
// }
