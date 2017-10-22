var Computer;
(function (Computer) {
    Computer[Computer["Desktop"] = 0] = "Desktop";
    Computer[Computer["Laptop"] = 1] = "Laptop";
    Computer[Computer["Netboot"] = 2] = "Netboot";
})(Computer || (Computer = {}));
; // 열거형 데이터타입 (개발자를 위한 데이터타입)
let cp = Computer.Laptop;
console.log(cp);
let cp2; // 데이터 타입이 없는것과 마찬가지
cp2 = "abc";
cp2 = 123;
cp2 = true;
class EE {
}
cp2 = new EE();
// 함수를 크게 두가지로 나누면 넘기는 데이터타입 존재하느냐/ 존재하지않느냐
function examReturn() {
    console.log("examReturn");
    return "examReturn 함수 호출";
}
function examVoid() {
    console.log("examVoid");
    // return "examVoid 함수 호출"
}
// return 을 하는것과 하지않는것의 차이점 -> void 가 들어있으면 결과값을 받을 방법이 없음
// 호출하고 난 뒤 값을 넣어줄 수 있냐 없냐의 차이
let a;
a = examReturn();
console.log(a);
// a = examVoid(); // -> 오류
examVoid();
let testArr = [1, 2, 3];
console.log(testArr);
class DD {
    constructor() {
        this.name = "6sj";
    }
}
let dd = new DD();
console.log(dd);
class FF {
    constructor(pc) {
        this.name = "6sj";
        this.pc = pc;
    }
    printInfo() {
        console.log(this.name + "님의 pc 는 " + this.pc + "입니다.");
    }
}
let ff = new FF(Computer.Laptop);
ff.printInfo();
let str__1 = "str";
let str__2 = "str";
let str__3 = new String("str1");
let str__4 = new String("str");
let str__5 = new String("str");
// 자바스크립트는 function 기반 
String.prototype.equals = function (str) {
    // error 가 나는이유는 typescript 에서 강제로 만들 수 없게 만들었지만 실행은 javascript 로 하기 때문에 실행은 됨
    if (typeof str == "object") {
        return str.toString() == this.toString();
    }
};
console.log("str1 == str2 : " + (str__1 == str__2));
console.log("str1 == str3 : " + (str__1 == str__3));
console.log("str3 === str4 : " + (str__3 == str__4));
console.log("str1 === str2 : " + (str__1 === str__2));
console.log("str1 === str3 : " + (str__1 === str__3)); // 데이터 타입이 다름
console.log("str3 === str4 : " + (str__3 === str__4)); // 객체를 비교할때는 값을 비교하지않아서 false 
console.log("str3 equals str4 : " + (str__3.equals(str__4))); // equals 는 toString 값을 비교 
console.log("str4 equals str5 : " + (str__4.equals(str__5)));
console.log(str__3.toString());
console.log(str__4.toString());
console.log(str__5.toString());
//ctrl +b 하면 옆에 리스트 없어짐
//# sourceMappingURL=Computer.js.map