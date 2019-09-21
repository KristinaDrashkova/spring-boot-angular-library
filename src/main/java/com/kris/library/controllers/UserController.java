package com.kris.library.controllers;

import com.kris.library.entities.Author;
import com.kris.library.entities.User;
import com.kris.library.services.AuthorService;
import com.kris.library.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * @author kristina.drashkova
 */
@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    @RequestMapping("/get")
    public List<User> allUsers() {
        return userService.getUsers();
    }

    @RequestMapping("/get?{id}")
    public User getUser(@PathVariable("id") String id) {
        return userService.getUser(Long.parseLong(id));
    }

    @RequestMapping("/add")
    public void addUser(@RequestBody User user) {
        this.userService.addUser(user);
    }
}
