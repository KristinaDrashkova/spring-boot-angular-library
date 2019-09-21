package com.kris.library.services;

import com.kris.library.entities.User;

import java.util.List;

/**
 * @author kristina.drashkova
 */
public interface UserService {

    void addUser(User user);

    void removeUser(Long id);

    User getUser(Long id);

    List<User> getUsers();
}
