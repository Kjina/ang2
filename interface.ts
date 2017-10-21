interface Action{ // 변수나 함수의 선언만 가능 (인터페이스) ->  // 설계를 했을 때 사용하지 않앗던 함수 사용하지 않게 하기위해 사용(규격)
    speed:number;
    run():string;
    setSpeed(speed:number) : void;
    printAddress() : string;
}

class Robot implements Action{ // 선언된 인스턴스의 데이터타입은 Robot 과 Action
    speed:number = 5;
    run(){ // 1.
        return "로봇이 " + this.speed + " 정도로 뜁니다.";
    }
    setSpeed(speed:number):void{ // 2.
        this.speed = speed;
    }
    printAddress():string{
        return "서울";
    }
}
class Person implements Action { // 1.데이터타입 리턴하는 경우 / 2.데이터타입 리턴하지 않는 경우 // 선언된 인스턴스의 데이터타입은 Person 과 Action
    speed:number = 30;
    run(){ // 1.
        return this.speed + "정도로 뜁니다.";
    }
    setSpeed(speed:number):void{ // 2.
        this.speed = speed;
    }
    printAddress():string{
        return "서울";
    }
}

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

function call(vari:Action){
    console.log(vari.run());
    console.log(vari.printAddress());
}
let p:Action = new Person();
p.setSpeed(70); 
call(p);
let r:Action = new Robot();
r.setSpeed(800);
call(r);