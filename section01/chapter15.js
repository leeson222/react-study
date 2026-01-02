// 1. 객체 생성
let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴 (대부분 사용)

// 2. 객체 프로퍼티 (객체 속성)
let person = {
    name: "이송이",
    age: 33,
    hobby: "ott 보기",
    job: "퍼블리셔",
    extra: {},
    10: 20,
    "like cat": true,
};

// 3. 객체 프로퍼티를 다루는 방법
// 3-1. 특정 프로퍼티에 접근하는 방법(점 표기법, 괄호 표기법)
let name = person.name;
let age = person["age"];

let property = "hobby";
let hobby = person[property];

// 3-2. 새로운 프로퍼티를 추가하는 방법
person.like = "Riku";
person["likeFood"] = "방어";

// 3-3. 프로퍼티를 수정하는 방법
person.job = "Riku";
person["likeFood"] = "Riku";

let yushiLike = person.like;
console.log(yushiLike);

// 3-4. 프로퍼티를 삭제하는 방법
delete person.job;
console.log(person);

delete person["hobby"];
console.log(person);

// 3-5. 프로퍼티의 존재 유무를 확인하는 방법
let result1 = "name" in person;
console.log(result1);

let result2 = "riku" in person;
console.log(result2);
