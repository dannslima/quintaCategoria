import { Component, OnInit } from '@angular/core';
import { MensalistasService } from './mensalistas.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Jogador } from '../interface/jogador';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-mensalistas',
  templateUrl: './mensalistas.component.html',
  styleUrls: ['./mensalistas.component.css'],
  imports: [CommonModule, FormsModule, HttpClientModule],
  providers: [MensalistasService],
  standalone: true
})
export class MensalistasComponent implements OnInit {

  jogadores: Jogador[] = [];

  constructor(private mensalistasService: MensalistasService) { }

  ngOnInit() {
    this.buscarJogadores();
  }

  buscarJogadores(): void {
    this.mensalistasService.ObterMensalistas().subscribe({
      next: (data: any) => {
        // Verifica se os dados são um array
        if (Array.isArray(data)) {
          this.jogadores = data.map((jogador: any) => ({
            nome: jogador.nome,
            id: jogador.id,
            foto: jogador.foto,
            selecionado: false,
            ataque: jogador.ataque,
            defesa: jogador.defesa,
            chute: jogador.chute,
            toque: jogador.toque
          }));
          this.ordenarJogadoresPorNome(); // Ordena por nome após carregar os dados
        } else {
          console.error('A resposta não é um array:', data);
        }
      },
      error: (error) => {
        console.error('Erro ao buscar jogadores:', error); // Trata erros
      }
    });
  }

  ordenarJogadoresPorNome(): void {
    this.jogadores = this.jogadores.sort((a, b) => a.nome.localeCompare(b.nome));
  }
  
}
