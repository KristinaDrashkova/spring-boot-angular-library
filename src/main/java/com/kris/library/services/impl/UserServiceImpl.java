package com.kris.library.services.impl;

import com.kris.library.daos.UserDao;
import com.kris.library.entities.User;
import com.kris.library.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author kristina.drashkova
 */
@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserDao userDao;

    @Override
    public void addUser(User user) {
        userDao.save(user);
    }

    @Override
    public void removeUser(Long id) {
        userDao.deleteById(id);
    }

    @Override
    public User getUser(Long id) {
        return userDao.getOne(id);
    }

    @Override
    public List<User> getUsers() {
        return userDao.findAll();
    }

}
