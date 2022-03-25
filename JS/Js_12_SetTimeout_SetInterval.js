//// SetTimeout_SetInterval

/// setTimeout - 일정 시간이 지난 후 함수를 실행
/// setInterval - 일정 시간 간격으로 함수를 반복

/// setTimeout
function fn() { 
    console.log(3)
}

setTimeout(fn, 3000); // 매개변수 2개. 실행할 함수, 시간. 3000 = 3초

// 위처럼 함수를 생성해 전달하지 않고

setTimeout(function() {
console.log(3)
}, 3000);              // 이렇게 해도 됨

// name과 같은 인수가 필요하면, 
function showName(name){
    console.log(name);
}
const tId = setTimeout(showName, 3000, 'Mike'); // 시간 뒤에 적어주면 됨.

/// clearTimeout
clearTimeout(tId); // 예정된 작업을 없앰. 스케줄링 취소. 

/// setInterval
function showName1(name){
    console.log(name);
}
const tId1 = setInterval(showName1, 3000, 'Mike');

/// clearInterval
clearInterval(tId1);


/// 주의사항 : delay = 0 이면?

setTimeout(function() {
    console.log(2)
}, 0);
console.log(1); // 실제로 2부터 바로 실행되지는 않음. 
// 1이 먼저 찍힌 후에 2가 식힘. 브라우저는 기본적으로 4ms의 딜레이가 있으므로.


// 예제
let num = 0;

function showTime() {
    console.log(`안녕하세요. 접속하신 지 ${num++}초가 지났습니다.`); 
    // 이것만 있으면 계속 출력되므로

    if (num > 5){ // 5번만 출력되고 멈추도록 조건문 설정
        clearInterval(tId2);
    }
}

const tId2 = setInterval(showTime,1000);

 