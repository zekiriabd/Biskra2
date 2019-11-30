import UserDto from "softweb-common/src/Models/UserDto";
import User from "softweb-persistence/src/entity/User";

export default interface IUserservice {
    GetUsers():UserDto[];
    Multipl(v1:number ,v2:number):number;
}
