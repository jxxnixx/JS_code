//// String_Methods

/// 문자열 작성 시 ``를 사용하면 여러 줄 가능
let desc = `ABC 
DEF
G`

let dd = `d
dd
ddd
dddd`

/// length : 문자열 길이, 회원가입이나 로그인 시 몇 자 제한에 사용

console.log(desc.length); 

console.log(dd.length);

/// 특정 위치 접근
console.log(desc[2]);

console.log(dd[3]);

/// but 배열과 다르게 한 글자만 변경하는 것 불가.
desc[4] = 'K';
console.log(desc); // 아무 변화 없음.

/// toUpperCase()/toLowerCase() :  모든 영문을 대문자/소문자로 변경

let d = "Hi guys. Nice to meet you.";

console.log(d.toUpperCase());
console.log(d.toLowerCase());

console.log(dd.toUpperCase());
console.log(dd.toLowerCase());

/// str.indexOf(text) : 인덱스 위치 반환

console.log(d.indexOf('to'));
console.log(d.indexOf('man')); // 길이가 아무리 길어도 첫 단어의 위치만 반환

console.log(dd.indexOf('ddd'));

// 주의
if ( d.indexOf('Hi')) {
    console.log('Hi가 포함된 문장입니다.');
}// 이때, Hi의 H 인덱스는 0이고, 0은 false이므로, 해당 문장은 출력되지 않음.
// 따라서 > -1 로 사용해줘야 함.
if ( d.indexOf('Hi') > -1) {
    console.log('Hi가 포함된 문장입니다.');
}

if(dd.indexOf('c')){
    console.log('c도 있음');
}

if(dd.indexOf('c') < 0){
    console.log('c없따');
}

/// str.slice(n, m) : 인덱스 n부터 m까지 추출.
/// m 이 지정되지 않으면 문자열 끝까지, 양수면 그 숫자까지(포함X), 음수면 뒤에서부터(포함O)

let de = "abcdefg";

console.log(de.slice(2));
console.log(de.slice(0,5));
console.log(de.slice(2,-2));

console.log(dd.slice(6));
console.log(dd.slice(3,5));
console.log(dd.slice(5,-2));

/// str.substring(n, m) : n과 m 사이 문자열 반환. 
/// n과 m 을 바꿔도 동작, 즉 말 그대로 'n과 m 사이 문자열' 반환!
/// 음수 허용 X, 0으로 인식

console.log(de.substring(2,5));
console.log(de.substring(5,2));

console.log(dd.substring(1,5));

/// str.substr(n,m) : n부터 시작, m개를 가져옴.
console.log(de.substr(2,4));
console.log(de.substr(-4,2));

console.log(dd.substr(3,1));

/// str.trim() : 앞뒤 공백 제거
let des = "  abcdefg     "
console.log(des.trim());

/// str.repeat(n) : n번 반복
let hello = "hello!";
console.log(hello.repeat(3));

/// 문자열 비교
console.log(1 < 3);
console.log("a" < "c");

// 아스키 코드 얻어오기
console.log("a".codePointAt(0));
console.log(String.fromCodePoint(97));


/// 예제

let list = [
    "01. 들어가며",
    "02. JS의 역사",
    "03. 자료형",
    "04. 함수",
    "05. 배열",
];

let newList = [];

for (let i = 0; i < list.length; i++){
    newList.push(list[i].slice(4));
}

console.log(newList);

//

let l = [
    "1. 김",
    "2. 연",
    "3. 주",
];

let nl = [];

for (let i = 0; i <l.length; i++) {
    nl.push(l[i].slice(3));
}

console.log(nl);

/// 

function hasCola(str) {
    if (str.indexOf("콜라")) {
        console.log("금칙어가 있습니다.")
    } else {
        console.log("통과");
    }
}

hasCola("와 사이다가 짱이야!"); // 찾는 문자열이 없으면 -1 리턴
hasCola("무슨 소리, 콜라가 최고");
hasCola("콜라");

// 따라서, 금칙, 금칙, 통과가 출력되므로 저렇게 하지 말고

function hasCola(str) {
    if (str.indexOf("콜라") > -1 ) { // > -1 사용!
        console.log("금칙어가 있습니다.")
    } else {
        console.log("통과");
    }
} 

// 호이스팅에 의해 다시 함수 호출 할 필요 없음!

//

function hasS(str){
    if (str.indexOf("sex") > -1) {
        console.log("금칙어 있음")
        console.log(str.indexOf("sex"))
    } else {
        console.log("통과 ㅇㅇ");
    }
}

hasS("나쁜 말");
hasS("sex");

// includes : 문자가 있으면 true, 없으면 false 반환
// 인덱스 필요 없이 문자가 있는지 없는지만 파악할 때 이를 사용

function hasCola1(str) {
    if (str.includes("콜라")) {
        console.log("금칙어가 있습니다.")
    } else {
        console.log("통과");
    }
} 

hasCola1("와 사이다가 짱이야!"); // 찾는 문자열이 없으면 -1 리턴
hasCola1("무슨 소리, 콜라가 최고");
hasCola1("콜라");
