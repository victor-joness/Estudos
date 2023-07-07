package br.ufc.web.Lab07.model;

import java.util.List;

public class Turma {
	private int codigo;
	private String disciplina;
	private int semestre;
	private List<Aluno> alunos;
	
	public Turma(int i, String string, int j, List<Aluno> alunosIniciais) {
		this.alunos = alunosIniciais;
		this.codigo = i;
		this.disciplina = string;
		this.semestre = j;
	}
	public int getCodigo() {
		return codigo;
	}
	public void setCodigo(int codigo) {
		this.codigo = codigo;
	}
	public String getDisciplina() {
		return disciplina;
	}
	public void setDisciplina(String disciplina) {
		this.disciplina = disciplina;
	}
	public int getSemestre() {
		return semestre;
	}
	public void setSemestre(int semestre) {
		this.semestre = semestre;
	}
	public List<Aluno> getAlunos() {
		return alunos;
	}
	public void setAlunos(List<Aluno> alunos) {
		this.alunos = alunos;
	}
}
