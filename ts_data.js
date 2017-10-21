var num_1 = 3;
var num_2 = 5;
var str_1 = "string";
var str_2 = "test";
var numArr = [3, 5, 6];
var numArr2 = [3, 4, 5];
console.log(num_1);
console.log(num_2);
console.log(str_1);
console.log(str_2);
console.log(numArr);
var tp;
tp = ["1", 2];
var anyTest = "any";
anyTest = 3;
anyTest = true;
anyTest = new Number(3);
var anyTest2 = [1, "any", true];
function setUser() {
    return "test";
}
function testObject() {
    return "abc";
}
var strTest = testObject(); // -> string 값
console.log(typeof strTest);
console.log(strTest.charAt(1));
console.log(strTest.length);
console.log(strTest.substr(1));
console.log(strTest);
function testFunc(str, num) {
    console.log("str = " + str);
    console.log("num = " + num);
}
testFunc("문자열", 330);
function throwError() {
    throw new Error("nonono");
}
var AjaxUtil = function (ti) {
    var str = "this_str";
    var num = 3;
    this.print = function () {
        console.log(str);
        console.log(num);
        console.log(ti.str);
        console.log(ti.num);
    };
};
var test1 = { str: "박쿤", num: 28 };
var au = new AjaxUtil(test1);
au.print();
var Car = /** @class */ (function () {
    function Car(pcarName) {
        this.pcarName = pcarName;
        this.carName = pcarName;
    }
    return Car;
}());
var hyundai = new Car("Sonata");
var pStr = " 현대 자동차 중 내 차는 : ";
pStr += hyundai.carName;
console.log(pStr);
var au = new AjaxUtil(test1);
au.print();
//# sourceMappingURL=ts_data.js.map