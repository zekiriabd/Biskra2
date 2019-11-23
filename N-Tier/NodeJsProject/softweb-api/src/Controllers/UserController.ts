
import {NextFunction, Request, Response} from 'express';
const UserService = require("softweb-service/src/UserService");

let routes = (app: any) => {
    app.get('/api/user/getUsers', async (req: Request, res: Response, next: NextFunction) =>{ 
        let UsersDto = UserService.GetUsers();
        res.send(UsersDto);
    });


}

export default routes;