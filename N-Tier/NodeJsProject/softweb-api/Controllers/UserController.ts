
import {NextFunction, Request, Response} from 'express';
import {UserService} from "softweb-service/Services/UserService";

let routes = (app: any) => {
    app.get('/api/user/getUsers', async (req: Request, res: Response, next: NextFunction) =>{ 
        const userService = new UserService();
        console.log("1- Controllet --> userService.GetUsers");        
        let users = await userService.GetUsers();
        res.send(users);
    });
}

export default routes;