package com.kris.library.services.impl;

import com.kris.library.daos.AuthorDao;
import com.kris.library.entities.Author;
import com.kris.library.services.AuthorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author kristina.drashkova
 */
@Service
public class AuthorServiceImpl implements AuthorService {

    @Autowired
    private AuthorDao authorDao;

    @Override
    public void addAuthor(Author author) {
        authorDao.save(author);
    }

    @Override
    public void removeAuthor(Long id) {
        authorDao.deleteById(id);
    }

    @Override
    public Author getAuthor(Long id) {
        return authorDao.getOne(id);
    }

    @Override
    public List<Author> getAuthors() {
        return authorDao.findAll();
    }

}
