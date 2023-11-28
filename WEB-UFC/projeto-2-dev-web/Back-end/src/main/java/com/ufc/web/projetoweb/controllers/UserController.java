package com.ufc.web.projetoweb.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ufc.web.projetoweb.models.UserModel;
import com.ufc.web.projetoweb.services.UserService;

@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping("/{id}")
    public ResponseEntity<UserModel> buscarPorId(@PathVariable Long id) {
        UserModel usuario = this.userService.buscarPorId(id);
        return ResponseEntity.ok().body(usuario);
    }

    @GetMapping("/listar-usuarios")
    public ResponseEntity<List<UserModel>> buscarTodos() {
        return new ResponseEntity<List<UserModel>>(userService.buscarTodos(), HttpStatus.OK);
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody UserModel usuario) {
        UserModel usuarioEncontrado = userService.buscarPorEmail(usuario.getEmail());

        if (usuarioEncontrado != null && usuarioEncontrado.getSenha().equals(usuario.getSenha())) {
            return ResponseEntity.ok().body("Successo!");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Inválido");
        }
    }

    @PostMapping("/cadastrar")
    public ResponseEntity<String> cadastrarUsuario(@RequestBody User user){
        user.setId(null);

        String emailUser = user.getEmail();

        if(this.userService.findByEmail(emailUser) == null){
            this.userService.save(user);

            return ResponseEntity.status(HttpStatus.CREATED).body("Usuário inserido com sucesso!");
        }        

        return ResponseEntity.status(HttpStatus.CONFLICT).body("Email já existente no sistema!");
    }
}

/*
 * @GetMapping("/lista-de-usuarios")
 * public List<UserModel> buscarTodos() {
 * 
 * }
 */