// Computed property 예시

let a = 'age';
const user = {
    name : 'Mike',
    // age : 30 // 이걸 computed property로 변형하면
    [a] : 30  // [] 묶어주면 a라는 문자열이 아닌 변수 a에 할당된 값이 들어감, 즉 age : 30이 들어간다.
    // 이것을 Computed property 라고 부른다.
}

// const user2 = {
//     [1 + 4] : 5,
//     ["안녕" + "하세요"] : "Hello"
// }


// Objected.assign() : 객체 복제
/* cloneUser로 user 를 대입하면 user와 cloneUser 값 모두 하나의 변수를 참조하게 된다. 이는 쥐도새도 모르게 값이 바뀌게 되버리는데, 
그것을 방지하기 위해서 객체 자체를 모두 복제하는 것이 바로 Objected.assign이다. */
const newUser = Object.assign({}, user);
{} + { name : 'Mike', age : 30 } /* = */  // 복제된다.
newUser.name = 'Tom';
console.log(user.name);  // 'Mike'
newUser != user;


Object.assign({ gender : 'male' }, user); // { } 안에 있는 객체에 user라는 객체를 복제 그래서 모두 가지고 있는 값은.
// gender : 'male', name : 'Mike', age : 30,
// 그럼 만약 if { gender : 'Mike' } 하면 어떻게 되는가? A : 덮어씌워진다.

// const user = {
//     name : 'Mike'
// }

// const info1 = {
//     age : 30,
// }

// const info2 = {
//     gender : 'male',
// }
// Object.assign(user, info1, info2)  이렇게 되면 user 메소드에 info1과 info2 가 합쳐진다.




// Object.keys() : 키 배열 반환

const user4 = {
    name : 'Mike',
    age : 30,
    gender : 'male',
}
Object.keys(user);  // ["name", "age", "gender"] 이 반환

// 이렇듯 keys를 사용하면 키 name, age, gender를 반환했는데, 반대로 Object.values() : 값 배열 반환
Object.values(user);  // 메소드 ["Mike", 30, "male"] 이 반환

// Objected.entries() : 키/값 배열 반환
Objected.entries(user);  
// [ ["name", "Mike"], ["age", 30], ["gender", "male"] ] 이 반환

// Object.fromEntries :  키/값 배열을 객체로
const arr = 
[
    ["name", "Mike"], 
    ["age", 30], 
    ["gender", "male"]
];

Object.fromEntries(arr);  // 객체로 만들어줌
// { name : "Mike", age : 30, gender : 'male'}
