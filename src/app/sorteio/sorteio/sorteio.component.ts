import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartComponent } from '../../charts/chart/chart.component';

@Component({
  selector: 'app-sorteio',
  templateUrl: './sorteio.component.html',
  styleUrls: ['./sorteio.component.css'],
  standalone: true,
  imports: [CommonModule,FormsModule,ChartComponent]
})
export class SorteioComponent implements OnInit {

  jogadores = [
    { nome: 'Danilo', numero: 1, foto: 'assets/Danilo.png', selecionado: false },
    { nome: 'Gilson', numero: 2, foto: 'assets/gilson.png', selecionado: false },
    { nome: 'Galudo', numero: 3, foto: 'assets/galudo.png', selecionado: false },
    { nome: 'Juninho', numero: 4, foto: 'assets/juninho.png', selecionado: false },
    { nome: 'Lucas Oliveira', numero: 5, foto: 'assets/lucaso.png', selecionado: false },
    { nome: 'Leandro', numero: 6, foto: 'assets/leandro.png', selecionado: false },
    { nome: 'Gabriel', numero: 7, foto: 'assets/gabriel.png', selecionado: false },
    { nome: 'Mickael', numero: 8, foto: 'assets/mickael.png', selecionado: false },
    { nome: 'Bruno Lima', numero: 9, foto: 'assets/BrunoLima.png', selecionado: false },
    { nome: 'Luis Carlos', numero: 10, foto: 'assets/luis.png', selecionado: false },
    { nome: 'Perfeito', numero: 11, foto: 'assets/perfeito.png', selecionado: false },
    { nome: 'Natasha', numero: 12, foto: 'assets/natasha.png', selecionado: false },
    { nome: 'Thiago Carvalho', numero: 13, foto: 'assets/thiagoc.png', selecionado: false },
    { nome: 'Renan', numero: 14, foto: 'assets/renan.png', selecionado: false },
    { nome: 'Paulo Filipini', numero: 15, foto: 'assets/paulo.png', selecionado: false },
    { nome: 'Nikolas', numero: 16, foto: 'assets/nikolas.png', selecionado: false },
    { nome: '1 Sandro', numero: 'Goleiro', foto: 'assets/sandro.png', selecionado: false },
    { nome: '2 Jorge', numero: 'Goleiro', foto: 'assets/jorge.png', selecionado: false },
  ]

  jogadorNovo = { nome: '', numero: 0, foto: 'assets/novo.png', selecionado: false };

  times: any[] = [];

  constructor() { }

  ngOnInit() {

  
  this.jogadores = this.jogadores.sort((a, b) => a.nome.localeCompare(b.nome));//ordene por nome

   }

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

  Adicionar(){
    this.jogadores.push({ nome:this.jogadorNovo.nome, numero: 0, foto: 'assets/novo.png', selecionado: false });
  }
}
