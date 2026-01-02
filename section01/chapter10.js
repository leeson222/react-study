// 1. 반복문 for문

for (let i = 1; i < 10; i++) {
    if(i % 2 === 0) {
        continue; // 건너뛰기
    }
    console.log(i);

    if(i >= 5) {
        break; // 멈추기
    }
}