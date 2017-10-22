class UserDTO {
    setName(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    setAddress(address) {
        this.address = address;
    }
    getAddress() {
        return this.address;
    }
}
function doTest4(user, i) {
    user.setName(i + "홍길동");
    user.setAddress(i + "서울");
    return user;
}
function doTest1(user) {
    user = null;
    return user;
}
/*let hong:UserDTO = new UserDTO();
hong.address = "서울";
hong.setName("홍길동");
console.log(hong.getName());*/
let hong = new UserDTO();
doTest4(hong, 120);
console.log(hong.getName());
console.log(hong.getAddress());
doTest1(hong);
console.log(hong.getName());
console.log(hong.getAddress());
//# sourceMappingURL=private.js.map