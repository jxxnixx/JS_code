//// Async_Await

/// Async
// Promise의 then 메소드를 체인 형식으로 호출하는 것보다 가독성이 좋음.

async function getName() {
    return "Mike";
}

console.log(getName()); // async를 사용하면, 항상 Promise 를 반환

getName().then((name) => {   // 그래서 then 사용 가능
    console.log(name);
});


// Promise - resolve
async function getName1() {
    return Promise.resolve("Tom");
}

getName1().then((name) => {
    console.log(name);
});

// Promise - reject
async function getName2() {
    throw new Error('err..');
}

/*
getName2().catch((name) => {
    console.log(name);
});
*/


/// Await
// async 함수 내부에서만 사용 가능! 일반 함수에서 사용하면 에러
// 오른쪽에는 Promise가 오고, 그 프로미스가 처리될 때까지 기다림.

async function showName() {
    const result = await getName('Mike'); 
    console.log(result);       // 그래서 얘는 1초 후에 Mike가 찍힘
}

console.log("시작");
showName();

// res

const f1 = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("1번 주문 완료");
        }, 1000);
    });
};

const f2 = (message) => {
    console.log(message);
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("2번 주문 완료");
        }, 3000);
    });
};

const f3 = (message) => {
    console.log(message);
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("3번 주문 완료");
        }, 2000);
    });
};

console.log('시작');
async function order() {
    const result1 = await f1();         // await를 통해 result1, 2등을 기다렸다가 들어가는 것이 명확하게 보이므로
    const result2 = await f2(result1);  // 가독성이 좋음.
    const result3 = await f3(result2);
    console.log(result3);
    console.log('종료');
}
order();

// rej


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
            rej(new Error('err...'));
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

console.log('시작');
async function order1() {
    try {                                // try-catch문으로 감싸주기!
        const result11 = await f11();       
        const result22 = await f22(result11);  
        const result33 = await f33(result22);
        console.log(result33);
    } catch (e) {
        console.log(e);
    }
    console.log('종료');
}
order1();

// 동일 수행, Promise로 바꾸기

console.log('시작');
async function order2() {
    try {                               
        const result_ = await Promise.all([f1(). f2(), f3()]); // 에러 없는 res 버전
        console.log(result_);
    } catch (e) {
        console.log(e);
    }
    console.log('종료');
}
order2();

