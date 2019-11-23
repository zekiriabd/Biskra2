
import {createConnection} from "typeorm";
import {UserDao} from "softweb-persistence/src/UserDao";
import {UserDto} from "softweb-common/src/Models/UserDto";

let GetUsers = async ()=>{
        createConnection().then(async conn => {
                 
            let usersDao = await conn.manager.find(UserDao); 
            let usersDto = usersDao.map(u=> new UserDto(u.id,u.firstName,u.lastName));
            return usersDto; 
        }).catch(ex => console.log(ex));

}

module.exports = {
    GetUsers,
}