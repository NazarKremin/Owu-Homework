// Реалізувати друкарську машинку.
//     У вас є текст "Hello World". (або юудь який інший на ваш розсуд)
// Ваша функція має друкувати цей текст по 1 симоволу в браузері.
//     КОЖНА нова буква має бути з РАНДОМНОЮ заутримкою від 0.1 до 1 секунди.
//     Цим самим ви маєте симулювати написання даного тексту юзером.
//     Приклад: "Hello"
// Затримки:
// H (затримка 0.6)
// e (затримка 0.1)
// l (затримка 0.3)
// l (затримка 0.7)
// о (затримка 1)

// function H(){
//     return new Promise(resolve => {
//         setTimeout(()=>{
//             resolve('H')
//         },600)
//     })
// }
// function e(){
//     return new Promise(resolve => {
//         setTimeout(()=>{
//             resolve('e')
//         },100)
//     })
// }
// function l(){
//     return new Promise(resolve => {
//         setTimeout(()=>{
//             resolve('l')
//         },300)
//     })
// }
// function ll(){
//     return new Promise(resolve => {
//         setTimeout(()=>{
//             resolve('l')
//         },700)
//     })
// }
// function o(){
//     return new Promise(resolve => {
//         setTimeout(()=>{
//             resolve('o')
//         },1000)
//     })
// }
//
// async function printer(){
//     try {
// const one = await H()
//     console.log(one);
//         document.write(one);
// const two = await e()
//     console.log(two);
//         document.write(two);
// const three = await l()
//     console.log(three);
//         document.write(three);
// const four = await ll()
//     console.log(four);
//         document.write(four);
// const fifth = await o()
//     console.log(fifth);
//         document.write(fifth);
//     } catch (e){
//
//     }
// }
// printer()

// function random(ms){
//     return Math.round(Math.random() * ms);
// }
// let div = document.getElementById('div')
//
// function input(text){
//     return new  Promise(resolve => {
//             setTimeout(()=>{
//                 div.innerHTML += text;
//              resolve()
//          },random(1000))
//     })
// }
//
// async function output(){
//     let prompt1 = prompt("")
//     let texts = prompt1.split('')
//     for (const string of texts){
//        await input(string);
//     }
//
// }
// output()