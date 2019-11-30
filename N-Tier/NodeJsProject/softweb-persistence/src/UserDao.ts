import {getConnection,createConnection} from "typeorm";
import User from "./entity/User";

export default class UserDao {
  
 public  Users() {
        try{    
           // createConnection().then(async conn => {
            //    let usersDao = await conn.manager.find(User); 
            let usersDao = 
            [{"id":6,"firstName":"RAHICH","lastName":"Raouf"},
            {"id":7,"firstName":"ALOUI","lastName":"Ali"},
            {"id":8,"firstName":"ZEKIRI","lastName":"Abdelali"},
            {"id":9,"firstName":"TALAL","lastName":"Bilal"},
            {"id":88,"firstName":"AAA","lastName":"BBBB"},
            {"id":99,"firstName":"ccc","lastName":"eeeee"}];
                     
                return usersDao;  
           // });
        }
        catch(ex){
            console.log(ex);
            return null;  
        } 

          
            
       
    }
}
