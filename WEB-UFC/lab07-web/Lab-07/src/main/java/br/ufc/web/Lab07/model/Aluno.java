package br.ufc.web.Lab07.model;

public class Aluno {
	private int matricula;
	private String email;
	private String nome;
	
	public Aluno(int i, String string, String string2) {
		this.email = string;
		this.matricula = i;
		this.nome = string2;
	}
	public int getMatricula() {
		return matricula;
	}
	public void setMatricula(int matricula) {
		this.matricula = matricula;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
}
