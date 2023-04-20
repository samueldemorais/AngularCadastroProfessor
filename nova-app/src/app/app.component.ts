import { Component } from '@angular/core';
import {Professor} from './shared/model/professor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nova-app';
  
  professorNovo : Professor;
  professores: Array<Professor>;
  constructor() {
    this.professorNovo = new Professor('', 0, '');
    this.professores = [
      new Professor('Fausto', 20, 'pob'),
      new Professor('Damires', 24, 'pweb1'),
      new Professor('Gustavo', 25, 'bd2')
    ];
  }

  cadastrar(): void {
    this.professores.push(this.professorNovo);
    this.professorNovo = new Professor();
  }

  excluir(professorARemover: Professor): void {
    const index = this.professores.findIndex(professor =>
      professor.nome === professorARemover.nome);

    this.professores.splice(index, 1);
  }

  editar(professor : Professor): void {
    this.professorNovo = professor;
  }


}