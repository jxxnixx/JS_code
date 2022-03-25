//// Object Methods, Computed Property. 객체 메소드, 연산 프로퍼티

//// Computed property
let a = 'age';

const user = {
    name : 'Mike',
    // age : 30 대신
    [a] : 30  // 이게 computed property
}

const user1 = {
    [1+4] : 5, 
    ["안녕" + "하세요"] : "Hello" // 직접 추가하는 꼴도 가능
}

console.log(user1);


let b = 'bday';

const info_ = {
    name : 'Kim',
    [b] : '1999-12-08',
    ['a'+'ge'] : 24.
}

console.log(info_);


let c = 'cat?'

const info_1 = {
    name : 'Yeon',
    [b] : '2000-01-01',
    [c] : true,
    [2+4] : 6,
    [1+2] : 3,
    [100+20] : 120, // 숫자는 작은 순으로 자동 정렬되어 출력!
    ['오늘'+'날씨는?'] : 'Sunny',
    ['A'+'다음 알파벳?'] : 'B',
    ['a'] : 'a',    // 문자열은 순서대로 출력, 다만 문자열 자체가 숫자, 변수들 이후 가장 마지막 순서로 출력.
}

console.log(info_1);



//// Methods

/// Object.assign() : 객체 복제

const user2 = {
    name : 'Mike',
    age : 30
}

const cloneUser = user2; // 이러면 복제 X.
// user1의 메모리가 할당된 참조값만 복사, 즉 하나의 객체를 두 변수가 접근.

const newUser = Object.assign({}, user2); // 빈 초기값 객체 {}에 user2 복제 

newUser.name = 'Tom';   // 이름을 바꿔도 원래 객체는 그대로 유지. 

console.log(user2.name); // 원래 객체 'Mike'
console.log(newUser.name); // 복제되고 바뀐 객체 'Tom'
// newUser != user

const newUser2 = Object.assign( {gender : 'male'}, user2); 
// 병합 시 객체 user2에 gender 추가
console.log(user2);
console.log(newUser2);

const newUser3 = Object.assign( {name:'Tom'}, user2);
console.log(newUser3); 
// user에도 있는 name을 갖는 초기값 객체에 user2를 병합하면 덮어쓰기됨 -> Mike

// 세 객체 병합도 가능
const user3 = {
    name : 'Mike'
}
const info1 = {
    age : 30,
}
const info2 = {
    gender : 'male',
}

const newUser4 = Object.assign(user3, info1, info2);
console.log(newUser4);


//

const u = {
    name : 'K',
    grade : 3,
    gender : 'F'
}

const u1 = Object.assign({}, u);
u1.name = 'Y';
u1.gender = 'M';

console.log(u);
console.log(u1);

const u2 = Object.assign({hobby : 'soccer'}, u1);

console.log(u2);

const a_a = {
    a : a,
}

const b_b = {
    b : b,
}

const c_c = {
    c : c,
}

const abc = Object.assign(a_a, b_b, c_c);
console.log(abc);

/// Object.keys() : 키를 배열로 반환

const user5 = {
    name : 'Mike',
    age : 30,
    gender : 'male',
}

const newUser5 = Object.keys(user5);
console.log(newUser5);

/// Object.values() : 값을 배열로 반환

const newUser6 = Object.values(user5);
console.log(newUser6);

/// Object.entries() : 키, 값을 모두 배열로 반환

const newUser7 = Object.entries(user5);
console.log(newUser7);

/// Object.fromEntries() : 키, 값 배열을 객체 형태로 변환

const arr = newUser7;

const newUser8 = Object.fromEntries(arr);
console.log(newUser8);

//

const u5 = {
    ua : 'universe academy',
    ub : 'ur birthday',
    uc : 'UC berkley',
}

const ku5 = Object.keys(u5);
console.log(ku5);

const vu5 = Object.values(u5);
console.log(vu5);

const kvu5 = Object.entries(u5);
console.log(kvu5);

const feu5 = Object.fromEntries(kvu5);
console.log(feu5);

/// 정리

// 1.
let n1 = "name";
let a1 = "age";

const user10 = {
    [n1] : "Mike",
    [a1] : 30,
    [1+4] : 5
};

console.log(user10);

// 2.
// 어떤 것이 key가 될지 모르는 객체를 만들 때 유용
function makeObj (key, val) {
    return {
        [key] : val,
    };
}

const obj = makeObj("나이", 33);
console.log(obj);

const obj1 = makeObj("이름", "Mike");
console.log(obj1);

const obj2 = makeObj("성별", "male");
console.log(obj2);

//

function mobj (k, v){
    return {
        [k] : v,
    };
}

const obj_1 = mobj('class', 'A');
const obj_2 = mobj('grade', 7);
const obj_3 = mobj('id', 'C1');

console.log(obj_1, obj_2, obj_3);

const obj4 = Object.assign(obj_1, obj_2, obj_3);
console.log(obj4);

//3.
const user11 = {
    name : "Mike",
    age : 30
};

const user12 = user11 ; //복사 아니고, 같은 객체에 대한 두 변수
user12.name = "Tom"; // name을 Tom으로 바꾸면

console.log(user11); // 얘도 Tom
console.log(user12); // 얘도 Tom

const user13 = {
    name : "Mike",
    age : 30
};

// 그러니까 복사할 때는
const user14 = Object.assign({}, user13); //초깃값 설정해주기! ex) {}
console.log(user14);

user13.name = "Tom" // 원본 객체의 name을 Tom으로 바꾸면
console.log(user13); // 원본 Tom
console.log(user14); // 복사본 Mike

//4.
const user15 = {
    name : "Mike",
    age : 30
};

const result1 = Object.keys(user15);
console.log(result1);

const result2 = Object.values(user15);
console.log(result2);

const result3 = Object.entries(user15);
console.log(result3);

let arr1 = [
    ['mon', '월'],
    ['tue', '화']
]

const result4 = Object.fromEntries(arr1);
console.log(result4);

const result5 = Object.fromEntries(result3);
console.log(result5);