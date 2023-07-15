package com.ufc.web.projetoweb.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ufc.web.projetoweb.models.MensagemModel;

public interface MensagemRepository extends JpaRepository<MensagemModel, Long> {
    List<MensagemModel> findByRemetenteIdAndDestinatarioIdOrRemetenteIdAndDestinatarioIdOrderByDataEHoraAsc(
            Long remetenteId1, Long destinatarioId1, Long remetenteId2, Long destinatarioId2);
}
