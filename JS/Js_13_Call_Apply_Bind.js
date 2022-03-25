//// Call_Apply_Bind

/// call : 모든 함수에서 사용 가능. this를 특정값으로 지정

const mike = {
    name : "Mike",
}

const tom = {
    name : "Tom",
}

function showThisName() {
    console.log(this.name);
}

showThisName();             // 아무것도 없으면, 여기서의 this 는 윈도우 window
showThisName.call(mike);    // 함수를 사용 시 call을 이용, 매개변수를 넘겨주면 
showThisName.call(tom);     // 해당 함수로 this 지정

function update(birthYear, occupation) {
    this.birthYear = birthYear;
    this.occupation = occupation;
}

update.call(mike, 1999, "singer");  // this가 될 매개변수, 해당 함수의 매개변수 2개 순서
console.log(mike); // name : mike, b-year : 1999, occu - singer 꼴로 불러옴.

update.call(tom, 2002, "teacher");
console.log(tom);


/// apply : call과 비슷하나 매개변수를 배열로 받아 처리.
///         즉, 배열 요소를 매개변수로 받아야 하는 경우에 유리

update.apply(mike, [1999, "singer"]); 
console.log(mike); // name : mike, b-year : 1999, occu - singer

update.apply(tom, [2002, "teacher"]);
console.log(tom);

//
const nums = [3,10,1,6,4];

const minNum = Math.min(nums); // NaN
const maxNum = Math.max(nums); // NaN

const minNum1 = Math.min(...nums);
const maxNum1 = Math.max(...nums);

//두 번째 매개변수로, 이용해야 하는 배열을 전달받아 차례로 인수로 사용
const minNum2 = Math.min.apply(null, nums); // 여기서의 null : this로 사용된 값.
const maxNum2 = Math.max.apply(null, nums); // min이나 max는 딱히 this가 중요하지 않으므로 아무거나 넣은 것.
// = Math.max.apply(null, [3, 10, 1, 6, 4])

const minNum3 = Math.min.call(null, ...nums); // call은 차례로 들어가야 하니까
const maxNum3 = Math.max.call(null, ...nums); // 스프레드 연산자 사용
// = Math.max.call(null, 3, 10, 1, 6, 4)
// 위의 apply와 동작 방식 같음. 매개변수를 받는 방법만 다른 것. 


/// bind - 함수의 this 값을 영구히 바꿈.

// 위의 const mike와 function update 를 그대로 사용

const updateMike = update.bind(mike);

updateMike(1980, 'police');
console.log(mike); // { name: 'Mike', b-year: 1980, occu: 'police' }

//

const user = {
    name : "Mike",
    showName : function() {
        console.log(`hello, ${this.name}`);
    },
};

user.showName(); // 메소드는 앞에 있는 것이 this임. 여기서는 user가 this.

let fn = user.showName; 

fn(); // 호출 시 this를 잃어버린 것. fn만 호출하니까..
fn.call(user);
fn.apply(user);

let boundFn = fn.bind(user);
boundFn(); // bind를 사용하면 boundFn만 호출해도, user가 this.