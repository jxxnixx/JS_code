//// Inheritance_Prototype

// 1:33:43

const user = {
    name : 'Mike'
}

console.log(user.name);
console.log(user.hasOwnProperty('name')); // 해당 프로퍼티를 가지고 있는지 검사 - true, false
console.log(user.hasOwnProperty('age'));
// 그렇다면 이 hasOwnProperty는 만든 적이 없는데 어딨지?
// __proto__ : 프로토타입. 객체 프로퍼티를 읽으려고 하는데 없으면 여기서 읽음.

// 만약 hasOwnProperty라는 이름으로 함수를 만들면, 프로토타입에 있는 것이 아닌 만든 것을 따라감.
// 그러니까 만들지 않았을 때는 프로토타입에서 찾는 것.
const user1 = {
    name : 'Mike',
    hasOwnProperty : function() {
        console.log('haha')    
    }
}

console.log(user1.hasOwnProperty());

// 프로토타입 동작 원리, 상속 inheritance

const bmw = {
    color : "red",
    wheels : 4,
    navigation : 1,
    drive() {
        console.log("drive..");
    },
};

const benz = {
    color : "black",
    wheels : 4,
    drive() {
        console.log("drive..");
    },
};

const audi = {
    color : "blue",
    wheels : 4,
    drive() {
        console.log("drive..");
    },
};
// wheels, drive 프로퍼티는 모든 객체에 값까지 동일하게 존재하므로,
// 공통된 부분을 __proto__에 추가하면 훨씬 편함

const car = {
    wheels : 4,
    drive() {
        console.log("drive..");
    },
};

const bmw1 = {
    color : "red",
    navigation : 1,
};

const benz1 = {
    color : "black",
};

const audi1 = {
    color : "blue",
};

bmw1.__proto__ = car;   // car가 bmw1의 프로토가 되는 것. 즉, bmw1은 car의 상속을 받는 것
benz1.__proto__ = car;
audi1.__proto__ = car;

console.log(bmw1);        // color, navigation만 출력
console.log(bmw1.color);
console.log(bmw1.wheels); // bmw1객체 내에서 탐색, 없으면 프로토타입 검색

const x5 = {
    color : "white",
    name : "x5",
};

x5.__proto__ = bmw1;      // 상속은 계속될 수 있음. x5가 bmw1을 상속받음.

console.log(x5.name);
console.log(x5.color); 
console.log(x5.navigation);

// prototype chain
// car - wheels : 4, drive() /  __proto__
// bmw1 - color : red, navigation : 1 / __proto__에 car 존재
// x5 - color : white, name : x5 / __proto__에 bmw1 존재
// 즉, x5에서 car의 drive까지 타고 올라가서 사용가능

/// 객체 프로퍼티 순회

for(p in x5) {
    console.log(p); // 프로토타입에 포함된 프로퍼티, 상속된 프로퍼티까지 전부 반환
}

console.log(Object.keys(x5));   // 상속된 프로퍼티들은 나오지 않음.
console.log(Object.values(x5)); // 동일

for(p in x5){
    if(x5.hasOwnProperty(p)){ // 객체가 '직접' 가지고 있는 것들만 반환해줌.
        console.log('o', p);
    } else{
        console.log('x', p);
    }
}

/// 생성자 변수 이용 - 1

const Bmw = function(color) { 
    this.color = color;
}

const x5_ = new Bmw("red");
const z4_ = new Bmw("blue");

x5_.__proto__ = car;
z4_.__proto__ = car;

console.log(x5_);
console.log(x5_.wheels);

// 이렇게 사용해도 돌아가기는 하지만 하나하나 프로토를 지정해주는 게 귀찮음.
// 생성자 변수를 사용하는 게 편리하게 하려고 한 건데..
// 그래서

/// 생성자 변수 이용 - 2

const Bmw1 = function(color) {
    this.color = color;
}

Bmw1.prototype.wheels = 4; // 하나하나 수동으로 명시해주는 것이 좋음. 이상하게 꼬일 수 있으므로. 특히 constructor.
Bmw1.prototype.drive = function() {
    console.log("drive...");
};

// 한꺼번에 이렇게 해도 되긴 하는데, 이상하게 꼬일 수 있음
// Bmw1.prototype = {
//     constructor : Bmw1, // constructor는 직접 명시해줘야 그나마 나음.
//     wheels : 4,
//     drive() {
//         console.log("drive..");
//     },
//     navigation: 1,
//     stop() { 
//         console.log("Stop!");
//     },
// };

Bmw1.prototype.navigation = 1;
Bmw1.prototype.stop = function() {
    console.log("Stop!");
};

const x5_1 = new Bmw1("red");
const z4_1 = new Bmw1("blue");

console.log(x5_1.stop());

// 편-리하게 프로토타입에 추가도 가능

console.log(z4_1); // Bmw1을 통해 만들었는지 알 수 있음
console.log(z4_1 instanceof Bmw1); // true
console.log(z4_1.constructor === Bmw1); // true. 
// -> 생성자로 만들어진 인스턴스 객체에는,constructor라는 프로퍼티 존재.


/// 무방비한 내용 수정 방지

console.log(x5_1);
console.log(x5_1.color);

x5_1.color = "black"; // 이렇게 바꿔버리면
console.log(x5_1.color); // 바뀐 값이 출력.. 이를 방지하려면? 

/// Closure 사용!

const Bmw2 = function(color) {
    const c = color;
    this.getColor = function() {  // 이렇게 하면, 생성될 당시의 값을 기억하고, 맘대로 수정 불가
        console.log(c);
    };
};

const x5_2 = new Bmw2("red");
console.log(x5_2.getColor());

// x5_2.color = black; // 애초에 이렇게 변경이 안됨.
console.log(x5_2.getColor());