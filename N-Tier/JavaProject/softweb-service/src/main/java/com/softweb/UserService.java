package com.softweb;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserService implements  IUserService{

    @Autowired
    private IUserDao userDao;

    public List<UserDto> GetUsers() {
        List<User> dbusers = userDao.findAll();
        List<UserDto> users = dbusers.stream().map(u -> new UserDto(u.getId(),u.getFirstName(),u.getLastName()) ).collect(Collectors.toList());
        return users;
    }

}