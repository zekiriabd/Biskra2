

import UserService from "../services/UserService";
import UserDto from "softweb-common/src/Models/UserDto";

describe('User Service test', () => {


 it('multiple Test', () =>{
    let userService = new UserService();
    expect(userService.Multipl(5 , 5)).toEqual(25);        
  }); 
  
  it('get users test', async () =>{
     let userService = new UserService();
     const result : UserDto[] = await userService.GetUsers();
     expect(result.length).toEqual(6);
     expect((<UserDto>result[0]).FirstName).toEqual("RAHICH");
  });

  it('get service users moking test', async ()=>{
    let userService = new UserService();  
    const data = [{"Id":1,"FirstName":"Arab","LastName":"Ahmed"}];
  
    const mockContext = jest.fn()
                          .mockResolvedValue(userService.GetUsers())
                          .mockImplementation(() => Promise.resolve(data));
    let result = await mockContext();
    
    //expect(result.length).toEqual(1);
    //expect((<UserDto>result[0]).FirstName).toEqual("Arab");
    expect(result).toBe(data);
  
   });


}); 