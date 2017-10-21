var Robot = /** @class */ (function () {
    function Robot() {
        this.speed = 5;
    }
    Robot.prototype.run = function () {
        return "로봇이 " + this.speed + " 정도로 뜁니다.";
    };
    Robot.prototype.setSpeed = function (speed) {
        this.speed = speed;
    };
    Robot.prototype.printAddress = function () {
        return "서울";
    };
    return Robot;
}());
var Person = /** @class */ (function () {
    function Person() {
        this.speed = 30;
    }
    Person.prototype.run = function () {
        return this.speed + "정도로 뜁니다.";
    };
    Person.prototype.setSpeed = function (speed) {
        this.speed = speed;
    };
    Person.prototype.printAddress = function () {
        return "서울";
    };
    return Person;
}());
/*let p:Action = new Person(); // 데이터 타입이 Action이면 호출접근 안됨 -> action에 void 지운다면

// 리턴타입이 없는 경우는 호출만 가능해서 변수에 넣을 수 없음 ?????????????????????????????????????
p.setSpeed(50);
let str4 : string = p.run();
console.log(str4);

let r:Action = new Robot();

r.setSpeed(1000);
str4 = r.run();
console.log(str4);

// r=p;*/
function call(vari) {
    console.log(vari.run());
    console.log(vari.printAddress());
}
var p = new Person();
p.setSpeed(70);
call(p);
var r = new Robot();
r.setSpeed(800);
call(r);
//# sourceMappingURL=interface.js.map