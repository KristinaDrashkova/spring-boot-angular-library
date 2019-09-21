package com.kris.library.controllers;

import com.kris.library.entities.Author;
import com.kris.library.services.AuthorService;
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
@RequestMapping("/authors")
public class AuthorController {

    @Autowired
    private AuthorService authorService;

    @RequestMapping("/get")
    public List<Author> allAuthors() {
        return authorService.getAuthors();
    }

    @RequestMapping("/get?{id}")
    public Author getAuthor(@PathVariable("id") String id) {
        return authorService.getAuthor(Long.parseLong(id));
    }

    @RequestMapping("/add")
    public void addAuthor(@RequestBody Author author) {
        this.authorService.addAuthor(author);
    }
}
