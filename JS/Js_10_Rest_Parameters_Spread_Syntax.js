//// Rest_Parameters_Spread_Syntax

/// 인수 전달
function showName(name){
    console.log(name);
}

showName('Mike');
showName('Mike','Tom'); // Mike

showName(); // undefined 반환

//// arguments : 함수로 넘어온 모든 인수에 접근. 함수 내 이용 가능한 지역 변수
//// length/ index. Array 형태의 객체. map과 같은 배열의 내장 메서드 없음.
function showName1(name1){
    console.log(arguments.length);
    console.log(arguments[0]);
    console.log(arguments[1]);
}

showName1('Mike','Tom'); // 2, mike, tom

//// 나머지 매개변수 : 정해지지 않은 갯수의 인수를 배열로 나타냄.
//// 아무것도 정해지지 않으면 undefined가 아니라 빈 배열 반환
//// 매개변수가 여러 개라면, 나머지 매개변수는 항상 마지막에!
function showName2(...names){
    console.log(names);
}

showName2(); // []
showName2('Mike'); // ['Mike']
showName2('Mike','Tom'); // ['Mike, 'Tom']

// 예제

function add(...numbers){   // numbers는 배열!
    let result = 0;
    numbers.forEach((num) => (result += num)); // 배열에 쓸 수 있는 for문인 forEach
    //let result = numbers.reduce((prev, cur) => prev + cur); // 동일하게 동작
    
    console.log(result);
}

add(1,2,3);
add(1,2,3,4,5,6,7,8,9,10);

// 예제 2

function User(name, age, ...skills) {
    this.name = name;
    this.age = age;
    this.skills = skills;
}

const user1 = new User("Mike", 30, "html", "css");
const user2 = new User("Tom", 20, "JS", "React");
const user3 = new User("Jane", 10, "English");

console.log(user1);
console.log(user2);
console.log(user3);

//// 전개 구문 배열. Spread Syntax

let arr1 = [1,2,3];
let arr2 = [4,5,6];

let result1 = [...arr1, ...arr2]; // [1,2,3,4,5,6]
console.log(result1);

let result2 = [0, ...arr1, ...arr2, 7, 8, 9]; // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(result2);

// 배열 : 원래 중간에 넣고 뭐하고 하는 건 복잡한데, push, splice, concat
// 전개 구문 배열을 이용하면 편리해짐! 객체도 가능!

//// 전개 구문 객체

let user_1 = {name_1 : 'Mike'};
let mike = {...user_1 , age : 30};

console.log(mike); // {name_1 : 'Mike', age : 30}

//// 전개 구문 복제

let arr_3 = [1,2,3];
let arr_3_1 = [...arr_3];

let user_3 = {name_3 : 'Mike', age_3 : 30};
let user_3_1 = {...user_3};  // object.assign 안 해도 이렇게 복제 가능

user_3_1.name_3 = "Tom"; // 그래서 복제한 아이의 요소를 바꿔도

console.log(user_3.name_3);  // Mike , 원본 그대로 출력
console.log(user_3_1.name_3);  // Tom, 복제본 수정한 값으로 출력

/// 예제1 - 배열

// arr_1을 [4,5,6,1,2,3]으로
let arr_1 = [1,2,3];
let arr_2 = [4,5,6];

// 방법 1 - 반복문

//arr_2.forEach((num) => { // 이렇게 하면 4, 5, 6 순으로 맨 앞에 삽입되기 때문에
arr_2.reverse().forEach((num) => {  // reverse()를 삽입해야 함!
    arr_1.unshift(num);   
});

console.log(arr_1);

// 방법 2 - 전개 구문

let arr__1 = [1,2,3];
let arr__2 = [4,5,6];

arr__1 = [...arr__2, ...arr__1];
console.log(arr__1);

/// 예제2 - 객체

// 방법 1 - 일반 배열, 반복문

let user_2 = { name : "Mike" };
let info = {age : 30};
let fe = ["JS", "React"];
let lang = ["Korean", "English"];

user_2 = Object.assign({}, user_2, info, {
    skills : [],
});

fe.forEach((item) =>{
    user_2.skills.push(item);
});

lang.forEach((item)=> {
    user_2.skills.push(item);
});

console.log(user_2);

// 방법 2 - 전개 구문

let user_21 = { name : "Mike" };
let info1 = {age : 30};
let fe1 = ["JS", "React"];
let lang1 = ["Korean", "English"];

user_21 = {
    ...user_21,
    ...info1,
    skills : [
        ...fe1,
        ...lang1
    ],
}

console.log(user_21);