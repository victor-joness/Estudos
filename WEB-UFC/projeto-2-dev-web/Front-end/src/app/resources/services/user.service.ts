import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuarios } from '../models/Usuarios';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  public addUser(user: Usuarios){
    console.log(user)
  }

  public getUsers(){
    console.log("getUsers");
  }

  /* public addUser(user: Usuarios){
    this.httpClient.post('http://localhost:8080/api/${rota_a_ser_definida}', user)
     .subscribe(
      data => {
        console.log(data)
      }
     )
  } */
}
