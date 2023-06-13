package br.ufc.web.Lab07.service;

import java.util.List;
import java.util.ArrayList;
import java.util.Arrays;

import org.springframework.stereotype.Service;

import br.ufc.web.Lab07.model.Aluno;
import br.ufc.web.Lab07.model.Turma;

@Service
public class TurmaService{

    private List<Turma> turmas = new ArrayList<Turma>();
	private Aluno aluno1 = new Aluno(1, "Samuel email", "Samuel");
	private Aluno aluno2 = new Aluno(2, "victor email", "victor");
	
	public TurmaService() {
		turmas.addAll(Arrays.asList(new Turma(1, "Matematica", 2, Arrays.asList(aluno1,aluno2)),new Turma(2, "Portugues", 2,Arrays.asList(aluno1,aluno2)),new Turma(3, "Grafos", 2,Arrays.asList(aluno1,aluno2))));
	}

	public Turma getTurma(int codigo) {
		for (Turma turma : turmas) {
			if(turma.getCodigo() == codigo){
				return turma;
			}
		}
		return null;
	}
	
	public List<Turma> getTurmas() {
		return turmas;
	}

	public void addTurmas(Turma turma) {
		turmas.add(turma);
	}

	public void updateTurma(int codigo, Turma turma) {
		int i = 0;
		for (Turma turma2 : turmas) {
			if(turma2.getCodigo() == codigo){
				turmas.get(i).setDisciplina(turma.getDisciplina());
				turmas.get(i).setSemestre(turma.getSemestre());
			}
			i++;
		}
	}
	
	public Boolean deleteTurma(int codigo) {
		for (Turma turma2 : turmas) {
			if(turma2.getCodigo() == codigo){
				turmas.remove(turma2);
				return true;
			}
		}
		return false;
	}

	public Boolean deleteAluno(int codigo,int matricula) {
		for (Turma turma2 : turmas) {
			if(turma2.getCodigo() == codigo){
				List<Aluno> aluno = new ArrayList<Aluno>(turma2.getAlunos()); 
				Aluno aluno1 = aluno.stream().filter(a -> a.getMatricula() == matricula).findFirst().get();
						aluno.remove(aluno1);
						turma2.setAlunos(aluno);
						return true;
			}
		}
		return false;
	}

	public List<Aluno> getAlunos(int codigo) {
		for (Turma turma : turmas) {
			if(turma.getCodigo() == codigo){
				return turma.getAlunos();
			}
		}
		return null;
	}

	public void addAluno(int codigo,Aluno aluno) {
		for (Turma turma2 : turmas) {
			if(turma2.getCodigo() == codigo){
				List<Aluno> aluno1 = new ArrayList<Aluno>(turma2.getAlunos());
				aluno1.add(aluno);
				turma2.setAlunos(aluno1);
			}
		}
	}
}