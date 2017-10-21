let num_1 : number = 3;
let num_2 : number = 5;

let str_1 : string = "string";
let str_2 : string = "test";

let numArr:Array<number> = [3,5,6];
let numArr2:number[] = [3,4,5];

console.log(num_1);
console.log(num_2);
console.log(str_1);
console.log(str_2);
console.log(numArr);

let tp : [string, number];
tp = ["1", 2];

let anyTest : any = "any";
anyTest = 3;
anyTest = true;
anyTest = new Number(3);
let anyTest2 : any[] = [1,"any",true];

function setUser():string{ // void 는 return 타입
    return "test";
}

function testObject(){
    return "abc";
}

var strTest = testObject(); // -> string 값
console.log(typeof strTest);
console.log(strTest.charAt(1));
console.log(strTest.length);
console.log(strTest.substr(1));
console.log(strTest);

function testFunc(str:string, num:number):void{
    console.log("str = " + str);
    console.log("num = " + num);
}
testFunc("문자열",330);

function throwError():never{ // 호출은 함. 값을 넘겨주는게 아님.
    throw new Error("nonono");
}
interface testIter{
    str : string,
    num : number;
}

let AjaxUtil = function(ti:testIter){ 
    let str:string = "this_str";
    let num:number = 3;
    this.print = function():void{
        console.log(str);
        console.log(num);
        console.log(ti.str);
        console.log(ti.num);
    }
}
var test1 = {str:"박쿤",num:28}
var au = new AjaxUtil(test1);
au.print();
class Car{
    carName : string;
    constructor(public pcarName:string){
        this.carName = pcarName;

    }
}
let hyundai =new Car("Sonata");
let pStr:string = " 현대 자동차 중 내 차는 : "
pStr += hyundai.carName;
console.log(pStr);
var au = new AjaxUtil(test1);
au.print();