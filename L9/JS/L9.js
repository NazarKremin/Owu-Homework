// Треба реалізувати свій розпорядок дня.
//     Колбеками, промісами та асинк авейт.
//
//     В дні має бути від 7 до 10 подій. Всі події мають мати описані успішні та не успішні варіанти виконання.
//     Має бути так
// 1) прокинувся
// 2) Поснідав
// 3) почистав зуби
// і т.д.
//
//     Якщо щось пішло не так (нема шо їсти), то має бути викинута помилка і решта функцій виконуватись не мають.
//     Якщо ж все ок, то ви маєте прожити свій звичайний день.
//     Кожна подія має бути з рандомною (не по зростанню) затримкою.

//cb,cb hell
// function wake (energy,cb){
//     console.log('Hello world')
//     console.log('Мозок Loading....')
//     setTimeout(()=>{
//         console.log('Dowload Complete')
//         if (energy < 3000){
//             cb('тобі потрібно ще сну', null)
//             return ;
//         }
//         cb(null,'треба йти вмиватись')
//     },5000)
// }
//
// function breakfest (energy,cb){
//     console.log('Прийшов час для сніданку')
//     console.log('Що обереш?')
//     setTimeout(()=>{
//         console.log('Хммм....')
//         if (energy < 1000){
//             cb('Виспався? Ні,тоді випий кави,',null)
//             return
//         }
//          cb('Круто пора їсти',null)
//     },1000)
// }
//
// function mood (energy,cb){
//     console.log('такс, лекцію передивився')
//     console.log('треба піти покушац')
//     setTimeout(()=>{
//         console.log('А ДЗ?')
//         if (energy < 2000){
//             cb(null,'треба підкрипитись')
//             return
//         }
//         cb('Точняк,йду роботи ',null)
//     },3000)
// }
//
// wake(3300,(err,dl)=>{
//     if (err){
//         console.log('Ти коли пішов спати?',err);
//         return
//     }console.log(`Зі мною все гуд ${dl}`)
//
//     breakfest(22800,(err,dl)=>{
//         if (err){
//             console.log(err,'І зарядку не забудь зроибити')
//             return
//         }console.log(` ${dl} ,сьогодні в меню омлет `)
//
//     mood(2800,(err,dl)=>{
//         if (err){
//             console.log('Шось підзамахався',err)
//             return
//         }console.log(`${dl} До вечері маю встигнути... `)
//
//         })
//     })
// });
//
// let energy = 1000;
//
// function msg(msg, en) {
//     console.log(msg);
//     console.log(`залишилось ${en} енергії`)
// }
//
// function wakeUp(en, cb) {
//     setTimeout(() => {
//         en -= 300;
//         if (en <= 0) {
//             cb('Помер')
//             return;
//         }
//         msg('Hello World', en)
//         cb(null, en)
//     }, 2000)
// }
//
// function eat(en, cb) {
//     setTimeout(() => {
//         en += 200;
//         msg('Перекус', en)
//         cb(null, en)
//     }, 1000)
// }
//
// function goToWork(en, cb) {
//     setTimeout(() => {
//         en -= 300;
//         if (en <= 0) {
//             cb('Помер');
//             return;
//         }
//         msg('Прийшов на роботу', en)
//         cb(null, en)
//     }, 500)
// }
//
// function goToHome(en, cb) {
//     setTimeout(() => {
//         en -= 9999999;
//         if (en <= 0) {
//             cb('Помер')
//             return;
//         }
//         msg('Вдома', en)
//         cb(null, en)
//     }, 4000)
// }
//
// function sleep(en, cb) {
//     setTimeout(() => {
//         en = 0
//         msg('Пішов спати', en)
//         cb(null, en)
//     }, 600)
// }
//
// wakeUp(energy, (err,data)=>{
//     if (err){
//         console.log(err);
//         return;
//     }
//         goToWork(data, (err, data)=>{
//             if (err){
//                 console.log(err);
//                 return ;
//             }
//             eat(data, (err, data)=>{
//
//                 goToHome(data, (err, data)=>{
//                     if (err){
//                         console.log(err)
//                         return ;
//                     }
//                     sleep(data, (err, data)=>{
//                     })
//                 })
//             })
//         })
//    })

//Promise
// function wakeUp(energy){
//     console.log('Hello world')
//     console.log('Мозок Loading....')
//     return new Promise((resolve, reject) => {
//      setTimeout(()=>{
//          console.log('Done');
//          if (energy < 2000){
//              reject('Потрібно ще поспати')
//          }
//          resolve('Треба йти вмиватись')
//      },2000)
//     })
// }
//
// function breakfest(energy){
//     return new Promise(resolve => {
//          setTimeout(()=> {
//              if (energy > 2000) {
//                  resolve('Пора снідати')
//              }
//          })
//     })
// }
//
// function mood(energy){
//     console.log('Пора кодити')
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (energy < 2000){
//                 return reject('Потрібно передивитись лекцію')
//             }
//             resolve('На ізі всьо піде')
//         },4000)
//     })
// }
//
// wakeUp(3000)
//     .then(wake =>{
//         console.log(`Все ок ${wake}`)
//         return breakfest(2500)
//     })
//     .then(eat => {
//         console.log(`${eat} Сьогодні в меню ....`)
//         return mood(2100)
//     })
//     .then(code =>{
//         console.log(code)
//     })
//     .catch(err =>{
//         console.log(err);
//     })

//Практикувався)_
// function wake (energy,cb){
//     console.log('Hello world')
//     console.log('Мозок Loading....')
//     setTimeout(()=>{
//         console.log('Dowload Complete')
//         if (energy < 1500){
//             cb('тобі потрібно ще сну', null)
//             return ;
//         }
//              cb(null,'треба йти вмиватись')
//     },4000)
// }
//
// function car (money,whenFind){
//     console.log('Шукаємо машину')
//     console.log('Триває пошук');
//     setTimeout(()=>{
//         console.log('Знайшли')
//         if (money < 1000){
//             whenFind('рекомендую ще підзбирати грошей', null)
//             return
//         }
//         whenFind(null,'BMW X5')
//     },2000)
// }
//
// car(1200,(err,succs)=>{
//     if (err){
//         console.log('Не хватає')
//         console.log('В тебе мало грошей',err)
//         return
//     }
//     console.log(`Ось тачка ${succs}`)
// wake(3000,(err,dl)=>{
//     if (err){
//         console.log('Ти коли пішов спати?',err);
//         return
//     }
//     console.log(`Зі мною все гуд ${dl}`)
// })
// })
//
//==================================================
//

