// - Дана textarea.
//     В неё вводится текст.
//     Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.
//
// let textarea = document.getElementById('text')
// textarea.oninput = () => {
//     localStorage.setItem('textarea',textarea.value)
//     textarea.value = localStorage('textarea')
// }

// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
//     Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
//     Сделайте ваш скрипт как можно более универсальным.
//
// let radio = document.getElementById('radio')
// let input = document.getElementById('input')
// let check = document.getElementById('check')
// let selector = document.getElementById('salo')
// let area = document.getElementById('text')
//
// input.oninput = () => {
//     localStorage.setItem('input' , input.value)
// }
// area.oninput = () => {
//     localStorage.setItem('area' , area.value)
// }
// selector.oninput = () => {
//     localStorage.setItem('selector' , selector.value)
// }
// check.oninput = () => {
//     localStorage.setItem('check', check.checked)
// }
// radio.oninput = () => {
//     localStorage.setItem('radio',radio.checked)
// }
// check.checked = localStorage.getItem('check')
// radio.checked = localStorage.getItem('radio')
// area.value = localStorage.getItem('area')
// input.value = localStorage.getItem('input')
// selector.value = localStorage.getItem('selector')

// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище),
// затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться
// по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).
//
// let area = document.getElementById('text')
// let btn1 = document.createElement('button')
// let btn2 = document.createElement('button')
// let btn3 = document.createElement('button')
// document.body.appendChild(btn1)
// document.body.appendChild(btn2)
// document.body.appendChild(btn3)
// btn2.innerText = '<---'
// btn3.innerText = '--->'
// btn1.innerText = 'Save'
// let index = 0;
// let max = localStorage.length -2;
// let min = 1;
//
// btn1.onclick = (ev) =>{
//     if ( area.value !== ''){
//         index+=1;
//         localStorage.setItem(index,area.value)
//     }
// }
//
// btn2.onclick = (ev) =>{
//     if (min <= index){
//         index = index - 1;
//     }
//     area.value = localStorage.getItem(index)
// }
//
// btn3.onclick = (ev) =>{
//     if (max >= index){
//         index = index + 1;
//     }
//     area.value = localStorage.getItem(index)
// }
//
// window.onload = function () {
//     const i = localStorage.getItem('index');
//     if(i) {
//         index = i ;
//     }
//     console.log(index);
// }

// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
// Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма,
// в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта
//
let content = document.getElementById('content')
let form = document.forms.form1
let arrUsers = 'arrUsers'
let tempUser = {};

form.submit1.onclick = ev => {
    ev.preventDefault()
    let person = {};
    for (let i = 0; i < form.children.length; i++) {
        const formElement = form.children[i];
        if (formElement.name && formElement.type !== 'submit' ){
         person[formElement.name] = formElement.value;
        }
    }
    person.id = new Date().getTime();
    console.log(person);
    save(person)
}
function save(user){
    if (localStorage.hasOwnProperty(arrUsers)){
        localStorage.getItem(arrUsers)
        let arrayU = JSON.parse(localStorage.getItem(arrUsers))
        let find = arrayU.find(value => value.id === user.id)
        if (find){
            let filter = arrayU.filter(value => value.id !== user.id);
            filter.push(user)
            localStorage.setItem(arrUsers,JSON.stringify(filter))
        }else {
            arrayU.push(user)
            localStorage.setItem(arrUsers,JSON.stringify(arrayU));
        }
    }else{
        localStorage.setItem(arrUsers,JSON.stringify([user]))
    }
}

function getData(){
    if (localStorage.hasOwnProperty(arrUsers)){
        let arrUser = JSON.parse(localStorage.getItem(arrUsers))
        for (const user of arrUser) {
            content.appendChild(cDiv(user))
        }
    }
}
getData()
function cDiv (user){
    let div = document.createElement("div")
    for (const key in user) {
           let p = document.createElement('p')
           p.innerText = key + '' + user[key];
           div.appendChild(p)
    }
    div.style.width='200px'
    div.style.display='flex'
    div.style.border='black 1px solid'

    let btn1 = document.createElement('button')
    let btn2 = document.createElement('button')
    btn1.innerText = 'Del'
    btn2.innerText = 'Change'
    btn1.onclick = function (){
        console.log(user.id)

    }
    btn2.onclick = function (){
        console.log(user.id)
    }
    document.body.appendChild(btn1)
    document.body.appendChild(btn2)

    return div;
}







