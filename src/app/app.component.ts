import { CalculatorComponent } from './components/template/calculator/calculator.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { ResultsComponent } from './components/template/results/results.component';
import { ExplanationComponent } from './components/template/explanation/explanation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    CalculatorComponent,
    ResultsComponent,
    ExplanationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'nutriapp';
}
