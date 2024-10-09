import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartComponent } from '../../charts/chart/chart.component';
import { Jogador } from '../../../app/interface/jogador';
import { SorteioService } from '../sorteio/sorteio.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';  // Importar HttpClientModule
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-sorteio',
  templateUrl: './sorteio.component.html',
  styleUrls: ['./sorteio.component.css'],
  standalone: true,
  imports: [CommonModule,FormsModule,ChartComponent, HttpClientModule]  ,
  providers: [SorteioService] // Adicionar o serviço aqui
})
export class SorteioComponent implements OnInit {



  jogadores: Jogador[] = [];

  jogadorNovo = { nome: '', foto: 'assets/novo.png', selecionado: false };

  times: any[] = [];

  constructor(private sorteioService: SorteioService ) { }

  ngOnInit(


  ) {

    this.buscarJogadores();   

   }

   buscarJogadores(): void {
    this.sorteioService.ObterJogadores().subscribe({
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
            toque: jogador.toque,
            mensalidade: jogador.mensalidade
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
    this.sorteioService.AdicionarJogador(this.jogadorNovo).subscribe({}); // Adiciona o jogador

    ///this.jogadores.push({nome: this.jogadorNovo.nome, foto: this.jogadorNovo.foto, selecionado: false, id: 0, ataque: 0, defesa: 0, chute: 0, toque: 0});
  }

  Mensalistas(){
    window.location.href = "/mensalistas";
  }
}
