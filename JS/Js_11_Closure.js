//// Closure : 함수와 렉시컬 환경의 조합. 

// 함수가 생성될 당시의 외부 변수를 기억. 생성 이후에도 계속 접근 가능
// 내부함수는 외부함수의 지역변수에 접근 가능
// -> 외부함수의 실행이 끝나 외부함수가 소멸된 이후에도
// -> 내부함수가 외부함수의 변수에 접근할 수 있음. 이것이 클로저!

// 어휘적 환경 : 렉시컬 env
// 코드 실행 시, 스크립트 내 선언된 변수들이 렉시컬 환경에 올라감. 

//

// 빈 코드 환경에서의 렉시컬 (전역 렉시컬)
// : one - 초기화 X 이므로 사용불가, 
// : addOne - function 함수선언문이므로 선언과 동시에 초기화, 사용 가능 

let one; // 선언. 아직 할당이 안 되어 초깃값 undefined 
one = 1; // 1로 초기화

function addOne(num) {
    console.log(one + num);
}

addOne(5); // 새로운 렉시컬 환경 (내부 렉시컬) 생성. 
           // 함수가 넘겨받은 매개변수, 지역변수가 저장
// 코드에서 변수를 찾을 때, 내부 렉시컬 에서 찾고 없으면 외부, 없으면 전역까지 범위를 넓혀 찾음


//

// 최초 실행 시, 전역 렉시컬 환경
// makeAdder - function, 사용 가능
// add3 - 초기화 X이므로 사용 불가

function makeAdder(x){   
    return function(y){
        return x + y;
    }
}

const add3 = makeAdder(3); // 이 줄 실행 시,
// makeAdder가 실행되며 makeAdder의 렉시컬 환경이 생성. 함수의 렉시컬. x = 3
// 넘겨받은 매개변수, 지역변수 넘어옴. 
// 따라서 add3은 makeAdder의 리턴 함수가 되므로, 
// 전역 렉시컬 환경에서 function으로서 초기화, 사용 가능
console.log(add3(2)); // 이때 또 익명함수 렉시컬 환경 생성. y = 2
// 변수 찾는 참조 순서는, 익명함수 렉시컬 -> makeAdder 렉시컬 -> 전역 렉시컬


//

function makeCounter() {
    let num = 0;

    return function() {
        return num++;    // 리턴 시 숫자 반환, 외부함수의 변수
                         // 내부함수에서, 외부함수의 변수인 num에 접근하는 것
    };
}

let counter = makeCounter();

console.log(counter()); // 0 - 초깃값 0. 
console.log(counter()); // 1 - 이 숫자들은 수정 불가능. 
console.log(counter()); // 2 - 오직 카운터를 증가시키고 반환하는 것에 성공. 
// 은닉화에 성공.