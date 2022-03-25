//// Array_Methods_2_sort_reduce

/// arr.sort() : 배열 재정렬. 단, 배열 자체가 변경.
let arr = [1, 5, 4, 2, 3];
arr.sort();
console.log(arr);

let arr1 = ["a","c","d","e","b"];
arr1.sort();
console.log(arr1);

let arr2 = [27, 8, 5, 13];
arr2.sort();
console.log(arr2); // 정렬 시 요소를 문자열로 취급, 유니코드에 따라 정렬하므로 이상해짐.

arr2.sort((a,b) => {
    return a - b;    // a - b를 실행, 양수면 a를 b보다 뒤에 위치.
});
console.log(arr2);

// 그래서 번거로운 작업을 보다 단순화하기 위해 Lodash와 같은 라이브러리 사용
// 자주 사용!
// _.sortBy(arr); 숫자든 문자든 객체든 기준에 맞게 정렬

/// arr.reduce() : 함수를 인수로 받음.
/// (누적 계산값, 현재값) => {return 계산값};

// 예제
// 배열의 모든 수 합치기
let arr3 = [1, 2, 3, 4, 5];

// for, for of, forEach
let result = 0;

arr3.forEach((num) => {
    result += num;
});
console.log(result);

// reduce 사용. prev : 누산값, cur : 현재값

const result_ = arr3.reduce((prev, cur) => {
    return prev + cur;
}, 0)  // 초깃값 0

console.log(result_);

// 예제 2

let userList = [
    { name : "Mike", age : 30 },
    { name : "Tom", age : 10 },
    { name : "Jane", age : 27 },
    { name : "Sue", age : 26 },
    { name : "Harry", age : 3 },
    { name : "Steve", age : 60 },
]

// 성인 배열만 추출
let result1 = userList.reduce((prev, cur) => {
    if (cur.age > 19) {
        prev.push(cur.name);
    }
    return prev;
}, []);

console.log(result1);

// 모든 요소의 나이 합
let result2 = userList.reduce((prev, cur) => {
    return (prev += cur.age);
}, 0); // 초깃값 0

console.log(result2);

// 이름이 세 글자인 사람
let result3 = userList.reduce((prev, cur) => {
    if(cur.name.length === 3) {
        prev.push(cur.name);
    }
    return prev;
}, []);

console.log(result3);

/// arr.reduceRight() : reduce와 동일, but 배열 우측부터 연산 수행

