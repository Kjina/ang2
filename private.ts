class UserDTO{
    private name : string;
    private age : number;
    public address : string;
    setName(name:string):void{
        this.name = name;
    }
    getName():string{
        return this.name;
    }
}

let hong:UserDTO = new UserDTO();
hong.address = "서울";
hong.setName("홍길동");
console.log(hong.getName());

