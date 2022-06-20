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
console.log(isAdult)

// 단점 : 스크립트 일시 정지 불가 실행시 계속 뜬다.
//       스타일링 불가능, 이는 css로 보완하면 될듯.
