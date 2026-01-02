// 함수선언

let area1 = getArea(10, 20); // 함수의 변수로 전달한 값은 인수
console.log(area1);

let area2 = getArea(20, 30);
console.log(area2);

let area3 = getArea(120, 200);
console.log(area3);

// 호이스팅
// -> '끌어올리다'라는 뜻
function getArea (width, height) {
    function another(){ // 중첩함수
        console.log("another");
    }
    another();

    let area = width * height;
    return area; //반환값 / 반환이 실행되면 함수 종료됨
} // 함수에 선언한 변수는 매개변수
