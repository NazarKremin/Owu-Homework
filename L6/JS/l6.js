// - создать массив с 20 числами.
//  let arr = [1,2,3,4,20,9,15,10,11,5,7,6,12,8,14,16,125,25,823,0];

// -- при помощи метода sort и колбека  отсортировать массив.
// let sort = arr.sort((a, b) => a - b
// )
// console.log(sort)

// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
// let sort2 = arr.sort(((a, b) => a + b))
// console.log(sort2);

// // -- при помощи filter получить числа кратные 3
// let filter1 = arr.filter(value => value % 3)
// console.log(filter1);

// // -- при помощи filter получить числа кратные 10
// let filter2 = arr.filter(value => value % 10)
// console.log(filter2);

// -- перебрать (проитерировать) массив при помощи foreach()
// arr.forEach((value, index) =>{
//     console.log(value, index)
// })

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
// let map = arr.map(value => {
//     return value * 3
//
// })
// console.log(map);
//

// - создать массив со словами на 15-20 элементов.
// let arrGirl = ['Daffni','Percesic','Ceroiz','Leader','Qwerty','Impusim','Jastin','Zark','Kostr','Minas','Eston','Baran','Height','Varks','Promis','Sos','Lol']

// -- отсортировать его по алфавиту в восходящем порядке.
// let sortN = arrGirl.sort((a, b) => {
//     if (a > b){
//         return 1
//     }
// })
// console.log(sortN);

// -- отсортировать его по алфавиту  в нисходящем порядке.
// let sorN = arrGirl.sort((a, b) => {
//     if (a < b){
//         return 1
//     }
// })
// console.log(sorN);

// -- отфильтровать слова длиной менее 4х символов
// let filterFourLenght = arrGirl.filter(value => value.length < 4)
// console.log(filterFourLenght);

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце
// let mapGirl = arrGirl.map(value => value +'!')
// console.log(mapGirl);

// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
//     let users = [ {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true} ];

// - відсортувати його за  віком (зростання , а потім окремо спадання)
// let usersAge = users.sort((a, b) => a.age - b.age)
// console.log(usersAge);
// let usersAge = users.sort((a, b) => b.age - a.age)
// console.log(usersAge);

// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// let sortName = users.sort((a, b) => a.name.length - b.name.length)
// // console.log(sortName);
// let sortName = users.sort((a, b) => b.name.length - a.name.length)
// // console.log(sortName);

// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор
// (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
// let newId = users.map((value, index) => {
//     value.id = index;
//     return value
//         ;
// })
// console.log(newId);

// - відсортувати його за індентифікатором
// let sort = users.sort((a, b) => b.id - a.id )
// console.log(sort);
//


// let cars = [
//     {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
//     {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
//     {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
//     {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
//     {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
//     {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
//     {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
//     {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
//     {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
//     {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
//     {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
//     {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
//     {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230} ];
//

// Відфільтрувати масив за наступними крітеріями :
// - двигун більше 3х літрів
// let filter1 = cars.filter(value => value.volume > 3)
// console.log(filter1);

// - двигун = 2л
// let filter2 = cars.filter(value => value.volume === 2)
// console.log(filter2);

// - виробник мерс
// let filter3 = cars.filter(value => value.producer === "mercedes")
// console.log(filter3);

// - двигун більше 3х літрів + виробник мерседес
// let filter4 = cars.filter(value => value.volume > 3 && value.producer === "mercedes")
// console.log(filter4);

// - двигун більше 3х літрів + виробник субару
// let filter5 = cars.filter(value => value.volume > 3 && value.producer === "subaru")
// console.log(filter5);

// - сили більше ніж 300
// let filter6 = cars.filter(value => value.power > 300)
// console.log(filter6);

// - сили більше ніж 300 + виробник субару
// let filter7 = cars.filter(value => value.power > 300 && value.producer === "subaru")
// console.log(filter7);

// - мотор серіі ej
// let filter8 = cars.filter(value => value.engine.startsWith('ej'))
// console.log(filter8);

// - сили більше ніж 300 + виробник субару + мотор серіі ej
// let filter9 = cars.filter(value => value.power > 300 && value.producer === "subaru" && value.engine.startsWith('ej'))
// console.log(filter9);

// - двигун меньше 3х літрів + виробник мерседес
// let filter10 = cars.filter(value => value.volume < 3 && value.producer === "mercedes")
// console.log(filter10);

// - двигун більше 2л + сили більше 250
// let filter11 = cars.filter(value => value.power > 250 && value.producer === "bmw")
// console.log(filter11);

// - сили більше 250  + виробник бмв
// let filter12 = cars.filter(value => value.power > 250 && value.producer === "bmw")
// console.log(filter12);
//

//
// // - взять слдующий массив
// let usersWithAddress = [
//     {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', numbers: 16}},
//     {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', numbers: 1}},
//     {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', numbers: 121}},
//     {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', numbers: 90}},
//     {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', numbers: 115}},
//     {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', numbers: 2}},
//     {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', numbers: 22}},
//     {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', numbers: 43}},
//     {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', numbers: 12}},
//     {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', numbers: 16}},
//     {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', numbers: 121}}];
// -- отсортировать его по id пользователей
// let sortId = usersWithAddress.sort((a, b) => a.id - b.id)
// console.log(sortId);

// -- отсортировать его по id пользователей в обратном опрядке
// let sortIdBack = usersWithAddress.sort((a, b) => b.id - a.id)
// console.log(sortIdBack);

// -- отсортировать его по возрасту пользователей
// let sort = usersWithAddress.sort((a, b) => a.age - b.age)
// console.log(sort);

// -- отсортировать его по возрасту пользователей в обратном порядке
// let sort = usersWithAddress.sort((a, b) => b.age - a.age)
// console.log(sort);

// -- отсортировать его по имени пользователей
// let srot = usersWithAddress.sort((a, b) => a.name - b.name)
// console.log(srot);

// -- отсортировать его по имени пользователей в обратном порядке
// let srot = usersWithAddress.sort((a, b) =>{
//     if (a.name > b.name){
//         return 1;
//     }
// })
// console.log(srot);

// -- отсортировать его по названию улицы  в алфавитном порядке
// let srot = usersWithAddress.sort((a, b) =>{
//     if (a.address.street > b.address.street){
//         return 1;
//     }
// })
// console.log(srot);

// -- отсортировать его по номеру дома по возрастанию
// let srot = usersWithAddress.sort((a, b) => a.address.numbers - b.address.numbers)
// console.log(srot);

// -- отфильтровать (оставить) тех кто младше 30
// let filter = usersWithAddress.filter(value => value.age < 30)
// console.log(filter);

// -- отфильтровать (оставить) тех у кого отрицательный статус
// let filter = usersWithAddress.filter(value => value.status === false)
// console.log(filter);

// -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
// let filter = usersWithAddress.filter(value => value.status === false && value.age < 30)
// console.log(filter);

// -- отфильтровать (оставить) тех у кого номер дома четный
// let filter = usersWithAddress.filter(value => value.address.numbers % 2 === 0)
// console.log(filter);

// ===========================
// ======ДОПОЛНИТЕЛЬНО========
// ===========================

// --Створити обєкт автомобіля з полями:
// Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
// Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
// Створити не менше 7 та не більше 20 машинок.
let cars = [
    {producer:"subaru",price: 2000,year: 2010,power: 400,owner:{name:'Oleg',age:25,driving:7}},
    {producer:"subaru",price: 3000,year: 2007,power: 250,owner:{name:'Andri',age:20,driving:12}},
    {producer:"subaru",price: 60000,year: 2014,power: 165,owner:{name:'Yurii',age:19,driving:15}},
    {producer:"bmw",price: 15000 ,year: 2013,power: 120,owner:{name:'Taras',age:24,driving:3}},
    {producer:"bmw",price: 6000 ,year: 2012,power: 180,owner:{name:'Nazar',age:20,driving:6}},
    {producer:"mercedes",price: 1300,year: 2017,power: 400,owner:{name:'Andrian',age:32,driving:9}},
    {producer:"mercedes",price: 250000,year: 2017, power: 230,owner:{name:'Beca',age:35,driving:14}} ];
//
// --Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
// let remont = cars.map(value =>{
//     value.power = value.power / 100 * 10;
//    return value
// })
// function ull (){
// for (let i = 3; i < cars.length; i++) {
//     const car = cars[i];
//     let remont = car.power += (car.power * 0.10)
//     console.log(remont);
// }
// for (let i = 0; i < cars.length; i++) {
//     cars.map(value => {
//     let newArr = {name:'Andrian',age:32,driving:9}
//     value.owner = newArr;
//         console.log(cars);
//     })
// }}
// ull()
// --На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
//  --Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй
//  підвищення потужності двигуна на 10% та ціну на 5%
// let map = cars.map(value => {
//     for (let i = 6; i < cars.length; i+=2) {
//
//         let eng = value.power += (value.power * 0.10)
//         let pri = value.price += ( value.price * 0.05)
//         console.log('power ' + eng);
//
//         console.log('new price ' + pri);
//         console.log('__________')
//     }
//
// })
// --Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років,
// але його вік більший за 25,
// то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.

//  --Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі
//
//
// Задача: дан отсортированный по возрастанию массив целых чисел. Необходимо вернуть наименьший и наибольший индекс заданного элемента.
//     Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
//     Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.
//
// Пример:
//     Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.