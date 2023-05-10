// // bài 1:

// var chieudai = 3;
// var chieurong = 5;
// var dientich = (chieudai + chieurong) * 2;
// console.log('diện tích hình chữ nhật là : ', dientich)


// // // bài 2:
// var a = 5 ;
// if( a % 2 === 0 && a > 0 ){
//     console.log('a là số chẵn')
// }
// else{console.log('a không phải là số chẵn')};


// // // bài 3:
// for( var i = 1; i <= 10; i++){
//     console.log('giá trị của i là:', i)
// }

// // bài 4:
// // vòng lặp do while
// var i = 1;
// do {
//     console.log('giá trị của i là:', i);
//     i++;
// } while (i > 0 && i <= 10);

// // vòng lặp while
// var i = 1;
// while(i <= 10 ){
//     console.log('giá trị của i là:', i);
//     i++;
// }


// bài 5:
// While

// let number = prompt('Nhập số tùy chọn: ');
// let i = 0;

// while(number, number >= i) {
//     console.log(`Dãy số của bạn là: ${i}.`);
//     i++;
// }

// Do while
// let number = prompt('Nhập số tùy chọn: ');
// let i = 0;

// do {
//     console.log(`Dãy số của bạn là: ${i}.`);
//     i++
// } while (number, number >= i);

//For
// let number = prompt('Nhập số tùy chọn: ');
// for(let i = 0; i <= number; i++){
//     console.log(`Dãy số của bạn là: ${i}.`)
// }

//bài 6:
// let number = prompt('Nhập 1 số tùy chọn: ');
// let sum = 0;
// for(var i = 1; i <= number; i++){
//     sum += i    
// }
// console.log(`Tổng từ 1 đến ${number} l : ${sum}.`)


//buổi 2 


//bài 1
// let number = prompt('Nhập vào một số cần kiểm tra')

   
//     if(number % 3 === 0){
//         console.log( "Số này chia hết cho 3")
//     }
//     else console.log("Số này không chia hết cho 3")


//bài 2
// let number = prompt('Nhập vào một số cần kiểm tra')
// var a = number % 2 == 0 ? console.log('Số này là số chẵn') : console.log('Số này là số lẻ')


//bài 3
let number = prompt('Nhập vào một số cần kiểm tra')
var isNumber = number >= 0 ? console.log('Số này là số dương') : console.log('Số này là số âm')



//bài 4
// let number = prompt('Nhập vào một số cần kiểm tra')
// var isPrime = true
// for(var i = 2; i < number - 1; i++){
//     if( number % i == 0){
//         isPrime = false
//         break;
//     }    
// }
// if(number < 2 || isPrime == false){ 
//     console.log("Số này không phải là số nguyên tố")
// }
// else console.log("Số này là số nguyên tố")