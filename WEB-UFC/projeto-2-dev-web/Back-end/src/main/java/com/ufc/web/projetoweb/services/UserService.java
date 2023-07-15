package com.ufc.web.projetoweb.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ufc.web.projetoweb.models.UserModel;
import com.ufc.web.projetoweb.repositories.UserRepository;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public UserModel buscarPorEmail(String email) {
        return this.userRepository.findByEmail(email);
    }

    public UserModel buscarPorId(Long id) {
        Optional<UserModel> user = this.userRepository.findById(id);
        return user.get();
    }

    public List<UserModel> buscarTodos() {
        return this.userRepository.findAll();
    }

    public void cadastrar(UserModel usuario) {
        this.userRepository.save(usuario);
    }

    public void apagar(Long id) {
        Optional<UserModel> user = this.userRepository.findById(id);

        if (user.isPresent()) {
            this.userRepository.delete(user.get());
        }
    }

}
