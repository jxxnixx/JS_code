//// Generator

// 함수 실행을 중간에 멈췄다가 재개할 수 있는 기능
// 다른 작업을 하다가 다시 돌아와서 next()해주면 멈췄던 부분부터 이어서 실행

function* fn() {
    try {
        console.log(1);
        yield 1;     // yield에서 함수 실행을 멈출 수 있음.
        console.log(2);
        yield 2;
        console.log(3);
        console.log(4);
        yield 3;
        return "finish";
    }catch (e) {
        console.log(e);
    }
}

const a = fn(); 

console.log(a); // generator 함수를 실행하면, 
// generator 객체만 반환되고, 함수 본문 코드는 실행되지 않음. 1이 안 찍혔잖아 일단.

console.log(a.next()); // 가장 가까운 yield 문을 만날 때까지 실행되고 데이터 객체 반환
// value, done 프로퍼티. 
// value - yield 오른쪽 값. 값이 생략되면 undefined.
// done - 함수 코드가 끝났는지. true, false.
 

// 메소드 : next(), return(), throw().

console.log(a.return('End')); // return문을 사용하는 순간, 즉시 done 값이 true가 됨.

// console.log(a.throw(new Error('err'))); // throw도 done값을 true로 바꿈.


/// Generator
// iterable - 반복 가능. 
// 조건 : Symbol.iterator 메서드가 구현되어 있어야 하고, 그 메서드는 iterator를 반환해야 함.
// iterator - value, done 속성을 가진 객체를 반환하는 메서드, next가 있어야 함.
// 즉, generator는 iterable이면서 iterator인 것.


// 배열의 프로토 안에 있는 Symbol.iterator를 사용해 보자!

const arr = [1,2,3,4,5]; 

const it = arr[Symbol.iterator]();

console.log(it);

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

// iterable - 반복 가능, for of로 순회 가능

for(let num of arr){
    console.log(num);
}

// 다시 fn() 함수로 돌아가 이것을 적용해보면

console.log(a[Symbol.iterator]() === a);
// generator에 symbol.iterator 메소드를 적용한 것이 자기자신이라는 것.
// 즉, generator는 iterable객체이므로, for of 로 순회도 가능

function* fn1() {

    yield 4; 
    yield 5;
    yield 6;
}

const a1 = fn1(); 

for(let n of a1){
    console.log(n);
}

// 문자열도? 동일하게 iterable. 반복 가능. 

const str = 'hello';
str[Symbol.iterator];

const xx = str[Symbol.iterator]();
console.log(xx.next());
console.log(xx.next());
console.log(xx.next());
console.log(xx.next());
console.log(xx.next());
console.log(xx.next());

const xx1 = str[Symbol.iterator]();
for(let s of xx1){
    console.log(s);
}

/// 외부로부터 값을 입력받기도 하는 generator. 
// next()에 인수 전달

function* fn2() {
    const num1 = yield "첫번째 숫자를 입력해주세요.";
    console.log(num1);

    const num2 = yield "두번째 숫자를 입력해주세요.";
    console.log(num2);

    return num1 + num2;
}
const a2 = fn2();

console.log(a2.next());
console.log(a2.next(2)); // 인수로 들어간 값은 num1에 저장됨. '첫번째 숫자'가 된 것.
console.log(a2.next(4)); // 얘는 num2. '두번째 숫자' 
// 더 이상 yield가 없으니 done은 true가 됐고, value는 두 숫자의 합이 나옴. 리턴값.
// 외부로부터 값을 입력받을 수 있다는 것!

/// 값을 미리 만들어 두지 않는 generator.
// 메모리 관리 측면에서 효율적. 필요한 값만 그때그때 생성.
// 필요한 순간까지 계산을 미룰 수 있음.
// generator를 사용하지 않았다면, break가 없는 while true문을 사용하면 안 됨.

function* fn3() {
    let index = 0;
    while(true) {
        yield index++;
    }
}

const a3 = fn3();

console.log(a3.next());
console.log(a3.next());
console.log(a3.next());
console.log(a3.next());
console.log(a3.next());
console.log(a3.next());
console.log(a3.next());


/// yield*를 이용해 다른 generator 불러오기

function* gen1() {
    yield "W";
    yield "o";
    yield "r";
    yield "l";
    yield "d";
}

function* gen2(){
    yield "Hello,";
    yield* gen1();
    yield "!";
}

console.log(...gen2()); // 여기서 ...gen2()는 구조분해 할당으로, 
// for of와 마찬가지로 done이 true가 될 때까지 수행

// gen1의 자리엔, 반복 가능한 모든 객체가 올 수 있음.