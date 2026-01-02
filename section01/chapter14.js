// 스코프
// -> 전역(전체 영역) 스코프 / 지역(특정 영역) 스코프
// -> 전역 스코프 : 전체 영역에서 접근이 가능
// -> 지역 스코프 : 특정 영역에서만 접근이 가능

let a = 1; // 전역 스코프

function funcA(){
    let b = 2;
    console.log(a);
    
    function funcB(){};
}

funcA();
 // console.log(b); 지역 스코프를 갖기 때문에 함수 외부에서 접근할 수 없다

if(true){
    let c = 1;
}

for(idx = 1; idx <= 3; idx++){
    let d = 1;
    function funcB(){};
}

funcB();


