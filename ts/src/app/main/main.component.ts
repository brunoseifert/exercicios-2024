import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  isExpanded: boolean = false;

  toggleExpand() {
    this.isExpanded = !this.isExpanded;
  }

  mostrarFormulario = false;
  mostrarBotaoCriarTopico = true;
  mostrarMensagemFeedback = false;

  toggleFormulario() {
    this.mostrarFormulario = !this.mostrarFormulario;
    this.mostrarBotaoCriarTopico = !this.mostrarBotaoCriarTopico;
  }

  adicionarMensagem() {
    this.mostrarMensagemFeedback = true;
  }

  onSubmit() {
    this.mostrarMensagemFeedback = true;
  }
  constructor() {}

  ngOnInit(): void {}
}
