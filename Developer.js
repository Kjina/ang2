class Worker2 {
    constructor() {
        // protected name:string = "홍길동"; protected 는 자식도 사용가능 (상속할 때 사용)
        this.name = "홍길동"; //private name:string = "홍길동"; private 선언하면 name 이라는 변수는 이 안에서만 사용가능
    }
    /*  constructor(name:string){
          this.name = name;
      }*/
    goForWork() {
        console.log("출근 중");
    }
    doWorking() {
        console.log("일 중");
    }
    goOut() {
        console.log("퇴근 중");
    }
}
class Developer extends Worker2 {
    doWorking() {
        console.log(this.name + " 개발 중");
    }
}
class Corder extends Worker2 {
    doWorking() {
        console.log(this.name + " 코딩 중");
    }
}
function doTest(w) {
    w.goForWork();
    w.doWorking();
    w.goOut();
}
let dev = new Developer();
doTest(dev);
let cod = new Corder();
doTest(cod);
//# sourceMappingURL=Developer.js.map