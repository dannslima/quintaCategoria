import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sorteio',
  templateUrl: './sorteio.component.html',
  styleUrls: ['./sorteio.component.css'],
  standalone: true,
  imports: [CommonModule,FormsModule]
})
export class SorteioComponent implements OnInit {

  jogadores = [
    { nome: 'Danilo', numero: 1, foto: 'assets/Danilo.png', selecionado: false },
    { nome: 'Gilson', numero: 2, foto: 'assets/gilson.png', selecionado: false },
    { nome: 'Galudo', numero: 3, foto: 'assets/galudo.png', selecionado: false },
    { nome: 'Juninho', numero: 4, foto: 'assets/juninho.png', selecionado: false },
    { nome: 'Lucas Oliveira', numero: 5, foto: 'link_da_foto_5', selecionado: false },
    { nome: 'Landro', numero: 6, foto: 'link_da_foto_6', selecionado: false },
    { nome: 'Gabriel', numero: 7, foto: 'link_da_foto_7', selecionado: false },
    { nome: 'Mickael', numero: 8, foto: 'link_da_foto_8', selecionado: false },
    { nome: 'Bruno Lima', numero: 9, foto: 'assets/BrunoLima.png', selecionado: false },
    { nome: 'Luis Carlos', numero: 10, foto: 'link_da_foto_10', selecionado: false },
    { nome: 'Perfeito', numero: 11, foto: 'link_da_foto_11', selecionado: false },
    { nome: 'Thiago K', numero: 12, foto: 'link_da_foto_12', selecionado: false },
    { nome: 'Thiago Carvalho', numero: 13, foto: 'link_da_foto_13', selecionado: false },
    { nome: 'Renan', numero: 14, foto: 'link_da_foto_14', selecionado: false },
    { nome: 'Paulo Filipini', numero: 15, foto: 'link_da_foto_15', selecionado: false },
    { nome: 'Nikolas', numero: 16, foto: 'link_da_foto_16', selecionado: false },
    { nome: 'Natasha', numero: 17, foto: 'link_da_foto_17', selecionado: false },
    
  ];

  times: any[] = [];

  constructor() { }

  ngOnInit() { }

  toggleCheckbox(index: number) {
    this.jogadores[index].selecionado = !this.jogadores[index].selecionado;
  }

  toggleCheckboxByFoto(foto: string) {
    const jogador = this.jogadores.find(j => j.foto === foto);
    if (jogador) {
      jogador.selecionado = !jogador.selecionado;
    }
  }

  sortearTimes() {
    const jogadoresSelecionados = this.jogadores.filter(jogador => jogador.selecionado);
    const jogadoresEmbaralhados = [...jogadoresSelecionados].sort(() => 0.5 - Math.random());
    this.times = [];

    while (jogadoresEmbaralhados.length) {
      this.times.push(jogadoresEmbaralhados.splice(0, 5));
    }
  }
}
