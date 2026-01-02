function add10(num){
    const promise = new Promise((resolve, reject)=>{
    // 비동기 작업을 실행하는 함수
    // executor

        setTimeout(()=>{
            if(typeof num === 'number') {
                    resolve(num + 10);
                }else {
                    reject("num이 숫자가 아닙니다");
                }
                console.log("안녕");
                // resolve("안녕"); // resolve는 프로미스 비동기 작업을 성공 상태로 바꿈
                reject("왜 실패했는지 이유.."); // reject는 프로미스 비동기 작업을 실패 상태로 바꿈
            }, 2000);
    });

    return promise;
}



// then 메서드
// -> 그 후에
add10(20).then((result)=>{
    console.log(result);
    return add10(result);
})
.then((result)=>{
    console.log(result);
    return add10(result);
})
.then((result)=>{
    console.log(result);
})
.catch((error)=>{
    console.log(error);
});
