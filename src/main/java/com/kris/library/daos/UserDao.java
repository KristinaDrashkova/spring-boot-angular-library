package com.kris.library.daos;

import com.kris.library.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * @author kristina.drashkova
 */
@Repository
public interface UserDao extends JpaRepository<User, Long> {
}
