// 1. 함수 표현식

function funcA(){
    // console.log("funcA");
};

let varA = funcA;
varA();
// console.log(varA);

let varB = function (){ // 익명함수
    // console.log("funcB");
}; // 값으로써 함수를 생성하는 방법 / 함수표현식 / 호이스팅의 대상이 안 됨

varB();

// 2. 화살표 함수
let varC = (value) => {
    console.log(value);    
    return value + 1;
}

console.log(varC(10));
