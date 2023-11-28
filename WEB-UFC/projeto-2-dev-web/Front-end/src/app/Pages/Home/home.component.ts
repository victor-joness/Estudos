import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from "../../resources/services/user.service"
import { Usuarios } from 'src/app/resources/models/Usuarios';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users: Usuarios[] = []

  constructor(private router: Router, private UsuariosService: UserService) { }

  ngOnInit(): void {
   this.recuperaListaDeAmigos()
  }

  logout(){
    window.localStorage.clear()
    this.router.navigate([''])
  }

  recuperaListaDeAmigos(){
    this.users = [{name: "victor1", email:"victor@gmail", genero:"teste", imageUrl:"https://www.infoescola.com/wp-content/uploads/2017/04/leao-126767138.jpg", password:""}, {name: "victor2", email:"victor2@gmail", genero:"teste", imageUrl:"https://www.infoescola.com/wp-content/uploads/2017/04/leao-126767138.jpg", password:""}]
    let amigos = this.UsuariosService.getUsers()
    /* this.users vai receber o resultado da requisição getUsers */
    console.log('Users', amigos)
  }
}
