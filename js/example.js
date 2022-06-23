document.write("책에 자바스크립트는 대소문자를 구분해야 합니다 라고 나와있다.");
/*변수 선언 방법 - 가변형 변수 var
음 포스팅한 javascript에서는 let 을 자주 썻었는데, 이게 최신 문법이라고 한다..
var가 원조 let이라는 가변형 블럭 지역변수, const라는 불변형 블럭 지역변수가 최근

*/
var A;
var B = 10; 

var box;
box = 100;

var s = "javascript";
var num = "100";
var tag = "<h1> String </h1>";


{/* <script>
    var num = 100;
    var str = "자바스크립트";

    document.write(typeof num, "<br>");  // number
    document.write(typeof str);  // srting
</script> */}

// 원래는 <body> </body> 안에 주로 넣는다.
<script>
    var num1 = 15;
    var num2 = 2;
    var result;
    result = num1 + num2;
    document.write(result, "<br></br>"); // 17
    result = num1 - num2;
    document.write(result, "<br>, </br>"); // 13
</script>

/* 조건문 예제
a==b
a!=b
a==b && a==c
a==b || a==c
a>b

if (a>b) {
    console.log("a is more than b.")
} else if (a ==b) {
    console.log("a is the same as b.")
} else {
    console.log("a is less than b.")
}*/


/* 함수의 선언과 호출
function notify(message) {
    console.log('# JavaScript : ' + message);
}


var notify = function (message) {
    console.log('# JavaScript : ' + message);
}


var notify = () => {
    console.log('# JavaScript' + message);
}
notify('say something');


function add(value1, value2) {
    return value1 + value2;
}

var a = 10;
var b = 20;
console.log(add(a, b)); */


/* 배열 : 변수의 값이 연속적으로 나열된 형식
var arr = new Array();
var arr = [];

var Tiger = [
    "moogoong",
    "Taehoe",
    "Gungon",
    "Taebum"
];

인덱스를 이용하여 삽입
var Tiger = [];
Tiger[0] = "moogoong";
Tiger[1] = "Taehoe";
Tiger[2] = "Gungon";


push 메서드를 사용하여 삽입
var Tiger = [];
Tiger.push("moogoong");
Tiger.push("Taehoe");
Tiger.push("Gungon");

var Tiger = ["moogoong",
    "Taehoe",
    "Gungon"];
// length : 길이 재기  
console.log("total careers : " + Tiger.length);

// join() : 배열을 붙여 하나의 문자열로 
console.log("Tiger : " + Tiger.join(", "));

// reverse : 배열을 반대로 뒤집어준다.
console.log("Tiger : " + Tiger.reverse().join(', '));

// sort : 배열을 정리 
console.log("Tiger : " + Tiger.sort().join(', '));

// concat : 두 배열을 합
var TigerON = ["Taebum", "hoe"];
console.log("Tiger : " + Tiger.concat(TigerOnDlc).join(', '));

var x = Tiger.push("Doe", "Qus");
console.log("total careers after push : " + x);

var y = Tiger.pop();
console.log("pop Tiger : " + y);

var z = Tiger.shift();
console.log("shift Tiger : " + x);

var q = Tiger.unshift("Knight")
console.log("total careers after unshift : " + y);
*/


/* Object (오브젝트)
구조체처럼 내부에 여러 변수를 가질 수 있고, class처럼 내부에 메소드를 포함하는 형식이다.
JSON이라고 많이 알려져 있다.

* Object 선언 
var object = new Object();
var object = {};

* 변수를 가진 오브젝트
var coffee = {};
coffee.Americano = 100;
coffee.Lattee = 300;

var coffee = {
    Americano : 100,
    Lattee : 300
};


Object 할당

var Player = function(name) {
    var name = name;
    var hp = 100;
    var mp = 300;

    return {
        hit: function (damage) {
            hp -= damage;
            console.log(name + 'hit damage : ' + damage);
            return this.isDie();
        } ,
        isDie: function() {
            if (hp <= 0) {
                console.log(name + '  is die...');
                return true;
            }
            return false;
        }
    }
}

var medic = new Player('medic');
medic.hit(50);
// medic hit damage : 50

var fireBet = new Player('fireBet');
fireBet.hit(100);

클로저 응용 방식, 다만 함수가 변수마다 새로 할당되는 문제가 발생하기 때문에, 
prototype을 사용해서 객체끼리 공유하는 것이 좋다.

var Player = function(name) {
    this.name = name;
    this.hp = 100;
    this.map = 300;
}

Player.prototype.hit = function (damage) {
    this.hp -= damage;
    console.log(this.name + ' hit damage : ' + damage);
    return this.isDie();
}

Player.prototype.isDie = function() {
    if (this.hp <= 0) {
        console.log(this.name + ' is die..');
        return true;
    }
    return false;
}

var medic = new Player('medic');
madic.hit(50);

var fireBet = new Player('fireBet');
*/

// 반복문 할 차례