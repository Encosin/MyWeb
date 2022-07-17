// Computed property 예시

/*
let a = 'age';
const user = {
    name : 'Mike',
    // age : 30 // 이걸 computed property로 변형하면
    [a] : 30  // [] 묶어주면 a라는 문자열이 아닌 변수 a에 할당된 값이 들어감, 즉 age : 30이 들어간다.
    // 이것을 Computed property 라고 부른다.
}*/

// const user2 = {
//     [1 + 4] : 5,
//     ["안녕" + "하세요"] : "Hello"
// }


// Objected.assign() : 객체 복제
/* cloneUser로 user 를 대입하면 user와 cloneUser 값 모두 하나의 변수를 참조하게 된다. 이는 쥐도새도 모르게 값이 바뀌게 되버리는데, 
그것을 방지하기 위해서 객체 자체를 모두 복제하는 것이 바로 Objected.assign이다. 
const newUser = Object.assign({}, user);
{} + { name : 'Mike', age : 30 } /* = */  // 복제된다.*/

/*
newUser.name = 'Tom';
console.log(user.name);  // 'Mike'
newUser != user; */


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



/*
// Object.keys() : 키 배열 반환

const user4 = {
    name : 'Mike',
    age : 30,
    gender : 'male',
}
Object.keys(user);  // ["name", "age", "gender"] 이 반환

// 이렇듯 keys를 사용하면 키 name, age, gender를 반환했는데, 반대로 Object.values() : 값 배열 반환
Object.values(user);  // 메소드 ["Mike", 30, "male"] 이 반환*/

/* Objected.entries() : 키/값 배열 반환
Objected.entries(user);  
// [ ["name", "Mike"], ["age", 30], ["gender", "male"] ] 이 반환

// Object.fromEntries :  키/값 배열을 객체로
*/

/*
const arr = 
[
    ["name", "Mike"], 
    ["age", 30], 
    ["gender", "male"]
];

Object.fromEntries(arr);  // 객체로 만들어줌
// { name : "Mike", age : 30, gender : 'male'}*/


/* ex)
let n = "name";
let a_ = "age";

const user_ = {
    [n] : "Mike",
    [a_] : 30,
    [1+4] : 5,
};

console.log(user_);



// 객체 복사 및 객체 호출
function makeObj(key, val) {
    return {
        [key] : val,
    };
}

// 잘못된 복사방식 : 복사한 객체의 이름을 바꾸면 복사 전 객체의 이름도 바뀐다. 
const obj = makeObj("이름", 33);
console.log(obj);

// 객체의 메소드째로 복사
const user2_ = Object.assign({}, user_);
user2_.name = "Tom";
console.log(user_); // Mike
console.log(user2_); // Tom


// 객체의 key 복사
const result = Object.keys(user_);
console.log(user_);


// 객체의 
const result2 = Object.values(user_);
console.log(result2);


// from entrys
let arr3_ = [
    ["mon", '월'],
    ['tue', '화']

]

const result3 = Object.fromEntries(arr);
console.log(result3);
*/
//-------------------------------------------------------------


// Symbol
const sym = Symbol();  // new를 붙이지 않습니다.
const sym_ = Symbol(); 

console.log(sym)
Symbol()

console.log(sym_)
Symbol()
// Symbol 형은 유일성이 보장된다.
const id = Symbol('id');

// 만약 Symbol 형 2개를 같은 값을 넣으면 어떻게 될까? 
// 값은 같게 나와도 boolean 형으로 비교해보면 둘다 false를 출력한다. 
// javascript의 흡수력이 좋아 일단 삼켜서 실행은 시키지만, 실제 동작에는 거부하는 것과 같다.


// Property key : 심볼형
const id_ = Symbol('id');
const user_ = {
    name : 'Mike',
    age : 30,
    [id] : 'myid' // 얘를 출력하면 Symbol(id): "myid"   이렇게 나온다.
}
// 반대로 밑을 출력하면 Symbol 함수는 나오지 않는다.
Object.keys(user_);



/*Symbol.for() : 전역변수 심볼
1) 하나의 심볼만 보장받을 수 있음
2) 없으면 만들고, 있으면 가져오기 때문
3) Symbol 함수는 매번 다른 Symbol 값을 생성하지만,
4) Symbol.for 메소드는 하나를 생성한 뒤 키를 통해 같은 Symbol을 공유
*/
const id1 = Symbol.for('id');
const id2 = Symbol.for('id');
id1 === id2;

// 전역심볼이 아닌 것은 keyfor을 사용할 수가 없다. 대신

id.description; // id 객체에 저장해놓은 값이 튀어나온다.

// 심볼들을 완전히 숨길 수 없기에, 숨겨진 Symbol 키를 모두 보고싶으면
Object.getOwnPropertySymbols(user_);

// 심볼형을 포함한 객체의 모든 키를 보고싶다면??
Reflect.ownKeys(user);

// 대부분은 이거 잘 안씀... 쉣 그래도 예제는 알아보자.

const showName = Symbol('show name');
user_[showName] = function() {
    console.log(this.name);
};

for (let key in user_) {
    console.log('His ${key} is ${user[key]}.');
}

// 25:30


