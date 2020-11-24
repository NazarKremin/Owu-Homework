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

// let arrText =[]
// arrText.push(prompt('Введіть речення (Максимум 11 знаків)'))
// let div =document.getElementById('div')
//
// function wordOne(text){
//     return new Promise(((resolve, reject) => {
//         let random=Math.floor((Math.random() * (1 - 0.3) + 0.3)* 10) / 10;
//         console.log(random)
//         setTimeout(() => {
//
//                 let oneText=text[0].substr(0,1)
//
//                 if (oneText!=='' ){
//                     resolve(div.innerText=`${oneText}`);
//                 }else {
//                     reject('Текст введено');
//                 }
//             },
//             random*=1000)
//
//
//     }))
// }
// function wordTwo(text,arrtext){
//     return new Promise(((resolve, reject) => {
//         let random=Math.floor((Math.random() * (1 - 0.3) + 0.3)* 10) / 10;
//         console.log(random)
//         setTimeout(() => {
//             let twoText=arrtext[0].substr(1,1)
//
//             if (twoText!=='' ){
//                 resolve(div.innerText=`${text}${twoText}`);
//             }else {
//                 reject('Текст введено');
//             }
//         }, random*=1000);
//
//     }))
// }
// function wordThree(text,arrtext){
//     return new Promise(((resolve, reject) => {
//         let random=Math.floor((Math.random() * (1 - 0.3) + 0.3)* 10) / 10;
//         console.log(random)
//         setTimeout(() => {
//             let threeText=arrtext[0].substr(2,1)
//
//             if (threeText!=='' ){
//                 resolve(div.innerText=`${text}${threeText}`);
//             }else {
//                 reject('Текст введено');
//             }
//         }, random*=1000);
//
//     }))
// }
// function wordFour(text,arrtext){
//     return new Promise(((resolve, reject) => {
//         let random=Math.floor((Math.random() * (1 - 0.3) + 0.3)* 10) / 10;
//         console.log(random)
//         setTimeout(() => {
//             let fourText=arrtext[0].substr(3,1)
//
//             if (fourText!=='' ){
//                 resolve(div.innerText=`${text}${fourText}`);
//             }else {
//                 reject('Текст введено');
//             }
//         }, random*=1000);
//
//     }))
// }
// function wordFive(text,arrtext){
//     return new Promise(((resolve, reject) => {
//         let random=Math.floor((Math.random() * (1 - 0.3) + 0.3)* 10) / 10;
//         console.log(random)
//         setTimeout(() => {
//             let fiveText=arrtext[0].substr(4,1)
//
//             if (fiveText!=='' ){
//                 resolve(div.innerText=`${text}${fiveText}`);
//             }else {
//                 reject('Текст введено');
//             }
//         }, random*=1000);
//
//     }))
// }
// function wordSix(text,arrtext){
//     return new Promise(((resolve, reject) => {
//         let random=Math.floor((Math.random() * (1 - 0.3) + 0.3)* 10) / 10;
//         console.log(random)
//         setTimeout(() => {
//             let sixText=arrtext[0].substr(5,1)
//
//             if (sixText!=='' ){
//                 resolve(div.innerText=`${text}${sixText}`);
//             }else {
//                 reject('Текст введено');
//             }
//         }, random*=1000);
//
//     }))
// }
// function wordSeven(text,arrtext){
//     return new Promise(((resolve, reject) => {
//         let random=Math.floor((Math.random() * (1 - 0.3) + 0.3)* 10) / 10;
//         console.log(random)
//         setTimeout(() => {
//             let sevenText=arrtext[0].substr(6,1)
//
//             if (sevenText!=='' ){
//                 resolve(div.innerText=`${text}${sevenText}`);
//             }else {
//                 reject('Текст введено');
//             }
//         }, random*=1000);
//
//     }))
// }
// function wordEight(text,arrtext){
//     return new Promise(((resolve, reject) => {
//         let random=Math.floor((Math.random() * (1 - 0.3) + 0.3)* 10) / 10;
//         console.log(random)
//         setTimeout(() => {
//             let eightText=arrtext[0].substr(7,1)
//
//             if (eightText!=='' ){
//                 resolve(div.innerText=`${text}${eightText}`);
//             }else {
//                 reject('Текст введено');
//             }
//         }, random*=1000);
//
//     }))
// }
// function wordNine(text,arrtext){
//     return new Promise(((resolve, reject) => {
//         let random=Math.floor((Math.random() * (1 - 0.3) + 0.3)* 10) / 10;
//         console.log(random)
//         setTimeout(() => {
//             let nineText=arrtext[0].substr(8,1)
//
//             if (nineText!=='' ){
//                 resolve(div.innerText=`${text}${nineText}`);
//             }else {
//                 reject('Текст введено');
//             }
//         }, random*=1000);
//
//     }))
// }
// function wordTen(text,arrtext){
//     return new Promise(((resolve, reject) => {
//         let random=Math.floor((Math.random() * (1 - 0.3) + 0.3)* 10) / 10;
//         console.log(random)
//         setTimeout(() => {
//             let tenText=arrtext[0].substr(9,1)
//
//             if (tenText!=='' ){
//                 resolve(div.innerText=`${text}${tenText}`);
//             }else {
//                 reject('Текст введено');
//             }
//         }, random*=1000);
//
//     }))
// }
//
// function wordEleven(text,arrtext){
//     return new Promise(((resolve, reject) => {
//         let random=Math.floor((Math.random() * (1 - 0.3) + 0.3)* 10) / 10;
//         console.log(random)
//         setTimeout(() => {
//             let elevenText=arrtext[0].substr(10,1)
//
//             if (elevenText!=='' ){
//                 resolve(div.innerText=`${text}${elevenText}`);
//             }else {
//                 reject('Текст введено');
//             }
//         }, random*=1000);
//
//     }))
// }
// function wordTwelve(text,arrtext){
//     return new Promise(((resolve, reject) => {
//         let random=Math.floor((Math.random() * (1 - 0.3) + 0.3)* 10) / 10;
//         console.log(random)
//         setTimeout(() => {
//             let twelveText=arrtext[0].substr(11,1)
//
//             if (twelveText!=='' ){
//                 resolve(div.innerText=`${text}${twelveText}`);
//             }else {
//                 reject('Текст введено');
//             }
//         }, random*=1000);
//
//     }))
// }
// async function Text() {
//     try {
//         const one = await wordOne(arrText)
//         console.log(one)
//         const two = await wordTwo(one, arrText)
//         console.log(two)
//         const three = await wordThree(two, arrText)
//         console.log(three)
//         const four = await wordFour(three, arrText)
//         console.log(four)
//         const five = await wordFive(four, arrText)
//         console.log(five)
//         const six = await wordSix(five, arrText)
//         console.log(six)
//         const seven =await wordSeven(six,arrText)
//         console.log(seven)
//         const eight=await wordEight(seven,arrText)
//         console.log(eight)
//         const nine=await  wordNine(eight,arrText)
//         console.log(nine)
//         const ten=await wordTen(nine,arrText)
//         console.log(ten)
//         const eleven=await wordEleven(ten,arrText)
//         console.log(eleven)
//         const twelve=await wordTwelve(eleven,arrText)
//         console.log(twelve)
//
//     }catch (e){
//         console.log(e)
//         alert(e)
//     }
// }
// Text()