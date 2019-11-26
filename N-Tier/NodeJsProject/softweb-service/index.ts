/* ============== Service ===================
- Connect To ORM 
- Create service methods
  ========================================== */

//var UserService = require('./services/UserService');
import {UserService} from "./services/UserService";
let userService = new UserService();
var mylist = userService.GetUsers();
console.log(mylist);