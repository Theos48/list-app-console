

// **************************
//BUSQUEDA BINARIA
// const MAX = 100;
// let arreglo = [];

// for (let index = 0; index < MAX; index++) {
//     arreglo[index] = index;    
// }

// let min = 0;
// let max = arreglo.length;
// let found = false;
// const ENTRADA = 23;
// while (found != true) {
//     let half = Math.round((min + max)/2);
//     if (arreglo[half] == ENTRADA){
//         console.log(arreglo[half]);
//         console.log('ENCONTRADO');
//         found = true;
//     }else if (arreglo[half] > ENTRADA) {
//         max = half;
        
//     }else if (arreglo[half] < ENTRADA) {
//         min = half;   
//     }
// }

// ***************





// class Nodo {
//     constructor (info, liga = null) {
//         this.info = info;
//         this.liga = liga;
//     }
// }

// class ListaEnlazada {
//     constructor() {
//         this.head = null; //node1
//         // this.size = 0;
//     }

//     insertFirst(data) {
//         this.head = new Nodo(data, this.head);
//     }
// }

// const ll = new ListaEnlazada();

// ll.insertFirst(100);
// ll.insertFirst(21);
// ll.insertFirst(233);

// console.log(ll);

// let s = "MCMXCIV";
// const romanToInt = (s) => { 
//     let sum = 0;
//     let placeHolder = 1000;

//     for (let position = 0; position < s.length; position++) {
//         let value = 0;

//         if ( s.charAt(position) == 'I' ) {
//             value = 1; 
//         } else if ( s.charAt(position) == 'V' ) {
//             value = 5; 
//         } else if ( s.charAt(position) == 'X' ) {
//             value = 10;
//         } else if ( s.charAt(position) == 'L' ) {
//             value = 50;
//         } else if ( s.charAt(position) == 'C' ) {
//             value = 100; //2
//         } else if ( s.charAt(position) == 'D' ) {
//             value = 500;
//         } else if ( s.charAt(position) == 'M' ) {
//             value = 1000; //1 //2
//         }

//         sum += value;  // 1000 + 100 + 1000
//         if ( value > placeHolder ) sum = sum - 2 * placeHolder; 
//         placeHolder = value; //1000 //100
        
//     }

//     console.log(sum);
// }

// romanToInt(s);
// s = s.split('');

// let nums = [2,7,11,15], target = 9;

// const twoSum = function(nums, target) {
//     for (let row_num = 0; row_num < nums.length; row_num++){
//         for (let col_num = 1; col_num < nums.length; col_num++){
//             if ( nums[row_num] == target - nums[col_num]) return [row_num, col_num]
//         }
//     }
// }

// // console.log( twoSum(nums, target) );

// const x = 121;

// const reverseNumber = (numero, pos) => {
//     if(numero<10){
//         return numero;
//     } else {
//         return numero%10 * Math.pow(10, pos) + reverseNumber(numero/10, pos-1); 
//     }
// }

// const isPalindrome = (x) => {  
//     if ( x < 0 ) return false
//     console.log( reverseNumber( x, (x.toString().length) - 1) )
//     return x == reverseNumber( x, (x.toString().length) - 1);
// }


// isPalindrome(x);

// console.log(reverseX);
