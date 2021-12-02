// let arr = [0,1,2,[3,4],5,[6],9];
// // console.log(arr)

// const { get } = require("http");

// // for(let i = 0; i < arr.length; i++) {
// //     console.log(i)
// // }
// // let flat = arr.join().split(',');
// // console.log(flat)

// let result = arr.reduce((finalArr, curent) => {

//     if (Array.isArray(curent)) {
//        finalArr = [...finalArr, ...curent]
//     } else {
//         finalArr = [...finalArr, curent]
//     }

//    return finalArr

// }, [])
// console.log(result)

// let sum = Number(nums[0]) + Number(nums[1]) + Number(nums[2])

// const friends = [
// { passport: '03005988', name: 'Joseph Francis Tribbiani Jr', age: 32, sex: 'm' },
// { passport: '03005989', name: 'Chandler Muriel Bing', age: 33, sex: 'm' },
// { passport: '03005990', name: 'Ross Eustace Geller', age: 15, sex: 'm' },
// { passport: '03005991', name: 'Rachel Karen Green', age: 31, sex: 'f' },
// { passport: '03005992', name: 'Monica Geller', age: 31, sex: 'f' },
// { passport: '03005993', name: 'Phoebe Buffay', age: 34, sex: 'f' },
// ]
// const changeAmount = (condition, currentValue) => {
// return condition ? ++currentValue : currentValue
// }
// const changePassport =
// friends.reduce((total, person) => {
// return {
// Passports: [...total.Passports, person.passport],
// Names: [...total.Names, person.name],
// Sex: [...total.Sex, person.sex],
// Age: [...total.Age, person.age],
// AmountOfMale: changeAmount(person.sex === 'm', total.AmountOfMale),
// AmountOfFemale: changeAmount(person.sex === 'f', total.AmountOfFemale),
// fullYear: changeAmount(person.age >= 18, total.fullYear)
// }
// },
// {
// Passports: [], Names: [], Sex: [], Age: [], AmountOfMale: 0,
// AmountOfFemale: 0,
// fullYear: 0
// });
// console.log(changePassport)
// const searchName = name => {
// const result = friends.find(person => person.name === name)
// if (result) return result
// return 'nema'
// }
// searchName('Monica Geller')
// searchName('ivan')
// console.log(searchName('ivan'))
// console.log(searchName('Monica Geller'))
// const friendsChange = friends.filter(person => person.sex === 'm')
// console.log(friendsChange)
// const changeSex = friends.map(person => ({...person, anal: person.sex.toUpperCase()}))
// console.log(changeSex)
// const amount = people.reduce((total , person) => total + person.budget, 0)
// console.log(amount);
// Пройдись по масиву і отримай на виході такий обєкт
// {
// }
// .map(person => ({ ...person, name: ${person.name} Arabchuk }));
// console.log(addKsenia);
// const people = [
// { name: 'ivan', iq: 300, budget: 10000},
// { name: 'petka', iq: 250, budget: 5000},
// { name: 'tymura', iq: 200, budget: 2500},
// { name: 'oleh', iq: 69, budget: 1000},
// ]
// friends.forEach(person => console.log(person))
// что вы хотите получить
// [03005988, 03005989, 03005990, 03005991, 03005992, 03005993]
// const changeFriends = friends.map(person => person.passport)
// console.log(changeFriends)
// const assumeAge = friends.reduce((total, person) => total + person.age,0)
// console.log(assumeAge)
// const changeAge = friends.filter(person => person.age >= 32)
// console.log(changeAge)
// const changeFind = friends.find(person => person.sex === 'f' && person.age > 32)
// console.log(changeFind)
// let a = [4, 5, 32, 54, 12, 200, 0, -1]
// // a.push('dsada');
// // a.unshift('dsds')
// a = ['dsda',...a,'asasa']
// console.log(a)
// const cars = [
// {car: 'audi'},
// {type: 'suv'},
// {fuel: 'benzin'},
// {transmition: 'auto'}
// ]
// const changeCar = cars.map(item => {
// if (item.car) return {
// ...item, type: 'suv',
// }
// if (item.type) return {
// ...item, fuel: 'benzin', transmition: 'auto',
// }
// if (item.fuel) return {
// ...item, transmition: 'auto', car: 'audi', type: 'suv',
// }
// if (item.transmition) return {
// ...item, car: 'audi', type: 'suv', fuel: 'benzin'
// }
// })
// console.log(changeCar)
// for (i=0; i < people.length; i++) {
// console.log(people[i]);
// }
// for (let person of people){
// console.log(person);
// }
// people.forEach(person => console.log(person));
// const changeName = people.map(person => ${person.name} ${person.budget})
// console.log(changeName)
// const changeIq = people.filter(person => person.iq > 69 && person.budget >= 510:23

// 000);
// console.log(changeIq);
// const findPeople = people.findIndex(person => person.budget === 1000 || person.iq === 250);
// console.log(findPeople);
// const amount = people.reduce((total , person) => total + person.budget, 0)
// console.log(amount);
// const addKsenia = people
// .filter(person => person.iq > 250)
// .map(person => ({ ...person, name: ${person.name} Arabchuk }));
// console.log(addKsenia);
// const addKsenia = people
// .filter(person => person.iq > 250)
// .map(person => ({...person, Lover: Ksenia}))
// console.log(addKsenia);

// Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'.

// let nums = "123";

// let numsSplit = nums.split('').reduce((inValue, item) => {

//     return Number(item) + inValue
// }, 0)

// console.log(numsSplit)

// let nums = '123133';
// if (nums[0] + nums[1] + nums[2] == nums[3] + nums[4] + nums[5]) {
//     console.log('norm')
// } else {
//     console.log('ne')
// }

// let nums = '233133';
// const getOddNumb = () => {

// }
// let numsSplit = nums.split('');
// const arr1 = numsSplit.slice(0,nums.length/2);
// const arr2 = numsSplit.slice(nums.length/2, nums.length);
// const getSum = (arr) => {
//     return arr.reduce((inValue, cur) => inValue + +cur, 0)
// }
// getSum(arr1)
// getSum(arr2)
// const partOne = getSum(arr1)
// const partTwo = getSum(arr2)

// partOne == partTwo ? console.log('norm') : console.log('daun')

// if (partOne == partTwo) {
//     console.log('norm')
// } else {
//     console.log('daun')
// }
// console.log(numsSplit)
// console.log(getSum(arr1))

// let sum = 0;
// for (i = 0; i <= 100; i++) {
//     sum += i
// }
// console.log(sum)

// const arr = '765432345654dsd32';
// const arrSplit = arr.split('')
// .map(cur => parseInt(cur))
// .filter(cur => cur % 2 === 0).length;

// console.log(arrSplit)

// const arr = [1, 2, 3, 4, 5];
// let sum = 0;
// for(i=1; i <= arr.length; i++) {
//     sum += i;
// }
// // console.log(sum)

// let obj = {коля: '200', вася: '300', петя: '400'};

// for(let key in obj) {
//     console.log(`${key} ${obj[key]}`)
//     if (key === 'коля') {
//         console.log(`${key} - зарплата ${obj[key]} $`)
//     }
// }

// const inputValue = "123";
// const parseSec = (arg) => {

//     const hrs = parseInt(arg / 3600);
//     const min = parseInt((arg - hrs * 3600) / 60);
//     const sec = parseInt(arg - hrs * 3600 - min * 60);
//     let result = '';
//     if (hrs) {
//         result = result + `${hrs} ${hrs > 1 ? 'hours' : 'hour'}`;
//     }
//     if (min) {
//         result = result + `, ${min} ${min > 1 ? 'minutes' : 'minute'}`;
//     }
//     if (sec) {
//         result = result + `, ${sec} ${sec > 1 ? 'seconds' : 'second'}`;
//     }
//     return result
// }
// const result = parseSec(inputValue)
// console.log(result)

// const numb = [2, 5, 9, 15, 0, 4];
// for(i=0; i<numb.length; i++) {
//     if (numb[i] > 3 && numb[i] < 10) {
//         console.log(numb[i])
//     }
// }

// const numb = [2, 5, 9, -15, 0, -4];
// let sum = 0;
// for (i = 0; i < numb.length; i++) {
//     if (numb[i] > 0) {
//         sum += numb[i]

//     }
// }
// console.log(sum)

// const numb = [1, 2, 5, 9, 4, 13, 4, 10];
// for (i = 0; i < numb.length; i++) {
//     if (numb[i] === 4) {
//         console.log('est');
//         break;
//     }
// }

// const nums = [10, 20, 30, 50, 235, 3000, 40, 70];
// const result = nums.filter(numb => {
//     const condition = ['1', '2', '5']
//     if (condition.includes(numb.toString()[0])) return true
//     return false
// })
// console.log(result)

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (i = 0; i < nums.length; i++) {
//     console.log()
// }

// const arr = [12, 15, 20, 25, 59, 79];
// const mid = arr.reduce((inValue, cur) => {
//     return inValue + cur;
// }, 0);
// console.log(arr.length);
// console.log(mid / arr.length);

// const num = 4;
// const sqrt = () => {
//     return num ** 2;
// }
// console.log(sqrt(num))

// const sum = (a,b) => {
//     return a + b;
// }
// // console.log(sum(3,5))
// const numb = +prompt('номер дня тижня')
// const
// const sum = (numb) => {
//     return
// }

// const getDigitsSum = (num) => (num).toString().split('').reduce((acc, cur) => acc + +cur, 0);
//     const strNum = (num).toString();
//     console.log(strNum);
//     const parceStr = strNum.split('');
//     console.log(parceStr)
//     const strSum = parceStr.reduce((acc, cur) => acc + +cur, 0);

//     return strSum;
// }
// console.log(getDigitsSum(1012))
// const result = [...Array(2021).keys()].reduce((acc, cur) => getDigitsSum(cur) === 13 ? [...acc, cur] : acc, [])
//     if (getDigitsSum(cur) === 13) {
//         return [...acc, cur]
//     }
//     return acc;

// }, [])
// console.log(result)

// const arr = [1, 2, 54, 4, 5];
// const res = arr.reduce((acc, cur, index) => {
//     if (index === 2) {
//         return acc
//     }
//     return [...acc, cur]
// }, [])
// console.log(res)

// const getDivisors = (num) => [...Array(num).keys()].reduce((acc, cur) => num % cur === 0 ? [...acc, cur] : acc ,[])
// console.log(getDivisors(1488))

// Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false.

// Дан массив с целыми числами. Создайте из него новый массив, где останутся лежать только четные из этих чисел. Для этого используйте вспомогательную функцию isEven из предыдущей задачи.

// const isEven = (num) => num % 2 === 0;
// console.log(isEven(18))
// const result = [15, 16, 14].reduce((acc, cur) => isEven(cur) ? [...acc, cur] : acc, []);

// console.log(result);

// Дана строка. Сделайте заглавным первый символ каждого слова этой строки. Для этого сделайте вспомогательную функцию ucfirst, которая будет получать строку, делать первый символ этой строки заглавным и возвращать обратно строку с заглавной первой буквой.

// const str1 = 'petka, ivan, vitalik';
// const ucfirst = (str2) => str2.split(', ').map(person => `${person[0].toUpperCase()}${person.slice(1)}`).join(', ');
// console.log(ucfirst(str1));

// Дана строка вида 'var_text_hello'. Сделайте из него текст 'varTextHello'.

// let str = "var_text_hello";
// let res = str.split('_').map((text, index) => index === 0 ? ${text} : ${text[0].toUpperCase()}${text.slice(1)}).join('')

// console.log(res)

// Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным текстом или нет. Функция первым параметром должна принимать текст элемента, а вторым - массив, в котором делается поиск. Функция должна возвращать true или false.

// const inArray = (str, arr) => arr.filter(text => text.includes(str)).length > 0
// {
// for (i = 0; i < arr.length; i++) {
// if (arr[i].includes(str)) return true;
// }
// return false;
// };
// console.log(inArray("dfefrtgt", ["dsds", "dfefrtgt123", "tytyt"]));

// Дана строка, например, '123456'. Сделайте из нее '214365'.

// const str = "123456";
// for (i = 0; i < str.length; i++) {
//     for (j = 0; j < str.length; j++) {

//     }
// }

// const midNum = (arr) => arr.reduce((acc, cur) => acc + cur, 0) / 2;

// console.log(midNum(([1,2,4,5,6,7,7,0,-1])))

// const getDigitsSum = (num) => (num).toString().split('').reduce((acc, cur) => acc + +cur, 0);

// console.log(getDigitsSum(1012))
// const result = [...Array(2021).keys()].reduce((acc, cur) => getDigitsSum(cur) === 13 ? [...acc, cur] : acc, [])

// console.log(result)

// пусть дан массив с числами, давайте запишем в новый массив только те элементы, сумма цифр в которых от 1 до 9.

// const arr1 = [99,22,4,6,7,8,55,-1,0]
// const arr = (num) => String(num).split('').reduce((acc, cur) =>  acc + +cur, 0);
// const result = arr1.filter(numb => {
//     const res = arr(numb)
//     return res > 1 && res < 9
// })
// console.log(result)

/**
 * Описание задачи: Напишите функцию, которая очищает массив от нежелательных значений, таких как false, undefined, пустые строки, ноль, null.
 * Ожидаемый результат: [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]
 * Сложность задачи: 1 of 5
 * @param {Array} array - Массив любых элементов
 * @returns {Array}
 */

// const data = [0, 1, false, 2, undefined, '', 3, null];
// const compact = (array) => array.filter(item => !!item)
//    console.log(compact(data))

/**
 * Описание задачи: Напишите функцию, которая возвращает объект, составленный из значений вложенных массивов. Первое значение - ключ, второе - зачение.
 * Ожидаемый результат: [['a', 1], ['b', 2]] => { a: 1, b: 2 }
 * Сложность задачи: 2 of 5
 * @param {Array} array - массив, значения которого массивы пар
 * @returns {Array}
 */

// let result = arr.reduce((finalArr, curent) => {

//     if (Array.isArray(curent)) {
//        finalArr = [...finalArr, ...curent]
//     } else {
//         finalArr = [...finalArr, curent]
//     }

//    return finalArr

// }, [])
// console.log(result)

// const data = [['a', 1], ['b', 2]];

// const fromPairs = (array) => array.reduce((acc, cur) => {
//   const [key, value] = cur;
//   acc[key] = value
//   return acc
// }, {} )

//  console.log(fromPairs(data))

//  const key = 'age'
//  const value = 26
//  const obj = {[key]: value}

// console.log(obj)

/**
  * Описание задачи: Напишите функцию, которая убирает повторяющиеся значения.
  * Ожидаемый результат: [1, 2, 3, 1, 2] => [1, 2, 3]
  * Сложность задачи: 2 of 5
  * @param {Array<string | number>} array - Массив с примитивными значениями
  * @returns {Array}
// */
// const unique = (array) => array.filter((item, index)=> array.indexOf(item) === index)

//  const data = [1, 2, 1, 2, 3];
//  console.log(unique(data)); // [1, 2, 3]

//  /**
//   * Описание задачи: Напишите функцию, которая сравнивает два массива и возвращает true, если они идентичны.
//   * Ожидаемый результат: ([1, 2, 3], [1, 2, 3]) => true
//   * Сложность задачи: 2 of 5
//   * @param {Array} firstArray - Массив с примитивными значениями
//   * @param {Array} secondArray - Массив с примитивными значениями
//   * @returns {boolean}

// const isEqual = (firstArray, secondArray) => {
//   if (firstArray.length === secondArray.length) {
//     for (i = 0; i < firstArray.length; i++) {
//       if (firstArray[i] !== secondArray[i]) {
//         return false
//       }
//     }
//     return true
//   } else {
//     return false
//   }
// }

// const arr1 = [1, 2, 3, 4];
// const arr2 = [1, 2, 3, 4];
// const arr3 = [1, 2, 3, 5];
// const arr4 = [1, 2, 3, 4, 5];
// console.log(isEqual(arr1, arr2)); // true
// console.log(isEqual(arr1, arr3)); // false
// console.log(isEqual(arr1, arr4)); // false

/**
  * Описание задачи: Напишите функцию, которая преобразует глубокий массив в одномерный.
  * Ожидаемый результат: [1, 2, [3, 4, [5]]] => [1, 2, 3, 4, 5]
  * Сложность задачи: 3 of 5
  * @param {Array} array - Глубокий массив
  * @returns {Array}
  *
  * // const recFunc = (arr, index) => {
// console.log(arr[index]);
// if (index === arr.length - 1) return;
// recFunc(arr, ++index);
// };
// recFunc([1, 2, 4], 0);
// // console.log('asdfsdf');

*/
// const flatten = (array) => array.reduce((acc, cur) => Array.isArray(cur) ? [...acc, ...flatten(cur)] : [...acc, cur], [])

// const data = [1, 2, [3, 4, [5,[7],[9]]]];
// console.log(flatten(data)); // [1, 2, 3, 4, 5]

// const isPlainObject = (element) => typeof element === 'object' ? true : false

// const data = { a: 1 };
// console.log(isPlainObject(data)); // true

// const getObj = () => {
//   return city1
// }

// const city1 = {
//   name: 'IF',
//   population: 10000000,
//   getName() {
//     return this.name
//   },
//   exportStr() {
//     for (let key in this) {
//       if (typeof this[key] !== 'function') {
//         console.log(`${key}=${this[key]}`)
//       }

//     }
//   },
//   getCity: () => {
//     const ref = getObj()
//       return ref
//   }
// };
// const city2 = {
//   name: 'Ter',
//   population: 10000000,
//   getName() {
//     return this.name
//   },
//   exportStr() {
//     for (let key in this) {
//       if (typeof this[key] !== 'function') {
//         // console.log(`${key}=${this[key]}`)
//       }
//     }
//   },
//   getCity(getObj) {

//   }
// };
// // console.log(city1.getCity())

// let obj = {
//   method1() {
//     return this
//   },
//   method2() {
//     return this
//   },
//   method3() {
//     return 'method3'
//   }
// }
// const obj2 = obj
// obj = false
// // console.log(obj2.method1().method2().method3())

// city1.exportStr()
// city2.exportStr()

// let d1 = [45, 78, 10, 3];
// d1[7]=100;
// d1[6]

// console.log(d1[6])

// Создайте массив d3 с числовыми величинами 45,78,10,3. Добавьте в массив d3 еще одно число (например, d[7] = 100) Посчитайте в переменную sum3 сумму чисел в нем, при помощи цикла for/in.

// const num = [45,78,10,3, undefined];
// num[7] = 100;
// console.log(num)
// let sum = 0;
// for (key in num) {
//   if (num[key] !== undefined) {
//     sum += num[key]
//     console.log(key)
//   }
// }
// console.log(sum)

// 2. Створіть обєкт який має у собі 2 довжини сторін фігури.
// Додайте методи які будуть робити наступне - рахувати площу фігури,
// периметр фігури, зроблять фігуру 3-д, зададуть назву фігури,
// переведуть значення з сантиметрів у метри.

// const obj = {
//   side1: 20,
//   side2: 30,
//   area() {
//     // console.log(this.side1 * this.side2)
//   },
//   perimeter() {
//     // console.log(2*(this.side1+this.side2))
//   },
//   addSide() {
//     obj['side3']=40;
//     // console.log(obj)
//   },
//   nameFigure() {
//     obj['name'] = 'qwerty';
//     // console.log(obj)
//   },
//   changeValue() {
//     console.log(this.side1/100)
//   }
// }
// obj.area()
// obj.perimeter()
// obj.addSide()
// obj.nameFigure()
// obj.changeValue()

// 3. Створимо аналог списка покупок (мінімум 5 покупок з всіма заданими пропертями. )

// {

//   tomato: {

//     count: 5,
//     price: 50,
//     buy: false,
//     outOfstore: true

//   } , ...

// }

// const shopingList = {
//   tomato: {
//     count: 5,
//     price: 50,
//     buy: true,
//     outOfstore: true
//   },

//   potato: {
//     count: 10,
//     price: 30,
//     buy: false,
//     outOfstore: false
//   },

//   onion: {
//     count: 3,
//     price: 15,
//     buy: false,
//     outOfstore: true
//   },

//   orange: {
//     count: 6,
//     price: 70,
//     buy: false,
//     outOfstore: false
//   },

//   banana: {
//     count: 4,
//     price: 40,
//     buy: true,
//     outOfstore: true
//   }
// };

//  Виводимо список покупок - спочатку ті які є в магазині потім яких немає,
// Виводимо список покупок які ми купили.
// Додаємо функцію яка дозволить купити продукт.
// Додаємо функцію яка просумує всі зроблені покупки і виведе результат.(не забуваємо що є значення кількості та ціни за одиницю товару)
// Додаємо можливість збільшувати кількість товару.
// Додаємо можливість зменшувати кількість товару(менше 0 бути не може).

// const canBuy = (shopingList) => {
//   for (key in shopingList) {
//     if (shopingList[key].buy === false) {
//       shopingList[key].buy = true
//     }
//   }
//   return shopingList
// }
// console.log(canBuy(shopingList))
// let res = 0;
// const sum = (res) => {
//   for (key in shopingList) {
//     if (shopingList[key].buy === true) {
//       res += shopingList[key].count * shopingList[key].price;
//     }
//   }
// return res
// }
// console.log(sum(res))

// написати функцію, яка приймає один аргумент (число) і повертає масив чисел Фібоначі менших за це число

// const fibo = (number) => {
//   const arr = [1, 1];
//   for (i = 2; i < number; i++) {
//     const concat = arr[i - 1] + arr[i - 2]
//     if (concat < number) {
//       arr.push(concat)
//     }
//   }
//   return arr
// }
// console.log(fibo(10));

// for (i = 0; i < number; i++) {
//   const concat = arr[i - 2] + arr[i - 1]
//   if (concat <= 1111) {
//     arr.push(concat)
//   }
// }
// return arr

// В високосном годе 366 дней, в обычном 365.

//   Если год не делится на 4, значит он обычный.
//   Иначе надо проверить не делится ли год на 100.
//   Если не делится, значит это не столетие и можно сделать вывод, что год високосный.
//   Если делится на 100, значит это столетие и его следует проверить его делимость на 400.
//   Если год делится на 400, то он високосный.
// //   Иначе год обычный.

// const year = (num) => {
//   if (num % 4 != 0 || num % 100 == 0 && num % 400 != 0) {
//     return 'тіпікал'
//   } else {
//     return 'висок'
//   }
// }
// console.log(year(2000))

// Из двух случайных чисел, одно из которых четное, а другое нечетное, определить и вывести на экран нечетное число.

// const getNumber = (numb1, numb2) => {
//   if (numb1 % 2 !== 0) {
//     return numb1
//   } else if (numb2 % 2 !== 0) {
//     return numb2
//   } else {
//     return 'нема не парних'
//   }
// }
// console.log(getNumber(6,12))

// Посчитать четные и нечетные цифры введенного натурального числа. Например, если введено число 34560, то у него 3 четные цифры (4, 6 и 0) и 2 нечетные (3 и 5).

// const getSum = (numb) => {
//   const strNum = numb.toString().split('');
//   const res = strNum.filter(item => +item % 2 === 0)
//   const res2 = strNum.filter(item => +item % 2 !== 0)
//   const strNumbs = `парних ${res.length}, не парних ${res2.length}`
//   return strNumbs
// }
// console.log(getSum(34560))

// Введите последнее число последовательности: 200
// Сумма чисел делящихся на 5 из последовательности [0, 200] равна 4100

// const result = [...Array(201).keys()].reduce((acc,cur) => cur % 5 === 0 ? acc + cur : acc, 0)
// console.log(result)

// створити об'єкт з масива в якому містяться масиви з двома елементами (проперті, велью) приклад
// дано - [['name', 'ivan'], ['age', 13], 14, ['test']] - має вийти {name: 'ivan', age: 13}

// const arr = new Map([['name', 'ivan'], ['age', 13], 14, ['test']])
// const obj = Object.fromEntries(arr)
// console.log(arr)

// const arr = [['name', 'ivan'], ['age', 13], 14, ['test']]
// const res = arr.reduce((acc, cur) => {
//   if (Array.isArray(cur) && cur.length > 1) {
//     acc[cur[0]] = cur[1]
//   }
//   return acc
// }, {})
// console.log(res)

//  написати функцію, яка прийме об'єкт і поверне масив з двох об'єктів з одниковими типами значень:
// [{name: 'Oleg', surrName: 'Paliy'}, {age: 25, height: 180s}]
// const obj = {
//   name: 'Oleg',
//   age: 25,
//   surrName: 'Paliy',
//   height: 180
// };

// const getAray = (obj) => {
//   let arrObj = Object.keys(obj).reduce((acc, cur) => {

//     if (typeof obj[cur] === 'string') {
//       acc[0][cur] = obj[cur]
//     } else {
//       acc[1][cur] = obj[cur]
//     }
//     return acc
//   }, [{}, {}])
//   return arrObj
// }

// // console.log(getAray(obj))

// // const obj = {
// //   name: 'Oleg',
// //   age: 25,
// //   surrName: 'Paliy',
// //   height: 180
// // };

//  const arr1 = [{name: 'Oleg', surrName: 'Paliy'}, {age: 25, height: 180}]

// const getObj = (array) => {
//    let res = array.reduce((acc, cur) => {
//      return {...acc, ...cur}

//   },{})
//   return res
// }
// console.log(getObj(arr1)

// const str = 'QwErTy'
// const res = str.split('')
//   .map(item => item == item.toLocaleUpperCase()
//     ? item.toLocaleLowerCase()
//     : item.toLocaleUpperCase()
//   )
//   .join('')
// console.log(res)

// дано число 5678 створити обєкт у вигляді {number5: 5, number6: 6, number7: 7, number8: 8}
// const initNumber = 5678

// const res = initNumber.toString().split('').reduce((acc, cur) => {
//   return {...acc, [`number${cur}`]:cur}
// },{})
// console.log(res)

// дано масив [4,6,2,3,7,8] сформувати такий об'єкт {'4+6+2+3+7+9': 15}

// const getObjSum = (arr) => arr.reduce((acc, cur, index) => {
//   const strField = Object.keys(acc)[0];
//   return { [!index ? cur : `${strField} + ${cur}`]: acc[strField] ? acc[strField] + cur : cur }
// }, {})
// console.log(getObjSum([4, 6, 2, 3, 7, 8, 9]))

// const arr = [4, 6, 2, 3, 7, 8];
// let sum = 0;
// let obj = {};
// let str = '';
// for (let i = 0; i < arr.length; i++) {
//   str = str + arr[i] + '+'
//   sum = sum + arr[i]
// }
// str = str.substring(0, str.length - 1);
// obj[str] = sum
// console.log(obj)

// const arr = [2, 10, 5, 7, 8, 4, 1, 0, -1, 100]
// let maxNum = arr[0]
// let minNum = arr[0]
// let maxIdx;
// let minIdx;
// for (i = 0; i < arr.length; i++) {
//   if (maxNum < arr[i]) {
//     maxNum = arr[i] // 2,10,100
//     maxIdx = i //0,1,9
//   }
// }
// for (i = 0; i < arr.length; i++) {
//   if (minNum >= arr[i]) {
//     minNum = arr[i] //2, 1,0, -1
//     minIdx = i
//   }
// }
// arr[maxIdx] = minNum
// arr[minIdx] = maxNum

// console.log(arr)
// console.log(maxIdx)
// console.log(minIdx)
// console.log(maxNum)
// console.log(minNum)

// const arr = [10, 2, 2, 5, 7, 8, 4, 1, 0, -1]
// const findIndex = (elem) => {
//   let arr2 = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === elem) {
//       arr2.push(i)
//     }
//   }
//   if (arr2.length === 0) {
//     return 'not found'
//   } else if (arr2.length === 1) {
//     return arr2[0]
//   }
//   return arr2
// }
// console.log(findIndex(2)) // 1
// console.log(findIndex(7)) // 3
// console.log(findIndex(50))

// const reversArr = (arr) => {
//   let newArr = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     newArr.push(arr[i])
//   }
//   return newArr
// }
// console.log(reversArr([4, 9, 12, 67, -7, 0]))

// const reversArr = (arr) => {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     newArr.push(arr[arr.length - (i + 1)])
//   }
//   return newArr
// }
// console.log(reversArr([4, 9, 12, 67, -7, 0]))

// const inputArray = [4, 9, 12, 67, -7, 0];

// const res = inputArray.sort((a, b) => a - b);
// console.log(res);

// const sortArray = (arr) => {
//   let a;
//   let b;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - 1; j++) {
//       a = arr[j];
//       b = arr[j + 1];
//       if (a > b) {
//         arr[j] = b;
//         arr[j + 1] = a;
//       }
//     }
//   }
//   return arr;
// };

// console.log(sortArray(inputArray)); // [-7, 0, 4, 9, 12, 67]

// const input = [
//   {
//     name: 'Ivan',
//     age: 19
//   },
//   {
//     name: 'Oleg',
//     age: 17
//   },
//   {
//     name: 'Petro',
//     age: 40
//   }
// ]

// const decider = (arr) => {

//   for (let i = 0; i < arr.length; i++) {
//     arr[i].alcohol = arr[i].age >= 21 ? 'yes' : 'no'
//     // arr[i].age >= 21 ? arr[i].alcohol = 'yes' : arr[i].alcohol = 'no'
//     arr[i].army = arr[i].age >= 18 ? 'yes' : 'no'
//     // arr[i].age >= 18 ? arr[i].army = 'yes' : arr[i].army = 'no'
//   }
//   return arr
// }

// const input2 = decider(input)

// const arrFilter = (arr, alco, army) => {
//   const newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (alco === arr[i].alcohol && army === arr[i].army) {
//       newArr.push(arr[i])
//     }
//   }
//   return newArr
// }

// console.log(arrFilter(input2, 'no', 'yes')) // [{ name: 'Ivan', age: 19, alcohol: 'no', army: 'yes' }]
// console.log(arrFilter(input2, 'no', 'no')) // [{ name: 'Oleg', age: 17, alcohol: 'no', army: 'no' }]
// console.log(arrFilter(input2, 'yes', 'yes')) // [{ name: 'Petro', age: 40, alcohol: 'yes', army: 'yes' }]

// const input = [
//   {
//     label: 'ford',
//     speed: 170
//   },
//   {
//     label: 'ferrari',
//     speed: 260
//   },
//   {
//     label: 'mitsubishi',
//     speed: 190
//   },
// ]

// const getStatus = (arr, car) => {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - 1; j++) {
//       if (arr[j].speed < arr[j + 1].speed) {
//         const tempItem = arr[j]
//         arr[j] = arr[j + 1]
//         arr[j + 1] = tempItem
//       }
//     }
//   }
//   for (let i = 0; i < arr.length; i++) {
//     if (car === arr[i].label) {
//       return `its ${i + 1}`
//     }
//   }
//   return `nema`
// }

// console.log(getStatus(input, 'ford')) // its 3
// console.log(getStatus(input, 'ferrari')) // its 1
// console.log(getStatus(input, 'mitsubishi')) // its 2
// console.log(getStatus(input, 'lanos')) // not found

// const clock = () => {
//   console.clear()

//   let date1 = new Date()
//   let hours = date1.getHours()
//   let minutes = date1.getMinutes()
//   let seconds = date1.getSeconds()
//   return `${hours}:${minutes}:${seconds}`
// }

// setInterval(() => {
//   console.log(clock())
// }, 1000);

// const getAge = (dob) => {
//   let [day, month, year] = dob.split('/')
//   let curYear = new Date().getFullYear()
//   let curMonth = new Date().getUTCMonth()
//   let curDay = new Date().getUTCDate()
//   console.log(curDay)
//   if ((curMonth - month) < 1) {
//     curYear = curYear - 1
//     curMonth = 12 + curMonth
//   }
//   return `${curYear - year} year, ${curMonth - month} months, ${curDay - day} day`
// }
// console.log(getAge('15/04/1996')) // 25 years, 5 months, 5 days, 6 hours, 32 minutes, 5 seconds
// console.log(getAge('05/12/1996')) // 25 years, 5 months, 5 days, 6 hours, 32 minutes, 5 seconds
// console.log(getAge('6/09/1990')) // 25 years, 5 months, 5 days, 6 hours, 32 minutes, 5 seconds

// const vowleChange = (str) => {

//   const arrStr = str.split('').reduce((acc, cur) => cur === 'e' || cur === 'i' ? acc : acc + cur, '')
//   return arrStr
// }
// console.log(vowleChange('weight'))
const arr = [{ num: 245 }, { str: 1, num: 'str' }, { num: 'test' }, { str: 543 }]
// перевірити всі проперті обєкта на відповідність між назвою філди і типом велю і змінити на відповідне
// const changeArr = (arr1) => {
//   const newArr = []
//   for (let i = 0; i < arr1.length; i++) {
//     const obj = {
//     }
//     for (key in arr1[i]) {
//       const neededKey = typeof arr1[i][key] === 'string' ? 'str' : 'num'
//       if (key !== neededKey) {
//         obj[neededKey] = arr1[i][key];
//       } else {
//         obj[key] = arr1[i][key];
//       }
//     }
//     newArr.push(obj)
//   }
//   return newArr
// }
// console.log(changeArr(arr))

// const persistence = (num) => {
//   let count = 0;
//   num = num.toString();
//   while (num.length > 1) {
//     count++;
//     num = num
//       .split("")
//       .reduce((acc, cur) => acc * +cur, 1)
//       .toString();
//   }
//   return count;
// };
// console.log(persistence(39));

// function findNb(m) {
//   let n = 0
//   let total = 0
//   while (total < m) {
//     n += 1
//     total += n ** 3
//   }
//   return total === m ? n : -1
// }
// console.log(findNb(4183059834009))
// console.log(findNb(467687654))
// console.log(findNb(4565))

// const addArr = (arr) => {
//   let newArr = [];
//   let vowels = ["а", "е", "і", "о", "у"];
//   let lastLettersMan = ['кий', 'вич']
//   for (let i = 0; i < arr.length; i++) {
//     const lastLet = arr[i].name.slice(-1);
//     const lastLetForMale = arr[i].name.slice(-3);
//     const obj = {};
//     for (key in arr[i]) {
//       obj[key] = arr[i][key];
//       if (vowels.includes(lastLet)) {
//         obj.sex = "female";
//       } else if (lastLettersMan.includes(lastLetForMale)) {
//         obj.sex = "male";
//       } else {
//         obj.sex = "not recognized"
//       }
//     }
//     newArr.push(obj);
//   }
//   return newArr;
// };
// console.log(
//   addArr([
//     { name: "Іван Васильович" },
//     { name: "Магдилина Іванівна" },
//     { name: "Петро Брецізький" },
//     { name: "Марта Брезіцька" },
//     { name: "Smith" }
//   ])
// );

// const addArr = (arr) => {
//   const vowels = ["а", "е", "і", "о", "у"];
//   const lastLettersMan = ["кий", "вич"];
//   return arr.map((item) => {
//     const lastLetForFemale = item.name.slice(-1);
//     const lastLetForMale = item.name.slice(-3);
//     if (vowels.includes(lastLetForFemale)) {
//       return { ...item, sex: "Female" };
//     } else if (lastLettersMan.includes(lastLetForMale)) {
//       return { ...item, sex: "male" };
//     } else {
//       return { ...item, sex: "vono" };
//     }
//   });
// };
// console.log(
//   addArr([
//     { name: "Іван Васильович" },
//     { name: "Магдилина Іванівна" },
//     { name: "Петро Брецізький" },
//     { name: "Марта Брезіцька" },
//     { name: "Smith" },
//   ])
// );

// const addArr = (arr) => arr.map((item) => ({ fullName: item.name }));
// console.log(
//   addArr([
//     { name: "Іван Васильович" },
//     { name: "Магдилина Іванівна" },
//     { name: "Петро Брецізький" },
//     { name: "Марта Брезіцька" },
//     { name: "Smith" },
//   ])
// );

// const addArr = (arr) => {
//   const newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     const obj = { fullName: arr[i].name };
//     newArr.push(obj);
//   }
//   return newArr;
// };
// console.log(
//   addArr([
//     { name: "Іван Васильович" },
//     { name: "Магдилина Іванівна" },
//     { name: "Петро Брецізький" },
//     { name: "Марта Брезіцька" },
//     { name: "Smith" },
//   ])
// );

// function validatePIN(pin) {
//   let numb = Number(pin);
//   console.log(numb)
//   if (Number.isInteger(numb) && numb > 0 && (pin.length === 4 || pin.length === 6)) {
//     return true;
//   } else {
//     return false
//   }
// }
// console.log(validatePIN('.24455'))

const guys = [{ name: "Petro", gang: "nigga" }, { name: 'Ivan', gang: "norm" }, { name: 'Vitalik', gang: "nigga" }, { name: 'Kolya', gang: "norm" }];
const newArr = []
for (let i = 0; i < guys.length; i++) {
  const obj = {}
  for (key in guys[i]) {
    obj[key] = guys[i][key]
    if ()
  }
  newArr.push(obj)
}
console.log(newArr)

// const res = [{ name: "Petro", gang: "nigga", brothers: [{ name: 'Vitalik' }] }, { name: 'Ivan', gang: "norm", brothers: [{ name: 'Kolya' }] }]