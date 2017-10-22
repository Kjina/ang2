class Cat {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    printInfo() {
        console.log("이름 : " + this.name);
        console.log("나이 : " + this.age);
    }
    printName() {
        console.log("이름 : " + this.name);
    }
}
function printSomething(a) {
    a.printInfo();
    // a.printName(); // -> error ! -> Animal에 printName 이라는 함수가 없음
}
let cc = new Cat("종혁이", 28);
cc.printInfo();
cc.printName();
printSomething(cc);
let cc2 = new Cat("혀기", 27);
// cc2.printName(); // -> error ! -> Animal에 printName 이라는 함수가 없음
class Bird {
    constructor(kind) {
        this.kind = kind;
    }
    printInfo() {
        console.log("이 새의 종류는? : " + this.kind);
    }
}
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
class Chicken extends Bird {
    constructor() {
        super("닭");
    }
    printInfo() {
        super.printInfo(); //super 만 붙여서 상위꺼..아빠꺼..가져옴
    }
}
class Egg extends Chicken {
}
let c = new Chicken();
c.printInfo();
c = new Egg();
c.printInfo();
//# sourceMappingURL=Animal.js.map