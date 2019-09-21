package com.kris.library.services;

import com.kris.library.entities.Book;
import com.kris.library.entities.Category;

import java.util.List;

/**
 * @author kristina.drashkova
 */
public interface BookService {

    void addBook(Book book);

    void removeBook(Long id);

    Book getBook(Long id);

    List<Book> getBooks();

    void rentBook(Long id);

    void returnBook(Long id);

    Category[] getCategories();

}
