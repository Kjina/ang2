let userList = new Array();
for (let i = 0; i < 5; i++) {
    addUserList(userList, i);
}
function addUserList(userList, num) {
    userList.push(num);
}
console.log(userList);
let testList = new Array();
testList.push(1);
testList.push("1");
testList.push(true);
// Generic 선언하는거는 데이터타입을 아무거나 넣을 수 없게 방지하는 것
let tList = new Array();
tList.push(true);
// tList.push("2"); // -> 오류
const tt = 3; // const 를 사용할때는 값을 넣어줘야하고 그뒤로는 값을 바꿀수없음
//tt = 4; // -> 오류
let tt2 = 4; // Tuples
console.log(typeof tt2);
tt2 = "abcd";
console.log(typeof tt2);
let add = function (n1, n2) {
    if (typeof n1 != "number") {
        return "1 숫자가 아님";
    }
    if (typeof n2 != "number") {
        return "2 숫자가 아님";
    }
    return n1 + n2;
};
console.log(add(1, "3"));
console.log(add(1, 4));
class Exam {
}
let examList = new Array();
let e = new Exam();
e.name = "e1";
examList.push(e);
e = new Exam();
e.name = "e2";
examList.push(e);
console.log("examList ", examList);
function initList(examList) {
    examList = null;
}
initList(examList); // null 안나옴 -> function 안에서만 값이 바뀜
class Lotto {
    constructor() {
        this.numbers = new Array(); // 메모리 생성
        this.makeNumbers(); // 2 번 방법 // 호출
    }
    // public makeNumbers():void{ 
    makeNumbers() {
        while (this.numbers.length < 6) {
            let num = Math.floor(Math.random() * 45) + 1;
            if (this.valiNumbers(num)) {
                continue;
            }
            /*if(this.numbers.indexOf(num) != -1){
                continue;
            }*/
            this.numbers.push(num);
        }
    }
    valiNumbers(num) {
        return this.numbers.indexOf(num) != -1;
    }
    getNumbers() {
        return this.numbers;
    }
}
let lot = new Lotto();
// lot.makeNumbers(); 
console.log(lot.getNumbers());
let makearrs = [new Lotto(), new Lotto(), new Lotto(), new Lotto(), new Lotto()];
for (let arr in makearrs) {
    console.log(makearrs[arr]);
}
let arrs = [new Lotto(), new Lotto(), new Lotto(), new Lotto(), new Lotto()];
for (let arr in arrs) {
    console.log(arrs[arr]);
}
for (let i = 0, max = arrs.length; i < max; i++) {
    console.log(arrs[i]);
}
let mn2 = [new Lotto(), new Lotto()];
let mn3 = Array();
mn3.push(new Lotto());
let mn = new Lotto();
let lot1 = new Lotto();
mn = lot1;
// lot1 = mn; // -> 오류! makeNumbers 가 상위 
console.log("test");
let test = new Set(); // value 값에 대한 중복 허용x -> 그래서 1 하나만 나옴
test.add("1");
test.add("1");
for (let i in test) {
    console.log(i);
}
for (let ttt of test) {
    console.log(ttt);
}
//# sourceMappingURL=number.js.map