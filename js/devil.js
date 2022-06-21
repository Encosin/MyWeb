// 상수 
// 변하지 않는 값 -> const 
// 변하는 값 -> let

// ex) 문자형
const name = "Mike";  // 문자형 string
//const age = 30;

const meaasge = "I'm a boy";

// $는 대입과 같은 의미, 마치 Python에 f"{}"를 보는 느낌이다.
const message3 = "My name is ${name}";

const message4 = "나는 ${30 +1 }살 입니다.";

console.log(message4)

// ex) 숫자형

const age = 30;  // 숫자형 number
const PI = 3.14;

console.log(1+2);  // 더하기
console.log(10-3); // 빼기


const x = 1/0;  // ???
console.log(x);  // infinity 라는 결과를 준다. 


// NoN = Not a number 작업을 할 때 항상 이걸 염두해두고 작업을 해야한다. 
// print 같은 문자가를 alert로 대신 사용한다. 물론 이는 html 안에서 쓸 경우이다. 
// alert(typeof "?")  이러면 string 으로 출력되고
// alert(typeof 1)  이러면 number 라고 출력된다. 
// "" 안에 들어가는건 문자, 그냥 쓰면 숫자로 인식한다고 생각하면 된다

// 여러줄을 한번에 표시하는건 
alert("안녕하세요. \n hi \n hello"); // 세줄이 나올것이다.

// 문자열 
alert("hello?" + " hi");

// 문자의 길이
alert("coding hello?".length);  // 13글자


// 자료형 
// null 과 undefined 
let user = null;  // user는 아무것도 존재하지 않는다.

// 객체형 
alert(typeof null);  // object
/// null 은 객체가 아니다! 초기에 만들 때 오류지만, 하위호환성을 위해 수정하지 않음. 
// 심볼형

const name4 = "Mike";
const name5 = "Enco";

const a = "나는 ";
const b = " 입니다.";

console.log(a + name4 + b);

const age_ = 30;  // number
console.log(a + age + "실" + b)


// alert : 알려줌
// prompt : 입력받음
// confirm : 확인받음

코딩악마 자바스크립트 기초강좌  : 100분 완성

const name6 = prompt("이름을 입력하세요.");  // Enco를 입력하면
// prompt는 입력받을 수 있는 상자를 띄워준다.
alert("환영합니다, " + name5 + "님");  // 환영합니다 Enco님 이 뜬다.

const isAdult = confirm("당신은 성인입니까?");
// confirm은 확인/취소 버튼이 같이 있지만 alert는 확인 버튼만 있다.
// confirm은 취소를 누르면 bull 형인 false가 뜨지만, alert는 아무 값도 안넣을때 null을 반환한다.
console.log(isAdult);

// 단점 : 스크립트 일시 정지 불가 실행시 계속 뜬다.
//       스타일링 불가능, 이는 css로 보완하면 될듯.


//---------------------------------
// javascript에서는 숫자형끼리 더하면 숫자의 합을 나타내주고, 자료형끼리 더하면 자료를 붙여서 출력해줬다.
// 그럼 숫자형과 자료형을 더하게 되면 어떻게 될까?
// const mathScore = prompt("수학 몇점?");
// const engScore = prompt("영어 몇점?");
// const result = (mathScore + engScore) / 2;  // 4540
// 이 계산식은 올바르게 나오지 않는다. why? 문자형을 입력받았기 때문이다. 
// prompt 로 입력받는 값은 문자형이다. 나누기 표시는 문자도 숫자형으로 바꿔서 나눠준다.
// 제대로 나오게 하려면
const mathScore = 90;
const engScore = 80; 
const result = (mathScore + engScore) / 2;
console.log(result);
// 이렇게 하면 정상적인 85가 출력된다. 
// 하지만 가끔 정상적인 값이 나올때가 있긴한데, 그건 내장된 자동형변환 기능 때문이다. 


// 명시적 형변환? 
console.log(
    String(3); // 문자형으로 바꿔줌.
    Number(true); // 숫자로 바꿔준다. 
    // false => 0, 빈문자열, null, undefined, NaN
)




// Function 

function showError() {
    alert('에러가 발생했습니다. 다시 시도해주세여');
}

showError();



// let msg = 'Hello';
function sayHello(name) {
    // const msg = 'Hello, ${name}';
    // console.log(msg);
    let msg = 'Hello'; // 얘가 지역변수인데, 얘를 바깥으로 내보내면 전역변수가 되어 코드 어디서든 접근이 가능하다.
    if(name) {
        // msg+= name;
        msg += ', ${name}';
    }
    console.log(msg);
    // 지역변수 msg는 함수 밖에서는 사용할 수 없다. 그 말은 즉 외부에서 참조할 수 없단 뜻이다.

}

sayHello('Enco');


// 여태까지는 함수 선언문을 사용하였는데, 
// 이제는 함수 표현식을 배워보겠다.

// javascript 내부 알고리즘 : 실행전 초기화된 상태에서 코드의 모든 함수들을 미리 찾아둔다. = 호이스팅

// 함수 표현식: 코드에 도달하면 생성 
// let sayHello = function() {
//     console.log('Hello');
// }
// sayHello();

// 화살표 함수 
// let add = (num1, num2) => (
//     num1 + num2;
// );

// -------------------------------------
const sayHello = function(name) {
    const msg = 'Hello, ${name}';
    console.log(msg);
};
// 를 화살표 함수로 바꿔주면?
const add = function(num1, num2) {
    const result = num1 + num2;
    return result;
};
/*
const add = (num1, num2) => {
    const result = num1 + num2;
    return result;
};*/

/* 다시 이걸 한줄로 만들어보면?
const add = (num1, num2) => (
    num1 + num2;
);*/


/*객체?
object - 접근, 추가, 삭제 

접근 
superman.name // 'clark'
superman['age']

추가
superman.gender = 'male';
superman['hairColor'] = 'black';

삭제 
delete superman.hairColor;

ex)
const superman = {
    name : 'clark',
    age : 30,
}
console.log(superman.name)
console.log(superman)
superman.hairColor = 'black';
superman['hobby'] = 'football';
console.log(superman)
delete superman.age;
console.log(superman)
*/

/*
function makeObject(name, age) {
    return {
        name,
        age,
        hobby: "football"
    };
}

const Mike = makeObject("Mike", 30);
console.log(Mike);

console.log("age" in Mike);
console.log("birthday" in Mike);*/

const Mike = {
    name: "Mike",
    age: 30,
};

for(x in Mike) {
    console.log(Mike[x])
}