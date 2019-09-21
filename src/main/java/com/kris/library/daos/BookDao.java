package com.kris.library.daos;

import com.kris.library.entities.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * @author kristina.drashkova
 */
@Repository
public interface BookDao extends JpaRepository<Book, Long> {
}
