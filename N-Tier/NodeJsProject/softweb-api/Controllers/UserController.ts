
import {NextFunction, Request, Response} from 'express';
import UserService from "softweb-service/Services/UserService";
import UserDto from "softweb-common/src/Models/UserDto";

let routes = (app: any) => {
    app.get('/api/user/getUsers', async (req: Request, res: Response, next: NextFunction) =>{ 
        const userService = new UserService();
        let users: UserDto[] = await userService.GetUsers();
        res.send(users);
    });
}

export default routes;
