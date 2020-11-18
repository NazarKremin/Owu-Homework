//
// //- присвоить каждому из следующих значений свою переменную: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false Вывести каждую при помощи console.log , alert, document.write
// // let a ='hello';
// // let b = 'owu';
// // let c = 'ua';
// // let one = 1;
// // let ten = 10;
// // let nine = -999;
// // let numbers = 123;
// // let drobs = 3.14;
// // let two = 2.7;
// // let six = 16;
// // let tru = true;
// // let fal = false;
// // console.log(a);
// // console.log(b);
// // console.log(c);
// // console.log(one);
// // console.log(ten);
// // console.log(nine);
// // console.log(numbers);
// // console.log(drobs);
// // console.log(two);
// // console.log(six);
// // console.log(tru);
// // console.log(fal);
// //
//

// //TASK 2
// //переопределить каждую переменную из задания 1 дав им произвольные значения Вывести каждую при помощи console.log , alert, document.write
// // six = numbers
// // console.log(six);
// //
// // two = drobs
// // console.log( two ) ;
// //
// // a = b
// // console.log( a )
//

// //TASK 3
// //Создать 3 числовых и 3 стринговых константы. Вывести каждую при помощи console.log , alert, document.write
// // const name = 'Nazar';
// // const lastName = 'Kremin';
// // const secondName = 'Pawel';
// //
// // const one = 1;
// // const two = 2;
// // const three = 3;
// //
// // console.log( name );
// // alert( lastName );
// // document.write( secondName );
// //
// // console.log( one );
// // alert( two );
// // document.write( three );
//

// //TASK 4
// //при помощи 3х разных prompt() получить 3 слова которые являются вашими ФИО. Для фамилии имени и отчества создать разные переменные. Вывести каждую при помощи console.log , alert, document.write
// // let name = prompt("name") ;
// // let lastName = prompt('lastName');
// // let parents = prompt('parents');
// // // console.log('You are ' + lastName + parents + name);
// // // alert('You are ' + lastName + parents + name);
// // document.write('You are ' + lastName + parents + name);
//

// //TASK 5
// // Взять переменные из задания 4 и сконкатенировать их в одной переменной person.
// // let name = prompt("name") ;
// // let lastName = prompt('lastName');
// // let parents = prompt('parents');
// // // let  person = ('You are ' + name + ' ' + lastName + ' ' + parents );
// // let  person = (`You are ${name} ${lastName} ${parents}` );
// // console.log(person);
//

// //TASK 6
// //Взять задние 4 и 5 и применить его к ФИО всех членов своей семьи.
// // let fatherName = ('Vasyl');
// // let motherName = ('Oksana');
// // let myName = ('Nazar');
// // console.log( 'My father name' + fatherName + 'Mother ' + motherName + 'me ' + myName );
// // console.log( 'My father ' + fatherName );
// // console.log( 'My mother ' + motherName );
// // console.log( 'My name ' + myName );
//

// //TASK 7
// //при помощи prompt() получить 3 числа. Привести их к числовому типу при помощи +. вывести их в консоль.
// // let WhatNumber1 = +prompt( 'What your number?');
// // let WhatNumber2 = +prompt( 'What your number?');
// // let WhatNumber3 = +prompt( 'What your number?');
// // let result =  WhatNumber1 + WhatNumber2 + WhatNumber3 ;
// // console.log( result );
//

// //TASK 8
// //при помощи prompt() получить 4 числа. Привести их к числовому типу при помощи parseInt. Сложить их между собой записав результат в переменную result и вывести в консоль браузера
// // let WhatNumber1 = prompt( 'What your number?');
// // let WhatNumber2 = prompt( 'What your number?');
// // let WhatNumber3 = prompt( 'What your number?');
// // let WhatNumber4 = prompt( 'What your number?');
// // let result =  parseInt( WhatNumber1 ) + parseInt( WhatNumber2 ) + parseInt( WhatNumber3 ) + parseInt( WhatNumber4 ) ;
// // console.log( result );
//

// //TASK 9
// //при помощи prompt()  получить 3 числа с плавающей точекой. при помощи parseFloat привести их к соответсвующему типу. Сложить их между собой записав результат в переменную result и вывести в консоль браузера
// // let WhatNumber1 = +prompt( 'What your number?');
// // let WhatNumber2 = +prompt( 'What your number?');
// // let WhatNumber3 = +prompt( 'What your number?');
// // let result =  parseFloat( WhatNumber1 ) * parseFloat( WhatNumber2 ) * parseFloat( WhatNumber3 ) ;
// // console.log(result);
//

// //TASK 10
// //при помощи prompt()  получить 3 числа с плавающей точекой. Округлить их при помощи Math.round Сложить их между собой записав результат в переменную  и вывести в консоль браузера
// // let WhatNumber1 = +prompt( 'What your number?');
// // let WhatNumber2 = +prompt( 'What your number?');
// // let WhatNumber3 = +prompt( 'What your number?');
// // let result =  Math.round( WhatNumber1 ) * Math.round( WhatNumber2 ) * Math.round( WhatNumber3 ) ;
// // console.log(result);
//

// //TASK 11
// //при помощи prompt()  получить 2 целых числа. Привести их к целочисленному типу. Первое число - это число которое будут возводить в степень. Второе число - это число которое является степенью. При помощи Math.pow возвести первое число в степень второго числа.
// // let num1 = parseInt(prompt('x'));
// // let num2 = parseInt(prompt('x'));
// // Let result = Math.pow(num1, num2);
// // console.log(result)
//

// //TASK12
// //При помощи оператора опредеоения типа typeof определить типы следующих переменных и вывести их в консоль let a = 100; let b = '100'; let c = true; let d = undefined;
// // let a = 100;
// // let b = '100';
// // let c = true;
// // let d = undefined;
// // console.log(typeof a);
// // console.log(typeof b);
// // console.log(typeof c);
// // console.log(typeof d);
//

// //TASK 13
// //Поставьте соответствующий оператор в выражениях что бы получился соответсвующий результат.
// //В одинаковых выражениях в задании не использовать два одинаковых оператора.
// // Каждое выражение вложить в свою переменную
// // -> true
// // console.log( 5 < 6 );
// // -> false
// // console.log( 5 > 6 );
// // -> false
// // console.log( 5 == 6 );
// // -> false
// // console.log( 5 === (>-) 6 );
// // -> true
// // console.log( 10 == 10 );
// // -> true
// // console.log( 10 === 10 );
// // -> false
// // console.log( 10 < 10 );
// // -> false
// // console.log( 10 > 10 );
// // -> false
// // console.log( 10 != 10 );
// // -> false
// // console.log( 123 === '123');
// // -> true
// // console.log( 123 == '123');
//
// //Дополнительно:Посмотрев на следюующие выражения, скажите, каков будет вывод в консоль
// // console.log(132 > 100 && 45 < 12 ); false
// // console.log(34 > 33 && 23 < 90 ); true
// // console.log(99 > 100 && 45 > 12 );false
// // console.log(132 > 100 || 45 < 12 );true
// // console.log(111 > 11 || 45 < 111 );true
// // console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) );true
// // console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) );true
// // console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) );false
// // console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 ));true
// // console.log(!!'-1');true
// // console.log(!!-1);true
// // console.log(!!'0');true
// // console.log(!!'null');true
// // console.log(!!'undefined');true
// // console.log(!!(3/'owu'));false
// // console.log((111 > 11 || 45 < 111) ||  !!'0');true
// // console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 ));false
//

// //CLASS
// //
// // 1.Определите переменные str, num, flag и txt со значениями «Привет», 123, true, «true».
// // При помощи оператора typeof убедитесь, что значения переменных принадлежат типам: string, number и  boolean.
// //
// // let str = '«Привет»';
// // let num = 123 ;
// // let flag = true ;
// // let txt = '«true»';
// // console.log( typeof str );
// // console.log( typeof  num ) ;
// // console.log( typeof  flag ) ;
// // console.log( typeof  txt ) ;
// //
// //string l1.js:189:9
// // number l1.js:190:9
// // boolean l1.js:191:9
// // string l1.js:192:9
// //
// // 2. Создайте переменные a1, a2, a3, a4, a5. При помощи математических операторов (сложение, вычитание и т.д.) найдите значения выражений:
// //     5 + 3,
// //     5 - 3,
// //     5 * 3,
// //     5 / 3,
// //     5 % 3
// // поместив результат каждого выражения в соответствующую переменную. Например, let a1 = 5 + 3.
// //
// // let a1 = 5 + 3;
// // let a2 = 5 - 3 ;
// // let a3 = 5 * 3;
// // let a4 = 5 / 3 ;
// // let a5 = 5 % 3 ;
// // console.log( a1 );
// // console.log( a2 );
// // console.log( a3 );
// // console.log( a4 );
// // console.log( a5 );
// //
// //8 l1.js:212:9
// // 2 l1.js:213:9
// // 15 l1.js:214:9
// // 1.6666666666666667 l1.js:215:9
// // 2 l1.js:216:9
// //
// // 3.  Создайте переменные a6, a7, a8, a9, a10. Поместите в них результат выражений:
// //     5 % 3,
// //     3 % 5,
// //     5 + '3',
// //     '5' - 3,
// //     75 + 'кг'
// //
// // let a6 = 5 % 3 ;
// // let a7 = 3 % 5 ;
// // let a8 = 5 + '3' ;
// // let a9 = '5' - 3 ;
// // let a10 = 75 + 'кг';
// // console.log( a6 );
// // console.log( a7 );
// // console.log( a8 );
// // console.log( a9 );
// // console.log( a10 );
// //
// //2 l1.js:236:9
// // 3 l1.js:237:9
// // 53 l1.js:238:9
// // 2 l1.js:239:9
// // 75кг l1.js:240:9
// //
// // 4. Напишите код, который находит площадь прямоугольника высота 23см. ( переменная height),
// // шириной 10см (переменная width), значение площади должно хранится в числовой переменной s.
// //
// //----- 1 СПОСІБ --------
// //
// // let height = '23cm';
// // let width = '10cm';
// // let s = (parseInt(height) * parseInt(width));
// // console.log(s)
// //
// // 230 l1.js:260:9
// //
// // ----- 2 СПОСІБ --------
// // let height = parseInt('23cm');
// // let width = parseInt('10cm');
// // let s = height * width;
// // console.log(s)
// //
// // 230 l1.js:265:9
// //
// // 5.  Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
// //     результат поместите в переменную v.
// //
// // const heightC = parseInt('10m');
// // const dC = parseInt('4m');
// // let v = heightC * dC  ;
// // console.log( v ) ;
// //
// // 40 l1.js:277:9
// //
// // 6. У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
// // Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).
// //
// // let n = 3 ;
// // let n2 = 3 ;
// // let m = 4 ;
// // let k = n **  n2 ** m ;
// // console.log( k ) ;
// //
// // 4.434264882430377e+38 l1.js:288:9
// //
// // 7. Напишите скрипт, который выводит "Hello world", создавши переменную str и выводить спомощью document.write, alert и console.log
// //
// // let str= "Hello world" ;
// // document.write( str ) ;
// // alert( str ) ;
// // console.log( str ) ;
// //
// // 8. Вывести в окно браузера при помощи метода alert() следующие данные: Ваше ФИО, возраст, хобби (каждой на новой строки спомощью \n).
// //
// // let str = " N.K.V\n  22\n  JS\n " ;
// // alert( str ) ;
// //
// // 9. Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
// //     Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
// //   Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
// //     Вывести в документ содержимое переменной concatenation спомощью document.write
// // let  str1 = 'Хто ' ;
// // let  str2 = 'ти ' ;
// // let  str3 = 'такий? ' ;
// // let  concatenation = str1+str2+str3 ;
// // document.write( concatenation ) ;
// //
// //Хто ти такий?
// //
// // 10. Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
// // let str = "20";
// // let a = 5;
// // document.write(str + a + "<br/>"); 205 тому ще це JS якщо би при перевірці би вказали === тоді помилка би була , бо стр текст а а це число.
// // document.write(str - a + "<br/>"); 15 той самий приницп Js пофіг вона бере число з тексту і разує за число
// // document.write(str * "2" + "<br/>");40  те саме
// // document.write(str / 2 + "<br/>"); 10 те саме
// //
// // 11. Какие значения выведет в окно консоли следующий фрагмент кода если его поместить в console.log?
// // let a = parseInt("3.14")
// // let b = parseInt("-7.875")
// // let c = parseInt("435")
// // let d = parseInt("Вася")
// //
// // console.log(a);
// // console.log(b);
// // console.log(c);
// // console.log(d);
// //
// //3.14, -7.875, 435, NaN - Парс переводить текст в числа
// //
// // 12.С помощью окна ввода, вызываемого методом prompt, пользователь может ввести данные, которые будут использоваться далее, повторите код ниже
// // let str = prompt("Enter something", "ho-ho")
// // console.log(str);
// // //
// // ho-ho l1.js:339:9
// //
// // 13. С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел, а вывод результата при помощи метода alert
// //
// // let str = parseInt(prompt('Number 1?')) ;
// // let num = parseInt(prompt('Number 2?')) ;
// // let res = num * str ;
// // alert( res ) ;
// //
// // 14. С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит имя, фамилию и возраст, а вам не обходимо вывести строку такого вида
// // Доброго вечера Иван Иванов, мои поздравления что вам 32 , а вывод результата при помощи метода alert
// //
// // let name = prompt("Ваше ім'я і прізвище ? ") ;
// // let age = prompt( 'Ваш вік?' );
// // alert('Доброго вечора '+ name + ", мої вітання що вам " + age );
// //

// // =====================
// // ======ДОП============
// // =====================
// //
// // 1. Три різних числа вводяться через prompt().
// //     За допомоги if else вивести іх в порядку зростання. (відсортувати по зростанню)
// //
//  let a = prompt('Number?') ;
//  let b = prompt('Number?') ;
//  let c = prompt('Number?') ;
//
//  if (a > b && a > c){
//     alert(a);
// }else if (a < b && b > c){
//      alert(b);
//  }else if (a < c && b < c){
//      alert(c);
//  }
// //
// // 2.
// // Все параматры получаем с клавиатуры!!!!
// //     Имитируем поведение пешехода на перекстке.
// //     Если светофор зеленый - вывести "иди".
// //     Если светофор желтый - вывести "подожди".
// //     Если светофор красный - вывести "стой".
// //     Если светофор в аварийном режиме вывести "делай что хочешь"!
// //
//
// let people = prompt("Light?") ;
// let green = ('Зелене') ;
// let yellow = ( 'Жовте') ;
// let red = ( 'Червоне' ) ;
// let emergencyRed = ( 'Аварійни режим' ) ;
// //
// if ( people == green ){
//     alert( 'іди' );
// }else if  (people == yellow ){
//     alert( 'почекай' ) ;
// }else if ( people == red){
//     alert( 'стій' )
// }else if ( people == emergencyRed ){
//     alert( 'роби що хочеш' )
// }
//     3
// Все параметры получаем с клавиатуры!!!!(prompt , confirm)
// Создать переменную isRoadClear которая характеризирует наличие на дороге машин.
//     Улучшаем предыдущее задание.
//     Если светофор зеленый и машин нет - вывести "иди".
//     Если светофор зеленый и машины есть  - вывести подожди пока нарушители проедут".
// Если светофор желтый и машины есть - вывести "жди".
//     Если светофор желтый и машин нет - вывести "все рано жди".
//     Если светофор красный и машин нет- вывести "стой все рано".
//     Если светофор красный - и машины есть вывести "стой и жди".
//     Если светофор в аварийном режиме вывести "делай что хочешь"!
//
// let green = 'Зелене' ;
// let yellow = 'Жовте' ;
// let red =  'Червоне' ;
// let emergencyRed = 'Аварійни режим'  ;
// let color = prompt('Color')
// let isRoadClear = confirm() ;
// if (color == green && isRoadClear){
//     alert( 'иди' );
// }else if (color == green && !isRoadClear){
//     alert( 'подожди пока нарушители проедут' )
// }else if (color == yellow && isRoadClear){
//     alert( 'жди' )
// }else if (color == yellow && !isRoadClear){
//     alert( 'все рано жди' )
// }else if (color == red && isRoadClear){
//     alert( 'стой и жди' )
// }else if (color == red && !isRoadClear){
//     alert( 'стой все рано' )
// }else if (color == emergencyRed && isRoadClear){
//     alert( 'делай что хочешь' )
// }