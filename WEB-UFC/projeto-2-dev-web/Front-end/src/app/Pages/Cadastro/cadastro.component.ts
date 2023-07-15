import { Component, OnInit } from '@angular/core';

import { FormBuilder,  FormGroup  }  from  '@angular/forms';
import { Router } from '@angular/router';

import { DadosCadastro } from 'src/app/resources/models/Dadoscadastro';
import { Usuarios } from 'src/app/resources/models/Usuarios';
import { UserService } from 'src/app/resources/services/user.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})

export class CadastroComponent implements OnInit {

  formCadastro!: FormGroup
  user = new Usuarios()

  constructor( 
    private formBuilder: FormBuilder, 
    private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.creatForm(new DadosCadastro())
  }

  creatForm(dadosCadastro: DadosCadastro){
    this.formCadastro = this.formBuilder.group({
      nome: [dadosCadastro.nome],
      email: [dadosCadastro.email],
      img: [dadosCadastro.linkImg],
      genero: [dadosCadastro.genero],
      senha: [dadosCadastro.password],
      confirmSenha: [dadosCadastro.confirm_password]
    })
  }

  onSubmit(){
    console.log(this.formCadastro.value)

    if(
      (this.formCadastro.value.nome.trim() == '' || this.formCadastro.value.nome == null) ||
      (this.formCadastro.value.email.trim() == '' || this.formCadastro.value.email == null) ||
      (this.formCadastro.value.img.trim() == '' || this.formCadastro.value.img == null) ||
      (this.formCadastro.value.genero.trim() == '' || this.formCadastro.value.genero == null) ||
      (this.formCadastro.value.senha.trim() == '' || this.formCadastro.value.senha == null) ||
      (this.formCadastro.value.confirmSenha.trim() == '' || this.formCadastro.value.confirmSenha == null) 
      ){
        window.alert('Todos os campos devem ser preenchidos!');
        return
      }

    if(this.formCadastro.value.senha != this.formCadastro.value.confirmSenha){
      window.alert("As senhas não podem ser diferentes!");
    
      document.getElementById('email')
      return
    }

    this.user.name = this.formCadastro.value.nome
    this.user.email = this.formCadastro.value.email
    this.user.imageUrl = this.formCadastro.value.img
    this.user.genero = this.formCadastro.value.genero
    this.user.password = this.formCadastro.value.confirmSenha

    console.log(this.user.name)
    console.log(this.user.email)
    console.log(this.user.imageUrl)
    console.log(this.user.genero)
    console.log(this.user.password)
    this.userService.addUser(this.user)
    this.formCadastro.reset(new DadosCadastro())
  
    this.router.navigate([''])
  }
}
