//// Promise

// 함수 전달받는 인수는 resolve - 성공 시 실행되는 함수 , reject - 실패 시 실행되는 함수
// 어떤 일이 완료된 이후 실행되는 함수 : callback 함수
const pr = new Promise((resolve, reject) => {   

});

/// new Promise 생성하는 Promise 객체는, state와 result를 프로퍼티로 받음.
// 초기 -  state : pending(대기), result : undefined
// resolve(value)시 - state : fulfilled(이행됨), result : value (이때 result는 resolve 함수로 전달된 값)
// reject(error) 시 - state : rejected(거부됨), result : error (이때 result는 reject 함수로 전달된 error)


// 초기 state, result를 가지다가
// 3초 후에 resolve시의 state, result를 가짐. result는 'OK'
const pr1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('OK')
    }, 3000)
});

// 초기 state, result를 가지다가
// 3초 후에 reject시의 state, result를 가짐. result는 error

/*
const pr2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error('error..'))
    }, 3000)
});
*/

// 즉, 위 두 코드는 판매자 입장에서의 코드
// 이제 소비자 코드를 살펴보자

/*
pr1.then(
    function(result){}, //Promise가 resolve, 이행되었을 때 실행. 'OK'
    function(err){}     //Promise가 reject, 거부되었을 때 실행. error
);
*/

// 좀 더 구체적으로는

/*
pr1.then(
    function(result) {
        console.log(result + ' 가지러 가자.');
    },
    function(err){
        console.log('다시 주문해주세요..');
    }
);
*/
// 이때, pr1이 resolve로 실행되므로, 
// 첫번째 callback인 function(result)만 실행되고 err는 실행되지 않음.

// then, catch
// 가독성이 더 좋고 에러도 잡기 편함!

/*
pr1. then(
    function(result){}
).catch(
    function(err){}
);
*/

// finally
// 무엇이 실행되든 간에 마지막에 항상 실행.
// 로딩 화면 등을 없앨 때 유용

/*
pr1. then(
    function(result){}
).catch(
    function(err){}
).finally(
    function(){
        console.log('---주문 끝---')
    }
);
*/

// 예제
// resolve

const pr3 = new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve("OK");
    }, 1000);
})

// console.log("시작");

/*
pr3.then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
}).finally(() => {
    console.log("끝");
});
*/

// reject - 에러
/*
const pr4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error('err...'))
    }, 1000);
})
*/

// console.log("시작2");

// pr4.then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err);
// }).finally(() => {
//     console.log("끝");
// });


// 예제 2 - Promise 없이, callback 만으로!

const f1 = (callback) => {
    setTimeout(function() {
        console.log("1번 주문 완료");
        callback();
    }, 1000);
};

const f2 = (callback) => {
    setTimeout(function() {
        console.log("2번 주문 완료");
        callback();
    }, 3000);
};

const f3 = (callback) => {
    setTimeout(function() {
        console.log("3번 주문 완료");
        callback();
    }, 2000);
};

/*
console.log("시작");
f1(function() {
    f2(function() {
        f3(function() {
            console.log("끝");
        });
    });
});
*/

// 예제 2 - Promise 사용

const f11 = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("1번 주문 완료");
        }, 1000);
    });
};

const f22 = (message) => {
    console.log(message);
    return new Promise((res, rej) => {
        setTimeout(() => {
            //res("2번 주문 완료");
            rej("xxx");
        }, 3000);
    });
};

const f33 = (message) => {
    console.log(message);
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("3번 주문 완료");
        }, 2000);
    });
};

// 프로미스 체이닝. 연결 연결
/*
console.time('시작');
f11()
    .then((res) => f22(res))
    .then((res) => f33(res))
    .then((res) => console.log(res))
    .catch(console.log)
    .finally(() => {
        console.timeEnd('시간');
    });
*/

/// Promise.all - 위의 경우, 1초 3초 2초로 프로미스가 순차적으로 실행되는데,
// 이때 총 소요시간은 6초임. 이걸 동시에 주문하는 형식으로 바꿔 시간을 단축.
// 배열로 인자를 받음!

// (중요!) 만약 Promise 중에 rej로 인한 error가 있다고 한다면, 아무것도 출력되지 않음.
// 하나의 정보라도 누락되면 페이지를 보여줄 수 없는 경우에 사용
// 다 보여주거나, 안 보여주거나.

/*
console.time("x");
Promise.all([f11(), f22(), f33()]).then((res) => {
    console.log(res);
    console.timeEnd("x");
});
*/

/// Promise.race - 경주. Promise.all과 사용 방법은 동일하나
// 하나라도 1등으로 끝내면 끝남.
// 용량이 큰 이미지를 로딩하는데 그 중 하나라도 완료되면 이미지를 보여줄 때 사용

console.time("x");
Promise.race([f11(), f22(), f33()]).then((res) => {
    console.log(res);
    console.timeEnd("x");
});
