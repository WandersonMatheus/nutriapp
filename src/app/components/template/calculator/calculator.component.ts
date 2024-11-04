import { ResultsComponent } from './../results/results.component';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    ResultsComponent,
    CommonModule,
    DecimalPipe
  ],
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  sexo: string = 'masculino';
  idade: number = 0;
  peso: number = 0;
  altura: number = 0;
  nivelAtividade: string = 'sedentario';
  caloriasNecessarias: number = 0;

  // Adicione as propriedades aqui
  input1: number = 0; // ou string, dependendo de como você deseja utilizá-los
  input2: number = 0;
  input3: number = 0;

  calcular() {
    let fatorAtividade = 1.2; // padrão para sedentário

    // Definindo os fatores de atividade
    switch (this.nivelAtividade) {
      case 'levemente ativo':
        fatorAtividade = 1.375;
        break;
      case 'moderado':
        fatorAtividade = 1.55;
        break;
      case 'altamente ativo':
        fatorAtividade = 1.725;
        break;
      case 'extremamente ativo':
        fatorAtividade = 1.9;
        break;
    }

    // Calcular TMB
    if (this.sexo === 'masculino') {
      this.caloriasNecessarias = fatorAtividade * (66 + (13.7 * this.peso) + (5 * this.altura) - (6.8 * this.idade));
    } else if (this.sexo === 'feminino') {
      this.caloriasNecessarias = fatorAtividade * (655 + (9.6 * this.peso) + (1.8 * this.altura) - (4.7 * this.idade));
    }
  }
}
