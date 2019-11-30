
import IUserservice from "../services/IUserservice";
import UserDto from "softweb-common/src/Models/UserDto";

import UserDao from "softweb-persistence/src/UserDao";
import User from "softweb-persistence/src/entity/User";

export default class UserService implements IUserservice {
    userDao : UserDao;
    constructor(context? : UserDao){
        this.userDao = (context)?context:new UserDao();
    }

    public GetUsers(): UserDto[] {
        let users: User[] = this.userDao.Users();
        let result = (users== null)? null : users.map(u=><UserDto>({Id:u.id,FirstName:u.firstName,LastName:u.lastName}));
        return result;
    }    
    
    public Multipl(v1: number, v2: number): number {
        return v1 * v2;
    }

}