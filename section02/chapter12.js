function orderFood(callback) { // 2
    setTimeout(()=>{ // 3
        const food = "떡볶이";  // 4
        callback(food); // 5
    }, 3000);
}

function cooldownFood(food, callback){  // 8 (그런데 setTimeout 때문에 2초 늦게 실행됨)
    setTimeout(()=>{ 
        const cooldownedFood = `식은 ${food}`;
        callback(cooldownedFood); 
    }, 2000);
}

function freezeFood(food, callback){ // 11
    setTimeout(() => { // 12
        const freezedFood = `냉동된 ${food}`; // 13
        callback(freezedFood); // 14
    }, 1500);
}

orderFood((t)=>{ // 1
    console.log(t); // 6 

    cooldownFood(t, (cooldownedFood)=>{  // 7
        console.log(cooldownedFood); // 9

        freezeFood(cooldownedFood, (freezedFood) => { // 10
            console.log(freezedFood); // 15
        })
    });
});


