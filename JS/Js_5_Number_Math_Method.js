//// Number_Math_Method

//// toString() : 문자형으로 바꿔주는 함수

let num = 10;

console.log(num.toString());
console.log(num.toString(2)); // 괄호 안에 숫자를 넣을 경우, 해당 진법으로 변환.

let num_ = 255;
console.log(num_.toString(16));


let n = 300;
console.log(n.toString(8));

//// 수학 프로퍼티

console.log(Math.PI);

//
let num1 = 5.1;
let num2 = 5.7;

// 올림 : Math.ceil()
console.log(Math.ceil(num1));
console.log(Math.ceil(num2)); // 소숫점에 상관 없이 둘 다 6

// 내림 : Math.floor()
console.log(Math.floor(num1));
console.log(Math.floor(num2)); // 둘 다 5

// 반올림 : Math.round()
console.log(Math.round(num1)); // 5
console.log(Math.round(num2)); // 6

//
let nu1 = 10.2987654
let nu2 = 3.7456789

console.log(Math.ceil(nu1), Math.floor(nu1), Math.round(nu1));
console.log(Math.ceil(nu2), Math.floor(nu2), Math.round(nu2));


/// 소수점 자리수
let userRate = 30.1234;

// 소수점 셋째 자리에서 반올림, 둘째 자리까지 표현

// 자연수 형태로 만들고 다시 소수 형태로 만들기
console.log(Math.round(userRate * 100)/100)    //30.12

// toFixed() 이용. 유용하나 문자열로 반환. 그래서 Number을 사용하는 경우 많음.
console.log(userRate.toFixed(2)); // 소수점 둘째 자리까지. 

console.log(userRate.toFixed(0)); // 소수점 0째, 즉 자연수 형태
console.log(userRate.toFixed(6)); // 소수점 6째 자리까지. 0으로 채워줌.

console.log(Number(userRate.toFixed(2))); // 숫자형 Number 사용

//
let ur = 10.52819;

console.log(Math.round(ur*10000)/10000);
console.log(ur.toFixed(1), ur.toFixed(4), ur.toFixed(0), ur.toFixed(2), ur.toFixed(8));
console.log(Number(ur.toFixed(3)));


/// isNaN() : NaN인지 아닌지 판별하는 유일한 방법

let x = Number('x');

console.log(x == NaN, x === NaN, NaN == NaN); //죄다 false

console.log(isNaN(x));
console.log(isNaN(3));

/// parseInt() : 문자를 숫자로 변환
/// Number와 다른 점은 문자가 혼용되어 있어도, 읽을 수 있는 부분까지는 읽고 숫자로 변환
/// 따라서 문자로 시작되는 문자열의 경우 NaN 반환
/// 진법 지정 가능

let margin = '10px';

console.log(parseInt(margin)); // 10
console.log(Number(margin)); // NaN

let redColor = 'f3';

console.log(parseInt(redColor)); // NaN
console.log(parseInt(redColor, 16)); // 진법 지정

console.log(parseInt('11',2)) // 문자열 11을 숫자형 2진법으로 변환

/// parseFloat() : parseInt()와 동일하나 부동소수점까지 반환

let padding = '18.5%';
console.log(parseInt(padding));  // 18
console.log(parseFloat(padding)); // 18.5

//
let pn = '258.97531234567%';
console.log(Number(pn)); // NaN
console.log(parseInt(pn)); //258
console.log(parseFloat(pn)); // 258.97531234567


/// Math.random() : 0 ~ 1 사이 무작위 숫자 생성
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

// 1 ~ 100 사이 무작위 숫자 생성하려면, Math.floor(Math.random() * 100) + 1 
// 최소값 1 더해줘야 함.

console.log(Math.floor(Math.random() * 100) + 1);

//
console.log(Math.random()*10000) + 3000;


/// Math.max(), Math.min() : 최댓값, 최솟값

console.log(Math.max(1, 4, -1, 5, 10, 9, 5.54));
console.log(Math.min(1, 4, -1, 5, 10, 9, 5.54));

/// Math.abs() : 절대값

console.log(Math.abs(-1));

/// Math.pow(n,m) : n의 m제곱

console.log(Math.pow(2, 10));

/// Math.sqrt() : 제곱근

console.log(Math.sqrt(16));

//
console.log(Math.max(1,2,3,4,5,6,7,8,9));
console.log(Math.min(1,2,3,4,5,6,7,8,9));
console.log(Math.abs(-3456789));
console.log(Math.pow(2,3));
console.log(Math.sqrt(169));