package com.kris.library.daos;

import com.kris.library.entities.Author;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * @author kristina.drashkova
 */
@Repository
public interface AuthorDao extends JpaRepository<Author, Long> {
}
