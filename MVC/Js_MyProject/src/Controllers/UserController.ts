
import {NextFunction, Request, Response} from 'express';
import {createConnection} from "typeorm";
import {User} from "../Models/User";

let routes = (app: any) => {
    
app.get('/api/user/getUsers', async (req: Request, res: Response, next: NextFunction) =>{ 
   
        createConnection().then(async conn => {
            var users = await conn.manager.find(User);          
            res.send(users);   
        }).catch(ex => console.log(ex)); 
    });
}

export default routes;