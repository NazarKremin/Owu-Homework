//- створити функцію яка виводить масив
// let arr =[1,2,3]
// function array (){
//     console.log(arr)
// }
// array();

// - створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.
// function randomArr( x, y , z){
//     let arr = [];
//
// }
// randomArr(1,2,3)


// - створити функцію яка приймає три числа та виводить та повертає найменьше.
// function number (x, y, z){
//
//     if (x > y && x > z){
//         return x;
//     }
//     if (x < y && y > z){
//         return y;
//     }
//     if (x < y && y < z && x < z){
//         return z;
//     }
// }
//
// console.log(number(100, 101, 102));

// - створити функцію яка приймає три числа та виводить та повертає найбільше.
// function number(x,y,z){
//     let min;
//     if (x < y && x < z) min = x;
//     if ( x > y && y< z) min = y;
//     if (x > z && z < y) min = z;
//
//     return min;
//
// }
//
// let minNum = number(5, 5, 4);
// console.log(minNum);

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// function maxNumber (x,y,z){
//     let max;
//     if (x > y && x > z) max = x ;
//     if ( x < y && y > z) max = y ;
//     if ( x < z && y < z) max = z;
//
//     return max;
// }
//
// let maxNum = maxNumber(100 , 150 ,25);
// console.log(maxNum);

// - створити функцію яка виводить масив
//
// function arr(){
//     let car = []
//     for (let i = 0; i < 10; i++) {
//         console.log(i)
//     }
// }
// arr()

// - створити функцію яка повертає найбільше число з масиву
// function BigNumber(x,y,z){
//     let bigNum;
//     if ( x > y && x > z) bigNum = x;
//     if ( x < y && y > z) bigNum = y;
//     if ( z > x && y < z) bigNum = z;
//
//     return bigNum;
// }
//
// let num = BigNumber(40, 150,60)
// console.log(num);
//

// - створити функцію яка повертає найменьше число з масиву
//
// function minNum (x,y,z){
//     let minimum;
//     if ( x < y && x < z) minimum = x;
//     if ( x > y && y < z) minimum = y;
//     if ( x > z && y > z) minimum = z;
//
//     return minimum;
// }
//
// let min = minNum(999,155,333);
// console.log(min);
//
// - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
// let array = [1, 2, 3, 4, 5];
// function arrNumber(arr){
//     let sum = 0;
//     for (const arrElement of arr) {
//         sum += arrElement;
//     }
//
//     return sum;
// }
//
// console.log(arrNumber(array));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let array = [34,21,56,2,1]
// function ser(){
//     let dil = 0;  // через нуль проходять всі числа масиву і додаються між собою
//     for (const number of array) {
//        dil += number;
//        let res = dil/=2;
//     }
//     return dil;
// }
// console.log(ser(array));

// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
//
// let array = [{name:'Vasil',
//     age:23,
//     isWife:false,
//      country:{
//     city:'Lviv',
//      }} ,
//     {Base:false}];
// function obj (){
//     for (let i = 0; i < array.length; i++) {
//     }
//     return array.length
// }
//
// console.log(obj());

// - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них
//
// function obj(first){
// let con= first.join('')
//
// return con.length
//
// }
//
// console.log(obj(['one', 5, true, 4, 5, true, 'fff']));


// - створити функцію  яка складає значення елементів з однаковими індексами  та повертає новий результуючий масив.
// function twins (x,y) {
//     let res = [];
//     for (let i = 0; i < x.length; i++) {
//         res[i]= x[i] + y[i];
//         {
//
//         }
//     }
//     return res;
// }
//
// console.log(twins([1, 2, 3, 4], [2, 3, 4, 5]));
//   результат
//   [3,5,7,9]

// - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"

// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100 // push
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
//
// let pus= [];
// function perenos(x,y,){
//     for (let i=(x.length-1);i>=0;i=i-1) {
//         if ( x[i] === 0) pus.push(x[i]);
//         if ( x[i] !== 0) pus.unshift(x[i]);
//     } for (let i=(y.length-1);i>=0;i=i-1) {
//         if ( y[i] === 0) pus.push(y[i]);
//         if ( y[i] !== 0) pus.unshift(y[i]);
//     }
//
//
//     return pus;
// }
//
// console.log(perenos([1, 0, 6, 0, 3,],[0,1,2,3,4]));
//

// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"
// function bodyDiv (){
//     let div = document.createElement('div')
//     div.innerText = "Hello owu"
//     console.log(div);
// }
// bodyDiv()
//

// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
//  function bodyDiv(text,typeElement){
//      let tag = document.createElement('typeElement')
//      tag.innerHTML = text;
//      document.body.appendChild(tag)
// }
//  bodyDiv(123)


let arrCar = [{
    Bmw:{
        marka: 'X5', year: '2011', horses:300, color:'white',
        driver:{name:'Andriy', age:25, stage:5
        }
    },
    Kia:{  marka: 'Sorento', year: '2012', horses:120,  color:'brown',
        driver:{ name:'Andriy', age:25, stage:5
        }
    },
    Mercedes:{marka: 'w213', year: '2016', horses:630, color:'silver',
        driver:{name:'Andriy', age:25, stage:5
        }
    },
    Skoda:{marka: 'Fabia', year: '2008', horses:70, color:'white',
        driver:{name:'Andriy', age:25, stage:5
        }
    }
}];
//
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно
// додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Всі властивості авто в обному блоці
// - приймає масив автомобілів (можна взяти з попередніх дз ),та
// індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок
// function addCar () {
//     let ul = document.createElement('ul')
//     for (let i = 0; i < arrCar.length; i++) {
//         let id = 'id' +i;
//         console.log(arrCar[i] + id);
//     }
// }
// addCar()

//
// (на основі минулого ДЗ)
// **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в
// один об'єкт користувача та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.
// Приклад масивів:
//  let usersWithId = [
//  {id: 1, name: 'vasya', age: 31, status: false},
//  {id: 2, name: 'petya', age: 30, status: true},
//  {id: 3, name: 'kolya', age: 29, status: true},
//  {id: 4, name: 'olya', age: 28, status: false},];
//
//  let citiesWithId = [
//  {user_id: 3, country: 'USA', city: 'Portland'},
//  {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//  {user_id: 2, country: 'Poland', city: 'Krakow'},
//  {user_id: 4, country: 'USA', city: 'Miami'},];
// function plus (){
// for ( let user of usersWithId){
// 	for ( let city of citiesWithId){
// 		if ( user.id === city.user_id){
// 			user.address = city;
// 		}
// 	}
// }
// console.log(usersWithId);
// }
// plus()
//
// ===========додаткове від віктора========
// 1) Точная степень двойки.
// Дано натуральное число N.
// Выведите слово YES, если число N является точной степенью двойки,
// или слово NO в противном случае.
// Операцией возведения в степень пользоваться нельзя!
//
// 2) Deep Copy
// реалізувати глибоке копіювання обєкту за допомогою рекурсій
//
// 3) Flat
// Вирівняти багаторівневий масив в однорівневий
// let arr1 = [1,3, ['Hello', 'Word', [9,6,1]], ['oops'], 9] [1, 3, 'Helo', 'Wordd', 9, 6, 1, 'oops', 9];
// let flat = arr1.flat(7)
// console.log(flat);
// ===========додаткове========
// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false},];
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'},];
// // З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// for ( let user of usersWithId){
//     for ( let city of citiesWithId){
//         if ( user.id == city.user_id){
//             user.address = city;
//         }
//     }
// }
// console.log(usersWithId);
//
//
// //

