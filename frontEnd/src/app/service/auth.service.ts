import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { UsuarioCadastroDTO } from '../model/UsuarioCadastroDTO';
import { UsuarioLoginDTO } from '../model/UsuarioLoginDTO';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public http: HttpClient
    ) { }

  entrar(usuarioLoginDTO: UsuarioLoginDTO): Observable<UsuarioLoginDTO>{
    this.logado()
    return this.http.post<UsuarioLoginDTO>('http://localhost:8080/usuarios/logar', usuarioLoginDTO)
  }

  cadastrar(usuarioCadastroDTO: UsuarioCadastroDTO): Observable<UsuarioCadastroDTO>{
    return this.http.post<UsuarioCadastroDTO>('http://localhost:8080/usuarios/cadastrar', usuarioCadastroDTO)
  }

  logado(){
    let ok: boolean = false

    if(environment.token != ''){
      ok = true
    }

    return ok
  }
}
