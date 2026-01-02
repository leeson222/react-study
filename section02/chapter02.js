// function returnFalse() {
//     console.log("False 함수");
    
//     return undefined;
// }

// function returnTrue() {
//     console.log("True 함수");

//     return 10;
// }

// console.log(returnFalse() && returnTrue());


// 단락 평가 활용 사례

function printName(person){
    // if(!person){
    //     console.log("person에 값이 없음");
    //     return;
    // }
    const name = person && person.name;
    const age = person && person.age;
    console.log(name || "person에 값이 없음!");
    console.log(age || "person에 값이 없음!");
}

printName();
printName({name: "이송이"});
printName({age: 33});