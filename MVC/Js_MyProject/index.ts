/* ============== Server ===================
- Import all Controller
- Create server Api Localhost:8080/Controller/Action/Param 
  ========================================== */
import userController from './src/Controllers/UserController';

let express     = require('express');

const app  = express();
const IP   = '127.0.0.1';
const PORT = 8083;

app.use(express.json());

userController(app);
/*.....
  .....
  .....*/
app.listen(PORT,IP); 