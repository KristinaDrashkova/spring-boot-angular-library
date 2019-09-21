package com.kris.library.controllers;

import com.kris.library.entities.Author;
import com.kris.library.entities.Book;
import com.kris.library.entities.Category;
import com.kris.library.services.AuthorService;
import com.kris.library.services.BookService;
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
@RequestMapping("/books")
public class BookController {

    @Autowired
    private BookService bookService;

    @RequestMapping("/get")
    public List<Book> getBooks() {
        return bookService.getBooks();
    }

    @RequestMapping("/get?{id}")
    public Book getBook (@PathVariable("id") String id) {
        return bookService.getBook(Long.parseLong(id));
    }

    @RequestMapping("/add")
    public void addBook (@RequestBody Book book) {
        this.bookService.addBook(book);
    }

    @RequestMapping("/categories")
    public Category[] getCategories() {
        return this.bookService.getCategories();
    }
}
