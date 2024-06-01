import { Component, OnInit } from '@angular/core';
import { Editora } from '../editora';
import { Livro } from '../livro';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';
import { CommonModule } from '@angular/common';

@Component({
 selector: 'app-livro-lista',
 templateUrl: './livro-lista.component.html',
 styleUrls: ['./livro-lista.component.css'],
 standalone: true,
 imports: [CommonModule],
})
export class LivroListaComponent implements OnInit {
 public editoras: Editora[] = [];
 public livros: Livro[] = [];

 constructor(private servEditora: ControleEditoraService, private servLivros: ControleLivrosService) { }

 ngOnInit() {
    this.editoras = this.servEditora.getEditoras();
    this.livros = this.servLivros.obterLivros();
 }

 excluir = (codLivro: number) => {
    this.servLivros.excluir(codLivro);
    this.livros = this.servLivros.obterLivros();
 }

 obterNome = (codEditora: number): string => {
    return this.servEditora.getNomeEditora(codEditora);
 }
}
