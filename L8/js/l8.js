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
let name = document.getElementById('input')
let phone= document.getElementById('input2')
let mail = document.getElementById('input3')
let firma = document.getElementById('input4')
let departament = document.getElementById('input5')
let birthday = document.getElementById('input6')
let btn = document.getElementById('btn')
btn.innerText = 'Save';
let index = 0;

btn.onclick = () => {
    index += 1
    localStorage.setItem('index', index)
    if (name.value !== '') {
        localStorage.setItem('name' + index, name.value)
    }
    if (phone.value !== '') {
        localStorage.setItem('phone' + index, phone.value)
    }
    if (mail.value !== '') {
        localStorage.setItem('mail' + index, mail.value)
    }
    if (firma.value !== '') {
        localStorage.setItem('firma' + index, firma.value)
    }
    if (departament.value !== '') {
        localStorage.setItem('departament' + index, departament.value)
    }
    if (birthday.value !== '') {
        localStorage.setItem('birthday' + index, birthday.value)
    }
    window.onload = function () {
        let flag = localStorage.getItem('index')
        if (flag) {
            index += flag
        }
        for (let i = 0; i <= flag.length; i++) {
            if (localStorage.getItem(name + 1) !== '') {
                let div = document.createElement('div')
                document.body.appendChild(div)
                div.innerText = localStorage.getItem(name + i)
                let deleted = document.createElement('button')
                let change = document.createElement('button')
                div.appendChild(deleted)
                div.appendChild(change)
                deleted.innerText = 'Deleted'
                change.innerText = 'Change'

            }
        }
    }
}










