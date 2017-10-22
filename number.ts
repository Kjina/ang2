let userList:Array<number> = new Array();
for(let i:number = 0;i<5;i++){
    addUserList(userList,i);
}
function addUserList(userList:Array<number>,num:number){
    userList.push(num);
}
console.log(userList);

let testList = new Array();
testList.push(1);
testList.push("1");
testList.push(true);
// Generic 선언하는거는 데이터타입을 아무거나 넣을 수 없게 방지하는 것
let tList:Array<boolean> = new Array<boolean>();
tList.push(true);
// tList.push("2"); // -> 오류

const tt:number = 3; // const 를 사용할때는 값을 넣어줘야하고 그뒤로는 값을 바꿀수없음
//tt = 4; // -> 오류

let tt2 : number|string = 4; // Tuples
console.log(typeof tt2);
tt2 = "abcd";
console.log(typeof tt2);


let add = function(n1:number|string, n2:number|string):number|string{
    if(typeof n1 != "number") {
        return "1 숫자가 아님";
    }
    if(typeof n2 != "number") {
        return "2 숫자가 아님";
    }
    return n1+n2;
}
console.log(add(1,"3"));
console.log(add(1,4));

class Exam {
    public name : string;
}

let examList:Array<Exam> = new Array<Exam>();

let e:Exam = new Exam();
e.name = "e1";
examList.push(e);

e = new Exam();
e.name = "e2";
examList.push(e);
console.log("examList " , examList);

function initList(examList:Array<Exam>):void{
    examList = null;
}
initList(examList); // null 안나옴 -> function 안에서만 값이 바뀜


interface makeNumbers{ // interface 는 구현하기위한 설계서
    
}
class Lotto implements makeNumbers{ 
    private numbers:Array<number>;
    constructor(){
        this.numbers = new Array<number>(); // 메모리 생성
        this.makeNumbers(); // 2 번 방법 // 호출
    }
    // public makeNumbers():void{ 
    private makeNumbers():void{ // 2 번 방법
        while(this.numbers.length < 6){
            let num:number = Math.floor(Math.random()*45)+1;
            if(this.valiNumbers(num)){ // 2 번 방법
                continue;
            }
            /*if(this.numbers.indexOf(num) != -1){
                continue;
            }*/
            this.numbers.push(num);
        }
    }
    private valiNumbers(num:number):boolean{ // 2 번 방법
        return this.numbers.indexOf(num) != -1;
    }
    public getNumbers():Array<number>{
        return this.numbers;
    }
}

let lot:Lotto = new Lotto();
// lot.makeNumbers(); 
console.log(lot.getNumbers());

let makearrs : makeNumbers[] = [new Lotto(),new Lotto(),new Lotto(),new Lotto(),new Lotto()];
for(let arr in makearrs){
    console.log(makearrs[arr]);
}

let arrs : Lotto[] = [new Lotto(),new Lotto(),new Lotto(),new Lotto(),new Lotto()];

for(let arr in arrs){
    console.log(arrs[arr]);
}
for(let i:number=0, max:number=arrs.length; i<max; i++){
    console.log(arrs[i]);
}


let mn2:makeNumbers[] = [new Lotto(),new Lotto()];
let mn3:Array<makeNumbers> =  Array<makeNumbers>();
mn3.push(new Lotto());

let mn:makeNumbers = new Lotto();
let lot1:Lotto = new Lotto();
mn = lot1;
// lot1 = mn; // -> 오류! makeNumbers 가 상위 

console.log("test");
let test:Set<string> = new Set<string>(); // value 값에 대한 중복 허용x -> 그래서 1 하나만 나옴
test.add("1");
test.add("1");

for(let i in test){ // test 의 키값
    console.log(i);
}
for(let ttt of test){ //test 의 value 값
    console.log(ttt);
}




