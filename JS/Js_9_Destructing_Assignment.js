//// Destructing_Assignment
//// 구조 분해 할당
// 배열 or 객체 속성 분해, 그 값을 변수에 담을 수 있게 하는 표현식

let [x, y] = [1, 2];

console.log(x);
console.log(y);

let users = ['Mike', 'Tom', 'Jane'];
let [user1, user2, user3] = users;
// 즉, let user1 = users[0], let user2 = users[1], let user3 = users[2];

console.log(user1);
console.log(user2);
console.log(user3);

let str = "Mike-Tom-Jane";
let [u1, u2, u3] = str.split('-');

console.log(u1);
console.log(u2);
console.log(u3);

let [a,b,c] = [1,2]; // 해당하는 값이 없으면, undefined.
let [a1 = 3, b1 = 4, c1 = 5] = [1,2]; // 그래서 기본값을 미리 지정해두는 것이 좋음.

console.log(a);
console.log(b);
console.log(c);

console.log(a1);
console.log(b1);
console.log(c1);

let [us1, ,us2] = ['Mike', 'Tom', 'Jane', 'Tony']; 

console.log(us1); // Mike. Tom은 할당될 값이 없어 무시
console.log(us2); // Jane, Tony도 할당될 값이 없어 무시

/// 배열 구조 분해 : 바꿔치기
let a_ = 1;
let b_ = 2;

[a, b] = [b, a];

/// 객체 구조 분해
let user_ = {name_ : 'Mike', age_ : 30};

let {name___, age___} = user_;
// 즉, let name___ = user_.name_;  let age___ = user.age_;
// 순서 상관 없음. let {age___, name___} = user_; 가능

console.log(name___);
console.log(age___);

/// 객체 구조 분해 : 새로운 변수 이름으로 할당

let {name_ : userName, age_ : userAge} = user_;

console.log(userName);
console.log(userAge);

/// 객체 구조 분해 : 기본값
let user_1 = {name_1 : 'Mike', age_1 : 30};

// let {name_1, age_1, gender_1} = user_1;  // 여기서 gender_는 undefined
let {name_1, age_1, gender_1 = 'male'} = user_1;

console.log(user_1);
console.log(gender_1); //male

let User = {
    Name : 'Jane',
    Age : 18,
    Gender : 'female'
};

let {Name, Age, Gender = 'male'} = User;

console.log(Gender); // female. 기본값인 male은 undefined일 때만 효력O.