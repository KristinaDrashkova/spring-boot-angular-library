package com.kris.library.services.impl;

import com.kris.library.daos.BookDao;
import com.kris.library.entities.Book;
import com.kris.library.entities.Category;
import com.kris.library.services.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author kristina.drashkova
 */
@Service
public class BookServiceImpl implements BookService{

    @Autowired
    private BookDao bookDao;

    @Override
    public void addBook(Book book) {
        bookDao.save(book);
    }

    @Override
    public void removeBook(Long id) {
        bookDao.deleteById(id);
    }

    @Override
    public List<Book> getBooks() {
        return bookDao.findAll();
    }

    @Override
    public Book getBook(Long id) {
        return bookDao.getOne(id);
    }

    @Override
    public Category[] getCategories() {
        return Category.values();
    }

    @Override
    public void rentBook(Long id) {

    }

    @Override
    public void returnBook(Long id) {

    }

}
