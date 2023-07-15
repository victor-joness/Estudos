package com.ufc.web.projetoweb.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ufc.web.projetoweb.models.UserModel;

public interface UserRepository extends JpaRepository<UserModel, Long> {
    UserModel findByEmail(String email);
}
