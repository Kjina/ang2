var str = "test";
var str2 = "test2";
var num = 3;
var num2 = new Number(3);
var num3 = new Number(3);
console.log(typeof str);
console.log(typeof str2);
console.log(typeof num);
console.log(typeof num2);
console.log(typeof num3);
console.log(num);
console.log(num2);
console.log(num == num2);
console.log(num === num2);
console.log(num2 == num3);
console.log(num2 === num3);
//ts 파일이라서 js 로 변환해야됨
// crtl shift p -> configular task runner -> others 선택
//ctrl shift b -> //# sourceMappingURL=test.js.map --> 컴파일
//f5 클릭 -> nodejs 선택 -> create 어쩌고 클릭 하면 -> launch.json 생성됨 --> 빌드
//# sourceMappingURL=test.js.map