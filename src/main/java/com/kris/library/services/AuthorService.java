package com.kris.library.services;

import com.kris.library.entities.Author;

import java.util.List;

/**
 * @author kristina.drashkova
 */
public interface AuthorService {

    void addAuthor(Author author);

    void removeAuthor(Long id);

    Author getAuthor(Long id);

    List<Author> getAuthors();

 }
