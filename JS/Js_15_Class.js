//// Class

// 지금까지, 비슷한 객체를 생성하기 위해 생성자 함수를 사용함.

const User = function(name, age) { 
    this.name = name;
    this.age = age;
    this.showName = function() { // 이 메소드 : 객체 내부에 존재.
        console.log(this.name);
    };
};

const mike = new User("Mike", 30);
console.log(mike);

// 같은 목적을 위해, Class도 사용 가능함.

class User2 {
    constructor(name, age){ // 내부에 constructor 존재. 객체를 만들어주는 생성자 메소드. new를 통해 호출하면 자동으로 실행.
        this.name = name;   // 객체를 초기화하기 위한 값들.
        this.age = age;
    }
    showName() {            // 클래스 내부에 정의한 메소드 : User2의 프로토타입에 저장됨.
        console.log(this.name)
    }
}

const tom = new User2("Tome", 19); 
console.log(tom);

// 무엇이 다를까?
// new 를 통해 객체를 생성하는 것은 동일
// 내부 정의 메소드의 존재 위치 다름. 사용법은 동일. 

// 생성자 함수를 클래스와 동일하게 동작하게 하기 위해 형태를 바꾸면

const User1 = function(name, age) { 
    this.name = name;
    this.age = age;
    // this.showName = function() { 
    //     console.log(this.name);
    // };
};

User1.prototype.showName = function() { // 프로토타입 내에 저장! 클래스처럼.
    console.log(this.name);
}

const mike1 = new User1("Mike", 30);
console.log(mike1);

// 단순히 문법의 편의성을 위해 클래스가 탄생했을까?

const mike1_ = User1("Mike", 30); // new를 빼고 실행해보면
console.log(mike1_); // undefined 출력됨. 
// 그게 User1함수가 반환하는 값임. 지금은 리턴문이 없으므로 아무것도 반환하는 것이 없어 undefined. 
// error라고 알아차릴 수 없음. 개발자가 실수했음에도.

// (중요) const tom2 = User2("Tom", 19); // 클래스는  new 없이 실행할 수 없음!

// 강좌에서 보면, 이 두개의 프로토타입을 비교했을 때
// class는 constructor에 class User2라고 나와 있으므로, new 없이는 생성이 불가능.
console.log(mike1);
console.log(tom);

for(const p in mike1){
    console.log(p);    // name, age, 프로토타입의 showName까지 전부 출력
}

for(const p in tom){
    console.log(p);    // name, age만 출력. 클래스의 메소드는 for in 문에서 제외됨.
}


/// 상속 inheritance. extends

class Car{
    constructor(color){
        this.color = color;
        this.wheels = 4;
    }
    drive() {
        console.log("drive...");
    }
    stop() {
        console.log("Stop!");
    }
}

class Bmw extends Car {
    park(){
        console.log("Park");
    }
}

const z4 = new Bmw("blue");
console.log(z4);
// 강좌 보면, 프로토 안에 constructor 안에 class Bmw가 있고
// 프로토 안에 park : f park() 가 있음. 
// 클래스 내부에서 선언한 메소드는 프로토타입 안으로 들어간 것!
// 프로토 안에 프로토가 또 있는데, 
// 그 안에 constructor : class Car, drive : f drive(), stop : __proto__.__proto__.drive 등등 존재

console.log(z4.drive());
// 이 경우, z4객체 내에서 찾고, 없으면 프로토타입 가서 찾고 없으면 프로토 안의 프로토타입 가서 찾고.



//// 메소드 오버라이딩. method overriding.

// Bmw 내부에 Car에서 정의한 메소드와 동일한 메소드가 정의된다면?

class Car1{
    constructor(color){
        this.color = color;
        this.wheels = 4;
    }
    drive() {
        console.log("drive...");
    }
    stop() {
        console.log("Stop!");
    }
}

class Bmw1 extends Car1 {
    park(){
        console.log("Park");
    }
    stop(){
        console.log("Off"); // 추가
    }
}

const z4_ = new Bmw1("blue");
console.log(z4_.stop());  //Off 출력. 덮어쓰기 됨!

// 부모의 메소드를 그대로 사용하고 싶다면?
// super() 사용

class Bmw2 extends Car1 {
    park(){
        console.log("Park");
    }
    stop(){
        super.stop();       // Car1의 stop 사용
        console.log("Off"); 
    }
}

const z4_2 = new Bmw2("blue");
console.log(z4_2.stop());  // Car1, Bmw2의 stop 모두 출력


/// 생성자 오버라이딩. constructor overriding.

// 현재 Bmw들에는 constructor가 없음.

class Bmw3 extends Car1 {
    constructor() {            
        // this.navigation = 1; // 주의! 이렇게 그냥 사용하면 에러. 부모 생성자를 반드시 먼저 호출해야 함.
        // 부모 클래스는 this 할당을 거치는데, extends로 상속받은 아이들은 그 과정을 건너뛰므로
        // 반드시 부모 constructor인 super()를 먼저 호출해주어야 함.
        super();
        this.navigation = 1;
    }
    park(){
        console.log("Park");
    }
}

const z4_3 = new Bmw3("blue");
console.log(z4_3); // color를 blue로 설정했는데도 불구, undefined가 출력
// 제대로 동작하기 위해서는 , 자식 클래스 constructor에 동일한 인수를 갖는 작업 필요

class Bmw3_1 extends Car1 {
    constructor(color) {         // 요렇게!      
        super(color);
        this.navigation = 1;
    }
    park(){
        console.log("Park");
    }
}

const z4_3_1 = new Bmw3_1("blue");
console.log(z4_3_1);

// 자식 클래스에 constructor가 없으면,

class Bmw4 extends Car1 {
    // constructor(...args){  // 자동으로 이 부분들이 있는 것처럼 실행!
    //     super(...args);    // 그러니까 자식 생성자는 무조건 부모 생성자를 호출해야 하는 것임
    // }
    park(){
        console.log("Park");
    }
}
