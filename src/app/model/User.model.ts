export class IUser{
    username:string ='';
    email:string = '';
    password:string = '';

    constructor(){
        this.username ='';
        this.email ='';
        this.password ='';
    }

}

export interface IDept{
    departmentId:number,
    departmentName:string
}