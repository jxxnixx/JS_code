//// Symbol

////지금까지의 Property key : 문자형

const obj = {
    1 : '1입니다.',
    false : '거짓'
}

ob1 = Object.keys(obj); // 이렇게 출력하면 key인 1과 false가 문자열 형태로 반환
console.log(ob1);

obj['1'];
obj['false'];  // 접근 시에도 이렇게 문자열 형태로 접근해야!

//// 문자형 이외에 Property key가 가능한 형태 : Symbol
//// Symbol : 유일한 식별자.

const a = Symbol(); // new 붙이지 않음.
const b = Symbol();

console.log(a);
console.log(b); // 이렇게 하면 출력되는 것은 Symbol()로 같지만,

console.log(a === b);
console.log(a == b); //  이 두개 다 false. 자료형과 내용 전부 다른 것.

//// Symbol : 유일성 보장, 전체 코드 중 딱 하나라는 것.

const id = Symbol('id'); // symbol 생성 시, 'id'와 같은 설명 이용 가능. 
                         // 이 설명은 symbol 생성에 아무런 영향 X.

const user = { 
    name : 'Mike',
    age : 30,
    [id] : 'myid'
}

console.log(user);

const o1 = Object.keys(user);
const o2 = Object.values(user);
const o3 = Object.entries(user); // 3개 모두 key가 symbol 형인 데이터들은 건너뜀.

console.log(o1);
console.log(o2);
console.log(o3); // 3개 모두 symbol key인 데이터 출력되지 않음.

//
const s1 = Symbol('s1');

const S1 = {
    n : 'K',
    a : 18,
    [s1] : 'Ks1',
}

console.log(S1);

const os1 = Object.keys(S1);
const os2 = Object.values(S1);
const os3 = Object.entries(S1);

console.log(os1, os2, os3);

//
const ss1 = Symbol('ss1');

const SS1 = {
    n1 : 'Y',
    a1 : '22',
    [ss1] : 'YS1',
}

console.log(SS1);

const ms1 = Object.keys(SS1);
const ms2 = Object.values(SS1);
const ms3 = Object.entries(SS1);

console.log(ms1, ms2, ms3);

/// Symbol.for() : 전역 심볼. 하나의 심볼만 보장. 
///                하나를 생성한 후 키를 통해 같은 심볼을 공유

const id1 = Symbol.for('id');
const id2 = Symbol.for('id');  // 이렇게 두 변수로 하나의 심볼을 공유

console.log(id1 === id2); // True

// 전역 Symbol의 설명/아이디를 얻고 싶으면 keyFor
console.log(Symbol.keyFor(id1)); // 'id'

// 전역이 아닌 일반 Symbol의 설명/아이디를 얻고 싶으면 description
const id_ = Symbol('id입니다.');
console.log(id_.description);

// 객체에서 심볼 key만 보려면
const sk = Object.getOwnPropertySymbols(user);
console.log(sk);

// 심볼을 포함한 모든 key들을 보려면
const isk = Reflect.ownKeys(user);
console.log(isk);


//
const gs1 = Symbol.for('gb');
const gs2 = Symbol.for('gb');

console.log(Symbol.keyFor(gs1));

console.log(s1.description);

const sk1 = Object.getOwnPropertySymbols(S1);
console.log(sk1);

const ask = Reflect.ownKeys(S1);
console.log(ask);

//
const sf1 = Symbol.for('sf');
const sf2 = Symbol.for('sf');

console.log(Symbol.keyFor(sf1)); // 전역심볼의 설명, 아이디

const nsf1 = Symbol('nsf');  
console.log(nsf1.description);  // 전역이 아닌 심볼의 설명, 아이디

const gsf1 = Object.getOwnPropertyDescriptor(SS1); // 심볼만 출력
console.log(gsf1);

const rsf1 = Reflect.ownKeys(SS1); // 심볼을 포함한 모든 key 출력
console.log(rsf1);

/// 예제

// 위의 user 객체 사용

// 내 작업
// user.showName = function() {}; // 이렇게 key와 value를 추가하면 기존 데이터가 이상해지므로
// Symbol을 사용해 for문에서는 보이지 않지만
// Symbol key를 통해 접근할 경우엔 원하는 결과가 출력되도록 함.
// 원래 있던 프로퍼티, 객체에 뭔가를 덮어쓸 필요도 없이 내가 원하는 결과 출력.

const showName = Symbol("show name");
user[showName] = function() {
    console.log(this.name);
};

user[showName]();

// 사용자 접속 시 보이는 메세지
for (let key in user) {
    console.log(`His ${key} is ${user[key]}.`); // key에는 name, age만 출력
}


//

const mObj = {};
mObj['p1'] = 1;
mObj['p2'] = 2;

console.log(mObj);

const p3 = Symbol("p3");
const p4 = Symbol("p4");

mObj[p3] = 3;
mObj[p4] = 4;

console.log(mObj);

for (let key in mObj){
    console.log('key'); // key는 두 번만 출력
}

console.log(mObj[p3]);
console.log(mObj[p4]);

const skk = Object.getOwnPropertySymbols(mObj); // 심볼만 출력
console.log(skk);

const skkk = Reflect.ownKeys(mObj); // 심볼 포함, 모든 key 출력
console.log(skkk);


//

const Obj = {};
Obj['oo1'] = 0;
Obj['oo2'] = 1;

const oo3 = Symbol('oo3');
const oo4 = Symbol('oo4');

// Obj[oo3, oo4] = 2, 3; // 이렇게 하면 Obj[oo4] = 2;인 꼴임. 하나씩 할당하자
Obj[oo3] = 2;
Obj[oo4] = 3;

console.log(Obj);
console.log(Obj[oo3]);

Obj['oo5'] = 4;
Obj['oo6'] = 5;

console.log(Obj);

for(let k in Obj){
    console.log(`${k}'s value : ${Obj[k]}.`);
}

console.log(Object.getOwnPropertySymbols(Obj));
console.log(Reflect.ownKeys(Obj));