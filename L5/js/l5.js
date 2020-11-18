//     -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// function Htmltegs( tegs, describe, atribute ){
//     this.tegs = tegs;
//     this.describe = describe;
//     this.atribute = atribute;
// }
//
// let tegA = new Htmltegs('<a>','Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок. ' +
//     'В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь. ' +
//     'Якорем называется закладка внутри страницы, которую можно указать в качестве цели ссылки. ' +
//     'При использовании ссылки, которая указывает на якорь, происходит переход к закладке внутри веб-страницы.',[{nameOFAttr:'accesskey',
//     actionOfAttr: 'Активация сcилки с помощью комбинации клавиш'},
//     {nameOFAttr:'coords - Устанавливает координаты активной области.', actionOfAttr:'download - Предлагает скачать указанный по ссылке файл.'}]);
// console.log(tegA);
//
// let tegDiv = new Htmltegs('<div>' ,
//     'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. ' +
//     'Как правило, вид блока управляется с помощью стилей. ' +
//     'Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, ' +
//     'а для тега добавить атрибут class или id с именем селектора. ',['align - Задает выравнивание содержимого тега <div>., title - Добавляет всплывающую подсказку к содержимому.  ']);
// console.log(tegDiv);
//
// let tegH1 = new Htmltegs('<h1>','HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка. ' +
//     'Так, тег <h1> представляет собой наиболее важный заголовок первого уровня, а тег <h6> служит для обозначения заголовка шестого уровня и является наименее значительным. ' +
//     'По умолчанию, заголовок первого уровня отображается самым крупным шрифтом жирного начертания, заголовки последующего уровня по размеру меньше. Теги <h1>,...,<h6> относятся к блочным элементам, они всегда начинаются с новой строки, а после них другие элементы отображаются на следующей строке. ' +
//     'Кроме того, перед заголовком и после него добавляется пустое пространство.' , 'align - Определяет выравнивание заголовка. ');
// console.log(tegH1);
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
// ==============================================
//

//-  Створити класс для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
// ==============================================
//

// -- Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// let driver = { name: 'Igor', age: 35,}
//     let car = {
//             marka: 'BMW x5',
//             produser:'Germany' ,
//             year: '2011',
//             engine: 3.0,
//             maxSpeed: 340,
//             drives:'cool',
//             drive: function (){
//                     console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//                 },
//             info: function (){
//                 console.log(`Машина ${this.marka}, країна ${this.produser}, рік машини ${this.year}, мотор ${this.engine}, максмальна швидкіть ${this.maxSpeed} `)
//             },
//           increaseMaxSpeed: function (newSpeed){
//               this.maxSpeed += newSpeed;
//           },
//         changeYear: function (newValue){
//                 this.year = newValue;
//         },
//
//         addDriver: function (driver){
//                 this.drives = driver;
//
//         },
//             };
//
//
// car.increaseMaxSpeed(100)
// car.changeYear(2015)
// car.addDriver()
// car.drive()
// car.info()
//

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель,
// виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
//
// function Car (model, produser, year,maxSpeed,engine){
//     this.model = model || 'BMW x5';
//     this.produser = produser ||'Germany';
//     this.year = year || '2011';
//     this.maxSpeed = maxSpeed || 3.0;
//     this.engine = engine || 340;
//     // this.driver = driver || 'Petro';
//             this.drive = function (){
//                     console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//                 }
//             this.info = function (){
//                 console.log(`Машина ${this.model}, країна ${this.produser}, рік машини ${this.year}, мотор ${this.engine}, максмальна швидкіть ${this.maxSpeed} `)
//             }
//           this.increaseMaxSpeed = function (newSpeed){
//               this.maxSpeed += newSpeed;
//           }
//         this.changeYear = function (newValue){
//                 this.year = newValue;
//         }
//
//         // this.addDriver = function (driver){
//         //         this.driver = addDriver;
//         //
//         // }
//
// }
// let car = new Car('Mercedes' , 'germany',2040,590,6.3)
// //// car.increaseMaxSpeed(1)
// //// car.changeYear()
// //// car.addDriver('Sya')
// //// car.driver()
// car.info()

//     - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість,
//     об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
//
//
// class Car{
//     constructor(model,produser,year,maxSpeed,engine,driver) {
//         this.model = model;
//         this.produser = produser;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engine = engine;
//         this.driver = driver;
//     }
//     drive(){
//         console.log('їдемо зі швидкістю ' + this.maxSpeed + ' на годину')
//     }
//     info(){
//         console.log(bmw) //Є варіант додати всі диси і виведе як стрічку а не обєкт
//         //console.log(`Машина ${this.model}, країна ${this.produser}, рік машини ${this.year},
//          //мотор ${this.engine}, максмальна швидкіть ${this.maxSpeed} `)
//
//     }
//     increaseMaxSpeed(newSpeed){
//         this.maxSpeed += newSpeed;
//     }
//     changeYear(newValue){
//         this.year = newValue;
//     }
// }
// let bmw = new Car('X5','Germany',2011,300,'4.4l')
// bmw.driver = 'Igro';
// bmw.changeYear(30)
// bmw.info()
// bmw.increaseMaxSpeed(100)
// bmw.drive()


// --створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// ==============================================
// let one = new Girls('Anya',23,46)
// let two = new Girls('Julia',44,38)
// let thre = new Girls('Oksana',123,25)
// let four = new Girls('Banan',42,32)
// let five = new Girls('Barabola',43,12)
// let six = new Girls('Ksens',54,54)
// let seven = new Girls('Lipa',13,32)
// let eight = new Girls('Karina',15,32)
// let nin = new Girls('Vika',64,54)
// let ten = new Girls('Olya',31,65)
// let arr = ['anya','julia','oksana','banan','barabola','ksens','lipa','karina','vika','olya']
//
// class Girls{
//     constructor(name,age,lapeta) {
//         this.name = name;
//         this.age = age;
//         this.lapeta = lapeta;
//     }
// }
// let girs =[ one, two, thre,four,five,six,seven,eight,nin,ten ];
//
//

//     -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// =========
