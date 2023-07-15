package com.ufc.web.projetoweb.services;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ufc.web.projetoweb.models.MensagemModel;
import com.ufc.web.projetoweb.repositories.MensagemRepository;

@Service
public class MensagemService {
    @Autowired
    private MensagemRepository mensagemRepository;

    public MensagemModel enviarMensagem(Long remetenteId, Long destinatarioId, String conteudo) {
        MensagemModel mensagem = new MensagemModel();
        mensagem.setRemetenteId(remetenteId);
        mensagem.setDestinatarioId(destinatarioId);
        mensagem.setConteudo(conteudo);
        mensagem.setDataEHora(LocalDateTime.now());
        return mensagemRepository.save(mensagem);
    }

    public List<MensagemModel> pegarMensagensEntreUsuarios(Long remetenteId, Long destinatarioId) {
        return mensagemRepository.findByRemetenteIdAndDestinatarioIdOrRemetenteIdAndDestinatarioIdOrderByDataEHoraAsc(
                remetenteId, destinatarioId, destinatarioId, remetenteId);
    }

}
