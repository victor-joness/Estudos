package com.ufc.web.projetoweb.controllers;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ufc.web.projetoweb.models.MensagemModel;
import com.ufc.web.projetoweb.services.MensagemService;

@RestController
@RequestMapping("/api/mensagens")
public class MensagemController {
    @Autowired
    private MensagemService mensagemService;

    @PostMapping
    public ResponseEntity<MensagemModel> enviarMensagem(@RequestBody Map<String, Object> requestBody) {
        Long remetenteId = Long.valueOf(requestBody.get("remetenteId").toString());
        Long destinatarioId = Long.valueOf(requestBody.get("destinatarioId").toString());
        String conteudo = (String) requestBody.get("conteudo");

        MensagemModel mensagemEnviada = mensagemService.enviarMensagem(remetenteId, destinatarioId, conteudo);
        return new ResponseEntity<>(mensagemEnviada, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<MensagemModel>> pegarMensagensEntreUsuarios(
            @RequestParam("remetenteId") Long remetenteId,
            @RequestParam("destinatarioId") Long destinatarioId) {
        List<MensagemModel> mensagens = mensagemService.pegarMensagensEntreUsuarios(remetenteId, destinatarioId);
        return new ResponseEntity<>(mensagens, HttpStatus.OK);
    }

}
