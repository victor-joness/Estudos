package br.ufc.web.Lab07.rest;

import java.util.List;
import java.util.ArrayList;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import br.ufc.web.Lab07.model.Aluno;
import br.ufc.web.Lab07.model.Turma;
import br.ufc.web.Lab07.service.TurmaService;

@RestController
public class TurmaRestControler{

	@Autowired
	TurmaService turmaServices;

	@GetMapping("/api/turma")
	public List<Turma> getTurmas(){
		return turmaServices.getTurmas();
	}

	@GetMapping("/api/turma/{codigo}")
	public Turma getTurmasCodigo(@PathVariable int codigo){
		return turmaServices.getTurma(codigo);
	}

	@PostMapping("/api/turma")
	public void addTurma(@RequestBody Turma turma) {
		if(turma.getAlunos() == null)
			turma.setAlunos(new ArrayList<Aluno>());
		turmaServices.addTurmas(turma);
	}

	@PutMapping("/api/turma/{codigo}")
    public void updateTurma(@PathVariable int codigo, @RequestBody Turma turma){
        turmaServices.updateTurma(codigo, turma);
    }

	@DeleteMapping("/api/turma/{codigo}")
    public void deleteTurma(@PathVariable int codigo){
        if (!turmaServices.deleteTurma(codigo)) throw new ResponseStatusException(HttpStatus.NOT_FOUND);
    }

    @GetMapping("/api/turma/{codigo}/alunos")
	public List<Aluno> getAlunos(@PathVariable int codigo){
		return turmaServices.getAlunos(codigo);
	}

	@PostMapping("/api/turma/{codigo}/alunos")
	public void addAluno(@PathVariable int codigo,@RequestBody Aluno aluno) {
		turmaServices.addAluno(codigo, aluno);
	}

	@DeleteMapping("/api/turma/{codigo}/alunos/{matricula}")
    public void deleteAluno(@PathVariable int codigo,@PathVariable int matricula){
        if (!turmaServices.deleteAluno(codigo,matricula)) throw new ResponseStatusException(HttpStatus.NOT_FOUND);
    }
}