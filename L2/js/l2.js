//--створити масив та вивести його в консоль:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// const numbers = [1, 2, 3, 4, 5];
// console.log( numbers );
//(5) […]
// 0: 1
// 1: 2
// 2: 3
// 3: 4
// 4: 5
// length: 5
// <prototype>: Array []
// l2.js:8:9
//
// const str = ['An', 'Bn', 'Cn', 'Bt', 'Ct'];
// console.log(str);
// 5) […]
// 0: "An"
// 1: "Bn"
// 2: "Cn"
// 3: "Bt"
// 4: "Ct"
// length: 5
// <prototype>: Array []
//
// const kawa = ['An1', 'Bn2', 'Cn3', 'Bt4', 'Ct5', 6, 7, 8, 9, 99, true, false];
// console.log(kawa);
//(12) […]
// 0: "An1"
// 1: "Bn2"
// 2: "Cn3"
// 3: "Bt4"
// 4: "Ct5"
// 5: 6
// 6: 7
// 7: 8
// 8: 9
// 9: 99
// 10: true
// 11: false
// length: 12
//
// const rer = [23, 54, 'Angey'];
// console.log(rer[1]);
// 54 l2.js:48:9
//

//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for (let i = 0; i < 10; i++) {
//     document.write('<div>Text</div>');
// }
//

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (let i = 0; i < 10; i++) {
//     document.write('<div>Text</div>'[2])
// }
//

// // - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// const blockh1 = ['<h1>Lorem ipsum.</h1>','<h1>Lorem ipsum dolor sit amet.</h1>','<h1>lorem1</h1>','<h1>Lorem ipsum.</h1>','<h1>Lorem ipsum dolor.</h1>','<h1>Lorem.</h1>','<h1>Lorem ipsum.</h1>','<h1>Lorem ipsum dolor.</h1>','<h1>Lorem ipsum dolor.</h1>','<h1>Lorem ipsum dolor sit amet.</h1>','<h1>Lorem.</h1>','<h1>Lorem ipsum dolor.</h1>','<h1>Lorem ipsum dolor sit.</h1>','<h1>Lorem.</h1>','<h1>Lorem ipsum.</h1>','<h1>Lorem ipsum dolor sit amet.</h1>','<h1>Lorem.</h1>','<h1>Lorem ipsum.</h1>','<h1>Lorem ipsum dolor sit.</h1>','<h1>Lorem.</h1>',]
// let i = 1;
// while (i <= 2){
// document.write(blockh1[i])
//     i+=1
// }
//
//// for (let i = 0; i < 20; i++) {
// //     document.write('<h1>Text</h1>')
// // }
//

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// const blockh1 = ['<h1>Lorem ipsum.</h1>','<h1>Lorem ipsum dolor sit amet.</h1>','<h1>lorem1</h1>','<h1>Lorem ipsum.</h1>','<h1>Lorem ipsum dolor.</h1>','<h1>Lorem.</h1>','<h1>Lorem ipsum.</h1>','<h1>Lorem ipsum dolor.</h1>','<h1>Lorem ipsum dolor.</h1>','<h1>Lorem ipsum dolor sit amet.</h1>','<h1>Lorem.</h1>','<h1>Lorem ipsum dolor.</h1>','<h1>Lorem ipsum dolor sit.</h1>','<h1>Lorem.</h1>','<h1>Lorem ipsum.</h1>','<h1>Lorem ipsum dolor sit amet.</h1>','<h1>Lorem.</h1>','<h1>Lorem ipsum.</h1>','<h1>Lorem ipsum dolor sit.</h1>','<h1>Lorem.</h1>',]
// let i = 1;
// while (i <= 1){
// document.write(blockh1[2]) ---Gavno code
//     i+=1
// }
//
// for (let i = 0; i < 10; i++) {
//     document.write('<div>Text</div>'[5])
// }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (i = 0; i <= 10; i++){
//     console.log(i);
// }
// 0 l2.js:82:13
// 1 l2.js:82:13
// 2 l2.js:82:13
// 3 l2.js:82:13
// 4 l2.js:82:13
// 5 l2.js:82:13
// 6 l2.js:82:13
// 7 l2.js:82:13
// 8 l2.js:82:13
// 9 l2.js:82:13
// 10 l2.js:82:13
//

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// const str = ['Hi', 'qq', 'Age?', 'name', 'last', 'car', 'house', 'apple', 'noize', 'turn', 'lkr'];
// for (i = 0; i <= 10; i++){
//     console.log(str[i]);
// }
//

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
//    const kawa = ['Hi', 'qq', 'Age?', 'name', 'last', 'car', 1, 2, 3, 4, 5,];
// // for (i = 0; i <= 10; i++){
// //     console.log(kawa[i]);
// // }
//

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
//
//  let boo = [1,2,3,4,5,'a','b','c','d',true,false,true,false,true];
//  for (let i = 0; i < boo.length; i++){
//      if (typeof boo[i] === "number"){
//          console.log(boo[i]);
//      }
//  }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let arr = [1,2,3,4,5,'a','b','c','d',true,false,true,false,true]
// for (let i = 0; i < arr.length; i++){
//     if (typeof arr[i] === "number"){
//         console.log(arr[i])
//     }
// }
//

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let arr = [1,2,3,4,5,'a','b','c','d',true,false,true,false,true];
// for (let i = 0; i < arr.length; i++){
//     if(typeof arr[i] === 'string'){
//         console.log(arr[i])
//     }
// }
//

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let arr = [];
// arr[0] = 1;
// arr[1] = 'Kek';
// arr[2] = true;
// arr[3] = 1;
// arr[4] = 'Kek';
// arr[5] = true;
// arr[6] = 1;
// arr[7] = 'Kek';
// arr[8] = true;
// arr[9] = 'Kek';
// for (let i = 0; i < 10; i++){
//     console.log(arr[i]);
// }
//

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
//
// for (let i = 1 ; i < 10; i++ ){
//     console.log(i)
//     document.write(i)
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
//
// for (let i = 0 ;i < 100; i++){
//     console.log(i);
// }
//

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for( let i = 0; i < 200; i +=2){
//     console.log(i);;
//     document.write(i);
// }
//

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for( let i = 0; i < 200; i +=2){
//     console.log(i);;
//     document.write(i);
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for( let i = 0; i < 200; i +=3){
//     console.log(i);
//     document.write(i);
// }
//

// - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
// for(let i=0;i<=60;i++){
//     console.log(`${i}'sec'`);
//     if( i === 60){
//         for(let min = 1;min<=1.20;min=min+0.01){
//             console.log(`${min} `);
//         }
//     }
// }
// - Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
// Додатково


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.'
// let arr = ['a', 'b', 'c'];
// let str = "";
// for (let i = 0; i < arr.length; i++){
//     str = str + arr[i];
//     console.log(str)
// }

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// let arr = ['a', 'b', 'c'];
// let str ="";
// let i = 0;
// while (i < arr.length){
//     str = str + arr[i];
//     console.log(str)
//     i++;
// }

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// let arr = [ 'a', 'b', 'c'];
// let str = '';
// for (const string of arr) {
//     str = str + string;
//     console.log(str);
// }

//
//=================
// =================
//CLASSWORk
// =================
// =================
//
// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
//
// let str=['a', 'b', 'c'];
// str.push(1, 2, 3);
// for ( let i = 0; i < str.length; i++){
//     console.log(str[i]);
// }
//
// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
//
// let arr = [1, 2, 3];
// let newArr = [];
// for (let i = arr.length - 1; i >= 0; i--) {
//     newArr.push(arr[i]);
// }
// console.log(newArr);
//
// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
//
// let num = [1,2,3];
// num.push(4,5,6);
// for (let i = 0; i < num.length; i++){
//     console.log(num[i])
// }
//
// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
//
// let num = [1,2,3]
// num.unshift(4,5,6)
// for (let i = 0; i < num.length; i++){
//     console.log(num[i])
// }
//
// - Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()
//
// let arr = ['js', 'css', 'jq'];
// arr.shift()
// console.log(arr)
// let remove = 'js';
// console.log(remove)
//
// - Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()
// let arr = ['js', 'css', 'jq'];
// alert(arr.pop());
//
// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].
//
// let arr = [1, 2, 3, 4, 5];
// console.log(arr.slice(3));
//
// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].
//
// let arr = [1, 2, 3, 4, 5]
// const numbersSlice = arr.slice();
// console.log(numbersSlice);
//
// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5].
//
// let arr = [1, 2, 3, 4, 5];
// let arrDeletedItems = arr.splice(1,2)
// console.log(arr);
// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
//
// let arr = [1, 2, 3, 4, 5];
// let arrDeletedItems = arr.splice(3, 0 , 'a', 'b', 'c')
// console.log(arr)
//
// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
//
// let arr = [1, 2, 3, 4, 5]
// let arrDeletedItems = arr.splice(2, 0 ,'a' , 'b');
// let arrDelet = arr.splice(6, 0 ,'c')
// let arrDelete = arr.splice(8, 0 ,'e')
// console.log(arr)
//
// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
//
// let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ];
// for (let i = 0; i < 10; i +=2){
//     console.log(arr[i]);
// }
//
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший
//
// let  array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ]
// let arrNew =[];
// arrNew.push(array);
// console.log(arrNew)
//
//
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
//
// let  arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ]
// let newArr =[];
// for (let i = 0; i < arr.length; i++) {
//     newArr[i] = arr[i];
// }console.log(newArr);
//
//зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
// 1. перебрати його циклом while
//
// let arr =[2,17,13,6,22,31,45,66,100,-18];
// let i = 0;
// while ( i < arr.length){
//     console.log(arr[i])
//     i++;
// }
//
// 2. перебрати його циклом for
//
// let arr =[2,17,13,6,22,31,45,66,100,-18];
// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }
//
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
//
// let arr = [2,17,13,6,22,31,45,66,100,-18];
// let i = 0;
// while (i < arr.length){
//     console.log(arr[i])
//     i +=3;
// }
//
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// let arr = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = 0; i < arr.length; i+=3){
//     if (i%2 === 1)
//     console.log(arr[i])
// }
// 5. перебрати циклом while та вивести  числа тільки парні  значення
//
// let arr = [2,17,13,6,22,31,45,66,100,-18];
// let i = 0;
// while (i < arr.length){
//     console.log(arr[i])
//     i+=2;
// }
//
// 6. перебрати циклом for та вивести  числа тільки парні  значення
//
// let arr = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = 0; i < arr.length; i+=2){
//     console.log(arr[i])
// }
//
// 7. замінити кожне число кратне 3 на слово "okten"
// let arr = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = 0; i < arr.length; i++){
//     if (arr[i]%3 === 0){
//         arr = "okten"
//         console.log(arr);
//     }
// }
//
// 8. вивести масив в зворотньому порядку.
// let arr = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = 10; i > 0; i--){
//     console.log(arr[i])
// }
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// for (let i = 10; i > 0; i--, i-=2){
// 10
//  створити пустий масив та :
// - заповнити його 50 парними числами за допомоги циклу.
// let arr = [];
// for (let i = 0; i < 100; i+=2){
//     console.log(i)
// }
//
// - заповнити його 50 непарними числами за допомоги циклу.
// let arr = [];
// for (let i = 3; i < 100; i+=3){
//     console.log(i)
// }

// 1 додаткове
//  створити пустий масив та :
// 1. заповнити його 50 парними числами за допомоги циклу.
// let arr = [];
// for (let i = 0; i < 100; i+=2) {
//     let s = arr + [i]
//     console.log(s);
// }
// 2. заповнити його 50 непарними числами за допомоги циклу.
// let arr = [];
// for (let i = 0; i < 100; i+=3) {
//     let s = arr + [i]
//     console.log(s);
// }
// 3. используя Math.random заполнить массив из ???(сколько хотите) элементов.
// let arr = []
// for (let i = 0; i < arr; i++) {
//     arr[i] = Math.random()
//     console.log(arr[i]);
// }
//  диапазон рандома 8 до 732. (но сначала пробуйте БЕЗ ДИАПАЗОНА!)
//  2. вывести на консоль  каждый третий елемент
//  3. вывести на консоль  каждый третий елемент
//  но при условии что его значение является парным.
//  4. вывести на консоль  каждый третий елемент
//  но при условии что он имеет парное значение и
//  записать их в другой массив.
//  5. Вывести каждый елемент массива у которого соседний с права элемент - парный
//   5 масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. обрахувати середній чек.
//
// 3 створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// 4 створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо об'єкт є числом,
//  додати його в інший масив.

