
import {createConnection} from "typeorm";
import {User} from "./entity/User";

export class UserDao {
    Users() {
        console.log("2- UserDao conn");    
        createConnection().then(async conn => {
            console.log(" 3- select * from User");    
            let usersDao = await conn.manager.find(User); 
            console.log(" 4- and select");  
            return usersDao; 
        }).catch(ex => console.log(ex));
    }
}

