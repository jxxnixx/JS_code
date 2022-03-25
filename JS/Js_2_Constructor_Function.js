//// Constructor Function. 생성자 함수

//// 객체 리터럴
let user = {
    name : 'Mike',
    age : 30,
}

//// 생성자 함수
function User(name, age) { // 함수명은 대문자로 시작하는 것이 관례.
    this.myname = name;     // this.속성명 = 인자; 즉, name1 : name, age1 : age 꼴
    this.myage = age;
    this.sayName = function() {
        console.log(this.myname);  //this는 user1/2/3/5를 가리킴.
    }
}

let user1 = new User('Mike', 30);
let user2 = new User('Jane', 22);
let user3 = new User('Tom', 17);

console.log(user1, '\n', user2, '\n', user3);

let user5 = new User('Han', 40);
user5.sayName();

//// 상품 객체 생성

function Item(title, price){
    //this = {};             // 주석 처리한 this와 return this는
                             // new 객체가 생성되는 순간 알아서 처리
    this.itemtitle = title;
    this.itemprice = price;
    this.showPrice = function() {
        console.log(`가격은 ${itemprice}원 입니다.`);
    };

    //return this;
}

const item1 = new Item("인형", 3000);
const item2 = new Item("가방", 4000);
const item3 = new Item("지갑", 9000);
const item4 = Item("필통", 6000);   
// new 가 없으면 undefined 처리. 
// 그냥 함수 자체 실행된 꼴이므로 생성자는 꼭 new를 사용해야 함

console.log(item1, '\n', item2, '\n', item3, '\n', item4);
item3.showPrice();




const mf = () => {
    console.log(this);
}

mf();

// 주의!
// const mf1 = (name, age, job) => {  // 화살표 함수는 생성자 constructor로 쓰일 수 없음!
function mf1(name, age, job) {

    this.mname = name;
    this.mage = age;
    this.mjob = job;
}

let mp1 = new mf1('Kim', 18, 'highschoolstudent');
console.log(mp1);

let mp2 = new mf1('Yeon', 32, 'Programmer');
let mp3 = new mf1('Ju', 24, 'Collegestudent');

console.log(mp2, '\n', mp3);

function mf2(name, age, job){
    this.m2name = name;
    this.m2age = age;
    this.m2job = function() {
        console.log(`직업은 ${job}(이)지롱`);
    };
}

let mp21 = new mf2('K', 22, '대학생');
console.log(mp21);
mp21.m2job();

const info = {
    name : 'Kim',
    age : 24,
    job : 'Programmer',
}

console.log(info);

function Info(name, age, job, fav){
    this.name = name;
    this.age = age;
    this.job = job;
    this.fav = function() {
        console.log(`I like ${fav}.`);
    }
}

const info1 = new Info('K', 24, 'Programmer', 'Singing');
const info2 = new Info('Y', 40, 'Doctor', 'Dancing');
const info3 = new Info('J', 32, 'Dancer', 'Drawing');

console.log(info1, '\n', info2, '\n', info3);
info1.fav();
info2.fav();
info3.fav();