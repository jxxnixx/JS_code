//// Variable. 변수

var name = 'Mike';
console.log(name);

var name = 'Jane';   // var : 이미 선언된 변수 중복 선언 가능
console.log(name);

let name1 = 'Mike';
console.log(name1);

/*
let name1 = 'Jane';  // let : 이미 선언된 변수 중복 선언 불가. error
console.log(name); 
*/

// var : 호이스팅 가능. but 선언만, 할당은 불가.
// let, const : 역시나 가능, but TDZ 영역에 영향 받음.

let age = 30;
function showAge() {
    console.log(age);
    // let age = 20; // let은 원래 scope 단위로 선언 가능하지만, 
                     // 호이스팅에 의해 오류. 중복 선언 불가하므로.
}

showAge();

// 변수 선언, 할당 시

//let 
let name2;    // 1. 선언 2. 초기화 3. 할당
name2 = 'Mike';

// var
var age2;     // 1. 선언 및 초기화(undefined) 2. 할당
age2 = 30;

// const
const gender2 = 'male'; // 1. 선언 + 초기화 + 할당

/* error
const gender2;
gender2 = 'male'
*/

//scope. 영역

// var : 함수 스코프. 괄호 안에서 선언된 변수가 괄호 밖에서도 사용 가능
//       단, 함수 안에서 선언됐을 경우는 함수 안에서만 사용 가능
// let, const : 블록 스코프. 괄호 안에서 선언된 변수 괄호 안에서만 사용 가능

const age3 = 30;
if(age3 > 19){
    var txt = '성인';
}
console.log(txt); // var로 선언한 txt 괄호 밖에서 사용 가능
                  // let, const로 선언했을 경우 if문 안에서만 사용 가능

// var도 함수 안에서 선언될 경우 함수 안에서만 사용 가능
function add3(num1, num2) {
    var result = num1 + num2;
}
add3(2,3);
// console.log(result); //error

const age4 = 90;
var txt;
if (age4 > 19){
    txt = '성인입니다.';
} else{
    txt = '미자입니다.';
}
console.log(txt);

var v1 = 30, v2 = 50;
let result4;
function doubleAdd(n1, n2) {
    n1 = v1, n2 = v2;
    if (n1 > n2){
        result4 = n1*2 + n2;
    } else if (n1 == n2){
        result4 = n1*2 + n2*2;
    } else {
        result4 = n1 + n2*2;
    }
    console.log(result4);
}
doubleAdd(3, 5);  // 이렇게 짜면 인수가 뭐가 됐든 이미 v1, v2의 값이 지정되어 있으므로, 3, 5는 무의미해짐.

function doubleAdd1(n1, n2){
    var result5;
    if (n1 > n2){
        result5 = n1*2 + n2;
    } else if (n1 == n2){
        result5 = n1*2 + n2*2;
    } else {
        result5 = n1 + n2*2;
    }
    console.log(result5);
}
doubleAdd1(3,5); // 이렇게 짜는 게 정답.

const fa = function myadd(){
    let ma = 0;
    for (let i = 0; i <= 10 ; i++){
        ma += i;
    }
    console.log(ma);
}

fa();

const fs = (function () {
    let ms = 100;
    for (let i = 0; i<=10; i++){
        ms -= i;
    }
    console.log(ms);
})

fs();

const fd = () => {
    let md = 1000000;
    for (let i = 1; i<= 10; i++){
        md /= i;
    }
    console.log(md);
}

fd();

const fm = () => {
    let mm = 1;
    for (let i = 1; i<= 10; i++){
        mm *= i;
    }
    console.log(mm);
}

fm();

const f1 = (x, y, z) => x + y + z;
const f2 = (x, y, z) => {
    return x + y + z;
}

console.log(f1(1,2,3));
console.log(f2(1,2,3));

const f3 = (x, y, z) => ({x, y, z});
f3(1,2,3);