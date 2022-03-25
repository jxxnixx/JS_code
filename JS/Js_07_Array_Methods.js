//// Array_Methods

// push() : 뒤에 삽입
// pop() : 뒤에 삭제
// unshift() : 앞에 삽입
// shift() : 앞에 삭제

let A = [1,3,5,7,9];
A.push(10);
console.log(A);

A.pop();
console.log(A);

A.unshift(0);
console.log(A);

A.shift(0);
console.log(A);

/// arr.splice(n, m) : 인덱스 n부터 m개 요소를 지움
let arr = [1,2,3,4,5];
arr.splice(1,2);
console.log(arr);

A.splice(3, 2);
console.log(A);

/// arr.splice(n, m, x) : 인덱스 n부터 m개 요소 (특정 요소) 지우고 추가
let arr1 = [1,2,3,4,5];
arr1.splice(1,3,100,200);
console.log(arr1);

A.splice(1,2,2,3,4,5);
console.log(A);

let arr2 = ["나는", "철수", "입니다"];
arr2.splice(1, 0, "대한민국", "소방관"); // m 자리에 0을 넣을 경우 그냥 추가
console.log(arr2);

/// arr.splice() : 삭제된 요소 반환
let arr3 = [1,2,3,4,5];
let result = arr3.splice(1,2);

console.log(arr3);
console.log(result);

/// arr.slice(n, m) : 인덱스 n부터 m까지 반환, m포함 안됨
let arr4 = [1,2,3,4,5];
console.log(arr4.slice(1,4));

let arr5 = arr4.slice(); // 괄호 안에 아무것도 안 넣으면
console.log(arr5);      // 배열 복사

/// arr.concat(arr2, arr3, ...) : 기존 배열에 새 배열을 합쳐 반환
let arr_ = [1,2];
console.log(arr_.concat([3,4]));
console.log(arr_.concat([3,4], [5,6]));
console.log(arr_.concat([3,4], 5,6));

/// arr.forEach(fn) : 배열 반복. 함수를 인수로 받음
/// 요소, 인덱스, 해당 배열 자체를 매개변수로 사용. 보통 앞 두개만 사용.

// 예시
// let users = ['Mike', 'Tom', 'Jane'];
// users.forEach((item, index, arr)) => {}); // 요소, 인덱스, 배열

// 예시2
let arr6 = ['Mike', 'Tom', 'Jane'];
arr6.forEach((name6, index6) => {
    console.log(`${index6 + 1}. ${name6}`);
});

/// arr.indexOf, arr.lastIndexOf
let arr7 = [1,2,3,4,5,1,2,3];
console.log(arr7.indexOf(3)); // 해당 요소 인덱스 반환, 없으면 -1 반환
console.log(arr7.indexOf(3, 3)); // 인수가 2개일 경우, 두번째 인수는 시작 위치 의미
console.log(arr7.lastIndexOf(3)); // 뒤부터 탐색하고 싶을 경우

/// arr.includes() : 포함 여부 확인
let arr8 = [1,2,3];
console.log(arr8.includes(2));
console.log(arr8.includes(8));

/// arr.find(fn), arr.findIndex(fn)
/// 찾는다는 의미는 동일, 보다 복잡한 연산 가능, 함수 사용
/// 주의! 첫번째 true 값만 반환하고 끝, 없으면 undefined
/// 주의! 첫번째 index만 반환하고 끝, 없으면 -1 반환

// 예제
let arr9 = [1,2,3,4,5];

const result_ = arr9.find((item) => {
    return item % 2 === 0;
});

console.log(result_);

// 예제 2
let userList = [
    { name : "Mike", age : 30 },
    { name : "Jane", age : 27 },
    { name : "Tom", age : 10 },
]

const result__ = userList.find((user) => {
    if (user.age < 19) {
        return true;
    }
    return false;
});

console.log(result__);

/// arr.filter(fn) : 조건을 만족하는 모든 요소를 배열로 반환. 
// find와 동일하게 사용

const result_1 = arr9.filter((item) => {
    return item % 2 === 0;
});

console.log(result_1);

/// arr.reverse() : 배열 역순 재정렬. 최근 작성 글 사용 시 사용
let arr10 = [1,2,3,4,5];
console.log(arr10.reverse());

/// arr.map(fn) : 함수를 인자로, 특정 기능 시행 후 새로운 배열 반환
// 굉장히 많이 사용
let newUserList = userList.map((user, index) => {
    return Object.assign( {}, user, {
        id : index + 1,
        isAdult : user.age > 19, 
    });
});

console.log(newUserList); //newUserList도 올바르게 생성
console.log(userList);    // 원래 있던 userList도 변화 X

/// arr.join() : 배열 합치기. 
/// 괄호 안에 문자열을 넣으면 해당 문자열을 기준으로 조인 가능
let arr11 = ["안녕", "나는", "철수야"];
let result11 = arr11.join();
let result12 = arr11.join("-");

console.log(result11);
console.log(result12);

/// arr.split() : 배열 나눠서 배열로 반환

// 예제 
const users = "Mike, Jane, Tom, Tony";
const result___ = users.split(",");

console.log(result___);

// 예제 2
let str = "Hello, My name is Mike";
const result___2 = str.split(" ");

console.log(result___2);

/// Array.isArray() : 배열인지 아닌지 확인.
/// 배열은 객체형 in 자바스크립트, 일반 객체형과 구분 불가. obj
/// 그럴 때 isArray()를 사용해 true, false 구분
let user__ = {
    name__ : "Mike",
    age__ : 30
};

let userList__ = ["Mike", "Tom", "Jane"];

console.log(typeof user__);
console.log(typeof userList__);  // 둘 다 객체형 obj로 구분 불가

console.log(Array.isArray(user__));
console.log(Array.isArray(userList__)); // false, true로 구분 가능

