var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Cat = /** @class */ (function () {
    function Cat(name, age) {
        this.name = name;
        this.age = age;
    }
    Cat.prototype.printInfo = function () {
        console.log("이름 : " + this.name);
        console.log("나이 : " + this.age);
    };
    Cat.prototype.printName = function () {
        console.log("이름 : " + this.name);
    };
    return Cat;
}());
function printSomething(a) {
    a.printInfo();
    // a.printName(); // -> error ! -> Animal에 printName 이라는 함수가 없음
}
var cc = new Cat("종혁이", 28);
cc.printInfo();
cc.printName();
printSomething(cc);
var cc2 = new Cat("혀기", 27);
// cc2.printName(); // -> error ! -> Animal에 printName 이라는 함수가 없음
var Bird = /** @class */ (function () {
    function Bird(kind) {
        this.kind = kind;
    }
    Bird.prototype.printInfo = function () {
        console.log("이 새의 종류는? : " + this.kind);
    };
    return Bird;
}());
/*class Chicken extends Bird{
    constructor(kind : string){ // 나 자신은 this, 아빠는 super
        super(kind);
    }

    printInfo() :void{
        super.printInfo(); //super 만 붙여서 상위꺼..아빠꺼..가져옴
        console.log("내 종류는? 당연히 닭");
        console.log("test");
    }
}

let c:Animal = new Chicken("닭");
c.printInfo();*/
//위 주석 친거와 동일 소스
var Chicken = /** @class */ (function (_super) {
    __extends(Chicken, _super);
    function Chicken() {
        return _super.call(this, "닭") || this;
    }
    Chicken.prototype.printInfo = function () {
        _super.prototype.printInfo.call(this); //super 만 붙여서 상위꺼..아빠꺼..가져옴
    };
    return Chicken;
}(Bird));
var Egg = /** @class */ (function (_super) {
    __extends(Egg, _super);
    function Egg() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Egg;
}(Chicken));
var c = new Chicken();
c.printInfo();
c = new Egg();
c.printInfo();
//# sourceMappingURL=Animal.js.map