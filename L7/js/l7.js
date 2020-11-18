// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
//
// let div = document.createElement('id')
// div.innerText = 'text';
// let btn = document.createElement('button')
// btn.innerText = 'REMOVE!';
// btn.onclick = (ev => {
//     div.style.display = 'none'
//     console.log('REMOVE');
// })
// document.body.appendChild(btn)
// document.body.appendChild(div)

//- Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// let btn = document.createElement('button')
// btn.innerText = 'Invisible';
// btn.onclick = (ev => {
//     // btn.style.display = "none"
//     //ev.target.style.display = 'none';
// })
// document.body.appendChild(btn)

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// let input = document.createElement('input',)
// let btn = document.createElement('button')
// btn.innerText = 'Confrim';
// document.body.appendChild(input)
// document.body.appendChild(btn)
// btn.onclick = (ev => {
//     console.log(input.value);
//     if (input.value > 18){
//         alert('Заходь')
//     }
//     if (input.value < 18){
//         alert('Пока')
//     }
// });

// - Создайте меню, которое раскрывается/сворачивается при клике
//
// let menu1 = document.getElementById('a1')
// let menu2 = document.getElementById('subMenu')
// let active = false;
// menu1.onclick = ev => {
//     if(active){
//         menu2.style.display='block';
//         active = false;
//     }else{
//        menu2.style.display = 'none'
//        active = true;
//    }
// }

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
// let ab = {title : 'lorem', body:'lorem ipsum dolo sit ameti'};
// let ac = {title : 'lorem2124', body:'lorem ipsum dolo sit ameti214214'}
// let ul1 = document.createElement('ul')
// let li1 = document.createElement('li')
// let li2 = document.createElement('li')
// let ul2 = document.createElement('ul')
// let li3 = document.createElement('li')
// let li4 = document.createElement('li')
// let btn1 = document.createElement('button')
// let btn2 = document.createElement('button')
// btn1.innerText = 'Invisible';
// btn2.innerText = 'Invisible';
//
// let active = false;
// btn1.onclick = ev => {
//     if(active){
//         li1.style.display='block';
//         active = false;
//     }else{
//        li1.style.display = 'none'
//        active = true;
//    }
// }
//
// btn2.onclick = ev => {
//     if(active){
//         li3.style.display='block';
//         active = false;
//     }else{
//         li3.style.display = 'none'
//         active = true;
//     }
// }
//
// li1.innerText = ab.title
// li2.innerText = ab.body
// li3.innerText = ac.title
// li4.innerText = ac.body
//
// ul1.appendChild(li1)
// ul1.appendChild(li2)
// ul2.appendChild(li3)
// ul2.appendChild(li4)
// ul1.appendChild(btn1)
// ul2.appendChild(btn2)
// document.body.appendChild(ul1)
// document.body.appendChild(ul2)
// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
//

// - Створити функцію, яка генерує таблицю.
//     Перший аргумент визначає кількість строк.
//     Другий параметр визначає кліькіть ячеєк в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати.
//
// function createEmlement(rows,cols,tag){
//     let table = document.createElement('table')
//     for (let i = 0; i < rows; i++) {
//         let tr = document.createElement('tr')
//         table.appendChild(tr)
//         for (let j = 0; j < cols; j++) {
//             let td = document.createElement('td')
//             tr.appendChild(td)
//             td.innerText = '123';
//         }
//     }
//     tag.appendChild(table)
// }
// createEmlement(3,4,conten)
//
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
//
// let btn = document.createElement('button')
// btn.innerText = 'Зчитати'
//
// btn.onclick = ev => {
//     let a = document.forms.form.input1.value
//     let b = document.forms.input2.value
//     let c = document.forms.input3.value
// }
// function createEmlement(input1,input2,input3){
//     let table = document.createElement('table')
//     for (let i = 0; i < input1; i++) {
//         let tr = document.createElement('tr')
//         table.appendChild(tr)
//         for (let j = 0; j < input2; j++) {
//             let td = document.createElement('td')
//             tr.appendChild(td)
//             td.innerText = '123';
//         }
//     }
//
// }
// document.body.appendChild(btn)
// createEmlement(1,2,3)

// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
// let i = 1;
// for(let li of carousel.querySelectorAll('li')) {
//     li.style.position = 'relative';
//     li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
//     i++;
// }
//
//
// let width = 130;
// let count = 3;
//
// let list = carousel.querySelector('ul');
// let listElems = carousel.querySelectorAll('li');
//
// let position = 0;
//
// carousel.querySelector('.prev').onclick = function() {
//     position += width * count;
//     position = Math.min(position, 0)
//     list.style.marginLeft = position + 'px';
// };
//
// carousel.querySelector('.next').onclick = function() {
//     position -= width * count;
//     position = Math.max(position, -width * (listElems.length - count));
//     list.style.marginLeft = position + 'px';
// };
//

// - Сворити масив не цензцрних слів.
// let arr = ["xxx",'yyy','iii']
// //     Сворити інпут текстового типу.
// //     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// // кинути алерт з попередженням.
// //     Перевірку робити при натисканні на кнопку
// let input = document.createElement('input')
// let btn = document.createElement('button')
// btn.innerText = 'Go!'
// btn.onclick = ev => {
//     for (let i = 0; i < arr.length; i++) {
//         if (input.value === arr[i]){
//             alert('Айайа')
//         }
//
//     }
// }
//
// document.body.appendChild(input)
// document.body.appendChild(btn)

//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
// //     Перевірку робити при натисканні на кнопку
// let arr = ["xxx",'yyy','iii']
// let input = document.createElement('input')
// let btn = document.createElement('button')
// input.setAttribute('type', 'text')
// btn.innerText = 'Go!'
// let check = input
//
// document.body.appendChild(input)
// document.body.appendChild(btn)
// document.body.appendChild(btn)


//
//
// -- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление
// по всем заголовкам которые есть в тексте.
//     При клике на пункт оглавления вы должны отправляться к этому пункту в тексте
//
// let h2 = document.getElementsByTagName('h2')
// let contenta = document.getElementById('content')
// let ula = document.createElement('ul')
// for (let i = 0; i < h2.length; i++) {
//     let li = document.createElement('li')
//     let a = document.createElement('a')
//     let yakor = 'yakor' +i;
//     a.href = '#'+yakor;
//     h2[i].setAttribute('id',yakor);
//     a.innerHTML = h2[i].innerText;
//     li.appendChild(a);
//     ula.appendChild(li);
// }
// contenta.appendChild(ula);
// contenta.style.float = 'right';

// -- взять массив пользователей
// let usersWithAddress = [
//     {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//     {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//     {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//     {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//     {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//     {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//     {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//     {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//     {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
// ];
//
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива.
// Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ

// let input1 = document.createElement('input')
// let input2 = document.createElement('input')
// let input3 = document.createElement('input')
// input1.setAttribute('type','checkbox')
// input2.setAttribute('type','checkbox')
// input3  .setAttribute('type','checkbox')
// let btn = document.createElement('button')
// btn.innerText = 'Go!';
//
// btn.onclick = (ev => {
//     if (input1.checked){
//         let filter1 = usersWithAddress.filter(value => value.status === false)
//         let json1 = JSON.stringify(filter1)
//         document.write(json1);
//     }
//     if (input2.checked){
//         let filter2 = usersWithAddress.filter(value => value.age > 29)
//         let json2 = JSON.stringify(filter2)
//         document.write(json2)
//     }
//
//     if (input3.checked){
//         let filter3 = usersWithAddress.filter(value => value.address.city === 'Kyiv')
//         let json3 = JSON.stringify(filter3)
//         document.write(json3)
//     }
//
// })
//
// // let clone = usersWithAddress.filter(value => value.status === false)
// // let ss = JSON.stringify(clone)
// // document.write( ss);
//
// document.body.appendChild(input1)
// document.body.appendChild(input2)
// document.body.appendChild(input3)
// document.body.appendChild(btn)
//
//
//
// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
//     Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне
//
//
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан

// let arrUsers = 'arrUsers'
// let tempUser = {};
//
// let form = document.getElementById('form1')
//
// form.submit.onclick = ev => {
//     let person = {};
//     for (let i = 0; i < form.children.length; i++) {
//         const formElement = form.children[i];
//         if (formElement){
//
//         }
//     }
// }

