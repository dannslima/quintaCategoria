import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MensalistasService {

  private apiUrl = 'http://localhost:3000/jogadores';  // URL do endpoint

constructor(private http: HttpClient) { }

//fazer um get nesse endpoint http://localhost:3000/jogadores
//retornar um array de jogadores

public ObterMensalistas(){
  return this.http.get(this.apiUrl);
}

public AdicionarJogador(jogador: any){
  return this.http.post(this.apiUrl, jogador);
}

public RemoverJogador(id: number){
  return this.http.delete(`${this.apiUrl}/${id}`);
}

}
