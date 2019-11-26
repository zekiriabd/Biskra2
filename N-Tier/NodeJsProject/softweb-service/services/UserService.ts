//let UserDao = require('softweb-persistence/orm/UserDao');
import {UserDao} from "softweb-persistence/orm/UserDao";
export class UserService {
    GetUsers()  {
        const userDao = new UserDao(); 
        console.log("UserService --> UserDao.Users");
        return userDao.Users(); 
    }  
}
