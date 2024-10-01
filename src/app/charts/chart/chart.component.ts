import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  standalone: true,
  styleUrls: ['./chart.component.css']
})


export class ChartComponent implements OnInit {

  //construa um array cotendo nome , ataque , defesa , velocidade
  jogadores = [{nome: 'Messi', ataque: 40, defesa: 50, velocidade: 90, chute: 50, passe: 80},
   
  ];


  constructor() { }

  ngOnInit(): void {
    this.jogadores = this.jogadores;
    this.RenderChart();
  }

  RenderPAchart(){
    this.RenderChart();
  }

  RenderChart() {
    const myChart = new Chart('pachart', {
      type: 'radar', // Alterado para o tipo radar
      data: {
        labels: ['Ataque', 'Defesa', 'Velocidade','Chute','Passe'], // Rótulos dos atributos
        datasets: this.jogadores.map(jogador => ({
          label: jogador.nome, // Nome de cada jogador como label
          data: [jogador.ataque, jogador.defesa, jogador.velocidade, jogador.ataque, jogador.passe], // Estatísticas de cada jogador
          fill: true,
          backgroundColor: 'rgba(84, 162, 235, 0.2)', // Cor de fundo (personalize como desejar)
          borderColor: 'rgba(54, 162, 235, 1)', // Cor da borda
          pointBackgroundColor: 'red', // Cor dos pontos
          pointBorderColor: 'green',
          pointHoverBackgroundColor: 'yellow',
          pointHoverBorderColor: 'red',
          pointRadius: 5 // Tamanho dos pontos
        }))
      },
      options: {
        scales: {
          r: {
            angleLines: {
              display: true // Exibe as linhas dos ângulos
            },
            grid: {
              display: true // Esconde as linhas de grade
            },
            suggestedMin: 0,
            suggestedMax: 100
          }
        }
      }
    });
  }
}
